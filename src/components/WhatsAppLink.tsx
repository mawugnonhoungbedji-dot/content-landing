import type { ReactNode } from "react";
import { whatsappLink } from "@/lib/site";

type Props = { children: ReactNode; className?: string; message?: string };

/** Lien externe vers WhatsApp, ouvert dans un nouvel onglet sans fuite de contexte. */
export function WhatsAppLink({ children, className, message }: Props) {
  return (
    <a href={whatsappLink(message)} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
