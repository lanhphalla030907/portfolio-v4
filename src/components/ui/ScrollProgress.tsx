"use client";

import React, { useEffect, useState } from "react";

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const pct = Math.min(Math.max(scrollTop / docHeight, 0), 1);
        setProgress(pct);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[200] pointer-events-none origin-left bg-gradient-to-r from-brand-accent via-brand-accent to-brand-yellow transition-transform duration-75 ease-out shadow-[0_1px_8px_rgba(96,193,229,0.4)]"
      style={{
        transform: `scaleX(${progress})`,
      }}
      aria-hidden="true"
    />
  );
};
