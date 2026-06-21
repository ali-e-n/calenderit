import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";

const GOLD = "#C9A84C";
const SLATE = "#8A8A8A";
const CHARCOAL = "#1A1A1A";

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3.5">
      <div className="h-px w-6" style={{ background: GOLD }} />
      <span className="text-[9px] tracking-[0.38em] uppercase" style={{ color: "rgba(201,168,76,0.65)" }}>
        {children}
      </span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">

      {/* ── Page header ── */}
      <section
        className="relative overflow-hidden border-b border-primary/12 pb-16 pt-36 md:pb-20 md:pt-44"
      >
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <Eyebrow>About</Eyebrow>
          <h1
            className="font-display font-light leading-[0.9]"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)", fontFamily: "var(--font-display)" }}
          >
            Our{" "}
            <em style={{ fontStyle: "italic", color: GOLD }}>Story</em>
          </h1>
          <p
            className="mt-6 max-w-[400px] text-[14px] leading-[1.85] font-light"
            style={{ color: SLATE }}
          >
            Yaash Rajpoot is a hair and makeup salon focused on easy online booking, warm hospitality, and looks that feel like you.
          </p>
        </div>

        {/* Gold bottom hairline */}
        <div
          className="absolute bottom-0 left-0 h-px w-2/3"
          style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
        />
      </section>

      {/* ── Story split ── */}
      <section className="mx-auto max-w-screen-xl px-6 py-24 md:px-12 md:py-36">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-primary/20">
              <Image
                src="/images/barbar1.jpg"
                alt="Inside Yaash Rajpoot salon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <h2
              className="font-display font-light leading-[0.9]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "var(--font-display)" }}
            >
              Where precision<br />meets{" "}
              <em style={{ fontStyle: "italic", color: GOLD }}>care</em>
            </h2>
            <div className="mt-6 mb-6 h-px w-12" style={{ background: GOLD }} />
            <div
              className="space-y-4 text-[14px] leading-[1.9] font-light"
              style={{ color: SLATE }}
            >
              <p>
                We blend skill, creativity, and genuine care to make every visit feel special. Whether you are preparing for a big event or just need a regular refresh, our team takes the time to understand your style.
              </p>
              <p>
                We pay attention to face shape, hair texture, and your lifestyle — so every cut, color, and style suits you beyond the salon chair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        className="border-t border-primary/12 py-24 md:py-32"
        style={{ background: CHARCOAL }}
      >
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <Eyebrow>Our Values</Eyebrow>
          <h2
            className="font-display font-light mb-16 leading-[0.9]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "var(--font-display)" }}
          >
            What We{" "}
            <em style={{ fontStyle: "italic", color: GOLD }}>Stand For</em>
          </h2>

          <div
            className="grid md:grid-cols-3"
            style={{ gap: "1px", background: "rgba(201,168,76,0.20)" }}
          >
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
            ].map(({ n, title, body }) => (
              <div key={n} className="group px-8 py-10" style={{ background: CHARCOAL }}>
                <p
                  className="font-display font-light leading-none transition-colors duration-300"
                  style={{
                    fontSize: "clamp(3rem, 5vw, 4.5rem)",
                    fontFamily: "var(--font-display)",
                    color: "rgba(201,168,76,0.14)",
                  }}
                >
                  {n}
                </p>
                <h3
                  className="mt-5 text-[15px] font-medium tracking-wide"
                  style={{ color: "#F0EDE8" }}
                >
                  {title}
                </h3>
                <p
                  className="mt-2.5 text-[13px] leading-[1.85] font-light"
                  style={{ color: SLATE }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy + info ── */}
      <section className="border-t border-primary/12 py-24 md:py-32">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <div className="grid items-start gap-14 md:grid-cols-2 md:gap-20">
            <div>
              <Eyebrow>Philosophy</Eyebrow>
              <h2
                className="font-display font-light leading-[0.9] mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "var(--font-display)" }}
              >
                Beauty Should<br />Feel{" "}
                <em style={{ fontStyle: "italic", color: GOLD }}>Effortless</em>
              </h2>
              <div className="mb-6 h-px w-12" style={{ background: GOLD }} />
              <div
                className="space-y-4 text-[14px] leading-[1.9] font-light"
                style={{ color: SLATE }}
              >
                <p>
                  Great hair and makeup should feel effortless for you. That is why we focus on clear communication, honest recommendations, and maintainable looks that still feel elevated.
                </p>
                <p>
                  We choose trusted products that are kind to your hair and skin while delivering beautiful, lasting results.
                </p>
              </div>
              <Link
                href="/services"
                className="mt-9 inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase transition-colors"
                style={{ color: GOLD }}
              >
                See our services →
              </Link>
            </div>

            {/* Info card */}
            <div
              className="border border-primary/15 p-7"
              style={{ background: CHARCOAL }}
            >
              <p
                className="mb-7 text-[9px] tracking-[0.35em] uppercase"
                style={{ color: "rgba(201,168,76,0.45)" }}
              >
                Visit Us
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="flex size-9 shrink-0 items-center justify-center border border-primary/25"
                    style={{ color: GOLD }}
                  >
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase mb-1" style={{ color: "rgba(201,168,76,0.45)" }}>Address</p>
                    <p className="text-[13px] font-light" style={{ color: "#F0EDE8" }}>123 Salon Street, Lahore</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="flex size-9 shrink-0 items-center justify-center border border-primary/25"
                    style={{ color: GOLD }}
                  >
                    <Clock className="size-4" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase mb-1" style={{ color: "rgba(201,168,76,0.45)" }}>Hours</p>
                    <p className="text-[13px] font-light" style={{ color: "#F0EDE8" }}>Mon–Sat: 10:00 – 21:00</p>
                    <p className="text-[13px] font-light" style={{ color: "#F0EDE8" }}>Sunday: 11:00 – 19:00</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-primary/12 pt-6">
                <Link
                  href="/contact"
                  className="flex h-11 w-full items-center justify-center text-[10px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-85"
                  style={{ background: GOLD, color: "#0D0D0D" }}
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
