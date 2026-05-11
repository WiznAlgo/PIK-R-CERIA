import { HeartPulse, MessageCircle, School, UsersRound } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Tentang Kami"
          title="Tentang PIK-R CERIA DENSATGA"
          description="PIK-R CERIA adalah bagian dari ekstrakurikuler DENSATGA. Visi kami: Mencetak remaja yang sehat, berencana, dan ceria. Semua kegiatan dibawah bimbingan Guru BK."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-[1fr_1fr]">
          <Card className="bg-ceria-toska text-white">
            <CardHeader>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15">
                <HeartPulse className="h-7 w-7" aria-hidden="true" />
              </div>
              <CardTitle className="text-white">
                Ruang aman buat tumbuh bareng.
              </CardTitle>
              <CardDescription className="text-white/80">
                Kami percaya remaja butuh tempat cerita yang hangat, nggak
                menggurui, dan tetap bertanggung jawab.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white/15 p-4">
                <School className="mb-3 h-6 w-6" aria-hidden="true" />
                <p className="font-bold">Dibimbing Guru BK</p>
                <p className="mt-1 text-sm text-white/80">
                  Konseling sebaya tetap punya arahan orang dewasa tepercaya.
                </p>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <UsersRound className="mb-3 h-6 w-6" aria-hidden="true" />
                <p className="font-bold">Dari siswa untuk siswa</p>
                <p className="mt-1 text-sm text-white/80">
                  Bahasanya santai, tapi privasi dan keselamatan tetap nomor
                  satu.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Kontak</CardTitle>
              <CardDescription>
                Hubungi kontak resmi PIK-R CERIA DENSATGA.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl bg-ceria-gray p-5">
                <p className="text-sm font-semibold text-slate-500">
                  Admin Web
                </p>
                <p className="mt-1 text-xl font-extrabold text-slate-950">
                  Wisnu - 082233412942
                </p>
                <Button asChild className="mt-4">
                  <a
                    href="https://wa.me/6282233412942?text=Halo%20Kak%20Wisnu,%20saya%20dari%20web%20PIK-R%20CERIA."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Chat Wisnu
                  </a>
                </Button>
              </div>
              <div className="rounded-xl bg-ceria-gray p-5">
                <p className="text-sm font-semibold text-slate-500">
                  Koor PIK-R
                </p>
                <p className="mt-1 text-xl font-extrabold text-slate-950">
                  Khansa - 082131175512
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <a
                    href="https://wa.me/6282131175512?text=Halo%20Kak%20Khansa,%20saya%20dari%20web%20PIK-R%20CERIA."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Chat Khansa
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
