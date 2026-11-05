import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { seo } from "@/lib/seo";
import bridal from "@/assets/work-bridal.jpg";
import facial from "@/assets/work-facial.jpg";

export const Route = createFileRoute("/treatments")({
  head: () => seo("Signature Treatments & Bridal Packages — Velora Beauty", "Exclusive Velora signature experiences: bridal beauty packages, the 24K Radiance Ritual and on-location glam across Southern California."),
  component: Treatments,
});

const packages = [
  { n: "The Petite Bride", p: "$650", f: ["Bridal trial session", "Wedding-day makeup & hair", "Lash application", "Touch-up kit"] },
  { n: "The Velora Bride", p: "$1,250", f: ["Two trial sessions", "Pre-wedding Glow Facial", "Wedding-day makeup & hair", "Artist on-site for 4 hours"], featured: true },
  { n: "The Bridal Party", p: "$2,900", f: ["Bride + up to 6 guests", "Mother-of-bride glam", "Two artists on location", "Champagne & refreshments"] },
];

function Treatments() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Exclusively Velora" title="Signature Treatments" text="Immersive experiences and bespoke packages you won't find anywhere else." />
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
        <img src={facial} alt="24K Radiance Ritual facial" loading="lazy" width={912} height={1104} className="aspect-[4/5] w-full object-cover" />
        <div>
          <p className="eyebrow">90 minutes · $295</p>
          <h2 className="mt-3 text-5xl">The 24K Radiance Ritual</h2>
          <p className="mt-5 text-muted-foreground">Our most-requested experience: double cleanse, enzyme exfoliation, gold-infused collagen mask, lymphatic facial massage and LED therapy — finished with a hand-and-scalp treatment.</p>
          <ul className="mt-6 space-y-2">{["Instantly brighter, lifted skin", "Ideal 1–3 days before an event", "Suitable for all skin types"].map((x) => <li key={x} className="flex gap-2"><Check className="h-5 w-5 text-primary" />{x}</li>)}</ul>
        </div>
      </section>
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center"><p className="eyebrow">Bridal</p><h2 className="mt-3 text-5xl">Wedding Packages</h2></div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {packages.map((pk) => (
              <div key={pk.n} className={pk.featured ? "bg-deep p-10 text-deep-foreground shadow-xl" : "border bg-card p-10"}>
                {pk.featured && <p className="mb-3 text-xs tracking-[0.25em] uppercase text-accent">Most popular</p>}
                <h3 className="text-3xl">{pk.n}</h3>
                <p className="mt-3 font-display text-5xl">{pk.p}</p>
                <ul className="mt-6 space-y-3 text-sm">{pk.f.map((x) => <li key={x} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-accent" />{x}</li>)}</ul>
                <Link to="/contact" className="btn-primary mt-8 w-full justify-center">Inquire</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow">We come to you</p>
          <h2 className="mt-3 text-5xl">On-Location Glam</h2>
          <p className="mt-5 text-muted-foreground">Hotels, homes, venues and film sets across Los Angeles, Orange County and Santa Barbara. Travel fees start at $75.</p>
        </div>
        <img src={bridal} alt="Bride with on-location makeup" loading="lazy" width={912} height={1104} className="aspect-[4/5] w-full object-cover" />
      </section>
    </SiteLayout>
  );
}
