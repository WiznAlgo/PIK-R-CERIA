import Link from "next/link";
import { SmilePlus } from "lucide-react";

import { site } from "@/lib/site-data";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ceria-kuning focus-visible:ring-offset-2"
      aria-label="Kembali ke Beranda PIK-R CERIA DENSATGA"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-ceria-toska shadow-soft ring-1 ring-white/40">
        <SmilePlus className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-extrabold tracking-tight text-white sm:text-base">
          {site.shortName}
        </p>
        <p className="text-[11px] font-medium text-white/80">DENSATGA</p>
      </div>
      <span className="sr-only">Placeholder logo: {site.logoPlaceholder}</span>
    </Link>
  );
}
