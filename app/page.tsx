import Image from "next/image";
import Link from "next/link";
import { HeroDatePicker } from "@/components/hero-date-picker";
import { ServicesShowcase } from "@/components/services-showcase";
import { MapPin, Phone, Mail, Star, Quote } from "lucide-react";


const STATS = [
  { value: "12+", label: "Years" },
  { value: "2,400+", label: "Clients" },
  { value: "5★", label: "Rating" },
];

const TICKER = [
  "HAIR", "MAKEUP", "COLOR", "GROOMING", "FACIAL", "HAIR SPA",
  "HAIR", "MAKEUP", "COLOR", "GROOMING", "FACIAL", "HAIR SPA",
];

const TESTIMONIALS = [
  {
    quote: "The consultation was thorough and the stylist really listened. Left feeling exactly how I imagined.",
    name: "Fatima A.",
    tag: "Haircut & Styling",
    stars: 5,
  },
  {
    quote: "Booked online in seconds, walked in and walked out feeling incredible. The whole experience was seamless.",
    name: "Sara M.",
    tag: "Hair Color",
    stars: 5,
  },
  {
    quote: "The color work is exceptional. They matched exactly what I showed from my reference photos.",
    name: "Zainab K.",
    tag: "Hair Color",
    stars: 5,
  },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground">

      {/* ── Hero — Split: photo left, booking right ───────────── */}
      <section className="flex min-h-screen flex-col lg:flex-row">

        {/* Left: full-bleed photo */}
        <div className="relative h-72 flex-1 lg:h-auto">
          <Image
            src="/images/barbar2.jpg"
            alt="Yaash Rajpoot salon"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background" />

          {/* Stats — bottom left, desktop only */}
          <div className="absolute bottom-10 left-10 hidden lg:flex gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p
                  className="font-mono text-2xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}
                </p>
                <p className="mt-0.5 text-[9px] tracking-[0.3em] uppercase text-white/45">{label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Right: booking panel */}
        <div
          className="relative flex w-full flex-col justify-center px-6 py-12 lg:w-[500px] lg:shrink-0 lg:border-l lg:border-primary/12 lg:px-10 xl:w-[540px]"
          style={{ background: "linear-gradient(160deg, #05050F 0%, #09051A 100%)" }}
        >
          {/* Gradient top accent (mobile) */}
          <div
            className="absolute left-0 right-0 top-0 h-[2px] lg:hidden"
            style={{ background: "linear-gradient(90deg, #A855F7, #EC4899)" }}
          />
          {/* Gradient left accent (desktop) */}
          <div
            className="absolute bottom-0 left-0 top-0 hidden w-[2px] lg:block"
            style={{ background: "linear-gradient(180deg, transparent, #A855F7 35%, #EC4899 65%, transparent)" }}
          />

          {/* Ambient glow inside panel */}
          <div
            className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 mt-16 lg:mt-0">
            {/* Logo — lives here, not in navbar */}
            <Image
              src="/images/logo5.png"
              alt="Yaash Rajpoot"
              width={220}
              height={44}
              className="mb-3 h-9 w-auto"
              style={{ filter: "drop-shadow(0 0 10px rgba(168,85,247,0.35)) brightness(1.1)" }}
              unoptimized
              priority
            />

            {/* Tagline */}
            <p className="mb-8 text-sm text-muted-foreground">
              Hair, color & makeup in Lahore.{" "}
              <span className="text-primary/80">Book in seconds.</span>
            </p>

            {/* Booking widget */}
            <HeroDatePicker />

          </div>
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-y border-primary/12 py-3.5">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(90deg, #05050F 0%, transparent 12%, transparent 88%, #05050F 100%)" }}
        />
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {TICKER.map((item, i) => (
            <span key={i} className="flex items-center gap-8 px-8">
              <span className="text-[9px] tracking-[0.55em] font-semibold text-primary/35 uppercase">{item}</span>
              <span
                style={{
                  fontSize: "7px",
                  background: "linear-gradient(135deg, #A855F7, #EC4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >✦</span>
            </span>
          ))}
        </div>
      </div>

      <ServicesShowcase />

      {/* ── Stats bar ────────────────────────────────────────── */}
      <div className="border-y border-primary/10 py-12">
        <div
          className="pointer-events-none"
          style={{ position: "relative" }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.04) 0%, rgba(236,72,153,0.03) 100%)" }}
          />
        </div>
        <div className="container mx-auto px-5 md:px-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "12+", label: "Years of excellence" },
              { value: "2,400+", label: "Clients served" },
              { value: "5★", label: "Average rating" },
              { value: "6", label: "Signature services" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p
                  className="font-display font-light"
                  style={{
                    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                    background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}
                </p>
                <p className="mt-1.5 text-[9px] tracking-[0.3em] uppercase text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── About ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div
          className="pointer-events-none absolute -left-48 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)" }}
        />
        <div className="container mx-auto px-5 md:px-12">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="relative">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-3xl"
                style={{ boxShadow: "0 0 0 1px rgba(168,85,247,0.2), 0 20px 70px rgba(168,85,247,0.16)" }}
              >
                <Image src="/images/barbar2.jpg" alt="Inside Yaash Rajpoot" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
              </div>
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl border border-primary/25 bg-card/90 px-5 py-3.5 backdrop-blur-xl"
                style={{ boxShadow: "0 8px 32px rgba(168,85,247,0.22)" }}
              >
                <p
                  className="font-display text-2xl font-light"
                  style={{
                    background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  12+
                </p>
                <p className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground">Years of craft</p>
              </div>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-5" style={{ background: "linear-gradient(90deg, #A855F7, #EC4899)" }} />
                <span className="text-[9px] tracking-[0.45em] uppercase text-primary/70 font-medium">Our Story</span>
              </div>
              <h2 className="font-display text-3xl font-light leading-tight md:text-4xl">
                Where Precision<br />Meets Artistry
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-[1.9] text-muted-foreground">
                <p>
                  Yaash Rajpoot is more than a salon — it&apos;s a sanctuary where every cut, color, and look is crafted with intention and care.
                </p>
                <p>
                  Every visit begins with a consultation and ends with you feeling exactly as you envisioned.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-primary transition-all hover:tracking-[0.28em]"
              >
                Learn our story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="border-t border-primary/10 py-24 md:py-32">
        <div className="container mx-auto px-5 md:px-12">
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-5" style={{ background: "linear-gradient(90deg, #A855F7, #EC4899)" }} />
              <span className="text-[9px] tracking-[0.45em] uppercase text-primary/70 font-medium">Testimonials</span>
            </div>
            <h2 className="font-display text-3xl font-light leading-tight md:text-4xl">
              What Clients Say
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, tag, stars }) => (
              <div
                key={name}
                className="group relative flex flex-col rounded-2xl border border-primary/12 bg-card p-5 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_32px_rgba(168,85,247,0.10)]"
              >
                <div
                  className="absolute left-0 top-0 h-[2px] w-0 rounded-t-2xl transition-all duration-500 group-hover:w-full"
                  style={{ background: "linear-gradient(90deg, #A855F7, #EC4899)" }}
                />
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="size-3 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                <Quote className="mb-2 size-4 text-primary/25" />
                <p className="flex-1 text-sm leading-[1.8] text-muted-foreground">{quote}</p>
                <div className="mt-4 flex items-center justify-between border-t border-primary/8 pt-3.5">
                  <div>
                    <p className="text-sm font-medium text-foreground/85">{name}</p>
                    <p className="text-[10px] tracking-[0.12em] uppercase text-primary/55 mt-0.5">{tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location ─────────────────────────────────────────── */}
      <section className="border-t border-primary/10 py-24 md:py-32">
        <div className="container mx-auto px-5 md:px-12">
          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-5" style={{ background: "linear-gradient(90deg, #A855F7, #EC4899)" }} />
                <span className="text-[9px] tracking-[0.45em] uppercase text-primary/70 font-medium">Find Us</span>
              </div>
              <h2 className="mb-8 font-display text-3xl font-light leading-tight md:text-4xl">
                Visit the Salon
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "+92 123 456 7890", href: "tel:+921234567890" },
                  { icon: Mail, label: "hello@yaashrajpoot.com", href: "mailto:hello@yaashrajpoot.com" },
                  { icon: MapPin, label: "123 Salon Street, Lahore", href: undefined },
                ].map(({ icon: Icon, label, href }) => {
                  const el = (
                    <div className="flex items-center gap-3.5">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
                    </div>
                  );
                  return href ? (
                    <a key={label} href={href} className="group flex">{el}</a>
                  ) : (
                    <div key={label} className="group flex">{el}</div>
                  );
                })}
              </div>
              <div
                className="mt-8 rounded-2xl border border-primary/12 bg-card/60 p-5 backdrop-blur-sm"
              >
                <p className="mb-4 text-[9px] tracking-[0.35em] uppercase text-muted-foreground/50">Opening Hours</p>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday – Saturday</span>
                    <span className="text-foreground/75">10:00 – 21:00</span>
                  </div>
                  <div className="h-px bg-primary/8" />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground/75">11:00 – 19:00</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden rounded-2xl border border-primary/12"
              style={{ boxShadow: "0 8px 48px rgba(168,85,247,0.12)" }}
            >
              <iframe
                title="Salon location"
                src="https://www.google.com/maps?q=31.510706099129333,74.35783784562048&z=16&output=embed"
                className="h-[320px] w-full md:h-[440px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-primary/10 py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: "linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.02,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(168,85,247,0.07) 0%, transparent 70%)" }}
        />
        <div className="container mx-auto px-5 text-center md:px-12">
          <h2 className="font-display text-3xl font-light md:text-5xl">
            Ready to book?
          </h2>
          <p className="mx-auto mt-4 max-w-xs text-sm text-muted-foreground">
            Pick a service, choose your time, and you&apos;re done.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-xl px-8 text-[11px] font-medium tracking-[0.18em] uppercase text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
              boxShadow: "0 4px 24px rgba(168,85,247,0.40)",
            }}
          >
            Browse Services
          </Link>
        </div>
      </section>

    </div>
  );
}
