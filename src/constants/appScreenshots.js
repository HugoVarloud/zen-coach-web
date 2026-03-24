/**
 * Captures d’écran Zen Coach (fichiers dans /public/assets/app/).
 * Noms des fichiers = export depuis ton téléphone.
 */
export const APP_SCREENSHOTS = {
  homeCarousel: "/assets/app/IMG_1884-5621080e-7ffd-4145-a181-4332787cd18e.png",
  homeAlt: "/assets/app/IMG_1922-a6c1db99-462e-4f04-8d46-7e75703c156f.png",
  homeAlt2: "/assets/app/IMG_1931-5f43dbcb-e181-4700-988d-118f44470fa6.png",
  coherentBreathing:
    "/assets/app/IMG_1934-f2920658-6063-43b2-86ed-af48d9659cba.png",
  boxBreathing: "/assets/app/IMG_1932-a70b6aa1-01f9-4c54-b48e-7154f352498b.png",
  respirationCarree:
    "/assets/app/IMG_1924-94f5e536-4633-42fa-8a20-b4486dc96d91.png",
  settings: "/assets/app/IMG_1930-f61d57c3-4297-4621-b0ef-7d9490685dcb.png",
  coherenceCardiaque:
    "/assets/app/IMG_1928-913e402b-1433-4191-b5c8-ed0211f4253b.png",
  breathing478: "/assets/app/IMG_1933-8878c0dc-88e1-416f-b2d1-212bb8116170.png",
  premium: "/assets/app/IMG_1923-016c8b64-42a5-4dfd-a525-3005a1d93fa4.png",
  breathing478fr:
    "/assets/app/IMG_1927-2f2ee192-a088-4127-8dbb-c6f3bf707095.png",
  phraseDuJour: "/assets/app/IMG_1926-443736bc-36f6-4469-a9c1-53a4988c0559.png",
  dailyQuote: "/assets/app/IMG_1925-77121df4-fc40-4d7b-9488-415a2bade16d.png",
};

/** Hero : écran principal = accueil ; vignettes = box, 4-7-8, cohérente */
export const HERO_SCREENSHOTS = {
  main: APP_SCREENSHOTS.homeCarousel,
  thumbs: [
    { src: APP_SCREENSHOTS.boxBreathing, altKey: "thumbAltBox" },
    { src: APP_SCREENSHOTS.breathing478, altKey: "thumbAlt478" },
    { src: APP_SCREENSHOTS.coherentBreathing, altKey: "thumbAltCoherent" },
  ],
};

export const SHOWCASE_SCREENSHOTS = {
  session: APP_SCREENSHOTS.coherentBreathing,
  strip: [
    { src: APP_SCREENSHOTS.phraseDuJour, altKey: "Showcase.stripAltQuote" },
    {
      src: APP_SCREENSHOTS.coherenceCardiaque,
      altKey: "Showcase.stripAltCoherence",
    },
    { src: APP_SCREENSHOTS.breathing478, altKey: "Showcase.stripAlt478" },
  ],
};
