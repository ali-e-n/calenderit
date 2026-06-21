import { Mail, MapPin, Phone, Clock } from "lucide-react";

const GOLD = "#C9A84C";
const SLATE = "#8A8A8A";
const CHARCOAL = "#1A1A1A";

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
      <section className="relative overflow-hidden border-b border-primary/12 pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <div className="mb-4 flex items-center gap-3.5">
            <div className="h-px w-6" style={{ background: GOLD }} />
            <span className="text-[9px] tracking-[0.38em] uppercase" style={{ color: "rgba(201,168,76,0.65)" }}>
              Contact
            </span>
          </div>
          <h1
            className="font-display font-light leading-[0.9]"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)", fontFamily: "var(--font-display)" }}
          >
            Get in{" "}
            <em style={{ fontStyle: "italic", color: GOLD }}>Touch</em>
          </h1>
          <p
            className="mt-6 max-w-[400px] text-[14px] leading-[1.85] font-light"
            style={{ color: SLATE }}
          >
            Have a question or special request? We&apos;d love to hear from you.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 h-px w-2/3"
          style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
        />
      </section>

      {/* ── Form + info ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <div className="grid gap-10 md:grid-cols-[1fr_360px] md:items-start">

            {/* Form */}
            <div
              className="border border-primary/15 p-8"
              style={{ background: CHARCOAL }}
            >
              <h2
                className="font-display font-light text-2xl mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send a message
              </h2>
              <p
                className="mb-8 text-[13px] font-light"
                style={{ color: SLATE }}
              >
                We&apos;ll follow up as soon as possible.
              </p>

              <form className="space-y-5">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                  { id: "phone", label: "Phone", type: "tel", placeholder: "+92 300 000 0000", optional: true },
                ].map(({ id, label, type, placeholder, optional }) => (
                  <div key={id} className="space-y-1.5">
                    <label
                      htmlFor={`contact-${id}`}
                      className="text-[9px] tracking-[0.28em] uppercase"
                      style={{ color: "rgba(138,138,138,0.60)" }}
                    >
                      {label}
                      {optional && (
                        <span className="ml-1" style={{ color: "rgba(138,138,138,0.35)" }}>
                          (optional)
                        </span>
                      )}
                    </label>
                    <input
                      id={`contact-${id}`}
                      type={type}
                      className="h-11 w-full border border-primary/12 bg-background px-4 text-[13px] font-light text-foreground outline-none transition-all placeholder:text-muted-foreground/35 focus:border-primary/40"
                      placeholder={placeholder}
                    />
                  </div>
                ))}

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-[9px] tracking-[0.28em] uppercase"
                    style={{ color: "rgba(138,138,138,0.60)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    className="w-full resize-none border border-primary/12 bg-background px-4 py-3 text-[13px] font-light text-foreground outline-none transition-all placeholder:text-muted-foreground/35 focus:border-primary/40"
                    placeholder="Tell us what you have in mind…"
                  />
                </div>

                <button
                  type="submit"
                  className="h-11 w-full text-[10px] font-medium tracking-[0.22em] uppercase transition-opacity hover:opacity-85"
                  style={{ background: GOLD, color: "#0D0D0D" }}
                >
                  Send Message
                </button>

                <p
                  className="text-center text-[10px] tracking-wide"
                  style={{ color: "rgba(138,138,138,0.35)" }}
                >
                  For urgent bookings, call us directly.
                </p>
              </form>
            </div>

            {/* Info */}
            <div
              className="border border-primary/15 p-7"
              style={{ background: CHARCOAL }}
            >
              <p
                className="mb-7 text-[9px] tracking-[0.35em] uppercase"
                style={{ color: "rgba(201,168,76,0.45)" }}
              >
                Reach Us
              </p>
              <div className="space-y-6">
                {INFO.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <div className="flex items-start gap-4">
                      <div
                        className="mt-0.5 flex size-9 shrink-0 items-center justify-center border border-primary/25"
                        style={{ color: GOLD }}
                      >
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p
                          className="text-[9px] tracking-[0.2em] uppercase mb-1"
                          style={{ color: "rgba(138,138,138,0.55)" }}
                        >
                          {label}
                        </p>
                        {value.split("\n").map((line, i) => (
                          <p key={i} className="text-[13px] font-light" style={{ color: "#F0EDE8" }}>
                            {line}
                          </p>
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
      <section className="border-t border-primary/12 pb-16 md:pb-24">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <div className="overflow-hidden border border-primary/15">
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
