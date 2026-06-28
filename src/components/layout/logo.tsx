"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className = "", size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-10",
    lg: "h-12 sm:h-14",
  };

  const h = sizes[size];

  return (
    <Link href="/" className={`inline-flex items-center group ${className}`}>
      {/* Official Turn2Law Brand Logo Image Asset */}
      <img
        src="/logo.jpeg"
        alt="Turn2Law Logo"
        className={`${h} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
      />
    </Link>
  );
}
