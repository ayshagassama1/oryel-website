#!/bin/bash
# infra/setup-lambda.sh
# Script de setup one-time — à lancer une seule fois depuis ta machine locale
# Prérequis : AWS CLI configuré avec les bons droits

set -e

AWS_REGION="eu-west-3"
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
FUNCTION_NAME="oryel-backend"
ECR_REPO="oryel-backend"
ROLE_NAME="oryel-lambda-role"

echo "Compte AWS : $AWS_ACCOUNT_ID"
echo "Region : $AWS_REGION"

# 1. Créer le repo ECR
echo ""
echo "Création du repo ECR..."
aws ecr create-repository \
  --repository-name $ECR_REPO \
  --region $AWS_REGION \
  --image-scanning-configuration scanOnPush=true \
  || echo "Repo déjà existant, on continue."

ECR_URI="$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO"

# 2. Créer le rôle IAM pour Lambda
echo ""
echo "Création du rôle IAM..."
aws iam create-role \
  --role-name $ROLE_NAME \
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": {"Service": "lambda.amazonaws.com"},
      "Action": "sts:AssumeRole"
    }]
  }' \
  || echo "Rôle déjà existant, on continue."

aws iam attach-role-policy \
  --role-name $ROLE_NAME \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole \
  || true

ROLE_ARN="arn:aws:iam::$AWS_ACCOUNT_ID:role/$ROLE_NAME"
echo "Rôle ARN : $ROLE_ARN"

# 3. Build et push de l'image initiale
# --provenance=false est obligatoire : sans ca, Docker génère un manifest index
# multi-plateforme (OCI index) que Lambda refuse. On force un manifest simple amd64.
echo ""
echo "Build de l'image Docker initiale..."
cd "$(dirname "$0")/../backend"

aws ecr get-login-password --region $AWS_REGION \
  | docker login --username AWS --password-stdin "$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com"

docker buildx build \
  --platform linux/amd64 \
  --provenance=false \
  --no-cache \
  -f Dockerfile.lambda \
  -t $ECR_URI:initial \
  --push \
  .

# 4. Créer la fonction Lambda
echo ""
echo "Création de la fonction Lambda..."
echo "Attente de la propagation IAM (15s)..."
sleep 15

aws lambda create-function \
  --function-name $FUNCTION_NAME \
  --package-type Image \
  --code ImageUri=$ECR_URI:initial \
  --role $ROLE_ARN \
  --timeout 30 \
  --memory-size 512 \
  --region $AWS_REGION

aws lambda wait function-active \
  --function-name $FUNCTION_NAME \
  --region $AWS_REGION

# 5. Variables d'environnement
echo ""
echo "Configuration des variables d'environnement Lambda..."
echo "Remplace les valeurs REMPLACER avant de lancer cette étape."

aws lambda update-function-configuration \
  --function-name $FUNCTION_NAME \
  --region $AWS_REGION \
  --environment "Variables={
    FASTAPI_ENV=production,
    ALLOWED_ORIGINS=https://oryel.dev,
    GROQ_API_KEY=REMPLACER,
    SMTP_HOST=smtp.gmail.com,
    SMTP_PORT=587,
    SMTP_USER=REMPLACER,
    SMTP_PASSWORD=REMPLACER,
    CONTACT_EMAIL=REMPLACER
  }"

# 6. Créer l'API Gateway HTTP
echo ""
echo "Création de l'API Gateway HTTP..."

API_ID=$(aws apigatewayv2 create-api \
  --name "oryel-backend-api" \
  --protocol-type HTTP \
  --region $AWS_REGION \
  --query ApiId \
  --output text)

echo "API ID : $API_ID"

LAMBDA_ARN="arn:aws:lambda:$AWS_REGION:$AWS_ACCOUNT_ID:function:$FUNCTION_NAME"

INTEGRATION_ID=$(aws apigatewayv2 create-integration \
  --api-id $API_ID \
  --integration-type AWS_PROXY \
  --integration-uri $LAMBDA_ARN \
  --payload-format-version "2.0" \
  --region $AWS_REGION \
  --query IntegrationId \
  --output text)

aws apigatewayv2 create-route \
  --api-id $API_ID \
  --route-key "ANY /{proxy+}" \
  --target "integrations/$INTEGRATION_ID" \
  --region $AWS_REGION > /dev/null

aws apigatewayv2 create-stage \
  --api-id $API_ID \
  --stage-name '$default' \
  --auto-deploy \
  --region $AWS_REGION > /dev/null

aws lambda add-permission \
  --function-name $FUNCTION_NAME \
  --statement-id apigateway-invoke \
  --action lambda:InvokeFunction \
  --principal apigateway.amazonaws.com \
  --source-arn "arn:aws:execute-api:$AWS_REGION:$AWS_ACCOUNT_ID:$API_ID/*/*" \
  --region $AWS_REGION > /dev/null

API_URL="https://$API_ID.execute-api.$AWS_REGION.amazonaws.com"

echo ""
echo "Setup terminé."
echo ""
echo "URL de l'API : $API_URL"
echo "Test          : curl $API_URL/api/health"
echo ""
echo "Prochaines étapes :"
echo "  1. Mettre à jour les variables d'env Lambda (remplacer les REMPLACER)"
echo "  2. Ajouter les secrets GitHub Actions : AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY"
echo "  3. Mettre à jour VITE_API_URL dans les secrets GitHub : $API_URL"
echo "  4. Optionnel : configurer un custom domain (api.oryel.dev) dans API Gateway"