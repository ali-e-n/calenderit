"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart } from "lucide-react";
import { useBookingModal } from "@/components/models/booking-modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  image: string;
  imageAlt?: string;
  title: string;
  duration?: string;
  href?: string;
  className?: string;
};

export function ServiceCard({
  image,
  imageAlt,
  title,
  duration,
  href,
  className,
}: ServiceCardProps) {
  const [isFav, setIsFav] = useState(false);
  const { openBooking } = useBookingModal();

  const cardContent = (
    <>
      {/* Image + fav icon */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-muted">
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsFav((prev) => !prev);
          }}
          className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/20 text-muted-foreground backdrop-blur-md transition-all hover:bg-white/30 hover:text-primary"
          aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
        >
          <Heart
            className={cn("size-5", isFav && "fill-primary text-primary")}
            aria-hidden
          />
        </button>
      </div>

      {/* Title + book — glass panel */}
      <div className="flex flex-col gap-3 rounded-b-2xl border border-t-0 border-white/20 bg-white/5 p-5 backdrop-blur-sm">
        <div>
          {href ? (
            <Link href={href} className="hover:underline">
              <h3 className="font-semibold leading-tight">{title}</h3>
            </Link>
          ) : (
            <h3 className="font-semibold leading-tight">{title}</h3>
          )}
          {duration && (
            <p className="mt-0.5 text-sm text-muted-foreground">{duration}</p>
          )}
        </div>
        <Button
          variant="glass"
          size="sm"
          className="mt-auto w-full"
          onClick={() => openBooking({ serviceTitle: title })}
        >
          Book
        </Button>
      </div>
    </>
  );

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all hover:border-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
        className
      )}
    >
      {cardContent}
    </article>
  );
}
