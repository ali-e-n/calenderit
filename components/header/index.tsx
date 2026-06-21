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
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { openBooking } = useBookingModal();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 w-full transition-all duration-400",
        scrolled
          ? "border-b border-primary/15 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
      style={scrolled ? { background: "rgba(13, 13, 13, 0.95)" } : {}}
    >
      <div className="mx-auto flex h-[64px] max-w-screen-2xl items-center justify-between px-6 md:px-12">

        {/* Logo — left */}
        <Link
          href="/"
          className="shrink-0"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            fontWeight: 400,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#F0EDE8",
            textDecoration: "none",
          }}
        >
          Yaash<span style={{ color: "#C9A84C" }}>.</span>Rajpoot
        </Link>

        {/* Nav — center, desktop */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-4 py-1.5 text-[10px] font-medium tracking-[0.22em] uppercase text-foreground/40 transition-all duration-200 hover:text-foreground/85 hover:bg-white/5"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTAs — right, desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setAuthOpen(true)}
            className="text-[10px] tracking-[0.2em] uppercase text-foreground/35 transition-colors hover:text-foreground/65"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => openBooking()}
            className="h-8 rounded-none px-5 text-[10px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-85"
            style={{ background: "#C9A84C", color: "#0D0D0D" }}
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
              className="size-9 text-foreground/50 hover:bg-white/6 hover:text-foreground md:hidden"
              aria-label="Open menu"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-[min(85vw,280px)] flex-col border-primary/15"
            style={{ background: "#0D0D0D" }}
          >
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-0.5 pt-10">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-[10px] tracking-[0.28em] uppercase text-foreground/45 transition-all hover:bg-white/5 hover:text-foreground/85 hover:pl-5"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="space-y-2 border-t border-primary/12 pb-2 pt-5">
              <button
                type="button"
                className="h-11 w-full text-[10px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-85"
                style={{ background: "#C9A84C", color: "#0D0D0D" }}
                onClick={() => { setMenuOpen(false); openBooking(); }}
              >
                Book Now
              </button>
              <button
                type="button"
                className="h-11 w-full border border-primary/15 text-[10px] tracking-[0.2em] uppercase text-foreground/40 transition-colors hover:border-primary/30 hover:text-foreground/65"
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
