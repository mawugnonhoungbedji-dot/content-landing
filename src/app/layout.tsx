import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

// Polices auto-hébergées par Next.js : aucune requête vers Google côté visiteur.
const heading = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-heading", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body", display: "swap" });
// Google Material Symbols Rounded (axe FILL 0→1), fichier local dans src/app/fonts
const icons = localFont({ src: "./fonts/material-symbols-rounded.woff2", weight: "500", variable: "--font-icons", display: "block", preload: true });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.owner }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: site.title,
    description: site.description,
    images: [{ url: "/hero.webp", width: 1254, height: 1254, alt: site.owner }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#ff6a1a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${heading.variable} ${body.variable} ${icons.variable}`}>
      <body>
        {/* sans JavaScript, les blocs restent visibles */}
        <noscript><style>{`.rv{opacity:1!important;transform:none!important}`}</style></noscript>
        {children}
      </body>
    </html>
  );
}
