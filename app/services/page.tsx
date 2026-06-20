import { ServiceCard } from "@/components/service-card";

const SERVICES = [
  {
    name: "Haircut & Styling",
    duration: "45 min",
    price: "PKR 2,500",
    image: "/images/barbar1.jpg",
    description: "Tailored cuts and styling for everyday looks or special occasions. We work with your face shape, texture, and lifestyle.",
  },
  {
    name: "Hair Color",
    duration: "1–2 hrs",
    price: "PKR 6,500",
    image: "/images/barbar2.jpg",
    description: "From subtle balayage highlights to full transformation. Professional-grade color that protects your hair.",
  },
  {
    name: "Beard Trim & Grooming",
    duration: "30 min",
    price: "PKR 800",
    image: "/images/barbar3.jpg",
    description: "Clean lines, precise shaping, and full maintenance for a polished, well-kept look.",
  },
  {
    name: "Makeup",
    duration: "1 hr",
    price: "PKR 5,000",
    image: "/images/barbar3.jpg",
    description: "Camera-ready looks for weddings, events, and shoots. Matched to your style and the occasion.",
  },
  {
    name: "Facial Treatment",
    duration: "45–60 min",
    price: "PKR 3,500",
    image: "/images/barbar2.jpg",
    description: "Cleansing and glow-boosting facials tailored to your skin type. Leave feeling refreshed.",
  },
  {
    name: "Hair Spa",
    duration: "1 hr",
    price: "PKR 4,000",
    image: "/images/barbar1.jpg",
    description: "Deep conditioning and nourishment for healthier, shinier hair. Relaxing for your scalp too.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">

      {/* ── Page header ── */}
      <section className="relative overflow-hidden border-b border-primary/10 pb-16 pt-32 md:pb-20 md:pt-40">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute -right-40 top-0 -z-10 h-[500px] w-[500px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-[300px] w-[300px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)" }}
        />

        <div className="container mx-auto px-5 md:px-12">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-6" style={{ background: "linear-gradient(90deg, #A855F7, #EC4899)" }} />
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary/80 font-medium">
              Yaash Rajpoot
            </span>
          </div>
          <h1
            className="font-display font-light leading-[0.86]"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
          >
            Our <span className="italic" style={{
              background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Services</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-[1.85] text-muted-foreground">
            Every service is tailored to you. Choose what you need and book your preferred time in seconds.
          </p>
        </div>

        {/* Gradient hairline bottom */}
        <div
          className="absolute bottom-0 left-0 h-[1px] w-2/3"
          style={{ background: "linear-gradient(90deg, #A855F7, transparent)" }}
        />
      </section>

      {/* ── Services grid ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.name}
                image={s.image}
                imageAlt={s.name}
                title={s.name}
                duration={s.duration}
                price={s.price}
                description={s.description}
              />
            ))}
          </div>
          <p className="mt-10 text-center text-[10px] tracking-[0.2em] text-muted-foreground/35">
            * Prices are indicative and may vary based on hair length and complexity.
          </p>
        </div>
      </section>

    </div>
  );
}
