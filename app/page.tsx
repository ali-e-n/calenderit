"use client";

import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Services", "About", "Gallery", "Testimonials", "Book"];

const SERVICES = [
  {
    title: "The Cut",
    desc: "Precision haircut tailored to your face shape. Includes hot towel finish.",
    price: "from $45",
    icon: "✦",
  },
  {
    title: "The Shave",
    desc: "Traditional straight-razor shave with pre-shave oil and cold towel close.",
    price: "from $55",
    icon: "◈",
  },
  {
    title: "Beard Sculpt",
    desc: "Shape, define and condition your beard. Edges, neckline, the works.",
    price: "from $35",
    icon: "◇",
  },
  {
    title: "Scalp Ritual",
    desc: "Deep cleanse, exfoliation and tension-release scalp massage. 45 minutes.",
    price: "from $65",
    icon: "❋",
  },
  {
    title: "Facial",
    desc: "Men's skin treatment — cleanse, steam, extraction, mask and hydration.",
    price: "from $75",
    icon: "◉",
  },
  {
    title: "The Works",
    desc: "Cut + shave + facial. Our signature 90-minute full-service experience.",
    price: "from $130",
    icon: "◈✦",
  },
];

const TESTIMONIALS = [
  {
    quote: "Best cut I've had in ten years. The straight-razor shave alone is worth it.",
    name: "James R.",
    role: "Regular since 2021",
  },
  {
    quote: "Finally a place that treats grooming like it deserves. Every detail is considered.",
    name: "Marcus T.",
    role: "Monthly facial client",
  },
  {
    quote: "Walked in stressed, walked out looking like I had my life together.",
    name: "Daniel K.",
    role: "The Works convert",
  },
];

