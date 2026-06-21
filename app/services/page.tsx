import { ServiceCard } from "@/components/service-card";

const GOLD = "#C9A84C";
const SLATE = "#8A8A8A";

const SERVICES = [
  {
    name: "The Cut",
    duration: "45 min",
    price: "PKR 1,200",
    image: "/images/barbar1.jpg",
    description: "Precision haircut tailored to your face shape and hair texture. Includes hot towel finish and a styling consultation.",
  },
  {
    name: "The Shave",
    duration: "30 min",
    price: "PKR 1,500",
    image: "/images/barbar2.jpg",
    description: "Traditional straight-razor shave with pre-shave oil, hot lather and a cold towel close. The real thing.",
  },
  {
    name: "Beard Sculpt",
    duration: "30 min",
    price: "PKR 800",
    image: "/images/barbar3.jpg",
    description: "Shape, define and condition your beard. Edges, neckline, cheek line — everything cleaned up and set.",
  },
  {
    name: "Scalp Ritual",
    duration: "45 min",
    price: "PKR 2,000",
    image: "/images/barbar1.jpg",
    description: "Deep cleanse, exfoliation and tension-release scalp massage. Addresses buildup and promotes circulation.",
  },
  {
    name: "Facial",
    duration: "60 min",
    price: "PKR 2,500",
    image: "/images/barbar2.jpg",
    description: "Men's skin treatment — cleanse, steam, extraction, mask and hydration. Leaves skin clear and calm.",
  },
  {
    name: "The Works",
    duration: "90 min",
    price: "PKR 4,500",
    image: "/images/barbar3.jpg",
    description: "Cut + shave + facial. Our signature full-service experience. The best 90 minutes you'll spend this month.",
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
              Blade & Co
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
            Six services, one standard — no shortcuts. Click any card to book directly.
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
