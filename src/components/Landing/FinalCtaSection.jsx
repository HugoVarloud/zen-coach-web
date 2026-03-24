import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";
import StoreButtons from "./StoreButtons";
import "./FinalCtaSection.css";

export default function FinalCtaSection() {
  const { t } = useTranslation();
  const { i18n } = useLanguageContext();
  const lang = i18n.language;

  return (
    <section id="download" className="landing-section landing-final-cta">
      <div className="landing-section__contain">
        <div className="landing-final-cta__card">
          <h2 className="landing-final-cta__title">
            {t(`${lang}.Landing.FinalCta.title`)}
          </h2>
          <p className="landing-final-cta__text">
            {t(`${lang}.Landing.FinalCta.text`)}
          </p>
          <StoreButtons layout="stack" size="large" className="landing-final-cta__stores" />
        </div>
      </div>
    </section>
  );
}
