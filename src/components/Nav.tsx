"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#probleme", label: "Le problème" },
  { href: "#methode", label: "Méthode" },
  { href: "#jo", label: "Qui est Jo" },
  { href: "#offre", label: "L'offre" },
  { href: "#faq", label: "FAQ" },
];

/** Barre de navigation : pleine en haut de page, réduite à un bouton au scroll. */
export function Nav() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const compactRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const isCompact = window.scrollY > 90;
      if (isCompact === compactRef.current) return;
      compactRef.current = isCompact;
      setCompact(isCompact);
      setOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header ref={ref} className={`nav${compact ? " compact" : ""}${open ? " open" : ""}`}>
      <div className="nav-in">
        <a href="#top" className="logo">
          <i aria-hidden="true" />
          Content
        </a>
        <nav className="menu" aria-label="Navigation principale">
          <ul className="links" id="links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close}>{l.label}</a>
              </li>
            ))}
            <li className="m-only">
              <a href="#reserver" className="m-cta" onClick={close}>Je réserve ma place</a>
            </li>
          </ul>
          <a href="#reserver" className="btn hot sm">Je réserve ma place</a>
          <button
            type="button"
            className="toggle"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="links"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
          </button>
        </nav>
      </div>
    </header>
  );
}
