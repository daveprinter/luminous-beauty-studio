import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => seo("Services & Pricing — Velora Beauty", "Makeup, facials, lashes, brows and nail services with transparent pricing at Velora Beauty in Beverly Hills."),
  component: Services,
});

const menu = [
  { cat: "Makeup", items: [["Signature Glam", "60 min", "$145"], ["Natural Everyday Look", "45 min", "$110"], ["Special Event Makeup", "75 min", "$175"], ["Makeup Lesson", "90 min", "$220"]] },
  { cat: "Skincare", items: [["Velora Glow Facial", "60 min", "$165"], ["HydraFacial Deluxe", "75 min", "$225"], ["Chemical Peel", "45 min", "$190"], ["LED Light Therapy", "30 min", "$85"]] },
  { cat: "Lashes & Brows", items: [["Classic Lash Extensions", "120 min", "$180"], ["Hybrid Lash Set", "135 min", "$215"], ["Lash Lift & Tint", "60 min", "$95"], ["Brow Lamination", "45 min", "$85"]] },
  { cat: "Nails", items: [["Luxury Gel Manicure", "60 min", "$65"], ["Spa Pedicure", "75 min", "$80"], ["Nail Art (per set)", "30 min", "from $25"], ["Gold-Leaf Detailing", "20 min", "$30"]] },
];

function Services() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Service menu" title="Services & Pricing" text="Thoughtfully curated treatments, performed by licensed professionals. All prices in USD." />
      <section className="mx-auto grid max-w-6xl gap-x-16 gap-y-16 px-6 py-24 md:grid-cols-2">
        {menu.map((m) => (
          <div key={m.cat}>
            <h2 className="border-b pb-4 text-4xl">{m.cat}</h2>
            <ul className="mt-4">
              {m.items.map(([n, t, p]) => (
                <li key={n} className="flex items-baseline gap-3 py-3">
                  <span className="font-medium">{n}</span>
                  <span className="text-xs text-muted-foreground">{t}</span>
                  <span className="flex-1 border-b border-dotted" />
                  <span className="font-display text-xl text-primary">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="bg-secondary px-6 py-16 text-center">
        <h2 className="text-4xl">Looking for something extraordinary?</h2>
        <p className="mt-3 text-muted-foreground">Explore our signature treatments and bridal packages.</p>
        <Link to="/treatments" className="btn-primary mt-7">Signature Treatments</Link>
      </section>
    </SiteLayout>
  );
}
