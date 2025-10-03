# Portfolio Oryel

Portfolio personnel et vitrine de services - **Ndeye Aissatou Gassama / Oryel**.

Application fullstack construite avec **FastAPI** (backend) et **React** (frontend), déployée sur **AWS**.

## Stack technique

| Couche     | Technologie                          |
|------------|--------------------------------------|
| Backend    | Python 3.12, FastAPI, Pydantic       |
| Frontend   | React 18, Vite, Tailwind CSS         |
| IA         | OpenAI API (chatbot assistant)       |
| Base de données | PostgreSQL (à venir)            |
| Infra      | Docker, AWS (EC2, S3, CloudFront)    |

## Lancer le projet en local

### Prérequis

- Python 3.12+
- Node.js 20+
- Docker & Docker Compose (optionnel)

### Option 1 - Docker (recommandé)

```bash
cp .env.example .env
# Remplir les variables dans .env
docker compose up --build
```

Le frontend est accessible sur `http://localhost:5173` et l'API sur `http://localhost:8000`.

### Option 2 - Sans Docker

**Backend :**
```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp ../.env.example ../.env
uvicorn app.main:app --reload
```

**Frontend :**
```bash
cd frontend
npm install
npm run dev
```

## Architecture

```
Oryel-website/
├── backend/            # API FastAPI
│   ├── app/
│   │   ├── main.py     # Point d'entrée FastAPI
│   │   ├── config.py   # Configuration (pydantic-settings)
│   │   └── routers/    # Routes organisées par domaine
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/           # Application React
│   ├── src/
│   │   ├── components/ # Composants réutilisables
│   │   ├── pages/      # Pages principales
│   │   ├── hooks/      # Custom hooks
│   │   └── services/   # Appels API
│   ├── package.json
│   └── Dockerfile
└── docker-compose.yml
```

## Auteure

**Aissatou Gassama** - Développeuse Fullstack Python/React & Intégration IA  
[LinkedIn](https://linkedin.com/in/ndeye-aissatou-gassama) · [Malt](https://www.malt.fr)

---

*Oryel - Auto-entreprise · SIREN 982 878 449*
