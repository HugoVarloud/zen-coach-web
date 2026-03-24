import { useLanguageContext } from "../../context/languageContext";
import { useState, useRef, useEffect } from "react";
import "./LanguageSelector.css";

const LanguageSelector = () => {
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

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        ref={buttonRef}
        className={`language-button ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-label={`Changer la langue. Langue actuelle: ${
          currentLang?.name || currentLanguage
        }`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="language-name">
          {currentLang?.name || currentLanguage.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <div className="language-dropdown" role="listbox">
          {availableLanguages.map((language, index) => (
            <button
              key={language.code}
              className={`language-option ${
                focusedIndex === index ? "focused" : ""
              }`}
              onClick={() => handleLanguageSelect(language.code)}
              onMouseEnter={() => setFocusedIndex(index)}
              role="option"
              aria-selected={false}
            >
              <span className="language-name">
                {language.name || language.code.toUpperCase()}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
