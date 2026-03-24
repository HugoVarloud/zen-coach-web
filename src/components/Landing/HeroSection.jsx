import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";
import { useLoadingContext } from "../../context/loadingContext";
import PhoneMockup from "./PhoneMockup";
import PhoneScreenImage from "./PhoneScreenImage";
import { HERO_SCREENSHOTS } from "../../constants/appScreenshots";
import StoreButtons from "./StoreButtons";
import "./HeroSection.css";

export default function HeroSection() {
  const { t } = useTranslation();
  const { i18n } = useLanguageContext();
  const lang = i18n.language;
  const { isFadeOutComplete } = useLoadingContext();

  return (
    <section
      id="hero"
      className={`landing-hero ${isFadeOutComplete ? "landing-hero--ready" : ""}`}
      aria-labelledby="hero-title"
    >
      <div className="landing-hero__bg" aria-hidden />
      <div className="landing-hero__fold">
        <div className="landing-hero__inner">
          <div className="landing-hero__copy">
            <div className="landing-hero__intro">
              <p className="landing-hero__eyebrow">
                {t(`${lang}.Landing.Hero.eyebrow`)}
              </p>
              <h1 id="hero-title" className="landing-hero__title">
                {t(`${lang}.Landing.Hero.title`)}
              </h1>
            </div>
            <p className="landing-hero__subtitle">
              {t(`${lang}.Landing.Hero.subtitle`)}
            </p>
            <div className="landing-hero__conversion">
              <div className="landing-hero__ctas">
                <StoreButtons className="landing-hero__stores" />
              </div>
              <p className="landing-hero__note">{t(`${lang}.Landing.Hero.note`)}</p>
            </div>
          </div>

          <div className="landing-hero__visual">
            <div className="landing-hero__phones">
              <PhoneMockup size="large">
                <PhoneScreenImage
                  src={HERO_SCREENSHOTS.main}
                  alt={t(`${lang}.Landing.Hero.mainScreenAlt`)}
                  priority
                />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>

      <div
        className="landing-hero-thumbs"
        aria-label={t(`${lang}.Landing.Hero.thumbsStripAria`)}
      >
        {HERO_SCREENSHOTS.thumbs.map((item, i) => (
          <PhoneMockup
            key={item.src}
            size="small"
            label={t(`${lang}.Landing.Hero.mockupThumb${i + 1}`)}
          >
            <PhoneScreenImage
              src={item.src}
              alt={t(`${lang}.Landing.Hero.${item.altKey}`)}
            />
          </PhoneMockup>
        ))}
      </div>
    </section>
  );
}
