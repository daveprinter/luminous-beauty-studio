import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo(
      "Contact & Booking — Velora Beauty",
      "Book your appointment at Velora Beauty, Roseville Parkway, Unit 303, Roseville, CA 95678. Call (310) 555-0148.",
    ),
  component: Contact,
});

const field = "w-full border bg-card px-4 py-3 text-sm outline-none focus:border-primary";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Get in touch"
        title="Book Your Appointment"
        text="Tell us what you're dreaming of and we'll reply within one business day."
      />
      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          {[
            [MapPin, "Roseville Parkway, Unit 303, Roseville, CA 95678"],
            [Phone, "(310) 555-0148"],
            [Mail, "hello@velorabeauty.com"],
            [Clock, "Tue–Sun · Closed Mondays"],
          ].map(([I, t]) => {
            const Icon = I as typeof Phone;
            return (
              <div key={t as string} className="flex gap-4">
                <Icon className="h-5 w-5 text-primary" />
                <p>{t as string}</p>
              </div>
            );
          })}
        </div>
        {sent ? (
          <div className="flex items-center justify-center border bg-secondary p-12 text-center">
            <div>
              <h2 className="text-4xl">Thank you!</h2>
              <p className="mt-3 text-muted-foreground">
                We've received your request and will be in touch shortly.
              </p>
            </div>
          </div>
        ) : (
          <form
            className="grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input required placeholder="Full name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
            <input placeholder="Phone" className={field} />
            <select className={field} defaultValue="">
              <option value="" disabled>
                Service of interest
              </option>
              <option>Makeup</option>
              <option>Skincare</option>
              <option>Lashes & Brows</option>
              <option>Nails</option>
              <option>Bridal</option>
            </select>
            <input type="date" className={`${field} sm:col-span-2`} />
            <textarea rows={5} placeholder="Tell us more" className={`${field} sm:col-span-2`} />
            <button type="submit" className="btn-primary justify-center sm:col-span-2">
              Send Request
            </button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
