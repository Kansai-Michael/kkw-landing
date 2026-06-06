"use client";

import { useState, useEffect } from "react";

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,30,80,0.97)" : "rgba(10,30,80,0.55)",
        backdropFilter: "blur(8px)",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="Kansai Karate Willawong"
          className="h-12 w-auto"
        />

        {/* Phone CTA */}
        <a
          href="tel:0421366355"
          className="flex items-center gap-2 text-white font-bold text-sm md:text-base hover:text-[#FFB800] transition-colors"
        >
          <span className="hidden sm:inline">Call us:</span>
          <span>0421 366 355</span>
        </a>
      </div>
    </header>
  );
}
