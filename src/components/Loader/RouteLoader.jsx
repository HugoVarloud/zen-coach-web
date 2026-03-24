/**
 * Composant RouteLoader - Mini-loader pour les transitions de route
 * @fileoverview Mini-loader style NProgress pour les changements de route
 */

import React, { useState, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { defaultConfig } from "./config.js";
import "./Loader.css";

/**
 * Hook pour gérer le mini-loader des routes
 * @returns {Object} État et méthodes du route loader
 */
const useRouteLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const navigationType = useNavigationType();

  // Démarrer le chargement de route
  const startRouteLoading = () => {
    setIsLoading(true);
    setProgress(0);

    // Simulation de progression pour les routes
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90; // S'arrêter à 90% en attendant la fin du chargement
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return interval;
  };

  // Terminer le chargement de route
  const finishRouteLoading = () => {
    setProgress(100);
    setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 200);
  };

  // Détecter les changements de route
  useEffect(() => {
    if (navigationType === "PUSH" || navigationType === "REPLACE") {
      const interval = startRouteLoading();

      // Timeout de sécurité
      const timeout = setTimeout(() => {
        clearInterval(interval);
        finishRouteLoading();
      }, 3000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [location.pathname, navigationType]);

  return {
    isLoading,
    progress,
    finishRouteLoading,
  };
};

/**
 * Composant RouteLoader
 * @returns {JSX.Element} Mini-loader pour les routes
 */
const RouteLoader = () => {
  const { isLoading, progress } = useRouteLoader();

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className="route-loader"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Loading page"
      data-testid="route-loader"
    >
      <div
        className="route-loader-bar"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </div>
  );
};

export default RouteLoader;
