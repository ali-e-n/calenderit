"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuthModal } from "@/components/models/auth-modal";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 10;

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-[background-color,border-color] duration-200",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="flex h-14 w-full items-center justify-between gap-3 px-4 py-2 md:h-16">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity hover:opacity-90 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.4))]"
          aria-label="Yaash Rajpoot - Home"
        >
          <Image
            src="/images/logo5.png"
            alt="Yaash Rajpoot - Hair and makeup saloon"
            width={700}
            height={84}
            className="h-10 w-auto object-contain object-left md:h-11"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <nav className="hidden items-center gap-4 md:flex md:gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
          <Button
            size="sm"
            className="shrink-0 md:size-default md:px-5"
            onClick={() => setAuthOpen(true)}
          >
            Login
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile: menu + theme + login */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-9"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[min(85vw,320px)] flex-col">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-1 flex-col gap-1 pt-6">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-border pt-4">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => {
                    setMenuOpen(false);
                    setAuthOpen(true);
                  }}
                >
                  Login
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </header>
  );
}
