import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/10 bg-card/40 pt-16 pb-8 md:pt-20 backdrop-blur-sm">
      {/* Gradient top line */}
      <div
        className="absolute top-0 left-0 h-[1px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #A855F7 35%, #EC4899 65%, transparent 100%)" }}
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-64 w-96 -translate-x-1/2 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 md:px-10">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" aria-label="Yaash Rajpoot — Home">
              <Image
                src="/images/logo5.png"
                alt="Yaash Rajpoot"
                width={180}
                height={44}
                className="h-9 w-auto object-contain object-left"
                style={{ filter: "drop-shadow(0 0 8px rgba(168,85,247,0.3)) brightness(1.05)" }}
                unoptimized
              />
            </Link>
            <p className="mt-4 max-w-[210px] text-sm leading-relaxed text-muted-foreground">
              Expert hair, color & makeup in Lahore. Tailored with care, every visit.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-8 items-center justify-center rounded-full border border-primary/15 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <Instagram className="size-3.5" />
              </a>
              <a
                href="https://wa.me/921234567890"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-8 items-center justify-center rounded-full border border-primary/15 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="mb-5 text-[9px] tracking-[0.35em] uppercase text-muted-foreground/50">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours */}
          <div>
            <p className="mb-5 text-[9px] tracking-[0.35em] uppercase text-muted-foreground/50">
              Hours
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Mon – Sat</span>
                <span className="text-foreground/75">10:00 – 21:00</span>
              </div>
              <div className="h-px bg-primary/8" />
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Sunday</span>
                <span className="text-foreground/75">11:00 – 19:00</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-[9px] tracking-[0.35em] uppercase text-muted-foreground/50">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="tel:+921234567890"
                className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-3.5 shrink-0 text-primary" />
                +92 123 456 7890
              </a>
              <a
                href="mailto:hello@yaashrajpoot.com"
                className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-3.5 shrink-0 text-primary" />
                hello@yaashrajpoot.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5 mt-0.5 shrink-0 text-primary" />
                123 Salon Street, Lahore
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Yaash Rajpoot. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground/40">
            <Link href="#" className="transition-colors hover:text-muted-foreground/70">Privacy</Link>
            <Link href="#" className="transition-colors hover:text-muted-foreground/70">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
