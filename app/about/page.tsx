import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="h-px w-6" style={{ background: "linear-gradient(90deg, #A855F7, #EC4899)" }} />
      <span className="text-[10px] tracking-[0.4em] uppercase text-primary/80 font-medium">
        {children}
      </span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">

      {/* ── Header ── */}
      <section className="relative overflow-hidden border-b border-primary/10 pb-16 pt-32 md:pb-20 md:pt-40">
        <div
          className="pointer-events-none absolute -right-40 top-0 -z-10 h-[500px] w-[500px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)" }}
        />
        <div className="container mx-auto px-5 md:px-12">
          <SectionLabel>About</SectionLabel>
          <h1
            className="font-display font-light leading-[0.86]"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
          >
            Our{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Story
            </span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-[1.85] text-muted-foreground">
            Yaash Rajpoot is a hair and makeup salon focused on easy online booking, warm hospitality, and looks that feel like you.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 h-[1px] w-2/3"
          style={{ background: "linear-gradient(90deg, #A855F7, transparent)" }}
        />
      </section>

      {/* ── Story split ── */}
      <section className="py-24 md:py-36">
        <div className="container mx-auto px-5 md:px-12">
          <div className="grid items-center gap-14 md:grid-cols-2 md:gap-24">
            <div className="relative">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-3xl"
                style={{ boxShadow: "0 0 0 1px rgba(168,85,247,0.2), 0 16px 70px rgba(168,85,247,0.15)" }}
              >
                <Image
                  src="/images/barbar1.jpg"
                  alt="Inside Yaash Rajpoot salon"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
              </div>
            </div>
            <div>
              <SectionLabel>Who We Are</SectionLabel>
              <h2
                className="font-display font-light leading-[0.88]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Where precision<br />meets <span className="italic text-gradient">care</span>
              </h2>
              <div className="mt-7 space-y-4 text-sm leading-[1.9] text-muted-foreground">
                <p>
                  We blend skill, creativity, and genuine care to make every visit feel special. Whether you are preparing for a big event or just need a regular refresh, our team takes the time to understand your style.
                </p>
                <p>
                  We pay attention to face shape, hair texture, and your lifestyle — so every cut, color, and style suits you beyond the salon chair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-t border-primary/10 py-24 md:py-32">
        <div className="container mx-auto px-5 md:px-12">
          <SectionLabel>Our Values</SectionLabel>
          <h2
            className="font-display font-light mb-16 leading-[0.88]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            What We{" "}
            <span className="italic" style={{
              background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Stand For
            </span>
          </h2>
          <div className="grid gap-0 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Crafted Looks",
                body: "Face shape, hair texture, lifestyle — all considered. Every result suits you beyond the salon chair.",
              },
              {
                n: "02",
                title: "Your Time, Respected",
                body: "Online booking, clear timings, and a smooth experience from arrival to checkout.",
              },
              {
                n: "03",
                title: "A Comfortable Space",
                body: "Friendly, judgment-free, and focused on making you feel relaxed and taken care of.",
              },
            ].map(({ n, title, body }, i) => (
              <div
                key={n}
                className={[
                  "group py-10 transition-all duration-500",
                  i < 2
                    ? "border-b border-primary/10 md:border-b-0 md:border-r md:border-primary/10 md:pr-12"
                    : "",
                  i > 0 ? "md:pl-12" : "",
                ].join(" ")}
              >
                <p
                  className="font-display font-light text-gradient opacity-20 transition-opacity duration-500 group-hover:opacity-50"
                  style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
                >
                  {n}
                </p>
                <h3 className="mt-5 text-[15px] font-medium tracking-wide">{title}</h3>
                <p className="mt-2.5 text-sm leading-[1.85] text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy + info ── */}
      <section className="border-t border-primary/10 py-24 md:py-32">
        <div className="container mx-auto px-5 md:px-12">
          <div className="grid items-start gap-14 md:grid-cols-2 md:gap-20">
            <div>
              <SectionLabel>Philosophy</SectionLabel>
              <h2
                className="font-display font-light leading-[0.88] mb-7"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Beauty Should<br />Feel <span className="italic text-gradient">Effortless</span>
              </h2>
              <div className="space-y-4 text-sm leading-[1.9] text-muted-foreground">
                <p>
                  Great hair and makeup should feel effortless for you. That is why we focus on clear communication, honest recommendations, and maintainable looks that still feel elevated.
                </p>
                <p>
                  We choose trusted products that are kind to your hair and skin while delivering beautiful, lasting results.
                </p>
              </div>
              <Link
                href="/services"
                className="mt-9 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-primary transition-all hover:tracking-[0.28em]"
              >
                See our services →
              </Link>
            </div>

            {/* Info card */}
            <div
              className="rounded-2xl border border-primary/15 bg-card/60 p-7 backdrop-blur-sm"
              style={{ boxShadow: "0 4px 30px rgba(168,85,247,0.08)" }}
            >
              <p className="mb-7 text-[9px] tracking-[0.35em] uppercase text-muted-foreground/50">Visit Us</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    <MapPin className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground/55 mb-1">Address</p>
                    <p className="text-sm text-foreground/80">123 Salon Street, Lahore</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    <Clock className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground/55 mb-1">Hours</p>
                    <p className="text-sm text-foreground/80">Mon–Sat: 10:00 – 21:00</p>
                    <p className="text-sm text-foreground/80">Sunday: 11:00 – 19:00</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-primary/10 pt-6">
                <Link
                  href="/contact"
                  className="flex h-11 w-full items-center justify-center rounded-xl text-[10px] font-medium tracking-[0.2em] uppercase text-white shadow-[0_4px_20px_rgba(168,85,247,0.35)] transition-all hover:shadow-[0_4px_30px_rgba(168,85,247,0.55)] hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)" }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
