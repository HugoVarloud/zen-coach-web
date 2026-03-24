import Apple from "@mui/icons-material/Apple";
import Android from "@mui/icons-material/Android";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";
import { APP_STORE_URL, PLAY_STORE_URL } from "../../constants/urls";
import "./StoreButtons.css";

/**
 * Boutons App Store + Google Play (charte Zen Coach).
 */
export default function StoreButtons({
  className = "",
  layout = "row",
  size = "default",
}) {
  const { t } = useTranslation();
  const { i18n } = useLanguageContext();
  const lang = i18n.language;

  return (
    <div
      className={`store-buttons store-buttons--${layout} store-buttons--${size} ${className}`.trim()}
      role="group"
      aria-label={t(`${lang}.Landing.Store.aria`)}
    >
      <a
        className="store-btn store-btn--apple"
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="store-btn__icon" aria-hidden>
          <Apple sx={{ fontSize: 20 }} />
        </span>
        {t(`${lang}.Landing.Store.appStore`)}
      </a>
      <a
        className="store-btn store-btn--google"
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="store-btn__icon" aria-hidden>
          <Android sx={{ fontSize: 20 }} />
        </span>
        {t(`${lang}.Landing.Store.googlePlay`)}
      </a>
    </div>
  );
}
