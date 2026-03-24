import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import "./context.css";
export const LanguageContext = createContext(undefined);

export const LanguageContextProvider = ({ children }) => {
  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
  ];
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "en");

  const onClickLanguageChange = (e) => {
    i18n.changeLanguage(e);
    setCurrentLanguage(e);
  };

  return (
    <div className="select-opened-label">
      <LanguageContext.Provider
        value={{ t, i18n, onClickLanguageChange, languages, currentLanguage }}
      >
        {children}
      </LanguageContext.Provider>
    </div>
  );
};

LanguageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguageContext = () => useContext(LanguageContext);
