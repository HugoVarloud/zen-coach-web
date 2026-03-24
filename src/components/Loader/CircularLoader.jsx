/**
 * Composant CircularLoader - Jauge circulaire avec progression garantie à 0%
 * @fileoverview Composant SVG avec progression linéaire et accessibilité complète
 */

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./CircularLoader.css";

/**
 * Props du composant CircularLoader
 * @typedef {Object} CircularLoaderProps
 * @property {number} progress - Progression de 0 à 1 (default: 0)
 * @property {string} [status] - Message d'état optionnel
 * @property {boolean} [reducedMotion] - Désactiver les animations
 * @property {Function} [onFinish] - Callback quand progress === 1
 * @property {string} [className] - Classes CSS additionnelles
 */

/**
 * Composant CircularLoader avec SVG et progression garantie à 0%
 * @param {CircularLoaderProps} props - Propriétés du composant
 * @returns {JSX.Element} Composant de loader circulaire
 */
const CircularLoader = ({
  progress = 0,
  status = "",
  reducedMotion = false,
  onFinish = null,
  className = "",
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef(null);
  const previousProgressRef = useRef(0);

  // Configuration du cercle SVG (plus grand et plus fin)
  const radius = 100;
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumferenceNormalized = 2 * Math.PI * normalizedRadius;

  // Calcul du stroke-dashoffset pour la progression
  const strokeDashoffset = circumferenceNormalized * (1 - displayProgress);

  // Animation fluide de la progression
  useEffect(() => {
    if (reducedMotion) {
      setDisplayProgress(progress);
      return;
    }

    const animateProgress = (startProgress, endProgress, duration = 300) => {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progressRatio = Math.min(elapsed / duration, 1);

        // Easing très léger pour les transitions de seuils
        const easedProgress =
          progressRatio < 0.5
            ? 2 * progressRatio * progressRatio
            : 1 - Math.pow(-2 * progressRatio + 2, 2) / 2;

        const currentProgress =
          startProgress + (endProgress - startProgress) * easedProgress;
        setDisplayProgress(currentProgress);

        if (progressRatio < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };

      setIsAnimating(true);
      animationRef.current = requestAnimationFrame(animate);
    };

    // Détecter les changements de seuils pour animations
    const thresholdChanges = [
      { from: 0, to: 0.2 },
      { from: 0.2, to: 0.6 },
      { from: 0.6, to: 1 },
    ];

    const threshold = thresholdChanges.find(
      (t) =>
        previousProgressRef.current >= t.from &&
        previousProgressRef.current < t.to &&
        progress >= t.to
    );

    if (threshold) {
      animateProgress(previousProgressRef.current, progress, 400);
    } else {
      animateProgress(previousProgressRef.current, progress, 200);
    }

    previousProgressRef.current = progress;

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [progress, reducedMotion]);

  // Callback quand la progression atteint 100%
  useEffect(() => {
    if (progress >= 1 && onFinish && !isAnimating) {
      onFinish();
    }
  }, [progress, onFinish, isAnimating]);

  // Micro-interaction du pourcentage (bonus)
  const [percentageBounce, setPercentageBounce] = useState(false);
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  useEffect(() => {
    const percentage = Math.floor(displayProgress * 100);
    const previousPercentage = Math.floor(previousProgressRef.current * 100);

    if (
      percentage !== previousPercentage &&
      percentage % 10 === 0 &&
      !reducedMotion
    ) {
      setPercentageBounce(true);
      setTimeout(() => setPercentageBounce(false), 200);
    }
  }, [displayProgress, reducedMotion]);

  const percentage = Math.floor(displayProgress * 100);

  return (
    <div
      className={`circular-loader ${className}`}
      role="status"
      aria-live="polite"
      aria-busy={progress < 1}
      aria-label={t(`${lang}.Loader.percentAria`, { pct: percentage })}
      data-testid="circular-loader"
    >
      <div className="circular-loader__container">
        {/* SVG du cercle de progression */}
        <svg
          className="circular-loader__svg"
          width={radius * 2}
          height={radius * 2}
          viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        >
          {/* Cercle de fond (track) */}
          <circle
            className="circular-loader__track"
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            strokeWidth={strokeWidth}
            fill="none"
          />

          {/* Cercle de progression */}
          <circle
            className="circular-loader__progress"
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumferenceNormalized}
            strokeDashoffset={strokeDashoffset}
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: `${radius}px ${radius}px`,
              transition: reducedMotion
                ? "none"
                : "stroke-dashoffset 0.3s ease-out",
            }}
          />
        </svg>

        {/* Pourcentage au centre */}
        <div
          className={`circular-loader__percentage ${
            percentageBounce ? "bounce" : ""
          }`}
          aria-hidden="true"
        >
          {percentage}%
        </div>
      </div>

      {/* Message d'état sous le cercle */}
      {status && (
        <div className="circular-loader__status" aria-hidden="true">
          {status}
        </div>
      )}
    </div>
  );
};

export default CircularLoader;
