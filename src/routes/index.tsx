import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Star, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { seo } from "@/lib/seo";
import { works } from "@/lib/works";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Velora Beauty — Luxury Makeup & Skincare Studio in Roseville",
      "Award-winning makeup artistry, advanced facials, lashes, brows and bridal beauty in Roseville, California.",
    ),
  component: Index,
});

const highlights = [
  { t: "Makeup Artistry", d: "Red-carpet, bridal and everyday glam by licensed artists." },
  { t: "Advanced Skincare", d: "Clinical facials, peels and LED therapy for lasting radiance." },
  { t: "Lashes & Brows", d: "Extensions, lifts and lamination tailored to your features." },
];

const stats = [
  ["12+", "Years of artistry"],
  ["8,500", "Happy clients"],
  ["640", "Weddings styled"],
  ["4.9★", "Google rating"],
];

function Index() {
  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-rise">
          <p className="eyebrow">Roseville · Est. 2014</p>
          <h1 className="mt-5 text-6xl leading-[1.02] md:text-7xl">
            Beauty, <em className="text-primary">elevated</em> to an art.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Velora Beauty is a luxury studio for makeup, skincare and beauty artistry — where every
            look is designed around you.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Book an Appointment
            </Link>
            <Link to="/portfolio" className="btn-outline">
              View Our Work
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={hero}
            alt="Model with radiant skin and soft rose makeup"
            width={1600}
            height={1104}
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-6 -left-6 hidden bg-card p-6 shadow-xl md:block">
            <div className="flex gap-1 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-2 font-display text-xl">"Best glam in L.A."</p>
            <p className="text-xs text-muted-foreground">— Los Angeles Magazine</p>
          </div>
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="text-center">
              <p className="font-display text-4xl text-primary">{n}</p>
              <p className="mt-1 text-xs tracking-[0.2em] uppercase text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 text-5xl">Our Expertise</h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.t} className="border bg-card p-10 transition-shadow hover:shadow-lg">
              <Sparkles className="h-6 w-6 text-accent" />
              <h3 className="mt-5 text-3xl">{h.t}</h3>
              <p className="mt-3 text-muted-foreground">{h.d}</p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary"
              >
                Learn more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Sample works</p>
              <h2 className="mt-3 text-5xl">Recent Transformations</h2>
            </div>
            <Link to="/portfolio" className="btn-outline">
              Full Portfolio
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {works.slice(0, 4).map((w) => (
              <figure key={w.title} className="group overflow-hidden bg-card">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  width={912}
                  height={1104}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="p-5">
                  <p className="eyebrow">{w.cat}</p>
                  <p className="mt-1 font-display text-2xl">{w.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <img
          src={studio}
          alt="Velora Beauty studio interior"
          loading="lazy"
          width={1408}
          height={1008}
          className="w-full object-cover"
        />
        <div>
          <p className="eyebrow">Client love</p>
          <blockquote className="mt-5 font-display text-4xl leading-snug">
            "From the trial to the last touch-up on my wedding day, the Velora team made me feel
            like the most beautiful version of myself."
          </blockquote>
          <p className="mt-6 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Emily Harper · Malibu Bride
          </p>
        </div>
      </section>

      <section className="bg-deep px-6 py-20 text-center text-deep-foreground">
        <h2 className="text-5xl">Your most radiant self awaits.</h2>
        <p className="mx-auto mt-4 max-w-md opacity-75">
          New clients enjoy 15% off their first service.
        </p>
        <Link to="/contact" className="btn-primary mt-8">
          Reserve Your Visit
        </Link>
      </section>
    </SiteLayout>
  );
}
