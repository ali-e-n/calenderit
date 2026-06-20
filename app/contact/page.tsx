import { Mail, MapPin, Phone, Clock } from "lucide-react";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="h-px w-6" style={{ background: "linear-gradient(90deg, #A855F7, #EC4899)" }} />
      <span className="text-[10px] tracking-[0.4em] uppercase text-primary/80 font-medium">
        {children}
      </span>
    </div>
  );
}

const INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "+92 123 456 7890",
    href: "tel:+921234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@yaashrajpoot.com",
    href: "mailto:hello@yaashrajpoot.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Salon Street, Lahore",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 10:00–21:00\nSunday: 11:00–19:00",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">

      {/* ── Header ── */}
      <section className="relative overflow-hidden border-b border-primary/10 pb-16 pt-32 md:pb-20 md:pt-40">
        <div
          className="pointer-events-none absolute -right-40 top-0 -z-10 h-[500px] w-[500px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)" }}
        />
        <div className="container mx-auto px-5 md:px-12">
          <SectionLabel>Contact</SectionLabel>
          <h1
            className="font-display font-light leading-[0.86]"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
          >
            Get in{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-[1.85] text-muted-foreground">
            Have a question or special request? We&apos;d love to hear from you.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 h-[1px] w-2/3"
          style={{ background: "linear-gradient(90deg, #A855F7, transparent)" }}
        />
      </section>

      {/* ── Form + info ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-12">
          <div className="grid gap-10 md:grid-cols-[1fr_360px] md:items-start">

            {/* Form */}
            <div
              className="rounded-2xl border border-primary/15 bg-card/60 p-7 backdrop-blur-sm"
              style={{ boxShadow: "0 4px 30px rgba(168,85,247,0.07)" }}
            >
              <h2 className="font-display text-2xl font-light mb-1">Send a message</h2>
              <p className="mb-7 text-sm text-muted-foreground">We&apos;ll follow up as soon as possible.</p>

              <form className="space-y-5">
                {[
                  { id: "contact-name", label: "Name", type: "text", placeholder: "Your full name" },
                  { id: "contact-email", label: "Email", type: "email", placeholder: "you@example.com" },
                  { id: "contact-phone", label: "Phone", type: "tel", placeholder: "+92 300 000 0000", optional: true },
                ].map(({ id, label, type, placeholder, optional }) => (
                  <div key={id} className="space-y-1.5">
                    <label htmlFor={id} className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/55">
                      {label}
                      {optional && <span className="ml-1 text-muted-foreground/35">(optional)</span>}
                    </label>
                    <input
                      id={id}
                      type={type}
                      className="h-11 w-full rounded-xl border border-primary/12 bg-primary/5 px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/35 focus:border-primary/35 focus:bg-primary/8 focus:ring-0"
                      placeholder={placeholder}
                    />
                  </div>
                ))}

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/55">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-primary/12 bg-primary/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/35 focus:border-primary/35 focus:bg-primary/8 focus:ring-0"
                    placeholder="Tell us what you have in mind…"
                  />
                </div>

                <button
                  type="submit"
                  className="h-11 w-full rounded-xl text-[10px] font-medium tracking-[0.22em] uppercase text-white shadow-[0_4px_20px_rgba(168,85,247,0.35)] transition-all hover:shadow-[0_4px_32px_rgba(168,85,247,0.55)] hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)" }}
                >
                  Send Message
                </button>

                <p className="text-center text-[10px] tracking-wide text-muted-foreground/35">
                  For urgent bookings, call us directly.
                </p>
              </form>
            </div>

            {/* Info */}
            <div
              className="rounded-2xl border border-primary/15 bg-card/60 p-7 backdrop-blur-sm"
              style={{ boxShadow: "0 4px 30px rgba(168,85,247,0.07)" }}
            >
              <p className="mb-7 text-[9px] tracking-[0.35em] uppercase text-muted-foreground/50">Reach Us</p>
              <div className="space-y-6">
                {INFO.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">{label}</p>
                        {value.split("\n").map((line, i) => (
                          <p key={i} className="text-sm text-foreground/75">{line}</p>
                        ))}
                      </div>
                    </div>
                  );
                  return href ? (
                    <a key={label} href={href} className="block transition-opacity hover:opacity-75">
                      {inner}
                    </a>
                  ) : (
                    <div key={label}>{inner}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="border-t border-primary/10 pb-16 md:pb-24">
        <div className="container mx-auto px-5 md:px-12">
          <div
            className="overflow-hidden rounded-3xl border border-primary/15"
            style={{ boxShadow: "0 8px 60px rgba(168,85,247,0.12), 0 0 0 1px rgba(168,85,247,0.10)" }}
          >
            <iframe
              title="Salon location"
              src="https://www.google.com/maps?q=31.510706099129333,74.35783784562048&z=16&output=embed"
              className="h-[300px] w-full md:h-[420px]"
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
