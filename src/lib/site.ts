// Réglages centraux du site : à modifier ici, ils se répercutent partout.

export const site = {
  brand: "Content",
  owner: "Jo HOUNGBEDJI",
  ownerRoles: "Vidéaste · monteur · cadreur",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "Content — 5 Reels qui font vendre ta boutique",
  description:
    "Jo HOUNGBEDJI filme tes produits et te livre 5 Reels montés et sous-titrés pour TikTok, Facebook et Instagram. 60 000 FCFA, livrés en 10 jours.",
  price: "60 000 FCFA",
  pricePerVideo: "12 000 FCFA",
  delivery: "10 jours",
  whatsapp: {
    /** Format international sans « + » ni espaces, utilisé par wa.me */
    number: "2290141884781",
    display: "+229 01 41 88 47 81",
    defaultMessage: "Bonjour Jo ! Je veux réserver l'offre Content (5 Reels à 60 000 FCFA).",
  },
} as const;

/** Lien WhatsApp vers Jo, avec un message prérempli. */
export function whatsappLink(message: string = site.whatsapp.defaultMessage): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
