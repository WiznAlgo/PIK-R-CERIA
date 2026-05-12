import Link from "next/link";

import { site } from "@/lib/site-data";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ceria-toska focus-visible:ring-offset-2"
      aria-label="Kembali ke Beranda PIK-R CERIA DENSATGA"
    >
      <div className="-rotate-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-ceria-ink bg-ceria-kuning font-display text-xl font-semibold text-ceria-ink">
        C
      </div>
      <div className="leading-tight">
        <p className="font-display text-lg font-semibold tracking-tight text-ceria-ink sm:text-xl">
          PIK-R <em className="font-medium">Ceria</em>
        </p>
        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-ceria-ink/60">
          Densatga
        </p>
      </div>
      <span className="sr-only">Placeholder logo: {site.logoPlaceholder}</span>
    </Link>
  );
}
