"use client";

import { useState, useEffect } from "react";
import { NavbarItemType } from "@/lib/interface";

export function useActiveSection(links: NavbarItemType[]) {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    links[0]?.id || ""
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setActiveSectionId(id);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [links]);

  return { activeSectionId };
}
