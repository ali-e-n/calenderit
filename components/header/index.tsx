"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AuthModal } from "@/components/models/auth-modal";
import { useBookingModal } from "@/components/models/booking-modal";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { openBooking } = useBookingModal();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 w-full transition-all duration-400",
        scrolled ? "border-b border-white/6 backdrop-blur-2xl" : "border-b border-transparent"
      )}
      style={scrolled ? { background: "rgba(5, 5, 15, 0.90)" } : {}}
    >
      <div className="mx-auto flex h-[60px] max-w-screen-2xl items-center justify-end gap-1 px-5 md:px-10">

        {/* Nav links — right side, desktop */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-3.5 py-1.5 text-[10px] font-medium tracking-[0.18em] uppercase text-white/45 transition-all duration-200 hover:bg-white/8 hover:text-white/85"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="mx-2 hidden h-4 w-px bg-white/12 md:block" />

        {/* CTAs — desktop */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => setAuthOpen(true)}
            className="rounded-full px-4 py-1.5 text-[10px] tracking-[0.18em] uppercase text-white/35 transition-colors hover:text-white/65"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => openBooking()}
            className="h-8 rounded-full px-5 text-[10px] font-semibold tracking-[0.18em] uppercase text-white transition-all duration-300 hover:shadow-[0_0_24px_rgba(168,85,247,0.55)] hover:brightness-110"
            style={{ background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)" }}
          >
            Book Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-9 text-white/50 hover:bg-white/8 hover:text-white md:hidden"
              aria-label="Open menu"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-[min(85vw,280px)] flex-col border-primary/15 backdrop-blur-2xl"
            style={{ background: "rgba(5, 5, 15, 0.97)" }}
          >
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 pt-10">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-[11px] tracking-[0.22em] uppercase text-white/45 transition-all hover:bg-primary/10 hover:text-white/90 hover:pl-5"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="space-y-2 border-t border-white/8 pb-2 pt-5">
              <button
                type="button"
                className="h-11 w-full rounded-xl text-[11px] font-semibold tracking-[0.18em] uppercase text-white transition-all hover:brightness-110"
                style={{ background: "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)" }}
                onClick={() => { setMenuOpen(false); openBooking(); }}
              >
                Book Now
              </button>
              <button
                type="button"
                className="h-11 w-full rounded-xl border border-white/10 text-[11px] tracking-[0.18em] uppercase text-white/40 transition-colors hover:border-white/20 hover:text-white/65"
                onClick={() => { setMenuOpen(false); setAuthOpen(true); }}
              >
                Login
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </header>
  );
}
