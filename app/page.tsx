import Link from "next/link";
import { HeroCover } from "@/components/hero-cover";
import { HeroDatePicker } from "@/components/hero-date-picker";
import { ServiceCard } from "@/components/service-card";
import {
  Sparkles,
  Clock,
  Scissors,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const HERO_IMAGES = [
  "/images/barbar1.jpg",
  "/images/barbar2.jpg",
  "/images/barbar3.jpg",
];

const FEATURED_SERVICES = [
  {
    name: "Haircut & Styling",
    duration: "45 min",
    href: "/services#hair",
    image: "/images/barbar1.jpg",
  },
  {
    name: "Hair Color",
    duration: "1–2 hrs",
    href: "/services#color",
    image: "/images/barbar2.jpg",
  },
  {
    name: "Makeup",
    duration: "1 hr",
    href: "/services#makeup",
    image: "/images/barbar3.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <HeroCover images={HERO_IMAGES}>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl">
          Book your appointment
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/90 sm:text-xl">
          Choose a service, pick a time, and we’ll take care of the rest.
        </p>
        <HeroDatePicker />
      </HeroCover>

      {/* Services */}
      <section id="services" className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Our Services
            </h2>
            <p className="mt-2 text-muted-foreground">
              Hair, makeup, and more. Browse and book in one place.
            </p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
            {FEATURED_SERVICES.map(({ name, duration, href, image }) => (
              <li key={name}>
                <ServiceCard
                  image={image}
                  imageAlt={name}
                  title={name}
                  duration={duration}
                  href={href}
                />
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[0_4px_20px_rgba(195,157,99,0.45)] transition-all hover:brightness-110"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              About Us
            </h2>
            <p className="mt-4 text-muted-foreground">
              Yaash Rajpoot is a hair and makeup saloon where quality and your comfort come first. Our team brings years of experience to every cut, color, and style.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Learn more
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us / Highlights */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mx-auto max-w-2xl text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Why Choose Us
          </h2>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <li className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="size-6 text-primary" aria-hidden />
              </div>
              <div>
                <h3 className="font-medium">Expert Stylists</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Trained professionals for hair and makeup.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Clock className="size-6 text-primary" aria-hidden />
              </div>
              <div>
                <h3 className="font-medium">Easy Booking</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Book your slot online in a few clicks.
                </p>
              </div>
            </li>
            <li className="flex gap-4 sm:col-span-2 lg:col-span-1">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Scissors className="size-6 text-primary" aria-hidden />
              </div>
              <div>
                <h3 className="font-medium">Quality Products</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We use trusted products for the best results.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Location map */}
      <section className="border-t border-border bg-muted/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Find Us
            </h2>
            <p className="mt-2 text-muted-foreground">
              We are located in the heart of your city. Use the map below to
              find the easiest way to reach us.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-background shadow-sm">
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

      {/* Contact / CTA */}
      <section id="contact" className="border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Get in Touch
            </h2>
            <p className="mt-2 text-muted-foreground">
              Questions or special requests? We’d love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-foreground">
                <Phone className="size-4" aria-hidden />
                +1 234 567 890
              </a>
              <a href="mailto:hello@example.com" className="flex items-center gap-2 hover:text-foreground">
                <Mail className="size-4" aria-hidden />
                hello@example.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden />
                123 Salon Street
              </span>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-md border border-primary bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[0_4px_20px_rgba(195,157,99,0.45)] transition-all hover:brightness-110"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
