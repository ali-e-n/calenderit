"use client";

import Link from "next/link";
import { useBookingModal } from "@/components/models/booking-modal";

const SERVICES = [
  {
    title: "Haircut & Styling",
    desc: "Precision cut tailored to your face shape, hair texture, and lifestyle. Includes styling finish.",
    price: "from PKR 2,500",
    icon: "✦",
  },
  {
    title: "Hair Color",
    desc: "From balayage highlights to full transformation. Professional-grade color that protects your hair.",
    price: "from PKR 6,500",
    icon: "◈",
  },
  {
    title: "Makeup",
    desc: "Camera-ready looks for weddings, shoots, and events. Matched to your style and the occasion.",
    price: "from PKR 5,000",
    icon: "◇",
  },
  {
    title: "Hair Spa",
    desc: "Deep conditioning and scalp nourishment for healthier, shinier hair. 60 minutes of relaxation.",
    price: "from PKR 4,000",
    icon: "❋",
  },
  {
    title: "Facial Treatment",
    desc: "Cleanse, steam, extraction, mask and hydration. Tailored to your skin type and concerns.",
    price: "from PKR 3,500",
    icon: "◉",
  },
  {
    title: "Beard Trim",
    desc: "Clean lines, precise shaping, and full maintenance for a polished, well-kept finish.",
    price: "from PKR 800",
    icon: "◈✦",
  },
];

export function ServicesShowcase() {
  const { openBooking } = useBookingModal();

  return (
    <section
      id="services"
      style={{ background: "#1A1A1A" }}
      className="border-t border-primary/12"
    >
      <div className="mx-auto max-w-screen-xl px-6 py-24 md:px-12 md:py-28">

        {/* Header row */}
        <div className="mb-14 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3.5">
              <div className="h-px w-6" style={{ background: "#C9A84C" }} />
              <span className="text-[9px] tracking-[0.38em] uppercase text-primary/65 font-medium">
                What we do
              </span>
            </div>
            <h2
              className="font-display font-light leading-[1.05]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontFamily: "var(--font-display)" }}
            >
              The full <em className="italic not-italic" style={{ color: "#C9A84C", fontStyle: "italic" }}>menu</em>
            </h2>
          </div>
          <Link
            href="/services"
            className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 transition-colors hover:text-primary"
          >
            All services →
          </Link>
        </div>

        {/* Grid — 1px gold border separators */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "1px", background: "rgba(201, 168, 76, 0.20)" }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.title}
              onClick={() => openBooking({ serviceTitle: s.title })}
              className="group relative cursor-pointer overflow-hidden px-8 py-10 transition-colors duration-300"
              style={{ background: "#1A1A1A" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(201,168,76,0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#1A1A1A";
              }}
            >
              {/* Icon */}
              <div
                className="mb-5 text-xl transition-colors duration-300 group-hover:text-primary"
                style={{ color: "#8A8A8A" }}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3
                className="mb-3 font-display font-light"
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {s.title}
              </h3>

              {/* Desc */}
              <p
                className="mb-5 text-[13px] leading-[1.75]"
                style={{ color: "#8A8A8A" }}
              >
                {s.desc}
              </p>

              {/* Price */}
              <p
                className="text-[11px] tracking-[0.15em] uppercase"
                style={{ color: "#C9A84C" }}
              >
                {s.price}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
