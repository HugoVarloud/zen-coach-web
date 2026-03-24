import { useLanguageContext } from "../../context/languageContext";
import { useState, useRef, useEffect } from "react";
import "./LanguageSelectorIcons.css";

const LanguageSelectorIcons = () => {
  const { languages, onClickLanguageChange, currentLanguage } =
    useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const currentLang = languages.find((lang) => lang.code === currentLanguage);
  const availableLanguages = languages.filter(
    (lang) => lang.code !== currentLanguage
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setFocusedIndex(-1);
  };

  const handleLanguageSelect = (languageCode) => {
    onClickLanguageChange(languageCode);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(0);
      }
      return;
    }

    switch (e.key) {
      case "Escape":
        setIsOpen(false);
        setFocusedIndex(-1);
        buttonRef.current?.focus();
        break;
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev < availableLanguages.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev > 0 ? prev - 1 : availableLanguages.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0) {
          handleLanguageSelect(availableLanguages[focusedIndex].code);
        }
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // SVG Icons for languages - Custom designed
  const getLanguageIcon = (code) => {
    switch (code) {
      case "en":
        return (
          <svg viewBox="0 0 60 30" fill="currentColor">
            {/* Official UK Flag SVG */}
            <defs>
              <clipPath id="uk-flag-clip">
                <path d="M0 0v30h60V0z" />
              </clipPath>
            </defs>
            <g clipPath="url(#uk-flag-clip)">
              <path d="M0 0v30h60V0z" fill="#006" />
              <path d="M0 0L60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
              <path d="M0 0L60 30M60 0L0 30" stroke="#c00" strokeWidth="4" />
              <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
              <path d="M30 0v30M0 15h60" stroke="#c00" strokeWidth="6" />
            </g>
          </svg>
        );
      case "fr":
        return (
          <svg viewBox="0 0 60 40" fill="currentColor">
            {/* Official French Flag SVG */}
            <rect width="20" height="40" fill="#002395" />
            <rect x="20" width="20" height="40" fill="#ffffff" />
            <rect x="40" width="20" height="40" fill="#ed2939" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            {/* Globe icon for other languages */}
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        );
    }
  };

  return (
    <div className="language-selector-icons" ref={dropdownRef}>
      <button
        ref={buttonRef}
        className={`language-button-icons ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-label={`Changer la langue. Langue actuelle: ${
          currentLang?.name || currentLanguage
        }`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="language-svg-icon">
          {getLanguageIcon(currentLanguage)}
        </div>
        <span className="language-name-icons">
          {currentLang?.name || currentLanguage.toUpperCase()}
        </span>
        <svg
          className={`chevron-icons ${isOpen ? "rotated" : ""}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="language-dropdown-icons" role="listbox">
          {availableLanguages.map((language, index) => (
            <button
              key={language.code}
              className={`language-option-icons ${
                focusedIndex === index ? "focused" : ""
              }`}
              onClick={() => handleLanguageSelect(language.code)}
              onMouseEnter={() => setFocusedIndex(index)}
              role="option"
              aria-selected={false}
            >
              <div className="language-svg-icon">
                {getLanguageIcon(language.code)}
              </div>
              <span className="language-name-icons">
                {language.name || language.code.toUpperCase()}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelectorIcons;
