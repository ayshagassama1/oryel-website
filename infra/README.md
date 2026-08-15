# Infrastructure hors IaC

L'hébergement du frontend (S3 + CloudFront) a été configuré à la main dans la console AWS,
pas via SAM ni aucun autre outil d'Infrastructure as Code. Ce document existe pour que cette
configuration soit reproductible ailleurs (notamment sur un site client) sans avoir à la
redécouvrir à tâtons dans la console.

Le backend (Lambda + API Gateway) est provisionné par `infra/setup-lambda.sh`, donc pas
concerné par cette dette : seule la partie hébergement statique du frontend l'est.

---

## Distribution CloudFront

- **ID** : `E1C9DLKAXRR3DE`
- **Origine** : bucket S3, accès **REST avec OAC** (Origin Access Control), pas de website
  hosting S3 activé.
- Conséquence directe de l'accès REST + OAC : S3 renvoie **403** (pas 404) sur une clé
  absente. C'est pour ça que la règle d'erreur 403 ci-dessous existe, en plus de la 404.

## Sortie de build à connaître

`vite-react-ssg` produit une sortie **plate** : la route `/mentions-legales` génère
`dist/mentions-legales.html`, jamais `dist/mentions-legales/index.html`. Toute la
configuration ci-dessous (Function de réécriture, error pages) part de ce constat.

---

## CloudFront Function — réécriture des URL sans extension

**Association** : Viewer Request, cache behavior `Default (*)`.

**Rôle** : les URL de l'app n'ont pas d'extension (`/mentions-legales`, pas
`/mentions-legales.html`), mais S3 sert des fichiers exacts. La fonction ajoute `.html` aux
URL qui n'en ont pas déjà une, avant que la requête n'atteigne l'origine S3. Trois cas :

- `/` : inchangée (l'origine sert l'objet racine par défaut).
- URL se terminant par `/` (ex. `/blog/`) : le `/` final est retiré et remplacé par `.html`
  → `/blog.html`.
- URL sans point dans le chemin (ex. `/mentions-legales`) : `.html` est simplement ajouté
  → `/mentions-legales.html`.
- Toute URL contenant déjà un point (`.svg`, `.js`, `.png`, `/assets/app-xxx.js`...) : laissée
  telle quelle, c'est un fichier réel.

**Code** :

```js
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  if (uri === '/') {
    return request;
  }
  if (uri.endsWith('/')) {
    request.uri = uri.slice(0, -1) + '.html';
  } else if (!uri.includes('.')) {
    request.uri += '.html';
  }
  return request;
}
```

---

## Custom Error Responses

Distribution `E1C9DLKAXRR3DE` → onglet **Error pages**. Deux règles, corrigées à l'étape 0.2
du plan SEO (avant correction : les deux répondaient `/index.html` en code **200**, un soft
404 qui rendait l'intégralité du domaine indexable sous n'importe quelle URL) :

| HTTP error code | Minimum TTL | Response page path | HTTP Response code |
|---|---|---|---|
| 403 | 10 | `/404.html` | **404** |
| 404 | 10 | `/404.html` | **404** |

Le champ décisif est le **HTTP Response code**. Le laisser à la valeur par défaut (identique
au code d'erreur d'origine, ou 200 selon la config) casse la sémantique HTTP même si le bon
contenu s'affiche visuellement : Google continue de traiter la page comme un succès.

---

## Reproduire cette configuration sur un nouveau site

1. Créer le bucket S3, désactiver le website hosting S3 natif.
2. Créer la distribution CloudFront avec OAC vers ce bucket (pas d'accès public direct au
   bucket).
3. Créer la CloudFront Function ci-dessus, l'associer en Viewer Request sur `Default (*)`.
4. Configurer les deux Custom Error Responses (403 et 404 → `/404.html` en code 404).
5. Vérifier par mesure, pas par lecture de config :
   ```bash
   curl -sI https://<domaine>/page-inexistante | head -1   # attendu : HTTP/2 404
   curl -sI https://<domaine>/une-page-reelle | head -1     # attendu : HTTP/2 200
   ```
