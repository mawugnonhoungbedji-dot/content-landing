"use client";

import type { FormEvent } from "react";
import { Icon } from "@/components/Icon";
import { businessTypes, networks } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

/**
 * Carte de réservation du hero : rien n'est envoyé à un serveur.
 * Les choix (limités à des listes fixes) servent à préremplir le message WhatsApp.
 */
export function BookingForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const biz = String(data.get("commerce"));
    const net = String(data.get("reseaux"));
    if (!businessTypes.includes(biz as (typeof businessTypes)[number]) || !networks.includes(net as (typeof networks)[number])) return;
    const message = `${site.whatsapp.defaultMessage} Mon commerce : ${biz}. Mes réseaux : ${net}.`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="book" onSubmit={onSubmit}>
      <div className="field">
        <Icon name="storefront" />
        <label>
          Ton commerce
          <select name="commerce" defaultValue={businessTypes[0]}>
            {businessTypes.map((b) => <option key={b}>{b}</option>)}
          </select>
        </label>
      </div>
      <div className="field">
        <Icon name="smartphone" />
        <label>
          Tes réseaux
          <select name="reseaux" defaultValue={networks[0]}>
            {networks.map((n) => <option key={n}>{n}</option>)}
          </select>
        </label>
      </div>
      <button className="book-go" type="submit">
        Réserver <Icon name="arrow_forward" />
      </button>
    </form>
  );
}
