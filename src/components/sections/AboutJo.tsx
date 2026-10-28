import Image from "next/image";
import { Icon } from "@/components/Icon";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { pillars, roles } from "@/lib/content";
import { site } from "@/lib/site";
import portrait from "../../../public/hero.webp";

export function AboutJo() {
  return (
    <section id="jo">
      <div className="wrap">
        <div className="jo">
          <div className="jo-photo rv">
            <Image src={portrait} alt={`Portrait de ${site.owner}`} sizes="(max-width: 860px) 440px, 520px" />
            <div className="jo-name"><b>{site.owner}</b><span>Fondateur de Content</span></div>
          </div>
          <div>
            <div className="eyebrow rv">Derrière la caméra</div>
            <h2 className="rv">Moi, c&apos;est Jo. Je transforme tes produits en vidéos qui donnent envie d&apos;acheter.</h2>
            <div className="roles rv">
              {roles.map((r) => <span key={r.label}><Icon name={r.icon} />{r.label}</span>)}
            </div>
            <p className="jo-bio rv">
              J&apos;accompagne les <b>marques qui vendent des produits physiques en ligne</b> : boutiques de mode, beauté, food, accessoires.
              Mon travail : rendre ton image aussi pro que tes produits, pour que ton contenu sur les réseaux donne confiance et fasse vendre.
            </p>
            <div className="pillars">
              {pillars.map((p) => (
                <div className="card pillar rv" key={p.title}><Icon name={p.icon} /><h3>{p.title}</h3><p>{p.text}</p></div>
              ))}
            </div>
            <p className="jo-quote rv">« Tes produits méritent d&apos;être vus comme tu les vois : beaux, utiles, et irrésistibles. »</p>
            <WhatsAppLink className="btn hot xl rv" message={`Bonjour Jo ! J'ai vu ta page Content et j'aimerais en parler.`}>
              Écrire à Jo sur WhatsApp <Icon name="arrow_forward" />
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
