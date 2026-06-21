import { ServiceCard } from "@/components/service-card";

const GOLD = "#C9A84C";
const SLATE = "#8A8A8A";

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
      <section className="relative overflow-hidden border-b border-primary/12 pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <div className="mb-4 flex items-center gap-3.5">
            <div className="h-px w-6" style={{ background: GOLD }} />
            <span className="text-[9px] tracking-[0.38em] uppercase" style={{ color: "rgba(201,168,76,0.65)" }}>
              Yaash Rajpoot
            </span>
          </div>
          <h1
            className="font-display font-light leading-[0.9]"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)", fontFamily: "var(--font-display)" }}
          >
            Our{" "}
            <em style={{ fontStyle: "italic", color: GOLD }}>Services</em>
          </h1>
          <p
            className="mt-6 max-w-[400px] text-[14px] leading-[1.85] font-light"
            style={{ color: SLATE }}
          >
            Every service is tailored to you. Choose what you need and book your preferred time in seconds.
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 h-px w-2/3"
          style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
        />
      </section>

      {/* ── Services grid ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
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
          <p
            className="mt-10 text-center text-[10px] tracking-[0.2em]"
            style={{ color: "rgba(138,138,138,0.40)" }}
          >
            * Prices are indicative and may vary based on hair length and complexity.
          </p>
        </div>
      </section>

    </div>
  );
}
