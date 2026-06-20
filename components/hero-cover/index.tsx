"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 5000;

type HeroCoverProps = {
  images: string[];
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export function HeroCover({ images, children, className, contentClassName }: HeroCoverProps) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (i: number) => {
      setIndex((i + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <section
        className={cn(
          "relative flex h-screen min-h-[600px] flex-col items-center justify-center px-4",
          className
        )}
      >
        <div className={cn("relative z-10 flex flex-col", contentClassName)}>
          {children}
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative flex h-screen min-h-[600px] flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background images */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
        {/* Rich overlay — darker bottom for text, lighter top for image feel */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className={cn("relative z-10 flex w-full flex-col", contentClassName)}>
        {children}
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              "h-[2px] rounded-full transition-all duration-500",
              i === index ? "w-8 bg-primary" : "w-4 bg-white/30 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </section>
  );
}
