import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/Landing/LandingPage";
import Footer from "./components/Footer/Footer";
import Confidentialite from "./components/Confidentialite/Confidentialite";
import Cgu from "./components/Cgu/Cgu";
import AppLoadingOverlay from "./components/Loader/AppLoadingOverlay";
import RouteLoader from "./components/Loader/RouteLoader";
import { LoadingProvider } from "./context/loadingContext";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <AppLoadingOverlay brandName="Zen Coach" />
        <RouteLoader />

        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/zen-coach-confidentialite"
              element={
                <>
                  <Confidentialite />
                  <Footer />
                </>
              }
            />
            <Route
              path="/zen-coach-cgu"
              element={
                <>
                  <Cgu />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
