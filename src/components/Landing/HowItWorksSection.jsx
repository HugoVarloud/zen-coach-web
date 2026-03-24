import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";
import "./HowItWorksSection.css";

export default function HowItWorksSection() {
  const { t } = useTranslation();
  const { i18n } = useLanguageContext();
  const lang = i18n.language;

  const steps = ["1", "2", "3"];

  return (
    <section id="how" className="landing-section landing-how">
      <div className="landing-section__contain">
        <header className="landing-section__head">
          <h2 className="landing-section__title">
            {t(`${lang}.Landing.How.title`)}
          </h2>
          <p className="landing-section__lead">
            {t(`${lang}.Landing.How.lead`)}
          </p>
        </header>
        <ol className="landing-how__steps">
          {steps.map((key, i) => (
            <li key={key} className="landing-how__step">
              <span className="landing-how__num">{i + 1}</span>
              <div>
                <h3>{t(`${lang}.Landing.How.steps.${key}.title`)}</h3>
                <p>{t(`${lang}.Landing.How.steps.${key}.text`)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
