"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 5000;

type HeroCoverProps = {
  images: string[];
  children: React.ReactNode;
  className?: string;
};

export function HeroCover({ images, children, className }: HeroCoverProps) {
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
          "relative flex h-screen min-h-[500px] flex-col items-center justify-center px-4",
          className
        )}
      >
        {children}
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative flex h-screen min-h-[500px] flex-col items-center justify-center overflow-hidden px-4",
        className
      )}
    >
      {/* Background images — one visible at a time */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
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
        {/* Glassy overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 backdrop-blur-0"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-white/[0.03] dark:bg-white/[0.02]"
          aria-hidden
        />
      </div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center text-center">
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
              "h-2 w-2 rounded-full transition-all duration-300",
              i === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </section>
  );
}
