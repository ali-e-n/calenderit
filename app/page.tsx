"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo";


const SERVICES = [
  { title: "The Cut",      desc: "Precision haircut tailored to your face shape. Includes hot towel finish.",                    price: "from PKR 1,200",  icon: "✦",  img: "/images/barbar1.jpg" },
  { title: "The Shave",    desc: "Traditional straight-razor shave with pre-shave oil and cold towel close.",                   price: "from PKR 1,500",  icon: "◈",  img: "/images/barbar2.jpg" },
  { title: "Beard Sculpt", desc: "Shape, define and condition your beard. Edges, neckline, the works.",                         price: "from PKR 800",    icon: "◇",  img: "/images/barbar3.jpg" },
  { title: "Scalp Ritual", desc: "Deep cleanse, exfoliation and tension-release scalp massage. 45 minutes.",                   price: "from PKR 2,000",  icon: "❋",  img: "/images/barbar1.jpg" },
  { title: "Facial",       desc: "Men's skin treatment — cleanse, steam, extraction, mask and hydration.",                     price: "from PKR 2,500",  icon: "◉",  img: "/images/barbar2.jpg" },
  { title: "The Works",    desc: "Cut + shave + facial. Our signature 90-minute full-service experience.",                     price: "from PKR 4,500",  icon: "◈✦", img: "/images/barbar3.jpg" },
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
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

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

  const [galleryIndex, setGalleryIndex] = useState(0);
  const GALLERY = ["/images/barbar1.jpg", "/images/barbar2.jpg", "/images/barbar3.jpg"];

  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingDone, setBookingDone] = useState(false);

  const openBooking = (service?: string) => {
    setSelectedService(service ?? null);
    setSelectedDate(null);
    setSelectedTime(null);
    setBookingName("");
    setBookingPhone("");
    setBookingDone(false);
    setBookingStep(service ? 2 : 1);
    setBookingOpen(true);
  };

  const closeBooking = () => { setBookingOpen(false); setBookingStep(1); };

  const DATES = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return { label: d.toLocaleDateString("en-PK", { weekday: "short", day: "numeric", month: "short" }), value: d.toISOString().split("T")[0] };
  });

  const TIMES = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

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

        /* HERO */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-left {
          position: relative;
          z-index: 2;
          padding: 120px 48px 120px 48px;
          max-width: 580px;
        }
        .hero-image {
          position: absolute;
          top: 0; right: 0;
          width: 65%;
          height: 100%;
        }
        .hero-image img {
          object-fit: cover;
          object-position: center top;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #0D0D0D 25%, rgba(13,13,13,0.75) 48%, rgba(13,13,13,0.2) 68%, transparent 88%);
          z-index: 1;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: #0D0D0D;
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
        .service-card:hover .service-card-img { opacity: 1; }
        .service-card-img {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 0;
        }
        .service-card-img img {
          object-fit: cover;
          object-position: center top;
        }
        .service-card-img::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(13,13,13,0.72);
        }
        .service-card > *:not(.service-card-img) { position: relative; z-index: 1; }
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

        /* GALLERY SLIDER */
        .gallery { background: var(--black); }
        .gallery-slider {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16/7;
          background: var(--charcoal);
        }
        .gallery-track {
          display: flex;
          height: 100%;
          transition: transform 0.85s cubic-bezier(0.77,0,0.175,1);
        }
        .gallery-slide { min-width: 100%; height: 100%; position: relative; }
        .gallery-slide-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(13,13,13,0.55) 0%, transparent 55%);
          z-index: 1;
        }
        .gallery-ui {
          position: absolute;
          bottom: 36px; left: 48px; right: 48px;
          display: flex; align-items: flex-end; justify-content: space-between;
          z-index: 2;
        }
        .gallery-counter {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: clamp(56px, 8vw, 96px);
          font-weight: 300;
          color: rgba(240,237,232,0.12);
          line-height: 1; user-select: none;
        }
        .gallery-right { display: flex; flex-direction: column; align-items: flex-end; gap: 12px; }
        .gallery-dots { display: flex; gap: 6px; }
        .gallery-dot {
          height: 2px; width: 24px;
          background: rgba(240,237,232,0.25);
          cursor: pointer; border: none; padding: 0;
          transition: width 0.4s ease, background 0.3s;
        }
        .gallery-dot.active { width: 48px; background: var(--gold); }
        .gallery-arrows { display: flex; gap: 8px; }
        .gallery-arrow {
          width: 52px; height: 52px;
          border: 1px solid rgba(201,168,76,0.35);
          background: rgba(13,13,13,0.55);
          color: var(--off-white); font-size: 16px;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: all 0.25s ease; backdrop-filter: blur(4px);
        }
        .gallery-arrow:hover { background: var(--gold); color: var(--black); border-color: var(--gold); }
        .gallery-progress {
          position: absolute; bottom: 0; left: 0;
          height: 2px; background: var(--gold);
          transition: width 0.85s cubic-bezier(0.77,0,0.175,1); z-index: 2;
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

        /* BOOKING MODAL */
        .modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(6px);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.25s ease;
        }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .modal {
          background: #141414;
          border: 1px solid var(--border);
          width: 100%;
          max-width: 560px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp { from { transform: translateY(24px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        .modal-header {
          padding: 32px 36px 24px;
          border-bottom: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .modal-step-label {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 6px;
        }
        .modal-title {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 300;
        }
        .modal-close {
          background: none; border: none;
          color: var(--slate); font-size: 20px;
          cursor: pointer; line-height: 1;
          padding: 4px; transition: color 0.2s;
          flex-shrink: 0;
        }
        .modal-close:hover { color: var(--off-white); }
        .modal-progress {
          display: flex;
          gap: 6px;
          padding: 20px 36px 0;
        }
        .modal-progress-bar {
          height: 2px;
          flex: 1;
          background: var(--border);
          transition: background 0.3s;
        }
        .modal-progress-bar.active { background: var(--gold); }
        .modal-body { padding: 28px 36px 36px; }

        /* Step 1 - services */
        .modal-services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .modal-service-card {
          border: 1px solid var(--border);
          padding: 18px 20px;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          background: transparent;
          text-align: left;
          width: 100%;
        }
        .modal-service-card:hover { border-color: rgba(201,168,76,0.5); background: var(--gold-dim); }
        .modal-service-card.selected { border-color: var(--gold); background: var(--gold-dim); }
        .modal-service-card-title {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 400;
          color: var(--off-white);
          margin-bottom: 4px;
        }
        .modal-service-card-price {
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--gold);
          text-transform: uppercase;
        }

        /* Step 2 - date & time */
        .modal-dates {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
          margin-bottom: 28px;
          scrollbar-width: none;
        }
        .modal-dates::-webkit-scrollbar { display: none; }
        .modal-date-pill {
          flex-shrink: 0;
          border: 1px solid var(--border);
          padding: 10px 16px;
          cursor: pointer;
          text-align: center;
          transition: border-color 0.2s, background 0.2s;
          background: transparent;
          white-space: nowrap;
        }
        .modal-date-pill:hover { border-color: rgba(201,168,76,0.5); }
        .modal-date-pill.selected { border-color: var(--gold); background: var(--gold-dim); }
        .modal-date-pill span {
          display: block;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--off-white);
          text-transform: uppercase;
        }
        .modal-times-label {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--slate);
          margin-bottom: 14px;
        }
        .modal-times {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .modal-time-slot {
          border: 1px solid var(--border);
          padding: 12px 8px;
          cursor: pointer;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--off-white);
          text-align: center;
          background: transparent;
          transition: border-color 0.2s, background 0.2s;
          font-family: var(--font-inter), 'Inter', sans-serif;
        }
        .modal-time-slot:hover { border-color: rgba(201,168,76,0.5); }
        .modal-time-slot.selected { border-color: var(--gold); background: var(--gold-dim); color: var(--gold); }

        /* Step 3 - details */
        .modal-input {
          width: 100%;
          background: #1c1c1c;
          border: 1px solid var(--border);
          padding: 14px 16px;
          color: var(--off-white);
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 13px;
          outline: none;
          margin-bottom: 12px;
          transition: border-color 0.2s;
        }
        .modal-input:focus { border-color: rgba(201,168,76,0.5); }
        .modal-input::placeholder { color: var(--slate); }
        .modal-summary {
          border: 1px solid var(--border);
          padding: 16px 20px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .modal-summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
        }
        .modal-summary-row span:first-child { color: var(--slate); letter-spacing: 0.1em; text-transform: uppercase; font-size: 10px; }
        .modal-summary-row span:last-child { color: var(--off-white); }

        /* Done state */
        .modal-done {
          text-align: center;
          padding: 48px 36px;
        }
        .modal-done-icon {
          font-size: 40px;
          color: var(--gold);
          margin-bottom: 20px;
        }
        .modal-done-title {
          font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 300;
          margin-bottom: 12px;
        }
        .modal-done-sub { font-size: 13px; color: var(--slate); line-height: 1.7; }

        /* Footer nav */
        .modal-footer {
          padding: 0 36px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .modal-btn-back {
          background: none;
          border: 1px solid var(--border);
          color: var(--slate);
          padding: 12px 24px;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .modal-btn-back:hover { border-color: var(--slate); color: var(--off-white); }
        .modal-btn-next {
          flex: 1;
          background: var(--gold);
          border: none;
          color: var(--black);
          padding: 14px 24px;
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .modal-btn-next:disabled { opacity: 0.3; cursor: default; }
        .modal-btn-next:not(:disabled):hover { opacity: 0.85; }

        /* LOCATION */
        .location { background: var(--black); padding: 0; }
        .location-inner {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
        }
        .location-info {
          padding: 72px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-right: 1px solid var(--border);
        }
        .location-address {
          font-size: 14px;
          color: var(--slate);
          line-height: 1.9;
          margin-bottom: 32px;
        }
        .location-hours {
          margin-bottom: 36px;
        }
        .location-hours-row {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: var(--slate);
          padding: 8px 0;
          border-bottom: 1px solid rgba(201,168,76,0.08);
        }
        .location-hours-row span:last-child { color: var(--off-white); }
        .location-map {
          position: relative;
          min-height: 420px;
          border-top: 1px solid var(--border);
        }
        .location-map iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          filter: invert(1) hue-rotate(180deg) saturate(0.55) brightness(0.82);
        }
        @media (max-width: 900px) {
          .location-inner { grid-template-columns: 1fr; }
          .location-info { border-right: none; border-bottom: 1px solid var(--border); padding: 48px 24px; }
          .location-map { min-height: 300px; }
        }

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
          .hero-left { padding: 80px 24px 80px; }
          .hero-image { width: 100%; opacity: 0.3; }
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
          .btn-primary { padding: 10px 22px; font-size: 10px; }
          .hero-actions { gap: 20px; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="hero-grain" />
        <div className="hero-image">
          <Image src="/images/barbar1.jpg" alt="Barbershop interior" fill priority />
        </div>
        <div className="hero-overlay" />
        <div className="hero-left">
          <p className="hero-eyebrow">Premium Men&apos;s Grooming</p>
          <h1 className="hero-headline">
            Yaash Rajpoot<br />
            <em>Saloon</em><br />
            {/* here. */}
          </h1>
          <p className="hero-sub">
            A men&apos;s salon and spa built for those who don&apos;t settle. Every cut, shave, and treatment delivered with precision and without the noise.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn-primary" onClick={() => openBooking()}>Book a Session</button>
            <button type="button" className="btn-ghost">
              <span>→</span> View services
            </button>
          </div>
          <div className="hero-stats" style={{ position: "relative", bottom: "auto", right: "auto", marginTop: "64px", justifyContent: "flex-start" }}>
            <div className="stat-item" style={{ textAlign: "left" }}>
              <div className="stat-num">12+</div>
              <div className="stat-label">Years open</div>
            </div>
            <div className="stat-item" style={{ textAlign: "left" }}>
              <div className="stat-num">8K</div>
              <div className="stat-label">Happy clients</div>
            </div>
            <div className="stat-item" style={{ textAlign: "left" }}>
              <div className="stat-num">6</div>
              <div className="stat-label">Master barbers</div>
            </div>
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
          <Link href="/services" className="btn-ghost" style={{ textDecoration: "none" }}>All services →</Link>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title} onClick={() => openBooking(s.title)} style={{ cursor: "pointer" }}>
              <div className="service-card-img">
                <Image src={s.img} alt={s.title} fill />
              </div>
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
          <div className="about-block-main" style={{ overflow: "hidden" }}>
            <Image src="/images/barbar2.jpg" alt="Barber at work" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
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
          <Link href="/team" className="btn-primary" style={{ marginTop: "8px", textDecoration: "none" }}>Meet the team</Link>
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

      {/* GALLERY */}
      <section
        id="gallery"
        className={`section gallery ${isVisible("gallery") ? "visible" : ""}`}
        ref={setRef("gallery")}
        data-section="gallery"
      >
        <p className="section-eyebrow">Inside the shop</p>
        <h2 className="section-title" style={{ marginBottom: "40px" }}>
          The <em>experience</em>
        </h2>
        <div className="gallery-slider">
          <div className="gallery-track" style={{ transform: `translateX(-${galleryIndex * 100}%)` }}>
            {GALLERY.map((src, i) => (
              <div className="gallery-slide" key={i}>
                <Image src={src} alt={`Gallery ${i + 1}`} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                <div className="gallery-slide-overlay" />
              </div>
            ))}
          </div>
          <div className="gallery-ui">
            <div className="gallery-counter">0{galleryIndex + 1}</div>
            <div className="gallery-right">
              <div className="gallery-dots">
                {GALLERY.map((_, i) => (
                  <button key={i} type="button" className={`gallery-dot ${i === galleryIndex ? "active" : ""}`} onClick={() => setGalleryIndex(i)} />
                ))}
              </div>
              <div className="gallery-arrows">
                <button type="button" className="gallery-arrow" onClick={() => setGalleryIndex(i => Math.max(0, i - 1))}>←</button>
                <button type="button" className="gallery-arrow" onClick={() => setGalleryIndex(i => Math.min(GALLERY.length - 1, i + 1))}>→</button>
              </div>
            </div>
          </div>
          <div className="gallery-progress" style={{ width: `${((galleryIndex + 1) / GALLERY.length) * 100}%` }} />
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
        <button type="button" className="booking-submit" onClick={() => openBooking()} style={{ padding: "16px 48px", fontSize: "11px" }}>Book Now</button>
      </section>

      {/* BOOKING MODAL */}
      {bookingOpen && (
        <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && closeBooking()}>
          <div className="modal">
            {bookingDone ? (
              <div className="modal-done">
                <div className="modal-done-icon">✦</div>
                <div className="modal-done-title">You&apos;re booked.</div>
                <p className="modal-done-sub">We&apos;ll confirm your appointment via WhatsApp shortly.<br />See you at Blade & Co.</p>
                <button type="button" className="modal-btn-next" style={{ marginTop: "32px", width: "100%" }} onClick={closeBooking}>Done</button>
              </div>
            ) : (
              <>
                <div className="modal-progress">
                  {[1,2,3].map(s => <div key={s} className={`modal-progress-bar ${bookingStep >= s ? "active" : ""}`} />)}
                </div>
                <div className="modal-header">
                  <div>
                    <div className="modal-step-label">Step {bookingStep} of 3</div>
                    <div className="modal-title">
                      {bookingStep === 1 && "Choose a service"}
                      {bookingStep === 2 && "Pick your slot"}
                      {bookingStep === 3 && "Your details"}
                    </div>
                  </div>
                  <button type="button" className="modal-close" onClick={closeBooking}>✕</button>
                </div>

                <div className="modal-body">
                  {bookingStep === 1 && (
                    <div className="modal-services-grid">
                      {SERVICES.map(s => (
                        <button type="button" key={s.title} className={`modal-service-card ${selectedService === s.title ? "selected" : ""}`} onClick={() => setSelectedService(s.title)}>
                          <div className="modal-service-card-title">{s.title}</div>
                          <div className="modal-service-card-price">{s.price}</div>
                        </button>
                      ))}
                    </div>
                  )}

                  {bookingStep === 2 && (
                    <>
                      <div className="modal-dates">
                        {DATES.map(d => (
                          <button type="button" key={d.value} className={`modal-date-pill ${selectedDate === d.value ? "selected" : ""}`} onClick={() => setSelectedDate(d.value)}>
                            <span>{d.label}</span>
                          </button>
                        ))}
                      </div>
                      <div className="modal-times-label">Available times</div>
                      <div className="modal-times">
                        {TIMES.map(t => (
                          <button type="button" key={t} className={`modal-time-slot ${selectedTime === t ? "selected" : ""}`} onClick={() => setSelectedTime(t)}>{t}</button>
                        ))}
                      </div>
                    </>
                  )}

                  {bookingStep === 3 && (
                    <>
                      <div className="modal-summary">
                        <div className="modal-summary-row"><span>Service</span><span>{selectedService}</span></div>
                        <div className="modal-summary-row"><span>Date</span><span>{DATES.find(d => d.value === selectedDate)?.label}</span></div>
                        <div className="modal-summary-row"><span>Time</span><span>{selectedTime}</span></div>
                      </div>
                      <input className="modal-input" placeholder="Your name" value={bookingName} onChange={e => setBookingName(e.target.value)} />
                      <div style={{ display: "flex", marginBottom: "12px", border: "1px solid var(--border)" }}>
                        <span style={{ background: "#1c1c1c", borderRight: "1px solid var(--border)", padding: "14px 14px", fontSize: "13px", color: "var(--slate)", whiteSpace: "nowrap", flexShrink: 0 }}>🇵🇰 +92</span>
                        <input className="modal-input" placeholder="3XX XXXXXXX" value={bookingPhone} onChange={e => setBookingPhone(e.target.value)} style={{ border: "none", marginBottom: 0, flex: 1 }} />
                      </div>
                      <input className="modal-input" placeholder="Email address" style={{ marginBottom: 0 }} />
                    </>
                  )}
                </div>

                <div className="modal-footer">
                  {bookingStep > 1 && (
                    <button type="button" className="modal-btn-back" onClick={() => setBookingStep(s => s - 1)}>Back</button>
                  )}
                  <button
                    type="button"
                    className="modal-btn-next"
                    disabled={
                      (bookingStep === 1 && !selectedService) ||
                      (bookingStep === 2 && (!selectedDate || !selectedTime)) ||
                      (bookingStep === 3 && (!bookingName.trim() || !bookingPhone.trim()))
                    }
                    onClick={() => {
                      if (bookingStep < 3) setBookingStep(s => s + 1);
                      else setBookingDone(true);
                    }}
                  >
                    {bookingStep === 3 ? "Confirm booking" : "Continue"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* LOCATION */}
      <section
        className={`section location ${isVisible("location") ? "visible" : ""}`}
        ref={setRef("location")}
        data-section="location"
        style={{ padding: 0 }}
      >
        <div className="location-inner">
          <div className="location-info">
            <p className="section-eyebrow" style={{ marginBottom: "16px" }}>Find Us</p>
            <h2 className="section-title" style={{ fontSize: "clamp(28px, 3vw, 42px)", marginBottom: "24px" }}>
              Gulberg <em>III</em>,<br />Lahore
            </h2>
            <p className="location-address">
              Gurumangat Rd, opposite SOI-GASS office,<br />
              Gurumangat Block A2, Gulberg III,<br />
              Lahore, 45000
            </p>
            <div className="location-hours">
              {[["Mon – Sat", "10:00 – 21:00"], ["Sunday", "11:00 – 19:00"]].map(([day, time]) => (
                <div className="location-hours-row" key={day}>
                  <span>{day}</span><span>{time}</span>
                </div>
              ))}
            </div>
            <a
              href="https://maps.app.goo.gl/FeFm4DzvjcbcebiV7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ textDecoration: "none", display: "inline-flex" }}
            >
              <span>→</span> Open in Google Maps
            </a>
          </div>
          <div className="location-map">
            <iframe
              title="Yaash Rajpoot Saloon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5!2d74.35783784562048!3d31.510706099129333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29e5f764919050c3%3A0xdbb86af6471c2d54!2sYaash%20Rajpoot%20Saloon%20%26%20S.P.A!5e0!3m2!1sen!2spk!4v1700000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <Link href="/" style={{ textDecoration: "none" }}><Logo size="sm" /></Link>
        <p className="footer-copy">© 2026 Yaash Rajpoot Saloon. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#">Instagram</a></li>
          <li><Link href="/services" style={{ textDecoration: "none", color: "inherit" }}>Services</Link></li>
          <li><Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>Contact</Link></li>
        </ul>
      </footer>
    </div>
  );
}
