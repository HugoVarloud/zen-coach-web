import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";
import { Squash as Hamburger } from "hamburger-react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { t } from "i18next";
import { useLanguageContext } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef(null);
  /** Barre toujours « pleine » pour lisibilité sur la landing claire. */
  const navSolid = true;
  const navElevated = isScrolled;
  const selectedLang = useLanguageContext().i18n.language;
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const routes = [
    { title: "NavHero", id: "hero" },
    { title: "NavBenefits", id: "benefits" },
    { title: "NavShowcase", id: "showcase" },
    { title: "NavHow", id: "how" },
    { title: "NavPricing", id: "pricing" },
    { title: "NavPhilosophy", id: "philosophy" },
    { title: "NavDownload", id: "download" },
    { title: "NavContact", id: "contacts" },
  ];

  const anchorHref = (id) =>
    location.pathname === "/" ? `#${id}` : `/#${id}`;

  return (
    <header
      className={`navigation-menu ${navSolid ? "scrolled" : ""} ${
        navElevated ? "nav-elevated" : ""
      }`}
    >
      <nav className="navbar" aria-label="Principal">
        <div className="title-container">
          <h1>
            <Link to="/" className="navbar-brand-link">
              Zen Coach
            </Link>
          </h1>
        </div>
        <ul
          className="navbar-desktop-nav"
          aria-label={t(`${selectedLang}.Landing.NavDesktopAria`)}
        >
          {routes.map((route) => (
            <li key={route.id}>
              <a
                href={anchorHref(route.id)}
                className="navbar-desktop-nav__link"
                onClick={() => setOpen(false)}
              >
                {t(`${selectedLang}.Landing.${route.title}`)}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-actions">
          <LanguageSelector />
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Passer en mode sombre" : "Passer en mode clair"}
            title={theme === "light" ? "Mode sombre" : "Mode clair"}
          >
            {theme === "light" ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
          <div className="hamburger-container" ref={ref}>
            <div className="menu-icon">
              <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="openMenu"
          >
            <ul>
              {routes.map((route, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.id}
                  >
                    <a
                      onClick={() => setOpen(false)}
                      href={anchorHref(route.id)}
                      className="menuItemName"
                    >
                      <span>
                        {t(`${selectedLang}.Landing.${route.title}`)}
                      </span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
