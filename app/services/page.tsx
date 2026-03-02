import Link from "next/link";
import { ServiceCard } from "@/components/service-card";

const SERVICES = [
  {
    name: "Haircut & Styling",
    duration: "45 min",
    image: "/images/barbar1.jpg",
    category: "Hair",
    description: "Tailored cuts and styling for everyday looks or special occasions.",
  },
  {
    name: "Hair Color",
    duration: "1–2 hrs",
    image: "/images/barbar2.jpg",
    category: "Color",
    description: "From subtle highlights to full color transformations.",
  },
  {
    name: "Beard Trim & Grooming",
    duration: "30 min",
    image: "/images/barbar3.jpg",
    category: "Beard",
    description: "Clean lines, shaping, and maintenance for your beard.",
  },
  {
    name: "Makeup",
    duration: "1 hr",
    image: "/images/barbar3.jpg",
    category: "Makeup",
    description: "Camera-ready looks for weddings, shoots, and events.",
  },
  {
    name: "Facial Treatments",
    duration: "45–60 min",
    image: "/images/barbar2.jpg",
    category: "Skin",
    description: "Cleansing and glow-boosting facials tailored to your skin.",
  },
  {
    name: "Hair Spa",
    duration: "1 hr",
    image: "/images/barbar1.jpg",
    category: "Care",
    description: "Deep nourishment and relaxation for healthier hair.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-border bg-muted/20 pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Our Services
            </h1>
            <p className="mt-3 text-muted-foreground">
              Explore everything we offer at Yaash Rajpoot. Choose a service to
              see more details and book your visit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.name}
                image={service.image}
                imageAlt={service.name}
                title={service.name}
                duration={service.duration}
              />
            ))}
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

