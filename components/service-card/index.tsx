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
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-muted">
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsFav((prev) => !prev);
          }}
          className="absolute right-2 top-2 flex size-9 items-center justify-center rounded-full bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-background hover:text-primary"
          aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
        >
          <Heart
            className={cn("size-5", isFav && "fill-primary text-primary")}
            aria-hidden
          />
        </button>
      </div>

      {/* Title + book */}
      <div className="flex flex-col gap-3 rounded-b-lg border border-t-0 border-border bg-background p-4">
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
        "flex flex-col overflow-hidden rounded-lg border border-border bg-background transition-shadow hover:shadow-md",
        className
      )}
    >
      {cardContent}
    </article>
  );
}
