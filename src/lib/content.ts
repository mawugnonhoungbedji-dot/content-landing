// Textes et listes de la page, séparés des composants pour être modifiés facilement.

export const businessTypes = [
  "Boutique de mode",
  "Beauté et cosmétiques",
  "Restaurant ou food",
  "Boutique en ligne",
  "Autre activité",
] as const;

export const networks = ["Les trois réseaux", "TikTok", "Facebook", "Instagram"] as const;

export const marqueeWords = ["REELS", "TIKTOK", "FACEBOOK", "INSTAGRAM", "MONTAGE PRO", "HOOKS QUI ACCROCHENT"];

export const pains = [
  { title: "Des photos qui dorment", text: "Une belle photo reçoit un like poli. Une vidéo de 15 secondes déclenche un « c'est combien ? » en message privé." },
  { title: "Pas le temps, pas le matériel", text: "Filmer, trouver l'idée, monter, sous-titrer… Tu as déjà une boutique à faire tourner. Résultat : tu repousses, encore." },
  { title: "De la pub qui brûle l'argent", text: "Booster une publication sans bonne vidéo, c'est payer pour montrer quelque chose qui ne donne pas envie d'acheter." },
];

export const stats = [
  { value: "5", label: "Reels prêts à poster" },
  { value: "10 j", label: "pour tout recevoir" },
  { value: "0", label: "minute de montage pour toi" },
  { value: "12 000", label: "FCFA par vidéo, tout compris" },
];

export const before = ["On la fait défiler en une demi-seconde", "On ne voit ni la matière, ni la taille, ni l'usage", "Rien ne dit quoi faire ensuite"];
export const after = ["Une accroche qui arrête le pouce dès la 1re seconde", "Le produit montré en mouvement, en situation réelle", "Un appel clair : « écris-nous sur WhatsApp »"];

export const audiences = [
  { icon: "shopping_bag", title: "Boutiques en ligne", points: ["Mode, beauté, accessoires", "Dropshipping et revente", "Tu vends sur Facebook, WhatsApp ou ton site"] },
  { icon: "storefront", title: "Boutiques physiques", points: ["Restaurants, salons, magasins", "Tu veux du monde en boutique", "Ton quartier doit enfin te découvrir"] },
];

export const steps = [
  { title: "Tu réserves", text: "Un message WhatsApp, un court échange de 10 minutes sur ton business et tes produits." },
  { title: "On prépare", text: "On choisit les 5 produits ou angles qui vendront le mieux, et on écrit les scripts." },
  { title: "On filme", text: "Jo vient à ta boutique ou à ton stock. Une demi-journée suffit." },
  { title: "Tu postes", text: "Tu reçois tes 5 Reels montés, avec légendes et planning. Tu publies. Les messages arrivent." },
];

export const roles = [
  { icon: "videocam", label: "Vidéaste" },
  { icon: "movie_edit", label: "Monteur" },
  { icon: "filter_center_focus", label: "Cadreur" },
];

export const pillars = [
  { icon: "palette", title: "Identité visuelle", text: "Un style reconnaissable : couleurs, cadrages, ambiance. On te reconnaît au premier coup d'œil." },
  { icon: "smart_display", title: "Contenu réseaux", text: "Des vidéos de qualité, pensées pour TikTok, Facebook et Instagram." },
  { icon: "campaign", title: "Communication", text: "Le bon message, au bon moment, pour transformer les vues en clients." },
];

export const offerItems = [
  { icon: "movie_edit", title: "5 Reels montés, format 9:16", text: "Rythme, transitions, étalonnage : le style qui retient les gens jusqu'à la dernière seconde.", value: "75 000" },
  { icon: "videocam", title: "Tournage de tes produits", text: "Lumière, cadrage, mise en scène. Tes produits sont filmés pour donner envie, pas juste pour être montrés.", value: "40 000" },
  { icon: "edit_note", title: "Scripts + accroches (hooks)", text: "Les 3 premières secondes décident de tout. Chaque vidéo démarre par une accroche pensée pour stopper le scroll.", value: "25 000" },
  { icon: "subtitles", title: "Sous-titres + musique tendance", text: "Beaucoup de gens regardent sans le son. Tes vidéos se comprennent quand même, et suivent les sons du moment.", value: "15 000" },
  { icon: "devices", title: "Formats TikTok, Facebook, Instagram", text: "Un fichier optimisé pour chaque plateforme, + une légende et des hashtags prêts à copier-coller.", value: "10 000" },
  { icon: "redeem", title: "Bonus : calendrier de publication", text: "Quand poster, dans quel ordre, quoi répondre aux commentaires. Tu n'as plus qu'à appuyer sur « Publier ».", value: "10 000" },
];

export const priceIncludes = ["5 Reels livrés en 10 jours", "Révisions incluses sur chaque vidéo", "Droits d'utilisation complets", "Garantie « satisfait ou refait »"];

type Cell = { text: string; mark?: "yes" | "no" };
export const comparison: { criterion: string; alone: Cell; us: Cell; agency: Cell }[] = [
  { criterion: "Prix", alone: { text: "« Gratuit », mais ton temps" }, us: { text: "60 000 FCFA" }, agency: { text: "Sur devis, souvent plus cher" } },
  { criterion: "Ton temps", alone: { text: "Des heures chaque semaine" }, us: { text: "Une demi-journée" }, agency: { text: "Réunions et allers-retours" } },
  { criterion: "Montage pro + sous-titres", alone: { text: "Rarement", mark: "no" }, us: { text: "Inclus", mark: "yes" }, agency: { text: "Oui", mark: "yes" } },
  { criterion: "Accroches pensées pour vendre", alone: { text: "Au feeling", mark: "no" }, us: { text: "Écrites pour toi", mark: "yes" }, agency: { text: "Plutôt « image de marque »" } },
  { criterion: "Délai", alone: { text: "Quand tu auras le temps…" }, us: { text: "10 jours" }, agency: { text: "Plusieurs semaines" } },
];

export const faqs = [
  { q: "Je ne suis pas à l'aise devant la caméra, c'est un problème ?", a: "Non. La plupart des Reels mettent tes produits en vedette, pas toi. Si tu veux apparaître, Jo te guide pas à pas." },
  { q: "Où le tournage a-t-il lieu ?", a: "Dans ta boutique, ton stock ou chez toi. Une demi-journée suffit pour les 5 vidéos." },
  { q: "Combien de temps pour tout recevoir ?", a: "10 jours après le tournage, avec une première version à valider avant la version finale." },
  { q: "Puis-je utiliser les vidéos en publicité payante ?", a: "Oui. Tu as les droits complets : organique, Facebook Ads, TikTok Ads, comme tu veux." },
  { q: "Comment je paye ?", a: "Mobile Money ou virement. Une partie à la réservation, le solde à la livraison." },
];
