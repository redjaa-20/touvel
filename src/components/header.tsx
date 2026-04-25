"use client";

import { Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { NAVIGATION } from "src/const/navigation";

// ------------------------------------------------------------

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scroll ke bawah
        setIsVisible(false);
      } else {
        // Scroll ke atas
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed z-50 top-0 inset-x-0 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md py-3"
            : "bg-transparent py-5"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="w-full max-w-[1240px] mx-auto px-4 md:px-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2
                className={`font-el-messiri text-4xl font-medium tracking-[0.3px] transition-colors duration-300 ${
                  isScrolled ? "text-[#171717]" : "text-white"
                }`}
              >
                Touvel
              </h2>
            </div>
            <div className="flex items-center justify-end gap-10">
              <div
                className={`hidden md:flex items-center gap-10 transition-colors duration-300 ${
                  isScrolled ? "text-[#171717]" : "text-white"
                }`}
              >
                {NAVIGATION.map((nav) => (
                  <Link key={nav.name} href={nav.href} className="uppercase">
                    {nav.name}
                  </Link>
                ))}
              </div>
              <button
                className={`hidden md:flex items-center justify-center gap-2.5 py-3 px-7 text-sm font-karla font-medium tracking-[0.3px] rounded-full transition-colors duration-300 ${
                  isScrolled
                    ? "bg-[#171717] text-white"
                    : "bg-white text-[#171717]"
                }`}
              >
                <span className="uppercase font-medium">HUBUNGI KAMI</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className={`md:hidden flex items-center justify-center ${
                  isScrolled ? "text-[#171717]" : "text-white"
                }`}
              >
                <HugeiconsIcon
                  icon={Menu01Icon}
                  strokeWidth={2}
                  className="size-7"
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-[#171717] text-white transition-transform duration-300 md:hidden flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top: Logo and Close Button */}
        <div className="flex items-center justify-between px-4 py-5">
          <h2 className="font-el-messiri text-4xl font-medium tracking-[0.3px]">
            Touvel
          </h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex flex-col gap-8 px-4 mt-10 flex-1">
          {NAVIGATION.map((nav) => (
            <Link
              key={nav.name}
              href={nav.href}
              className="text-2xl font-karla font-medium uppercase tracking-[0.5px]"
              onClick={() => setIsMenuOpen(false)}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="px-4 mb-8">
          <button className="w-full py-4 text-sm font-karla font-medium tracking-[0.3px] rounded-full bg-white text-[#171717]">
            <span className="uppercase font-medium">HUBUNGI KAMI</span>
          </button>
        </div>
      </div>
    </>
  );
}
