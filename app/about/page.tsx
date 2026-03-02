import Link from "next/link";
import Image from "next/image";
import { Sparkles, Clock, Scissors, Smile } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-border bg-muted/20 pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                About Yaash Rajpoot
              </h1>
              <p className="mt-4 text-muted-foreground">
                Yaash Rajpoot is a hair and makeup saloon focused on easy online
                booking, warm hospitality, and looks that feel like you. We blend
                skill, creativity, and care to make every visit feel special.
              </p>
              <p className="mt-3 text-muted-foreground">
                Whether you are preparing for a big event or just need a regular
                refresh, our team takes the time to understand your style and
                comfort level, so you leave feeling confident.
              </p>
            </div>
            <div className="relative hidden h-56 overflow-hidden rounded-2xl border border-border bg-muted/40 sm:block md:h-64">
              <Image
                src="/images/barbar1.jpg"
                alt="Inside Yaash Rajpoot saloon"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-3">
              <div className="flex size-11 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="size-5 text-primary" aria-hidden />
              </div>
              <h2 className="text-lg font-semibold">Crafted looks</h2>
              <p className="text-sm text-muted-foreground">
                We pay attention to face shape, hair texture, and lifestyle so
                every cut, color, and style suits you beyond the salon chair.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex size-11 items-center justify-center rounded-full bg-primary/10">
                <Clock className="size-5 text-primary" aria-hidden />
              </div>
              <h2 className="text-lg font-semibold">Respect for your time</h2>
              <p className="text-sm text-muted-foreground">
                Online booking, clear timings, and a smooth experience from
                arrival to checkout, so you can plan your day with confidence.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex size-11 items-center justify-center rounded-full bg-primary/10">
                <Smile className="size-5 text-primary" aria-hidden />
              </div>
              <h2 className="text-lg font-semibold">A comfortable space</h2>
              <p className="text-sm text-muted-foreground">
                Friendly, judgment-free, and focused on making you feel relaxed
                and taken care of from the moment you walk in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/20 py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Our philosophy
              </h2>
              <p className="mt-4 text-muted-foreground">
                Great hair and makeup should feel effortless for you. That is why
                we focus on clear communication, honest recommendations, and
                maintainable looks that still feel elevated.
              </p>
              <p className="mt-3 text-muted-foreground">
                We also care about the products we use, choosing trusted brands
                that are kind to your hair and skin while delivering beautiful
                results.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-border bg-background/60 p-5 text-sm shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-primary/10">
                  <Scissors className="size-4 text-primary" aria-hidden />
                </div>
                <div>
                  <p className="font-medium">Visit us</p>
                  <p className="text-muted-foreground">
                    123 Salon Street, Your City
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="size-4 text-primary" aria-hidden />
                </div>
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-muted-foreground">
                    Tue–Sun, 10:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
              <p className="pt-1 text-muted-foreground">
                Ready to book? Choose a service and pick your time from the home
                page — your appointment details are just a few clicks away.
              </p>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