export default function SalonHomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = (entry.target as HTMLElement).dataset.section;
          if (entry.isIntersecting && section) {
            setVisibleSections((prev) => new Set([...prev, section]));
          }
        });
      },
      { threshold: 0.15 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const setRef = (key: string) => (el: HTMLElement | null) => {
    sectionRefs.current[key] = el;
  };

  const isVisible = (key: string) => visibleSections.has(key);

  return (
    <div className="salon-home">
      <style>{`
        .salon-home, .salon-home *, .salon-home *::before, .salon-home *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .salon-home {
          --black: #0D0D0D;
          --charcoal: #1A1A1A;
          --gold: #C9A84C;
          --gold-dim: rgba(201,168,76,0.15);
          --off-white: #F0EDE8;
          --slate: #8A8A8A;
          --border: rgba(201,168,76,0.2);
          background: var(--black);
          color: var(--off-white);
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-weight: 300;
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* NAV */
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 48px;
          transition: all 0.4s ease;
        }
        .nav.scrolled {
          background: rgba(13,13,13,0.95);
          backdrop-filter: blur(12px);
          padding: 16px 48px;
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          letter-spacing: 0.12em;
          color: var(--off-white);
          text-transform: uppercase;
        }
        .nav-logo span { color: var(--gold); }
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }
        .nav-links a {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--slate);
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .nav-links a:hover { color: var(--off-white); }
        .nav-links a:hover::after { width: 100%; }
        .nav-book {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--black);
          background: var(--gold);
          border: none;
          padding: 10px 24px;
          cursor: pointer;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-weight: 500;
          transition: opacity 0.2s;
        }
        .nav-book:hover { opacity: 0.85; }

        /* HERO */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 0 48px;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0D0D0D 0%, #1a1410 50%, #0D0D0D 100%);
        }
        .hero-grain {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 580px;
        }
        .hero-eyebrow {
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: var(--gold);
        }
        .salon-home .hero-headline {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: clamp(52px, 5vw, 72px);
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.01em;
          margin-bottom: 28px;
          color: var(--off-white);
        }
        .salon-home .hero-headline em {
          font-style: italic;
          color: var(--gold);
        }
        .hero-sub {
          font-size: 14px;
          color: var(--slate);
          max-width: 380px;
          line-height: 1.8;
          margin-bottom: 48px;
          font-weight: 300;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .btn-primary {
          background: var(--gold);
          color: var(--black);
          border: none;
          padding: 14px 36px;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .btn-primary:hover { opacity: 0.85; }
        .btn-ghost {
          background: none;
          border: none;
          color: var(--slate);
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: var(--font-inter), 'Inter', sans-serif;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s;
        }
        .btn-ghost:hover { color: var(--off-white); }
        .hero-stats {
          position: absolute;
          bottom: 48px;
          right: 48px;
          display: flex;
          gap: 48px;
          z-index: 2;
        }
        .stat-item { text-align: right; }
        .stat-num {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 300;
          color: var(--off-white);
          line-height: 1;
        }
        .stat-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--slate);
          margin-top: 4px;
        }

        /* SECTION SHARED */
        .section {
          padding: 100px 48px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .section-eyebrow {
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .section-eyebrow::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: var(--gold);
        }
        .section-title {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300;
          line-height: 1.15;
          margin-bottom: 48px;
        }
        .section-title em { font-style: italic; color: var(--gold); }

        /* SERVICES */
        .services { background: var(--charcoal); }
        .services-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 56px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
        }
        .service-card {
          background: var(--charcoal);
          padding: 40px 36px;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
          cursor: default;
        }
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gold-dim);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .service-card:hover::before { opacity: 1; }
        .service-card:hover .service-icon { color: var(--gold); }
        .service-icon {
          font-size: 20px;
          color: var(--slate);
          margin-bottom: 20px;
          transition: color 0.3s;
        }
        .service-title {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 400;
          margin-bottom: 12px;
        }
        .service-desc {
          font-size: 13px;
          color: var(--slate);
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .service-price {
          font-size: 11px;
          letter-spacing: 0.15em;
          color: var(--gold);
          text-transform: uppercase;
        }

        /* ABOUT */
        .about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-visual {
          position: relative;
          height: 520px;
        }
        .about-block-main {
          background: var(--charcoal);
          border: 1px solid var(--border);
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .about-block-main-inner {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: 80px;
          font-weight: 300;
          color: var(--border);
          line-height: 1;
          text-align: center;
          user-select: none;
        }
        .about-accent {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 120px;
          height: 120px;
          background: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .about-accent-text {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 400;
          color: var(--black);
          text-align: center;
          line-height: 1.3;
        }
        .about-accent-num {
          font-size: 28px;
          font-weight: 600;
          display: block;
        }
        .about-body {
          font-size: 14px;
          color: var(--slate);
          line-height: 1.9;
          margin-bottom: 32px;
        }
        .about-divider {
          width: 48px;
          height: 1px;
          background: var(--gold);
          margin-bottom: 32px;
        }

        /* TESTIMONIALS */
        .testimonials-section {
          background: var(--charcoal);
          text-align: center;
        }
        .testimonial-track {
          position: relative;
          height: 160px;
          overflow: hidden;
          margin: 0 auto 40px;
          max-width: 640px;
        }
        .testimonial-slide {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .testimonial-slide.active {
          opacity: 1;
          transform: translateY(0);
        }
        .testimonial-quote {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 300;
          font-style: italic;
          line-height: 1.4;
          color: var(--off-white);
          margin-bottom: 20px;
        }
        .testimonial-author {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--slate);
        }
        .testimonial-author span {
          color: var(--gold);
          margin-right: 8px;
        }
        .testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--slate);
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }
        .dot.active {
          background: var(--gold);
          transform: scale(1.4);
        }

        /* BOOKING CTA */
        .booking {
          text-align: center;
          padding: 120px 48px;
          position: relative;
          overflow: hidden;
        }
        .booking::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .booking-title {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 300;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .booking-title em { font-style: italic; color: var(--gold); }
        .booking-sub {
          font-size: 14px;
          color: var(--slate);
          margin-bottom: 48px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
        .booking-form {
          display: flex;
          gap: 0;
          max-width: 480px;
          margin: 0 auto;
          border: 1px solid var(--border);
        }
        .booking-input {
          flex: 1;
          background: var(--charcoal);
          border: none;
          padding: 16px 20px;
          color: var(--off-white);
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 13px;
          outline: none;
        }
        .booking-input::placeholder { color: var(--slate); }
        .booking-submit {
          background: var(--gold);
          border: none;
          color: var(--black);
          padding: 16px 28px;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.2s;
        }
        .booking-submit:hover { opacity: 0.85; }

        /* FOOTER */
        .footer {
          background: var(--charcoal);
          border-top: 1px solid var(--border);
          padding: 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-logo {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: 18px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .footer-logo span { color: var(--gold); }
        .footer-copy {
          font-size: 11px;
          color: var(--slate);
          letter-spacing: 0.1em;
        }
        .footer-links {
          display: flex;
          gap: 28px;
          list-style: none;
        }
        .footer-links a {
          font-size: 11px;
          color: var(--slate);
          text-decoration: none;
          letter-spacing: 0.1em;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--gold); }

        @media (max-width: 900px) {
          .nav { padding: 20px 24px; }
          .nav.scrolled { padding: 14px 24px; }
          .nav-links { display: none; }
          .hero { padding: 0 24px; }
          .hero-stats { right: 24px; gap: 24px; }
          .section { padding: 72px 24px; }
          .services-grid { grid-template-columns: 1fr 1fr; }
          .about { grid-template-columns: 1fr; gap: 40px; }
          .about-visual { height: 300px; }
          .services-header { flex-direction: column; align-items: flex-start; gap: 16px; }
          .footer { flex-direction: column; gap: 24px; text-align: center; }
          .booking { padding: 80px 24px; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr; }
          .hero-stats { flex-direction: column; gap: 16px; bottom: 32px; }
          .booking-form { flex-direction: column; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">Blade<span>&</span>Co</div>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
        <button type="button" className="nav-book">Book Now</button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="hero-grain" />
        <div className="hero-content">
          <p className="hero-eyebrow">Premium Men&apos;s Grooming</p>
          <h1 className="hero-headline">
            Sharp looks.<br />
            <em>Earned</em><br />
            here.
          </h1>
          <p className="hero-sub">
            A men&apos;s salon and spa built for those who don&apos;t settle. Every cut, shave, and treatment delivered with precision and without the noise.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn-primary">Book a Session</button>
            <button type="button" className="btn-ghost">
              <span>→</span> View services
            </button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">12+</div>
            <div className="stat-label">Years open</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8K</div>
            <div className="stat-label">Happy clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">6</div>
            <div className="stat-label">Master barbers</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className={`section services ${isVisible("services") ? "visible" : ""}`}
        ref={setRef("services")}
        data-section="services"
      >
        <div className="services-header">
          <div>
            <p className="section-eyebrow">What we do</p>
            <h2 className="section-title">The full <em>menu</em></h2>
          </div>
          <button type="button" className="btn-ghost">All services →</button>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-price">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className={`section about ${isVisible("about") ? "visible" : ""}`}
        ref={setRef("about")}
        data-section="about"
        style={{ background: "var(--black)" }}
      >
        <div className="about-visual">
          <div className="about-block-main">
            <div className="about-block-main-inner">
              B&C
            </div>
          </div>
          <div className="about-accent">
            <div className="about-accent-text">
              <span className="about-accent-num">EST</span>
              2012
            </div>
          </div>
        </div>
        <div>
          <p className="section-eyebrow">Our story</p>
          <h2 className="section-title">Built for <em>men</em><br />who mean it</h2>
          <div className="about-divider" />
          <p className="about-body">
            Blade & Co started in 2012 with one barber chair and a belief that men&apos;s grooming deserved more than a quick clip and a handshake. We&apos;ve grown into a full salon and spa, but the intention hasn&apos;t changed.
          </p>
          <p className="about-body">
            Every barber on our floor is a master of their craft. Every product on our shelf is chosen for a reason. Every client leaves looking like the best version of themselves — not someone else&apos;s idea of it.
          </p>
          <button type="button" className="btn-primary" style={{ marginTop: "8px" }}>Meet the team</button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className={`section testimonials-section ${isVisible("testimonials") ? "visible" : ""}`}
        ref={setRef("testimonials")}
        data-section="testimonials"
      >
        <p className="section-eyebrow" style={{ justifyContent: "center" }}>What they say</p>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Don&apos;t take our <em>word</em> for it
        </h2>
        <div className="testimonial-track">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`testimonial-slide ${i === activeTestimonial ? "active" : ""}`}>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <p className="testimonial-author">
                <span>{t.name}</span> {t.role}
              </p>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              className={`dot ${i === activeTestimonial ? "active" : ""}`}
              onClick={() => setActiveTestimonial(i)}
            />
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section
        id="book"
        className={`section booking ${isVisible("booking") ? "visible" : ""}`}
        ref={setRef("booking")}
        data-section="booking"
      >
        <h2 className="booking-title">
          Ready to look<br /><em>your best?</em>
        </h2>
        <p className="booking-sub">
          Drop your number and we&apos;ll reach out to confirm a time that works for you.
        </p>
        <div className="booking-form">
          <input className="booking-input" placeholder="Your phone or email" />
          <button type="button" className="booking-submit">Book Now</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">Blade<span>&</span>Co</div>
        <p className="footer-copy">© 2026 Blade & Co. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </footer>
    </div>
  );
}
