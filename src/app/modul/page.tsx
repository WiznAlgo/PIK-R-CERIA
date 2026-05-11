import { Download, LibraryBig } from "lucide-react";

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
import { modules, site } from "@/lib/site-data";

export default function ModulesPage() {
  return (
    <PageShell>
      <section className="bg-ceria-gray px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Modul Gratis"
          title="Perpustakaan Modul PIK-R CERIA"
          description="Baca & download gratis buat nambah wawasan."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Card key={module.title} className="flex h-full flex-col">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ceria-kuning/25 text-amber-700">
                  <LibraryBig className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle>{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <a href={site.moduleZip} aria-label={`Download PDF ${module.title}`}>
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download PDF
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
