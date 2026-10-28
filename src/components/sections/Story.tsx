import { Fragment } from "react";
import { Icon } from "@/components/Icon";
import { after, audiences, before, marqueeWords, pains, stats, steps } from "@/lib/content";

export function Marquee() {
  const words = [...marqueeWords, ...marqueeWords];
  return (
    <div className="marquee" aria-hidden="true">
      <div>
        {words.map((w, i) => (
          <Fragment key={i}><span>{w}</span><Icon name="asterisk" /></Fragment>
        ))}
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section id="probleme">
      <span className="deco ms" style={{ right: "-4%", top: 0 }} aria-hidden="true">visibility_off</span>
      <div className="wrap">
        <div className="eyebrow rv">Soyons honnêtes</div>
        <h2 className="rv">Tes produits sont super. Mais personne ne les voit.</h2>
        <p className="sub rv">Pendant que tu t&apos;occupes de ta boutique, tes concurrents passent devant tes clients, dans leur téléphone, 3 heures par jour.</p>
        <div className="pain">
          {pains.map((p, i) => (
            <div className="card rv" key={p.title}>
              <div className="n">{String(i + 1).padStart(2, "0")}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <div className="twist rv">
          Chaque semaine sans vidéo, ce sont des clients qui achètent <b>ailleurs</b> — chez quelqu&apos;un qui, lui, est apparu dans leur fil.
        </div>
        <div className="mini-cta rv">
          <p>Et si c&apos;était toi qu&apos;ils voyaient ?<span>Regarde ce qui change avec une vraie vidéo.</span></p>
          <a href="#avant-apres" className="btn sm">Voir la différence <Icon name="arrow_downward" /></a>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="stats">
          {stats.map((s) => (
            <div className="stat rv" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeforeAfter() {
  return (
    <section id="avant-apres" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="eyebrow rv">La différence</div>
        <h2 className="rv">Même produit. Pas du tout le même effet.</h2>
        <div className="ba">
          <div className="card ba-side before rv">
            <span className="ba-tag">Avant</span>
            <div className="ba-visual"><Icon name="photo_camera" />Une photo posée</div>
            <ul>{before.map((t) => <li key={t}><Icon name="close" />{t}</li>)}</ul>
          </div>
          <div className="ba-arrow" aria-hidden="true"><Icon name="arrow_forward" /></div>
          <div className="card ba-side after rv">
            <span className="ba-tag hot">Avec Content</span>
            <div className="ba-visual"><Icon name="play_circle" fill />Un Reel de 15 secondes</div>
            <ul>{after.map((t) => <li key={t}><Icon name="check_circle" />{t}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ForWho() {
  return (
    <section>
      <div className="wrap">
        <div className="eyebrow rv">Pour qui ?</div>
        <h2 className="rv">Fait pour ceux qui vendent des choses concrètes.</h2>
        <div className="who">
          {audiences.map((a) => (
            <div className="card rv" key={a.title}>
              <h3><Icon name={a.icon} className="ic-h" />{a.title}</h3>
              <ul>{a.points.map((p) => <li key={p}><Icon name="arrow_forward" />{p}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Method() {
  return (
    <section id="methode">
      <span className="deco blob" style={{ right: -100, top: -40, width: 260, height: 260 }} aria-hidden="true" />
      <div className="wrap">
        <div className="eyebrow rv">Comment ça marche</div>
        <h2 className="rv">De « j&apos;aimerais » à « c&apos;est posté » en 4 étapes.</h2>
        <div className="steps">
          {steps.map((s) => (
            <div className="step rv" key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>
          ))}
        </div>
        <div className="mini-cta rv">
          <p>Une demi-journée de ton temps. C&apos;est tout.<span>On s&apos;occupe du reste, de l&apos;idée au montage.</span></p>
          <a href="#offre" className="btn hot sm">Voir l&apos;offre et le prix <Icon name="arrow_downward" /></a>
        </div>
      </div>
    </section>
  );
}
