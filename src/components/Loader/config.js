/**
 * Configuration centralisée pour le système de loader
 * @fileoverview Configuration pour AppLoader, RouteLoader et useLoader
 */

/**
 * Configuration des ressources critiques à charger
 * @type {Object}
 */
export const criticalAssets = {
  /* Polices web chargées via Google Fonts dans index.html */
  fonts: [],

  images: [
    {
      src: "/assets/app/IMG_1929-396cd0cd-e466-4e5a-a8e9-cc34eb6fc154.png",
      priority: true,
      fetchPriority: "high",
    },
  ],

  animatedSelectors: [".landing-hero", ".landing-hero__title"],

  routesToPreload: [
    "/src/components/Landing/LandingPage.jsx",
    "/src/components/Footer/Footer.jsx",
  ],
};

/**
 * Configuration des timeouts et délais
 * @type {Object}
 */
export const timingConfig = {
  // Durée minimum d'affichage du loader (évite le flash)
  minDisplayMs: 600,

  // Timeout maximum avant fallback
  maxWaitMs: 5000, // Réduit de 7s à 5s

  // Délai avant activation du fallback sur réseau lent
  slowNetworkDelayMs: 3000,

  // Intervalle de mise à jour de la progression (ms)
  progressUpdateInterval: 50,

  // Délai avant préchargement des routes secondaires
  routePreloadDelayMs: 1000,
};

/**
 * Configuration des messages multilingues
 * @type {Object}
 */
export const loaderMessages = {
  en: {
    loading: "Loading...",
    loadingAnimations: "Loading animations...",
    loadingFonts: "Loading fonts...",
    loadingImages: "Loading images...",
    loadingTranslations: "Loading translations...",
    continue: "Continue",
    slowConnection: "Slow connection detected",
    fallbackMessage: "Taking longer than expected?",
  },
  fr: {
    loading: "Chargement...",
    loadingAnimations: "Chargement des animations...",
    loadingFonts: "Chargement des polices...",
    loadingImages: "Chargement des images...",
    loadingTranslations: "Chargement des traductions...",
    continue: "Continuer",
    slowConnection: "Connexion lente détectée",
    fallbackMessage: "Plus long que prévu ?",
  },
};

/**
 * Configuration des métriques de performance
 * @type {Object}
 */
export const metricsConfig = {
  // Exposer les métriques dans window.__loaderMetrics
  exposeMetrics: true,

  // Log détaillé en console
  verboseLogging: process.env.NODE_ENV === "development",

  // Métriques à tracker
  trackMetrics: [
    "fontsLoaded",
    "imagesLoaded",
    "animationsReady",
    "translationsLoaded",
    "totalLoadTime",
    "slowResources",
  ],
};

/**
 * Configuration d'accessibilité
 * @type {Object}
 */
export const a11yConfig = {
  // Support prefers-reduced-motion
  respectReducedMotion: true,

  // Annonces vocales pour les changements de progression
  announceProgress: true,

  // Intervalle entre les annonces (ms)
  announceInterval: 1000,

  // Messages ARIA
  ariaLabels: {
    loading: "Loading content",
    progress: "Loading progress",
    continue: "Continue loading",
  },
};

/**
 * Configuration des animations et transitions
 * @type {Object}
 */
export const animationConfig = {
  // Durée des transitions CSS (cohérente avec .animated-title)
  transitionDuration: "1s",

  // Easing utilisé (cohérent avec le site Zen Coach Web)
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",

  // Animation de la barre de progression
  progressBarAnimation: {
    duration: "0.3s",
    easing: "ease-out",
  },

  // Animation de sortie du loader
  exitAnimation: {
    duration: "0.5s",
    easing: "ease-in-out",
  },
};

/**
 * Configuration des couleurs (cohérente avec Zen Coach Web)
 * @type {Object}
 */
export const colorConfig = {
  primary: "#0aff85", // Accent principal
  secondary: "#ffffff", // Blanc
  background: "#000000", // Noir
  text: "#ffffff", // Texte blanc
  progressBg: "#333333", // Fond de la barre de progression
  progressFill: "#0aff85", // Couleur de remplissage
};

/**
 * Configuration du réseau et fallbacks
 * @type {Object}
 */
export const networkConfig = {
  // Types de connexion considérés comme lents
  slowConnectionTypes: ["slow-2g", "2g", "3g"],

  // Seuil de latence considéré comme lent (ms)
  slowLatencyThreshold: 1000,

  // Activation du mode fallback sur réseau lent
  enableSlowNetworkFallback: true,

  // Progression simulée quand le réseau est lent
  simulatedProgress: {
    enabled: true,
    incrementMs: 100,
    maxIncrement: 5,
  },
};

/**
 * Configuration par défaut exportée
 * @type {Object}
 */
export const defaultConfig = {
  criticalAssets,
  timingConfig,
  loaderMessages,
  metricsConfig,
  a11yConfig,
  animationConfig,
  colorConfig,
  networkConfig,
};

export default defaultConfig;
