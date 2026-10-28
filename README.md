# Content — landing page

Landing page de l'offre **Content** (5 Reels montés à 60 000 FCFA) de **Jo HOUNGBEDJI**, vidéaste, monteur et cadreur.
Construite avec **Next.js 16** (App Router), **React 19** et **TypeScript**.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
```

Autres commandes : `npm run build` (version de production), `npm start` (servir le build), `npm run lint`, `npm run typecheck`.

## Où modifier quoi

| Quoi | Fichier |
|---|---|
| Numéro WhatsApp, prix, délai, nom, textes SEO | `src/lib/site.ts` |
| Textes et listes (offre, étapes, FAQ, comparatif…) | `src/lib/content.ts` |
| Sections de la page | `src/components/sections/` |
| Styles (couleurs dans `:root`) | `src/app/globals.css` |
| Photo du hero | `public/hero.webp` (détourée, fond transparent) |
| En-têtes de sécurité | `next.config.ts` |

## Sécurité

- En-têtes HTTP sur toutes les pages : Content-Security-Policy stricte (aucun script ni domaine tiers), `X-Frame-Options: DENY`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, et HSTS en production.
- Polices auto-hébergées par `next/font` : aucune requête vers Google depuis le navigateur du visiteur.
- Aucun formulaire n'envoie de données au serveur : la réservation ouvre WhatsApp avec un message prérempli, à partir de choix fixes.
- Liens externes en `noopener noreferrer`, en-tête `X-Powered-By` désactivé.

## Mise en ligne

Copier `.env.example` en `.env.local` et renseigner `NEXT_PUBLIC_SITE_URL` (utilisée pour le SEO, le sitemap et robots.txt).
Le plus simple est Vercel ; tout hébergeur Node.js ≥ 20.9 convient (`npm run build` puis `npm start`).

La maquette HTML d'origine est conservée dans `maquette/` pour référence.
