import React from "react";

export type LogoVariant = "primary" | "white" | "mark";
export type LogoSize = "sm" | "md" | "lg";

const heights: Record<LogoSize, number> = { sm: 48, md: 64, lg: 80 };

// BASE_URL keeps logos working when the site is served from a subfolder
// (e.g. GitHub Pages at /phanavigator/) as well as from the root.
const base = import.meta.env.BASE_URL;

const logoSrc: Record<LogoVariant, string> = {
  primary: `${base}logo-primary.svg`,
  white: `${base}logo-primary.svg`,
  mark: `${base}logo-mark.svg`,
};

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

export function Logo({ variant = "primary", size = "md", className }: LogoProps) {
  const h = heights[size];

  return (
    <img
      src={logoSrc[variant]}
      alt="PH Navigator"
      className={className}
      style={{ height: h, width: "auto" }}
    />
  );
}
