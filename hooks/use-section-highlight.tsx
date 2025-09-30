'use client'

import { useEffect, useState } from "react";

export function useSectionHighlight(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    if (!sectionIds.length) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id);
          return;
        }

        const nearest = entries
          .slice()
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];

        if (nearest) {
          setActiveId(nearest.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.15, 0.3, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [JSON.stringify(sectionIds)]);

  return activeId;
}
