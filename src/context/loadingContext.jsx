import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadeOutComplete, setIsFadeOutComplete] = useState(false);

  const setLoadingComplete = () => {
    setIsLoading(false);
    // Attendre la fin du fade-out avant de permettre les animations
    setTimeout(() => {
      setIsFadeOutComplete(true);
    }, 500); // Délai correspondant au fade-out du loader
  };

  return (
    <LoadingContext.Provider
      value={{ isLoading, isFadeOutComplete, setLoadingComplete }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    // Retourner des valeurs par défaut si le contexte n'est pas disponible
    return {
      isLoading: false,
      isFadeOutComplete: true,
      setLoadingComplete: () => {},
    };
  }
  return context;
};
