"use client";

import Image from "next/image";
import { useBookingModal } from "@/components/models/booking-modal";

const GOLD = "#C9A84C";
const SLATE = "#8A8A8A";
const CHARCOAL = "#1A1A1A";

const TEAM = [
  {
    name: "Faisal Raza",
    role: "Master Barber",
    since: "2012",
    bio: "12 years on the floor. Faisal's precision with the straight razor and his eye for the perfect fade have made him the most-requested barber in the shop. He trained under a classic British barbershop tradition and brought it to Lahore.",
    specialties: ["Classic Fades", "Hot Shaves", "Precision Cuts"],
    img: "/images/barbar1.jpg",
  },
  {
    name: "Hassan Ahmed",
    role: "Senior Barber",
    since: "2016",
    bio: "A specialist in modern cuts and textured styles. Hassan's calm energy and technical precision keep clients coming back every two weeks. He excels at reading face shape and recommending exactly the right cut.",
    specialties: ["Textured Cuts", "Beard Sculpting", "Hair Design"],
    img: "/images/barbar2.jpg",
  },
  {
    name: "Usman Khan",
    role: "Grooming Specialist",
    since: "2019",
    bio: "From skin to scalp, Usman focuses on the full grooming picture. His facial treatments and scalp rituals have earned a cult following. Equal parts barber and skincare expert.",
    specialties: ["Facials", "Scalp Rituals", "Beard Care"],
    img: "/images/barbar3.jpg",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3.5">
      <div className="h-px w-6" style={{ background: GOLD }} />
      <span className="text-[9px] tracking-[0.38em] uppercase" style={{ color: "rgba(201,168,76,0.65)" }}>
        {children}
      </span>
    </div>
  );
}

export default function TeamPage() {
  const { openBooking } = useBookingModal();

  return (
    <div className="bg-background text-foreground">

      {/* Header */}
      <section className="relative overflow-hidden border-b border-primary/12 pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <Eyebrow>The Crew</Eyebrow>
          <h1
            className="font-display font-light leading-[0.9]"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)", fontFamily: "var(--font-display)" }}
          >
            Meet the{" "}
            <em style={{ fontStyle: "italic", color: GOLD }}>barbers</em>
          </h1>
          <p className="mt-6 max-w-[400px] text-[14px] leading-[1.85] font-light" style={{ color: SLATE }}>
            Six master barbers. One obsession — making you look exactly like yourself, but sharper.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-px w-2/3" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
      </section>

      {/* Team grid */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <div className="space-y-0">
            {TEAM.map((member, idx) => (
              <div
                key={member.name}
                className="grid items-center gap-0 border-b border-primary/10 py-16 md:grid-cols-2 md:gap-20 md:py-24"
                style={{ flexDirection: idx % 2 !== 0 ? "row-reverse" : "row" }}
              >
                {/* Image — alternates side */}
                <div className={`relative ${idx % 2 !== 0 ? "md:order-2" : ""}`}>
                  <div className="relative aspect-[4/5] overflow-hidden border border-primary/15">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

                    {/* Since badge */}
                    <div
                      className="absolute bottom-5 left-5 border border-primary/30 px-4 py-2"
                      style={{ background: "rgba(13,13,13,0.75)" }}
                    >
                      <p className="text-[9px] tracking-[0.22em] uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>Since</p>
                      <p className="font-display text-2xl font-light" style={{ fontFamily: "var(--font-display)", color: GOLD }}>{member.since}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={idx % 2 !== 0 ? "md:order-1" : ""}>
                  <p className="mb-2 text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(201,168,76,0.55)" }}>{member.role}</p>
                  <h2
                    className="font-display font-light leading-[1]"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}
                  >
                    {member.name}
                  </h2>
                  <div className="my-6 h-px w-12" style={{ background: GOLD }} />
                  <p className="mb-8 text-[14px] leading-[1.9] font-light" style={{ color: SLATE }}>
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-10 flex flex-wrap gap-2">
                    {member.specialties.map(s => (
                      <span
                        key={s}
                        className="border px-3 py-1 text-[10px] tracking-[0.15em] uppercase"
                        style={{ borderColor: "rgba(201,168,76,0.25)", color: GOLD }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => openBooking()}
                    className="h-11 px-8 text-[10px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-85"
                    style={{ background: GOLD, color: "#0D0D0D" }}
                  >
                    Book with {member.name.split(" ")[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-primary/12 py-24 text-center" style={{ background: CHARCOAL }}>
        <div className="mx-auto max-w-xl px-6">
          <Eyebrow>Ready?</Eyebrow>
          <h2
            className="font-display font-light mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "var(--font-display)" }}
          >
            Pick your barber.<br />
            <em style={{ fontStyle: "italic", color: GOLD }}>Book your slot.</em>
          </h2>
          <p className="mb-8 text-[14px] font-light" style={{ color: SLATE }}>
            Every barber on our floor is a master. You can&apos;t go wrong.
          </p>
          <button
            type="button"
            onClick={() => openBooking()}
            className="h-12 px-10 text-[10px] font-medium tracking-[0.22em] uppercase transition-opacity hover:opacity-85"
            style={{ background: GOLD, color: "#0D0D0D" }}
          >
            Book Now
          </button>
        </div>
      </section>

    </div>
  );
}
