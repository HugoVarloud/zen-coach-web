# Système de loader — Zen Coach Web

## 🎯 Vue d'ensemble

Système de chargement complet et accessible pour le site Zen Coach Web (React/Vite), conçu pour éliminer les flashs de contenu et améliorer l'expérience utilisateur lors du chargement initial et des transitions de route.

## ✨ Fonctionnalités

### 🚀 Chargement Initial

- **Overlay plein écran** avec logo et barre de progression déterminée
- **Détection intelligente** des ressources critiques (polices Akira, image hero, animations CSS)
- **Progression réelle** basée sur le chargement effectif des ressources
- **Fallback robuste** avec timeout de sécurité et bouton "Continuer"
- **Support multilingue** intégré avec i18next

### 🔄 Transitions de Route

- **Mini-loader** style NProgress pour les changements de route
- **Détection automatique** des navigations React Router
- **Animation fluide** sans overlay complet

### ♿ Accessibilité

- **Support ARIA** complet (role, aria-live, aria-busy)
- **Respect prefers-reduced-motion** avec animations alternatives
- **Navigation clavier** avec support des touches Entrée
- **Annonces vocales** pour les changements de progression

### 📊 Métriques et Debug

- **Métriques exposées** dans `window.__loaderMetrics`
- **Logging détaillé** en mode développement
- **Détection réseau lent** avec adaptation automatique
- **Tests E2E** avec data-testid

## 🏗️ Architecture

```
src/
├── components/Loader/
│   ├── config.js          # Configuration centralisée
│   ├── Loader.css         # Styles complets
│   ├── AppLoader.jsx      # Loader principal
│   └── RouteLoader.jsx    # Mini-loader routes
├── hooks/
│   └── useLoader.js       # Hook personnalisé
└── ...
```

## 🔧 Configuration

### Ressources Critiques

Modifiez `src/components/Loader/config.js` pour ajuster les ressources à charger :

```javascript
export const criticalAssets = {
  fonts: [
    {
      family: "Akira Bold",
      url: "/assets/fonts/akira_super_bold-webfont.woff2",
      weight: "900",
    },
  ],
  images: [
    {
      src: "/assets/montain.jpg",
      priority: true,
      fetchPriority: "high",
    },
  ],
  animatedSelectors: [".animated-title", ".animated-title > div.text-top div"],
};
```

### Timeouts et Délais

```javascript
export const timingConfig = {
  minDisplayMs: 600, // Durée minimum d'affichage
  maxWaitMs: 7000, // Timeout maximum
  slowNetworkDelayMs: 3000, // Délai réseau lent
  progressUpdateInterval: 50, // Intervalle mise à jour
};
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont alignées avec la charte du site :

```css
:root {
  --loader-primary: #0aff85; /* Vert principal */
  --loader-secondary: #ffffff; /* Blanc */
  --loader-background: #000000; /* Noir */
}
```

### Messages Multilingues

Ajoutez vos traductions dans `config.js` :

```javascript
export const loaderMessages = {
  en: {
    loading: "Loading...",
    loadingAnimations: "Loading animations...",
    continue: "Continue",
  },
  fr: {
    loading: "Chargement...",
    loadingAnimations: "Chargement des animations...",
    continue: "Continuer",
  },
};
```

## 🚀 Utilisation

### Intégration Basique

Le loader est déjà intégré dans `App.jsx` :

```jsx
import AppLoader from "./components/Loader/AppLoader";
import RouteLoader from "./components/Loader/RouteLoader";

function App() {
  return (
    <>
      <AppLoader />
      <RouteLoader />
      {/* Votre contenu */}
    </>
  );
}
```

### Configuration Personnalisée

```jsx
<AppLoader
  config={{
    timingConfig: {
      maxWaitMs: 5000,
    },
    loaderMessages: {
      en: { loading: "Custom loading..." },
    },
  }}
  logo="Zen Coach"
/>
```

## 📈 Optimisations Implémentées

### Preloads HTML

- **Polices Akira** : `font-display: optional` + preload
- **Image hero** : `fetchpriority="high"` + preload
- **Traductions** : Preload des fichiers JSON

### Prévention des Flashs

- **Styles critiques inline** dans `index.html`
- **Import CSS** dans `main.jsx` avant hydratation
- **Classe body.is-loading** pour bloquer le scroll

### Performance

- **Chargement parallèle** des ressources critiques
- **Progression simulée** sur réseau lent
- **Timeout de sécurité** pour éviter les blocages
- **Métriques exposées** pour le monitoring

## 🧪 Tests et Debug

### Métriques Disponibles

```javascript
// Accès aux métriques
console.log(window.__loaderMetrics);
// {
//   fontsLoaded: true,
//   imagesLoaded: true,
//   animationsReady: true,
//   translationsLoaded: true,
//   totalLoadTime: 1250,
//   slowResources: []
// }
```

### Tests E2E

```javascript
// Sélecteurs pour tests
const loader = document.querySelector('[data-testid="app-loader"]');
const continueBtn = document.querySelector('[data-testid="continue-button"]');
const routeLoader = document.querySelector('[data-testid="route-loader"]');
```

### Mode Debug

Activez le logging détaillé :

```javascript
// Dans config.js
export const metricsConfig = {
  verboseLogging: true, // Logs détaillés
  exposeMetrics: true, // Métriques exposées
};
```

## 🔍 Scénarios de Test

### Cache Froid

- Première visite
- Pas de cache navigateur
- Test des preloads

### Cache Chaud

- Visite répétée
- Ressources en cache
- Test des optimisations

### Réseau Lent

- Simulation 3G/slow-2G
- Test du fallback
- Progression simulée

### Mode Offline

- Pas de connexion
- Test des timeouts
- Bouton continuer

## 🎯 Critères d'Acceptation

✅ **Aucune CLS détectable** (CLS < 0.01)  
✅ **LCP non dégradé** (> 200ms par rapport au site sans overlay)  
✅ **Pas de blocage** > maxWaitMs  
✅ **A11Y complet** : navigable clavier, ARIA, réduit le mouvement  
✅ **Code propre** : JSDoc, commenté, sans dépendances lourdes  
✅ **Métriques exposées** pour monitoring

## 🚨 Dépannage

### Loader ne se masque pas

1. Vérifiez les métriques : `console.log(window.__loaderMetrics)`
2. Vérifiez les sélecteurs CSS dans `animatedSelectors`
3. Testez avec le bouton "Continuer"

### Flash d'hydratation

1. Vérifiez l'import CSS dans `main.jsx`
2. Vérifiez les styles inline dans `index.html`
3. Testez avec `suppressHydrationWarning`

### Progression bloquée

1. Vérifiez les URLs des ressources critiques
2. Testez en mode réseau lent
3. Vérifiez les timeouts dans la config

## 📚 Ressources

- [React Router Navigation](https://reactrouter.com/en/main/hooks/use-navigation-type)
- [Font Loading API](https://developer.mozilla.org/en-US/docs/Web/API/FontFace)
- [Performance Observer](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)
- [ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

---

**Zen Coach Web**
