"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroller() {
  useEffect(() => {
    // Initialise Lenis avec des réglages fluides et naturels
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing exponentiel pour un arrêt progressif et élégant
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05, // Vitesse légèrement accentuée pour le ressenti de contrôle
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Boucle d'animation haute performance basée sur requestAnimationFrame
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Nettoyage au démontage pour éviter les fuites de mémoire
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
