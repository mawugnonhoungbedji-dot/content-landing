import { Icon } from "@/components/Icon";
import { Nav } from "@/components/Nav";
import { ScrollEffects } from "@/components/ScrollEffects";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { AboutJo } from "@/components/sections/AboutJo";
import { Hero } from "@/components/sections/Hero";
import { Comparison, Faq, FinalCta, Guarantee, Offer } from "@/components/sections/Offer";
import { BeforeAfter, ForWho, Marquee, Method, Problem, Stats } from "@/components/sections/Story";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <div className="bg" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Problem />
        <Stats />
        <BeforeAfter />
        <ForWho />
        <Method />
        <AboutJo />
        <Offer />
        <Comparison />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <footer>
        <div className="wrap">
          <p className="foot-contact">
            <Icon name="chat" />WhatsApp : <WhatsAppLink>{site.whatsapp.display}</WhatsAppLink>
          </p>
          © {new Date().getFullYear()} {site.brand}, par {site.owner}. Vidéos qui vendent pour commerçants.
        </div>
      </footer>
      <ScrollEffects />
    </>
  );
}
