import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems, site } from "@/lib/site-data";
import { Logo } from "./logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navigasi utama"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-ceria-mist hover:text-ceria-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ceria-toska"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={site.adminChat} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat Admin
            </a>
          </Button>
          <details className="relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 bg-white text-ceria-dark transition hover:bg-ceria-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ceria-toska [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Buka menu navigasi</span>
            </summary>
            <div className="absolute right-0 mt-3 w-64 rounded-xl bg-white p-3 shadow-soft ring-1 ring-slate-100">
              <nav className="grid gap-1" aria-label="Navigasi mobile">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-ceria-toska/10 hover:text-ceria-toska"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-2 w-full">
                  <a href={site.adminChat} target="_blank" rel="noreferrer">
                    Chat Admin
                  </a>
                </Button>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
