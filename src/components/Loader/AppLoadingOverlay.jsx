/**
 * Overlay de chargement initial — DA Zen Coach (forêt), textes i18n.
 */

import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import CircularLoader from "./CircularLoader.jsx";
import "./CircularLoader.css";
import { useLoadingContext } from "../../context/loadingContext";
import { APP_SCREENSHOTS } from "../../constants/appScreenshots";

const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return reducedMotion;
};

const useLoadingProgress = (config = {}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const st = (key) => t(`${lang}.Loader.${key}`);

  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  const startTimeRef = useRef(Date.now());
  const timeoutRef = useRef(null);
  const finishOnceRef = useRef(false);

  const defaultConfig = {
    minDisplayTime: 600,
    maxWaitTime: 5000,
    simulationDuration: 2500,
    ...config,
  };

  const simulateProgress = () => {
    const startTime = Date.now();
    const duration = defaultConfig.simulationDuration;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progressRatio, 3);
      const simulatedProgress = Math.min(easedProgress * 0.95, 0.95);

      setProgress(simulatedProgress);

      if (simulatedProgress < 0.2) setStatus(st("statusPrepare"));
      else if (simulatedProgress < 0.4) setStatus(st("statusFonts"));
      else if (simulatedProgress < 0.6) setStatus(st("statusHero"));
      else if (simulatedProgress < 0.8) setStatus(st("statusAnimations"));
      else setStatus(st("statusFinalize"));

      if (progressRatio < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const loadCriticalResources = async () => {
    try {
      setStatus(st("statusFonts"));
      await document.fonts.ready;
      setProgress(0.2);

      setStatus(st("statusHero"));
      const img = new Image();
      img.src = APP_SCREENSHOTS.homeCarousel;
      await new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
        setTimeout(resolve, 1200);
      });
      setProgress(0.4);

      setStatus(st("statusAnimations"));
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProgress(0.6);

      setStatus(st("statusI18n"));
      await new Promise((resolve) => setTimeout(resolve, 400));
      setProgress(0.8);

      setStatus(st("statusFinalize"));
      await new Promise((resolve) => setTimeout(resolve, 350));
      setProgress(1);
    } catch (error) {
      console.warn("Erreur lors du chargement des ressources:", error);
      simulateProgress();
    }
  };

  const finishLoading = () => {
    if (finishOnceRef.current) return;
    const minDisplayTime = Date.now() - startTimeRef.current;

    if (minDisplayTime >= defaultConfig.minDisplayTime) {
      finishOnceRef.current = true;
      setProgress(1);
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setShowOverlay(false), 320);
      }, 420);
    } else {
      const remainingTime = defaultConfig.minDisplayTime - minDisplayTime;
      setTimeout(finishLoading, remainingTime);
    }
  };

  useEffect(() => {
    loadCriticalResources();

    timeoutRef.current = setTimeout(() => {
      if (progress < 0.95) {
        simulateProgress();
      }
      setTimeout(() => {
        setProgress(1);
        setTimeout(finishLoading, 500);
      }, 900);
    }, defaultConfig.maxWaitTime);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (progress >= 1) {
      setTimeout(() => finishLoading(), 280);
    }
  }, [progress]);

  return {
    progress,
    status,
    isLoading,
    showOverlay,
    finishLoading: () => {
      setProgress(1);
      finishLoading();
    },
  };
};

const AppLoadingOverlay = ({ config = {}, brandName = "Zen Coach" }) => {
  const reducedMotion = useReducedMotion();
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const { progress, status, isLoading, showOverlay, finishLoading } =
    useLoadingProgress(config);
  const { setLoadingComplete } = useLoadingContext();
  const overlayRef = useRef(null);

  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add("is-loading");
    } else {
      document.body.classList.remove("is-loading");
    }
    return () => {
      document.body.classList.remove("is-loading");
    };
  }, [showOverlay]);

  useEffect(() => {
    if (!isLoading && overlayRef.current) {
      overlayRef.current.style.pointerEvents = "none";
      setLoadingComplete();
    }
  }, [isLoading, setLoadingComplete]);

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && progress < 1) {
      finishLoading();
    }
  };

  if (!showOverlay) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className={`app-loading-overlay ${!isLoading ? "fade-out" : ""}`}
      role="status"
      aria-live="polite"
      aria-busy={isLoading}
      aria-label={t(`${lang}.Loader.ariaOverlay`)}
      data-testid="app-loading-overlay"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="app-loading-overlay__content">
        <CircularLoader
          progress={progress}
          status={status}
          reducedMotion={reducedMotion}
          onFinish={finishLoading}
          className="app-loading-overlay__loader"
        />

        <div className="app-loading-overlay__branding" aria-hidden="true">
          {brandName}
        </div>
      </div>

      {progress < 1 && (
        <button
          type="button"
          className="app-loading-overlay__skip"
          onClick={finishLoading}
          aria-label={t(`${lang}.Loader.skip`)}
          data-testid="skip-loading"
        >
          {t(`${lang}.Loader.skip`)}
        </button>
      )}
    </div>
  );
};

export default AppLoadingOverlay;
