/** Google Play — remplace par l’URL réelle ou VITE_PLAY_STORE_URL dans .env */
export const PLAY_STORE_URL =
  import.meta.env.VITE_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=com.zencoach.app";

/** App Store (iOS) — remplace par l’ID réel ou VITE_APP_STORE_URL dans .env */
export const APP_STORE_URL =
  import.meta.env.VITE_APP_STORE_URL ??
  "https://apps.apple.com/fr/app/zen-coach/id6748404637";
