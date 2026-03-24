import "./Footer.css";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../../context/languageContext";

const Footer = () => {
  const selectedLang = useLanguageContext().i18n.language;
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacts" className="landing-footer">
      <div className="landing-footer__inner">
        <div className="landing-footer__brand">
          <span className="landing-footer__name">Zen Coach</span>
          <p className="landing-footer__tagline">
            {t(`${selectedLang}.Contact.footerTagline`)}
          </p>
        </div>
        <div className="landing-footer__col">
          <span className="landing-footer__label">
            {t(`${selectedLang}.Contact.footerContactLabel`)}
          </span>
          <a className="landing-footer__link" href="mailto:hugo.varloud@gmail.com">
            hugo.varloud@gmail.com
          </a>
        </div>
        <div className="landing-footer__col landing-footer__col--legal">
          <div className="landing-footer__legal-links">
            <Link to="/zen-coach-cgu" className="landing-footer__legal">
              {t(`${selectedLang}.Contact.LegalLinkCgu`)}
            </Link>
            <Link
              to="/zen-coach-confidentialite"
              className="landing-footer__legal"
            >
              {t(`${selectedLang}.Contact.LegalLink`)}
            </Link>
          </div>
        </div>
      </div>
      <div className="landing-footer__bottom">
        <p className="landing-footer__copy">
          {t(`${selectedLang}.Contact.Signature`).replace(
            "2024",
            currentYear.toString()
          )}
          <span className="landing-footer__muted">
            {t(`${selectedLang}.Contact.footerLegal`)}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
