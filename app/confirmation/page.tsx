"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { format, parseISO } from "date-fns";
import { CheckCircle } from "lucide-react";

function displayOrDash(value: string | null) {
  return value && value.trim() ? value : "—";
}

function ConfirmationContent() {
  const sp = useSearchParams();

  const service = displayOrDash(sp.get("service"));
  const name = displayOrDash(sp.get("name"));
  const phone = displayOrDash(sp.get("phone"));
  const email = displayOrDash(sp.get("email"));

  const date = sp.get("date");
  const time = sp.get("time");

  let when = "—";
  if (date && time) {
    const dt = parseISO(`${date}T${time}:00`);
    when = format(dt, "EEE, MMM d · h:mm a");
  } else if (date) {
    const d = parseISO(date);
    when = format(d, "EEE, MMM d");
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 pb-20 pt-12 md:px-10 md:pt-20">
        <div className="mx-auto max-w-xl">

          {/* Success indicator */}
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-6 flex size-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <CheckCircle className="size-8 text-primary" strokeWidth={1.5} />
            </div>
            <p className="text-xs tracking-[0.35em] uppercase text-primary mb-3">Confirmed</p>
            <h1 className="font-display font-light leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              You&apos;re all set
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              We&apos;ll see you soon. Here are your booking details.
            </p>
          </div>

          {/* Details card */}
          <div className="rounded-2xl border border-white/8 bg-card/60 p-7 backdrop-blur-sm">
            <dl className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60">
                  Service
                </dt>
                <dd className="mt-1.5 font-display text-2xl font-light text-foreground">{service}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60">
                  Date & Time
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">{when}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60">
                  Name
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">{name}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60">
                  Phone
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">{phone}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60">
                  Email
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">{email}</dd>
              </div>
            </dl>

            <div className="mt-8 border-t border-white/8 pt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="flex h-11 flex-1 items-center justify-center rounded-xl border border-primary bg-primary text-xs font-medium tracking-[0.12em] uppercase text-primary-foreground shadow-[0_4px_20px_rgba(195,157,99,0.4)] transition-all hover:brightness-110"
              >
                Back to Home
              </Link>
              <Link
                href="/services"
                className="flex h-11 flex-1 items-center justify-center rounded-xl border border-white/10 bg-transparent text-xs font-medium tracking-[0.12em] uppercase text-foreground/60 transition-colors hover:text-foreground hover:border-white/20"
              >
                Book Another
              </Link>
            </div>
          </div>

          {/* Note */}
          <p className="mt-6 text-center text-xs text-muted-foreground/50">
            Questions? Call us at{" "}
            <a href="tel:+921234567890" className="text-primary hover:underline">
              +92 123 456 7890
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={null}>
      <ConfirmationContent />
    </Suspense>
  );
}
