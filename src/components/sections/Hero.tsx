import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";
import heroImage from "../../../public/hero.webp";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="who-chip"><Icon name="storefront" />Pour les boutiques et e-commerçants</span>
          <h1>5 Reels qui <strong>font vendre</strong> ta boutique.</h1>
          <p className="hero-sub">
            On filme tes produits, on monte, <b>tu postes</b>. Des vidéos prêtes pour TikTok, Facebook et Instagram, sans rien faire.
          </p>
          <BookingForm />
          <p className="book-note">
            <span><Icon name="sell" /><b>{site.price}</b> les 5 Reels</span>
            <span><Icon name="schedule" />Livrés en {site.delivery}</span>
            <span><Icon name="verified" />Satisfait ou refait</span>
          </p>
          <a className="how" href="#methode">
            <span className="how-ic"><Icon name="play_arrow" fill /></span>
            <span><small>4 étapes, une demi-journée</small>Comment ça marche</span>
            <Icon name="arrow_right" />
          </a>
        </div>

        <div className="hero-visual">
          <div className="stage">
            <div className="layer back" aria-hidden="true"><span>REELS</span></div>
            <div className="layer rings" aria-hidden="true"><i /><i /></div>
            <div className="layer disc" aria-hidden="true" />
            <div className="layer front">
              <div className="person">
                <Image
                  src={heroImage}
                  alt={`${site.owner}, vidéaste et fondateur de Content, avec son appareil photo`}
                  priority
                  sizes="(max-width: 860px) 100vw, 700px"
                />
              </div>
            </div>
            <div className="layer b1" aria-hidden="true"><span className="badge dark"><Icon name="videocam" /></span></div>
            <div className="layer b2" aria-hidden="true"><span className="badge light"><Icon name="favorite" fill /></span></div>
            <div className="layer name-tag">
              <Icon name="videocam" />
              <div><b>{site.owner}</b><small>{site.ownerRoles}</small></div>
            </div>
            <div className="layer float-l fl2">
              <div className="float"><Icon name="shopping_cart" /><div>Nouvelle commande !<small>via WhatsApp</small></div></div>
            </div>
          </div>
          <div className="hstats">
            <div className="bracket" aria-hidden="true"><i /></div>
            <dl>
              <div><dt>Reels montés et sous-titrés</dt><dd>5</dd></div>
              <div><dt>Délai de livraison</dt><dd>10 j</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
