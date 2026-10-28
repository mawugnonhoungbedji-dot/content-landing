"use client";

import { useEffect, useRef } from "react";
import { site, whatsappLink } from "@/lib/site";

/**
 * Effets liés au défilement : barre de progression, apparition des blocs (.rv)
 * et bouton de réservation collant sur mobile.
 */
export function ScrollEffects() {
  const progress = useRef<HTMLDivElement>(null);
  const sticky = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (progress.current) progress.current.style.transform = `scaleX(${window.scrollY / max})`;
      sticky.current?.classList.toggle("show", window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          reveal.unobserve(e.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll<HTMLElement>(".rv").forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      reveal.observe(el);
    });

    // le bouton collant s'efface quand la carte prix ou l'appel final est à l'écran
    const zones = new Set<Element>();
    const ctaWatch = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? zones.add(e.target) : zones.delete(e.target)));
      sticky.current?.classList.toggle("hide", zones.size > 0);
    });
    document.querySelectorAll("#reserver, .final").forEach((el) => ctaWatch.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      reveal.disconnect();
      ctaWatch.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={progress} className="progress" aria-hidden="true" />
      <div ref={sticky} className="sticky">
        <a href={whatsappLink()} className="btn hot xl" target="_blank" rel="noopener noreferrer">
          Je réserve · {site.price}
        </a>
      </div>
    </>
  );
}
