import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t border-primary/15"
      style={{ background: "#1A1A1A" }}
    >
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-12">

        {/* Logo text */}
        <div
          className="font-display text-[17px] tracking-[0.12em] uppercase text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Yaash<span style={{ color: "#C9A84C" }}>.</span>Rajpoot
        </div>

        {/* Copy */}
        <p className="text-[10px] tracking-[0.1em] text-muted-foreground order-last md:order-none">
          © {new Date().getFullYear()} Yaash Rajpoot. All rights reserved.
        </p>

        {/* Links */}
        <ul className="flex gap-7">
          {[
            { label: "Instagram", href: "#" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-[10px] tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
