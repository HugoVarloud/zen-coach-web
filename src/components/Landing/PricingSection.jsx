import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";
import { APP_SCREENSHOTS } from "../../constants/appScreenshots";
import "./PricingSection.css";

export default function PricingSection() {
  const { t } = useTranslation();
  const { i18n } = useLanguageContext();
  const lang = i18n.language;

  return (
    <section id="pricing" className="landing-section landing-pricing">
      <div className="landing-section__contain">
        <header className="landing-section__head">
          <h2 className="landing-section__title">
            {t(`${lang}.Landing.Pricing.title`)}
          </h2>
          <p className="landing-section__lead">
            {t(`${lang}.Landing.Pricing.lead`)}
          </p>
        </header>
        <div className="landing-pricing__grid">
          <article className="landing-pricing__card">
            <h3>{t(`${lang}.Landing.Pricing.free.title`)}</h3>
            <p className="landing-pricing__desc">
              {t(`${lang}.Landing.Pricing.free.desc`)}
            </p>
            <ul className="landing-pricing__list">
              {[1, 2, 3].map((n) => (
                <li key={n}>{t(`${lang}.Landing.Pricing.free.b${n}`)}</li>
              ))}
            </ul>
          </article>
          <article className="landing-pricing__card landing-pricing__card--accent">
            <div className="landing-pricing__preview">
              <img
                src={APP_SCREENSHOTS.premium}
                alt={t(`${lang}.Landing.Pricing.premium.previewAlt`)}
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3>{t(`${lang}.Landing.Pricing.premium.title`)}</h3>
            <p className="landing-pricing__desc">
              {t(`${lang}.Landing.Pricing.premium.desc`)}
            </p>
            <ul className="landing-pricing__list">
              {[1, 2, 3].map((n) => (
                <li key={n}>{t(`${lang}.Landing.Pricing.premium.b${n}`)}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="landing-pricing__footnote">
          {t(`${lang}.Landing.Pricing.footnote`)}
        </p>
      </div>
    </section>
  );
}
