# Zen Coach Web

Site officiel (landing produit) de **Zen Coach** — application mobile de bien-être — construit avec React et Vite. Homepage en one-page (hero avec mockups, bénéfices, expérience, mode d’emploi, gratuit/premium, philosophie, CTA final) ; politique de confidentialité sur une route dédiée.

Variables optionnelles dans un fichier `.env` : `VITE_PLAY_STORE_URL` (Google Play), `VITE_APP_STORE_URL` (App Store / lien `apps.apple.com` avec l’ID de l’app).

Les captures d’écran de l’app sont dans `public/assets/app/` ; le mapping (hero, vitrine, premium) est centralisé dans `src/constants/appScreenshots.js` pour les remplacer ou les réordonner facilement.

## Dépôt GitHub

```bash
git remote add origin https://github.com/HugoVarloud/zen-coach-web.git
git push -u origin main
```

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Le dossier de sortie est `dist` (compatible Netlify avec `netlify.toml`).
