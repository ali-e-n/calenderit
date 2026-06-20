"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { useBookingModal } from "@/components/models/booking-modal";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    name: "Haircut & Styling",
    duration: "45 min",
    price: "PKR 2,500",
    image: "/images/barbar1.jpg",
    description: "Tailored cuts and styles — from precision bobs to textured layers. For everyday looks and special occasions alike.",
    colSpan: "lg:col-span-2",
    rowSpan: "lg:row-span-2",
    imageHeight: "h-56 lg:h-72",
    titleSize: "text-2xl md:text-3xl",
  },
  {
    name: "Hair Color",
    duration: "1–2 hrs",
    price: "PKR 6,500",
    image: "/images/barbar2.jpg",
    description: "From highlights to full transformations.",
    colSpan: "",
    rowSpan: "",
    imageHeight: "h-40",
    titleSize: "text-lg md:text-xl",
  },
  {
    name: "Makeup",
    duration: "1 hr",
    price: "PKR 5,000",
    image: "/images/barbar3.jpg",
    description: "Camera-ready for weddings, shoots & events.",
    colSpan: "",
    rowSpan: "",
    imageHeight: "h-40",
    titleSize: "text-lg md:text-xl",
  },
  {
    name: "Hair Spa",
    duration: "1 hr",
    price: "PKR 4,000",
    image: "/images/barbar1.jpg",
    description: "Deep conditioning and scalp nourishment.",
    colSpan: "",
    rowSpan: "",
    imageHeight: "h-32",
    titleSize: "text-lg",
  },
  {
    name: "Beard Trim",
    duration: "30 min",
    price: "PKR 800",
    image: "/images/barbar3.jpg",
    description: "Clean lines and precise shaping.",
    colSpan: "",
    rowSpan: "",
    imageHeight: "h-32",
    titleSize: "text-lg",
  },
  {
    name: "Facial",
    duration: "45–60 min",
    price: "PKR 3,500",
    image: "/images/barbar2.jpg",
    description: "Glow-boosting facials for every skin type.",
    colSpan: "",
    rowSpan: "",
    imageHeight: "h-32",
    titleSize: "text-lg",
  },
];

function BentoCard({ s, priority = false }: { s: typeof SERVICES[number]; priority?: boolean }) {
  const { openBooking } = useBookingModal();
  const isHero = s.colSpan.includes("col-span-2");

  return (
    <article
      onClick={() => openBooking({ serviceTitle: s.name })}
      className={cn(
        "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-primary/12 bg-card",
        "transition-all duration-500 hover:border-primary/35 hover:shadow-[0_0_48px_rgba(168,85,247,0.15)]",
        s.colSpan,
        s.rowSpan
      )}
    >
      {/* Image zone */}
      <div className={cn("relative w-full shrink-0 overflow-hidden", s.imageHeight)}>
        <Image
          src={s.image}
          alt={s.name}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 66vw, 50vw"
        />
        {/* Fade to card */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />

        {/* Gradient top border on hover */}
        <div
          className="absolute left-0 right-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "linear-gradient(90deg, #A855F7, #EC4899)" }}
        />

        {/* Duration chip */}
        <div className="absolute bottom-3 left-3">
          <span className="flex items-center gap-1 rounded-full border border-primary/25 bg-black/55 px-2.5 py-0.5 text-[9px] text-primary backdrop-blur-sm">
            <Clock className="size-2.5" />
            {s.duration}
          </span>
        </div>

        {/* Price — top right */}
        <div className="absolute right-3 top-3">
          <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-0.5 font-mono text-[9px] text-white/45 backdrop-blur-sm">
            {s.price}
          </span>
        </div>
      </div>

      {/* Content zone */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className={cn("font-display font-light leading-tight text-foreground", s.titleSize)}>
          {s.name}
        </h3>

        <p className={cn(
          "mt-1.5 text-xs leading-relaxed text-muted-foreground/60",
          isHero ? "line-clamp-3" : "line-clamp-2"
        )}>
          {s.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-primary/8 pt-3">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); openBooking({ serviceTitle: s.name }); }}
            className="flex items-center gap-1.5 text-[10px] tracking-[0.16em] uppercase text-primary transition-all duration-200 hover:gap-2.5"
          >
            Book
            <ArrowUpRight className="size-3" />
          </button>

          {/* Decorative line */}
          <div
            className="h-px w-10 opacity-30 transition-all duration-300 group-hover:w-16 group-hover:opacity-60"
            style={{ background: "linear-gradient(90deg, #A855F7, #EC4899)" }}
          />
        </div>
      </div>
    </article>
  );
}

export function ServicesShowcase() {
  return (
    <section className="border-t border-primary/10 py-24 md:py-32">
      <div className="mx-auto max-w-screen-xl px-5 md:px-12">

        {/* Section header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div
                className="h-px w-5"
                style={{ background: "linear-gradient(90deg, #A855F7, #EC4899)" }}
              />
              <span className="text-[9px] font-medium tracking-[0.45em] uppercase text-primary/65">
                Services
              </span>
            </div>
            <h2 className="font-display text-3xl font-light leading-tight md:text-4xl">
              What We Do
            </h2>
          </div>
          <Link
            href="/services"
            className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 transition-colors hover:text-primary"
          >
            See all →
          </Link>
        </div>

        {/* Bento grid
            Desktop (3 col):
            [Haircut (2) ][Hair Color]
            [Haircut (2) ][Makeup    ]
            [Hair Spa][Beard][Facial ]
        */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <BentoCard key={s.name} s={s} priority={i === 0} />
          ))}
        </div>

      </div>
    </section>
  );
}
