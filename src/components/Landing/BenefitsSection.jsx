import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";
import "./BenefitsSection.css";

export default function BenefitsSection() {
  const { t } = useTranslation();
  const { i18n } = useLanguageContext();
  const lang = i18n.language;

  const items = ["one", "two", "three", "four"];

  return (
    <section id="benefits" className="landing-section landing-benefits">
      <div className="landing-section__contain">
        <header className="landing-section__head">
          <h2 className="landing-section__title">
            {t(`${lang}.Landing.Benefits.title`)}
          </h2>
          <p className="landing-section__lead">
            {t(`${lang}.Landing.Benefits.lead`)}
          </p>
        </header>
        <ul className="landing-benefits__grid">
          {items.map((key) => (
            <li key={key} className="landing-benefits__card">
              <span className="landing-benefits__icon" aria-hidden />
              <h3 className="landing-benefits__card-title">
                {t(`${lang}.Landing.Benefits.items.${key}.title`)}
              </h3>
              <p className="landing-benefits__card-text">
                {t(`${lang}.Landing.Benefits.items.${key}.text`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
