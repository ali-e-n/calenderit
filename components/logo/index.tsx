type LogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Logo({ size = "md", className }: LogoProps) {
  const nameSize   = { sm: "15px", md: "19px", lg: "28px" }[size];
  const tagSize    = { sm: "7px",  md: "8px",  lg: "10px"  }[size];
  const gap        = { sm: "5px",  md: "6px",  lg: "9px"   }[size];

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap,
        userSelect: "none",
      }}
    >
      {/* Brand name */}
      <span
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
          fontSize: nameSize,
          fontWeight: 300,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "#F0EDE8",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        Yaash Rajpoot
      </span>

      {/* Thin gold rule */}
      <div
        style={{
          width: "100%",
          height: "0.5px",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.75) 30%, rgba(201,168,76,0.75) 70%, transparent)",
        }}
      />

      {/* Saloon sub-label */}
      <span
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
          fontSize: tagSize,
          fontWeight: 300,
          letterSpacing: "0.68em",
          textTransform: "uppercase",
          color: "#C9A84C",
          lineHeight: 1,
          paddingLeft: "0.68em",
          whiteSpace: "nowrap",
        }}
      >
        Saloon
      </span>
    </div>
  );
}
