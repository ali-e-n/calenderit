import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-border bg-muted/20 pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Contact Us
            </h1>
            <p className="mt-3 text-muted-foreground">
              Have a question, special request, or want to plan something
              specific? Send us a message and we&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
            {/* Contact form */}
            <div className="rounded-2xl border border-border bg-background/60 p-6 shadow-sm">
              <h2 className="text-lg font-semibold tracking-tight">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Share a few details and we&apos;ll follow up as soon as possible.
              </p>
              <form className="mt-6 space-y-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Phone (optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Send message
                </button>
                <p className="text-xs text-muted-foreground">
                  This form is for demonstration purposes. For urgent bookings,
                  please call us directly.
                </p>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-6 rounded-2xl border border-border bg-muted/20 p-6 text-sm">
              <h2 className="text-lg font-semibold tracking-tight">
                Visit or reach out
              </h2>
              <p className="text-muted-foreground">
                Prefer talking it through? You can call, email, or visit the
                salon during our open hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="size-4 text-primary" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Phone
                    </p>
                    <a
                      href="tel:+1234567890"
                      className="mt-1 block text-sm hover:underline"
                    >
                      +1 234 567 890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="size-4 text-primary" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:hello@example.com"
                      className="mt-1 block text-sm hover:underline"
                    >
                      hello@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="size-4 text-primary" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Address
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      123 Salon Street
                      <br />
                      Your City
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="size-4 text-primary" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Hours
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      Tue–Sun, 10:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border bg-muted/10 pb-16 pt-0 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl py-10 text-center md:py-12">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Find Us
            </h2>
            <p className="mt-2 text-muted-foreground">
              Here&apos;s exactly where we are located. Zoom or drag the map for
              directions.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
            <iframe
              title="Salon location"
              src="https://www.google.com/maps?q=31.510706099129333,74.35783784562048&z=16&output=embed"
              className="h-[320px] w-full md:h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

