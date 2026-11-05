import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { seo } from "@/lib/seo";
import { works } from "@/lib/works";

export const Route = createFileRoute("/portfolio")({
  head: () => seo("Portfolio — Velora Beauty Sample Works", "Browse bridal, skincare, lash, nail and editorial work completed by the Velora Beauty team."),
  component: Portfolio,
});

function Portfolio() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Sample works" title="Our Portfolio" text="A selection of real projects — from intimate bridal mornings to campaign shoots." />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 lg:grid-cols-3">
        {works.map((w) => (
          <article key={w.title} className="group">
            <div className="overflow-hidden">
              <img src={w.img} alt={w.title} loading="lazy" width={912} height={1104} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <p className="eyebrow mt-5">{w.cat}</p>
            <h2 className="mt-1 text-3xl">{w.title}</h2>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" />{w.place}</p>
            <p className="mt-3 text-sm text-muted-foreground">{w.text}</p>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
