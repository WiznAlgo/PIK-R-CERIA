import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  MessageCircleHeart,
  Quote,
  Sparkles,
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
import { benefits, pageHighlights, site } from "@/lib/site-data";

export default function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-gradient-to-br from-ceria-toska via-ceria-toska to-teal-500">
        <div className="absolute inset-x-0 top-16 mx-auto h-64 w-64 rounded-full bg-ceria-kuning/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative z-10 text-white">
            <Badge variant="yellow" className="mb-5">
              <Sparkles className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
              Konseling sebaya SMAN [NAMA SEKOLAH]
            </Badge>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-white/90 sm:text-lg">
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
                className="bg-white/95"
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
                  className="flex items-center gap-3 rounded-xl bg-white/15 p-4 backdrop-blur"
                >
                  <benefit.icon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-sm font-semibold">
                    {benefit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Card className="relative z-10 border-white/40 bg-white/95">
            <CardHeader>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-ceria-toska/10 text-ceria-toska">
                <Quote className="h-7 w-7" aria-hidden="true" />
              </div>
              <CardTitle className="text-2xl">
                Curhat nggak harus nunggu semuanya berat dulu.
              </CardTitle>
              <CardDescription className="text-base">
                Mulai dari cerita kecil, bingung milih jalan, sampai butuh
                teman yang mau dengerin tanpa nge-judge.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl bg-ceria-gray p-5">
                <p className="font-semibold text-slate-950">
                  Konsultasi awal online via Admin, lanjutan bisa offline.
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Ceritamu masuk lewat admin supaya aman, rapi, dan disambungkan
                  ke konselor sebaya yang paling cocok.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-ceria-kuning/20 p-4 text-sm font-semibold text-amber-900">
                <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                Friendly, rahasia, dan gratis.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge>Mulai dari sini</Badge>
              <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                Website ini dibuat biar kamu gampang nemu bantuan.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Desainnya sengaja bersih, ringan, dan mobile-first supaya nyaman
              dibuka dari HP sekolah atau rumah.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pageHighlights.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="h-full transition hover:-translate-y-1 hover:border-ceria-toska/30 hover:shadow-soft">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-ceria-toska/10 text-ceria-toska">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>
                      Klik buat lihat detailnya.
                    </CardDescription>
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
    </PageShell>
  );
}
