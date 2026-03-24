import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./utils/i18n.jsx";
import { LanguageContextProvider } from "./context/languageContext.jsx";
// Import des styles du nouveau loader circulaire pour éviter le flash d'hydratation
import "./components/Loader/CircularLoader.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
