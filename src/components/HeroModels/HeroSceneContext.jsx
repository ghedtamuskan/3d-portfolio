import { createContext, useContext, useState, useCallback } from "react";

const HeroSceneContext = createContext(null);

export function HeroSceneProvider({ children }) {
  const [heroInView, setHeroInView] = useState(true);
  const [canvasHover, setCanvasHover] = useState(false);

  const setInView = useCallback((inView) => {
    setHeroInView(inView);
  }, []);

  const setHover = useCallback((hover) => {
    setCanvasHover(hover);
  }, []);

  const value = {
    heroInView,
    canvasHover,
    setInView,
    setHover,
  };

  return (
    <HeroSceneContext.Provider value={value}>
      {children}
    </HeroSceneContext.Provider>
  );
}

export function useHeroScene() {
  const ctx = useContext(HeroSceneContext);
  if (!ctx) return { heroInView: true, canvasHover: false, setInView: () => {}, setHover: () => {} };
  return ctx;
}

