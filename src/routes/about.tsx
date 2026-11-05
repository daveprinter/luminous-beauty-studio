import { createFileRoute } from "@tanstack/react-router";
import { Heart, Leaf, Award, ShieldCheck } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { seo } from "@/lib/seo";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About Us — Velora Beauty",
      "Meet the licensed artists and estheticians behind Velora Beauty, Roseville's luxury beauty studio since 2014.",
    ),
  component: About,
});

const values = [
  { i: Heart, t: "Client-First Care", d: "Every service begins with a personal consultation." },
  { i: Leaf, t: "Clean Formulas", d: "Cruelty-free, dermatologist-tested products only." },
  { i: Award, t: "Award-Winning", d: "Named Best Beauty Studio by LA Weekly, 2024 & 2025." },
  {
    i: ShieldCheck,
    t: "Licensed & Insured",
    d: "California Board of Barbering & Cosmetology certified.",
  },
];

const team = [
  ["Isabella Reyes", "Founder & Lead Makeup Artist"],
  ["Dr. Maya Chen", "Medical Esthetician"],
  ["Sophia Bennett", "Senior Lash & Brow Artist"],
  ["Olivia Grant", "Bridal Director"],
] as const;

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our story"
        title="Where artistry meets self-care"
        text="Founded in Roseville in 2014, Velora Beauty was built on one belief: beauty should feel as good as it looks."
      />
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
        <img
          src={studio}
          alt="Inside the Velora Beauty studio"
          loading="lazy"
          width={1408}
          height={1008}
          className="w-full object-cover"
        />
        <div>
          <h2 className="text-5xl">A studio designed around you</h2>
          <p className="mt-6 text-muted-foreground">
            What started as a single makeup chair has grown into a full-service luxury studio with a
            team of twelve licensed artists, estheticians and stylists. We've glammed brides,
            celebrities, executives and first-time clients alike.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our approach is simple: listen closely, enhance naturally and use only the finest
            clean-beauty products available in the United States.
          </p>
        </div>
      </section>
      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
          {values.map(({ i: Icon, t, d }) => (
            <div key={t} className="text-center">
              <Icon className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="eyebrow">The team</p>
          <h2 className="mt-3 text-5xl">Meet Our Artists</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(([n, r]) => (
            <div key={n} className="border bg-card p-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary font-display text-3xl text-primary">
                {n
                  .split(" ")
                  .slice(-2)
                  .map((x) => x.charAt(0))
                  .join("")}
              </div>
              <p className="mt-5 font-display text-2xl">{n}</p>
              <p className="mt-1 text-xs tracking-[0.15em] uppercase text-muted-foreground">{r}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
