import { MessageCircle, UserRoundCheck } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { counselors } from "@/lib/site-data";

function connectLink(name: string) {
  return `https://wa.me/6282233412942?text=Halo%20Kak,%20tolong%20sambungkan%20saya%20dengan%20Kak%20${encodeURIComponent(
    name,
  )}`;
}

export default function CounselorsPage() {
  return (
    <PageShell>
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Konselor Sebaya"
          title="Kenalan Sama Konselor Sebaya Kita"
          description="Pilih konselor yang rasanya paling nyambung. Nomor pribadi konselor tidak ditampilkan supaya semua tetap aman lewat admin."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">
          {counselors.map((counselor) => (
            <Card key={counselor.name} className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-ceria-toska to-ceria-kuning" />
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-ceria-toska/10 text-ceria-toska">
                  <UserRoundCheck className="h-8 w-8" aria-hidden="true" />
                </div>
                <CardTitle>{counselor.name}</CardTitle>
                <CardDescription>
                  {counselor.className} · {counselor.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 flex flex-wrap gap-2">
                  {counselor.topics.map((topic) => (
                    <Badge key={topic} variant="outline">
                      {topic}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <a
                    href={connectLink(counselor.name)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Minta Disambungin
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
