"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Heart, Scissors, Palette, Smile, Sparkles, Droplets } from "lucide-react";
import { useBookingModal } from "@/components/models/booking-modal";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  image: string;
  imageAlt?: string;
  title: string;
  duration?: string;
  price?: string;
  description?: string;
  href?: string;
  className?: string;
};

const iconMap: Array<{ keys: string[]; Icon: React.ComponentType<{ className?: string }> }> = [
  { keys: ["color"], Icon: Palette },
  { keys: ["facial"], Icon: Smile },
  { keys: ["makeup"], Icon: Sparkles },
  { keys: ["spa"], Icon: Droplets },
  { keys: ["haircut", "hair", "beard", "trim", "styling"], Icon: Scissors },
];

function getIcon(title: string) {
  const lower = title.toLowerCase();
  return iconMap.find(({ keys }) => keys.some((k) => lower.includes(k)))?.Icon ?? Scissors;
}

export function ServiceCard({
  image,
  imageAlt,
  title,
  duration,
  price,
  description,
  className,
}: ServiceCardProps) {
  const [isFav, setIsFav] = useState(false);
  const { openBooking } = useBookingModal();
  const ServiceIcon = getIcon(title);

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-primary/12 bg-card cursor-pointer transition-all duration-500 hover:border-primary/35 hover:shadow-[0_0_0_1px_rgba(168,85,247,0.20),0_12px_60px_rgba(168,85,247,0.15)]",
        className
      )}
      onClick={() => openBooking({ serviceTitle: title })}
    >
      {/* Gradient accent bar — top */}
      <div
        className="absolute left-0 top-0 z-10 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
        style={{ background: "linear-gradient(90deg, #A855F7, #EC4899)" }}
      />

      {/* Image — landscape */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

        {/* Fav button */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setIsFav((v) => !v); }}
          className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-black/60"
          aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
        >
          <Heart
            className={cn(
              "size-3.5 transition-all duration-300",
              isFav ? "fill-pink-500 stroke-pink-500" : "stroke-white/60"
            )}
          />
        </button>

        {/* Duration pill — over image bottom */}
        {duration && (
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-black/50 px-2.5 py-0.5 text-[9px] tracking-[0.2em] uppercase text-primary backdrop-blur-sm">
              {duration}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Icon + price row */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex size-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
            <ServiceIcon className="size-3.5 text-primary" />
          </div>
          {price && (
            <span className="font-mono text-sm font-semibold text-foreground/75">{price}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-[1.45rem] font-light leading-tight text-foreground">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}

        {/* CTA */}
        <div className="mt-4 flex items-center justify-between border-t border-primary/10 pt-4">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); openBooking({ serviceTitle: title }); }}
            className="flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase text-primary transition-all duration-300 hover:gap-3"
          >
            Book Now
            <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <div className="h-[1px] w-8 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>
      </div>
    </article>
  );
}
