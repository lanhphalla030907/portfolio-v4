"use client";

import React, { useEffect } from "react";

export const ScrollReveal: React.FC = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.getAttribute("data-delay");
          if (delay) {
            el.style.transitionDelay = `${delay}ms`;
          }
          el.classList.add("is-revealed");
          observer.unobserve(el);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    });

    const elements = document.querySelectorAll(".reveal-on-scroll, .reveal-zoom");
    elements.forEach((el) => observer.observe(el));

    // Also observe dynamically added elements if any
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll(
        ".reveal-on-scroll:not(.is-revealed), .reveal-zoom:not(.is-revealed)"
      );
      newElements.forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
};
