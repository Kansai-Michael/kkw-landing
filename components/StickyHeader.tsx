"use client";

import { useState, useEffect } from "react";

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(4,4,4,0.97)" : "rgba(4,4,4,0.50)",
        backdropFilter: "blur(6px)",
        borderBottom: scrolled ? "1px solid rgba(221,51,51,0.3)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/kkw-logo.webp"
          alt="Kansai Karate Willawong"
          className="h-12 w-auto"
        />
        <div className="flex items-center gap-4">
          <a
            href="#register"
            className="hidden sm:inline-block text-white font-bold text-xs uppercase tracking-widest px-5 py-2 transition-colors"
            style={{ background: "#dd3333" }}
          >
            Claim Offer
          </a>
          <a
            href="tel:0421366355"
            className="text-white font-bold text-sm hover:text-[#dd3333] transition-colors"
          >
            0421 366 355
          </a>
        </div>
      </div>
    </header>
  );
}
