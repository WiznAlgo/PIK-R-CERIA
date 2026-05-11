import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { footerLinks, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-lg font-extrabold">{site.name}</p>
          <p className="max-w-2xl text-sm leading-6 text-white/70">
            Copyright © 2026 PIK-R CERIA DENSATGA | Dikelola oleh Siswa untuk
            Siswa
          </p>
          <p className="max-w-2xl rounded-xl bg-white/10 p-4 text-sm leading-6 text-white/80">
            Layanan ini adalah konseling sebaya, bukan pengganti konsultasi
            psikolog profesional.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <p className="mb-3 text-sm font-bold text-white">Menu cepat</p>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold text-white">Kontak resmi</p>
            <div className="grid gap-2 text-sm text-white/70">
              <a
                href={site.adminChat}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-white/10 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WA Admin Wisnu
              </a>
              <a
                href="https://wa.me/6282131175512?text=Halo%20Kak%20Khansa,%20saya%20dari%20web%20PIK-R%20CERIA."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-white/10 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WA Koor Khansa
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
