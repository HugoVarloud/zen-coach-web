import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";
import "./PhilosophySection.css";

export default function PhilosophySection() {
  const { t } = useTranslation();
  const { i18n } = useLanguageContext();
  const lang = i18n.language;

  return (
    <section id="philosophy" className="landing-section landing-philosophy">
      <div className="landing-section__contain landing-philosophy__inner">
        <blockquote className="landing-philosophy__quote">
          <p>{t(`${lang}.Landing.Philosophy.quote`)}</p>
        </blockquote>
        <div className="landing-philosophy__reassure">
          {[1, 2, 3].map((n) => (
            <div key={n} className="landing-philosophy__pill">
              {t(`${lang}.Landing.Philosophy.points.p${n}`)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
