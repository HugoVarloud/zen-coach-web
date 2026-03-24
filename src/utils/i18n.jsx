import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/en.json";
import fr from "./locales/fr/fr.json";
import legalEn from "./locales/en/legal.json";
import legalFr from "./locales/fr/legal.json";

const resources = {
  en: {
    translation: {
      en: { ...en, Legal: legalEn },
    },
  },
  fr: {
    translation: {
      fr: { ...fr, Legal: legalFr },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
