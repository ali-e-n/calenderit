"use client";

import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { useBookingModal } from "@/components/models/booking-modal";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  image: string;
  imageAlt?: string;
  title: string;
  duration?: string;
  price?: string;
  description?: string;
  className?: string;
};

export function ServiceCard({
  image,
  imageAlt,
  title,
  duration,
  price,
  description,
  className,
}: ServiceCardProps) {
  const { openBooking } = useBookingModal();

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden border border-primary/15 bg-card cursor-pointer",
        "transition-all duration-400 hover:border-primary/45",
        className
      )}
      style={{ background: "#1A1A1A" }}
      onClick={() => openBooking({ serviceTitle: title })}
    >
      {/* Gold top accent bar on hover */}
      <div
        className="absolute left-0 top-0 z-10 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
        style={{ background: "#C9A84C" }}
      />

      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />

        {/* Duration */}
        {duration && (
          <div className="absolute bottom-3 left-3">
            <span
              className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[9px] tracking-[0.18em] uppercase border border-primary/30"
              style={{ background: "rgba(0,0,0,0.60)", color: "#C9A84C" }}
            >
              <Clock className="size-2.5" />
              {duration}
            </span>
          </div>
        )}

        {/* Price — top right */}
        {price && (
          <div className="absolute right-3 top-3">
            <span
              className="border border-white/10 px-2.5 py-0.5 font-mono text-[9px]"
              style={{ background: "rgba(0,0,0,0.55)", color: "rgba(240,237,232,0.55)" }}
            >
              {price}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3
          className="font-display text-[1.4rem] font-light leading-tight text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>

        {description && (
          <p
            className="mt-2 flex-1 text-[13px] leading-[1.75] font-light line-clamp-2"
            style={{ color: "#8A8A8A" }}
          >
            {description}
          </p>
        )}

        <div
          className="mt-4 flex items-center justify-between border-t border-primary/10 pt-4"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); openBooking({ serviceTitle: title }); }}
            className="flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase transition-all duration-300 hover:gap-2.5"
            style={{ color: "#C9A84C" }}
          >
            Book Now
            <ArrowUpRight className="size-3" />
          </button>
          <div
            className="h-px w-8 opacity-40 transition-all duration-300 group-hover:w-12 group-hover:opacity-70"
            style={{ background: "#C9A84C" }}
          />
        </div>
      </div>
    </article>
  );
}
