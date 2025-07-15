"use client";

import { useCallback } from "react";

export function useScrollToSection() {
  return useCallback(async (id: string, headerHeight = 76) => {
    await new Promise((resolve) => setTimeout(resolve, 400));

    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: "smooth",
      });
    }
  }, []);
}
