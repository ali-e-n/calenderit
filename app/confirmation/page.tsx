"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { format, parseISO } from "date-fns";

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
    when = format(dt, "EEE, MMM d • h:mm a");
  } else if (date) {
    const d = parseISO(date);
    when = format(d, "EEE, MMM d");
  }

  return (
    <div className="container mx-auto px-4 pb-16 pt-24 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Booking confirmation
        </h1>
        <p className="mt-2 text-muted-foreground">
          Here are your details. We’ll see you soon.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-background/60 p-6 shadow-sm backdrop-blur">
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium text-muted-foreground">
                Service
              </dt>
              <dd className="mt-1 font-medium">{service}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-muted-foreground">
                Date & time
              </dt>
              <dd className="mt-1 font-medium">{when}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-muted-foreground">
                Name
              </dt>
              <dd className="mt-1 font-medium">{name}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-muted-foreground">
                Phone
              </dt>
              <dd className="mt-1 font-medium">{phone}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-medium text-muted-foreground">
                Email
              </dt>
              <dd className="mt-1 font-medium">{email}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-primary bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[0_4px_20px_rgba(195,157,99,0.45)] transition-all hover:brightness-110"
            >
              Back to home
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-medium backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
            >
              Make another booking
            </Link>
          </div>
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

