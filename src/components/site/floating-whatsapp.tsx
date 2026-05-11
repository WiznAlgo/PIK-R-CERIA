import { MessageCircleHeart } from "lucide-react";

import { site } from "@/lib/site-data";

export function FloatingWhatsApp() {
  return (
    <a
      href={site.adminChat}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ceria-kuning text-slate-950 shadow-soft transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ceria-toska focus-visible:ring-offset-2"
      aria-label="Chat Admin Wisnu via WhatsApp"
    >
      <MessageCircleHeart className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
