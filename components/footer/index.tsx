import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50 py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="flex w-fit items-center transition-opacity hover:opacity-90"
            aria-label="Yaash Rajpoot - Home"
          >
            <Image
              src="/images/logo5.png"
              alt="Yaash Rajpoot - Hair and makeup saloon"
              width={180}
              height={44}
              className="h-10 w-auto object-contain object-left md:h-11"
              unoptimized
            />
          </Link>
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/services" className="text-muted-foreground hover:text-foreground">
              Services
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link href="/login" className="text-muted-foreground hover:text-foreground">
              Login
            </Link>
          </nav>
        </div>
        <p className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yaash Rajpoot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
