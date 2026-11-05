import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/velora-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/treatments", label: "Signature Treatments" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="bg-deep py-2 text-center text-xs tracking-[0.2em] text-deep-foreground uppercase">
        Now booking holiday & bridal appointments · Beverly Hills, CA
      </div>
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center" aria-label="Velora Beauty home">
            <img src={logo} alt="Velora Beauty logo" width={1024} height={1024} className="h-16 w-16 object-contain scale-150" />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-xs tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary font-semibold" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="btn-primary hidden lg:inline-flex">Book Now</Link>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t px-6 py-5 lg:hidden">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm tracking-widest uppercase">
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div>
            <p className="font-display text-3xl tracking-[0.3em]">VELORA</p>
            <p className="mt-1 text-xs tracking-[0.4em] opacity-70">BEAUTY</p>
            <p className="mt-5 text-sm opacity-75">Luxury makeup, skincare and beauty artistry — crafted for confidence.</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] uppercase opacity-60">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => <li key={n.to}><Link to={n.to} className="opacity-80 hover:opacity-100">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] uppercase opacity-60">Visit</p>
            <ul className="mt-4 space-y-3 text-sm opacity-80">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" /> 9420 Wilshire Blvd, Beverly Hills, CA 90212</li>
              <li className="flex gap-2"><Phone className="h-4 w-4" /> (310) 555-0148</li>
              <li className="flex gap-2"><Mail className="h-4 w-4" /> hello@velorabeauty.com</li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] uppercase opacity-60">Hours</p>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>Tue – Fri · 9am – 8pm</li>
              <li>Saturday · 8am – 6pm</li>
              <li>Sunday · 10am – 4pm</li>
              <li>Monday · Closed</li>
            </ul>
            <div className="mt-5 flex gap-4"><Instagram className="h-5 w-5" /><Facebook className="h-5 w-5" /></div>
          </div>
        </div>
        <p className="border-t border-deep-foreground/10 py-5 text-center text-xs opacity-60">© 2026 Velora Beauty LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-secondary px-6 py-20 text-center">
      <p className="eyebrow animate-rise">{eyebrow}</p>
      <h1 className="mx-auto mt-4 max-w-3xl text-5xl md:text-6xl animate-rise">{title}</h1>
      <p className="mx-auto mt-5 max-w-xl text-muted-foreground animate-rise">{text}</p>
    </section>
  );
}
