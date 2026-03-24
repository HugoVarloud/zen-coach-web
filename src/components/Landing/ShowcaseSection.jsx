import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";
import PhoneMockup from "./PhoneMockup";
import PhoneScreenImage from "./PhoneScreenImage";
import { SHOWCASE_SCREENSHOTS } from "../../constants/appScreenshots";
import "./ShowcaseSection.css";

export default function ShowcaseSection() {
  const { t } = useTranslation();
  const { i18n } = useLanguageContext();
  const lang = i18n.language;

  const panels = ["a", "b", "c"];

  return (
    <section id="showcase" className="landing-section landing-showcase">
      <div className="landing-section__contain">
        <header className="landing-section__head">
          <h2 className="landing-section__title">
            {t(`${lang}.Landing.Showcase.title`)}
          </h2>
          <p className="landing-section__lead">
            {t(`${lang}.Landing.Showcase.lead`)}
          </p>
        </header>

        <div className="landing-showcase__layout">
          <div className="landing-showcase__device">
            <PhoneMockup size="large" label={t(`${lang}.Landing.Showcase.deviceLabel`)}>
              <PhoneScreenImage
                src={SHOWCASE_SCREENSHOTS.session}
                alt={t(`${lang}.Landing.Showcase.sessionAlt`)}
              />
            </PhoneMockup>
          </div>
          <div className="landing-showcase__panels">
            {panels.map((key) => (
              <article key={key} className="landing-showcase__panel">
                <h3>{t(`${lang}.Landing.Showcase.panels.${key}.title`)}</h3>
                <p>{t(`${lang}.Landing.Showcase.panels.${key}.text`)}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="landing-showcase__strip" aria-label={t(`${lang}.Landing.Showcase.stripAria`)}>
          {SHOWCASE_SCREENSHOTS.strip.map((item) => (
            <figure key={item.src} className="landing-showcase__strip-item">
              <div className="landing-showcase__strip-frame">
                <img
                  src={item.src}
                  alt={t(`${lang}.Landing.${item.altKey}`)}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
