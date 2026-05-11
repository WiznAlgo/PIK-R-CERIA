import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  MessageCircleHeart,
  ShieldCheck,
} from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  benefits,
  contentChecklist,
  homepageStats,
  pageHighlights,
  site,
} from "@/lib/site-data";

export default function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fffd_0%,#ffffff_45%,#e8f7f4_100%)]">
        <div className="absolute left-0 top-0 h-full w-px bg-slate-200/80" />
        <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-ceria-toska/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative z-10">
            <Badge
              variant="outline"
              className="mb-5 border-ceria-toska/20 bg-white"
            >
              Konseling sebaya terarah · SMAN [NAMA SEKOLAH]
            </Badge>
            <h1 className="text-balance text-4xl font-extrabold tracking-[-0.04em] text-ceria-dark sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              {site.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={site.adminWa} target="_blank" rel="noreferrer">
                  <MessageCircleHeart className="h-5 w-5" aria-hidden="true" />
                  Mulai Curhat via Admin
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white"
              >
                <Link href="/modul">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                  Lihat Modul PIK-R
                </Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.label}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <benefit.icon
                    className="h-5 w-5 text-ceria-toska"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-slate-700">
                    {benefit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-card">
              <div className="rounded-[1.5rem] bg-ceria-dark p-6 text-white">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-semibold text-white/70">
                      Status layanan
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Konseling awal lewat Admin
                    </h2>
                  </div>
                  <div className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-bold text-emerald-100">
                    Aman
                  </div>
                </div>
                <div className="mt-8 grid gap-3">
                  {[
                    "Cerita awal disaring admin, bukan chat anonim bebas.",
                    "Konselor dipilih sesuai topik dan kenyamananmu.",
                    "Sesi lanjutan bisa WA atau offline di ruang BK.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-white/10 p-4"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 text-ceria-kuning"
                        aria-hidden="true"
                      />
                      <p className="text-sm leading-6 text-white/85">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 p-2 pt-4">
                {homepageStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-slate-50 p-4">
                    <stat.icon
                      className="mb-3 h-5 w-5 text-ceria-toska"
                      aria-hidden="true"
                    />
                    <p className="text-2xl font-extrabold text-ceria-dark">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge>Mulai dari sini</Badge>
              <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-ceria-dark sm:text-3xl">
                Navigasi singkat, fokus ke aksi yang jelas.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Tampilan dibuat lebih editorial dan rapi: minim gimmick, banyak
              ruang kosong, dan tetap nyaman dibuka dari HP.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pageHighlights.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="h-full border-slate-200 shadow-sm transition hover:-translate-y-1 hover:border-ceria-toska/30 hover:shadow-card">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-ceria-toska/10 text-ceria-toska">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>Klik buat lihat detailnya.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-ceria-toska">
                      Buka halaman
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ceria-gray px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge variant="yellow">Checklist konten</Badge>
            <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.03em] text-ceria-dark sm:text-3xl">
              Yang perlu kamu isi sebelum publish.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Semua data utama sengaja dikumpulkan di satu file supaya gampang
              diganti nanti: <span className="font-semibold text-slate-800">src/lib/site-data.ts</span>.
            </p>
          </div>
          <div className="grid gap-3">
            {contentChecklist.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex gap-4">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-ceria-toska" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-ceria-dark">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
