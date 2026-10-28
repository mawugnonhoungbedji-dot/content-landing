import { Icon } from "@/components/Icon";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { comparison, faqs, offerItems, priceIncludes } from "@/lib/content";
import { site } from "@/lib/site";

export function Offer() {
  return (
    <section id="offre">
      <span className="deco blob" style={{ left: -120, top: 120 }} aria-hidden="true" />
      <span className="deco ms" style={{ right: "-3%", bottom: "10%" }} aria-hidden="true">movie</span>
      <div className="wrap">
        <div className="eyebrow rv">L&apos;offre Content</div>
        <h2 className="rv">Un vidéaste dans ta poche. Cinq Reels dans ton téléphone.</h2>
        <p className="sub rv">Tu nous montres tes produits. On s&apos;occupe de tout le reste, de l&apos;idée à la vidéo finale.</p>
        <div className="offer-grid">
          <div className="items">
            {offerItems.map((it) => (
              <div className="card item rv" key={it.title}>
                <div className="ic"><Icon name={it.icon} /></div>
                <div><h3>{it.title}</h3><p>{it.text}</p></div>
                <span className="val">{it.value}</span>
              </div>
            ))}
          </div>
          <aside className="price-card rv" id="reserver">
            <span className="tag">OFFRE DE LANCEMENT</span>
            <div className="was">Valeur réelle : 175 000 FCFA</div>
            <div className="now">60 000 <small>FCFA</small></div>
            <div className="per">soit {site.pricePerVideo} par vidéo</div>
            <ul>{priceIncludes.map((t) => <li key={t}><Icon name="check_circle" />{t}</li>)}</ul>
            <WhatsAppLink className="btn hot xl">Je réserve ma place <Icon name="arrow_forward" /></WhatsAppLink>
            <div className="pay-note"><Icon name="account_balance_wallet" />Mobile Money · acompte, puis solde à la livraison</div>
            <div className="pay-note"><Icon name="chat" />WhatsApp : {site.whatsapp.display}</div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Cell({ text, mark }: { text: string; mark?: "yes" | "no" }) {
  return (
    <>
      {mark && <Icon name={mark === "yes" ? "check_circle" : "close"} className={mark} />}
      {text}
    </>
  );
}

export function Comparison() {
  return (
    <section id="comparatif" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="eyebrow rv">Fais le calcul</div>
        <h2 className="rv">Trois façons d&apos;avoir des vidéos. Une seule sans prise de tête.</h2>
        <div className="cmp rv" tabIndex={0} role="region" aria-label="Tableau comparatif, défilable horizontalement">
          <table>
            <thead>
              <tr>
                <th scope="col"><span className="sr-only">Critère</span></th>
                <th scope="col">Faire seul</th>
                <th scope="col" className="us">Content</th>
                <th scope="col">Agence classique</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.criterion}>
                  <th scope="row">{row.criterion}</th>
                  <td><Cell {...row.alone} /></td>
                  <td className="us"><Cell {...row.us} /></td>
                  <td><Cell {...row.agency} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="guar rv">
          <div className="seal">SATISFAIT<br />OU<br />REFAIT</div>
          <div>
            <h3>Zéro risque de ton côté.</h3>
            <p>Si tes vidéos ne te plaisent pas, on les retravaille jusqu&apos;à ce qu&apos;elles te plaisent. Si on ne trouve pas d&apos;accord après la révision, on te rembourse. Le risque, c&apos;est pour nous.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="eyebrow rv">Questions fréquentes</div>
        <h2 className="rv">Tu hésites encore ? Normal.</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details className="rv" key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="final rv">
          <h2>Dans 10 jours, tu peux avoir 5 vidéos qui vendent pour toi.</h2>
          <p className="final-num"><Icon name="chat" />{site.whatsapp.display}</p>
          <p>Écris à Jo sur WhatsApp : un court échange, et on cale ton tournage.</p>
          <WhatsAppLink className="btn hot xl">Je réserve ma place <Icon name="arrow_forward" /></WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
