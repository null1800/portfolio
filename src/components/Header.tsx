import React from "react"; 
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./ui/MobileNav";

function Header() {
  return (
    <header className="py-6 sm:py-8 lg:py-12 text-[#eae7e1] font-bold bg-[#35281e]">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 sm:gap-6 lg:gap-10">

        {/* Logo */}
        <Link
          href="/"
          className="text-4xl sm:text-5xl font-extrabold tracking-wide font-[var(--font-playfair)]"
        >
          BZ
          <span className="text-[#d1a655] drop-shadow-[0_0_10px_rgba(209,166,85,0.6)]">
            .
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-10 flex-1">
          <Nav />
        </div>

        {/* Spacer for alignment on small screens */}
        <div className="flex-1 xl:hidden"></div>

        {/* BOOK NOW Button */}
        <Button
          asChild
          className="rounded-full px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold
                     bg-gradient-to-r from-[#d1a655] via-[#e5c57d] to-[#d1a655]
                     text-[#35281e] hover:from-[#e5c57d] hover:to-[#f0d999]
                     transition-all duration-300 shadow-[0_4px_20px_rgba(209,166,85,0.4)]
                     hover:shadow-[0_6px_30px_rgba(209,166,85,0.6)]
                     hover:scale-105 flex-shrink-0"
        >
          <a
            href="https://linktr.ee/your-artist-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK NOW!
          </a>
        </Button>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
}

export default Header;
