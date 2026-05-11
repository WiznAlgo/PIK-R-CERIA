import { ArrowRight, MessageCircleHeart } from "lucide-react";

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
import { counselingSteps, site } from "@/lib/site-data";

export default function CounselingFlowPage() {
  return (
    <PageShell>
      <section className="bg-ceria-gray px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Alur Konseling"
          title="Gini Cara Curhat di PIK-R CERIA"
          description="Nggak perlu bingung mulai dari mana. Kamu cukup hubungi admin, lalu kami bantu arahkan dengan aman dan rahasia."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {counselingSteps.map((step, index) => (
            <Card key={step.title} className="relative overflow-hidden">
              <div className="absolute right-4 top-4 text-6xl font-extrabold text-ceria-toska/10">
                {index + 1}
              </div>
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-ceria-toska text-white shadow-soft">
                  <step.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              {index < counselingSteps.length - 1 ? (
                <CardContent className="hidden xl:block">
                  <ArrowRight
                    className="h-6 w-6 text-ceria-kuning"
                    aria-hidden="true"
                  />
                </CardContent>
              ) : null}
            </Card>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-2xl rounded-xl bg-white p-5 text-center shadow-soft">
          <p className="mb-5 text-sm leading-6 text-slate-600">
            Kalau kamu sudah siap mulai cerita, chat admin dulu ya. Semua proses
            tetap dimoderasi supaya aman.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={site.adminChat} target="_blank" rel="noreferrer">
              <MessageCircleHeart className="h-5 w-5" aria-hidden="true" />
              Chat Admin Wisnu
            </a>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
