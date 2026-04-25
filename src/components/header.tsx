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
    <header
      className={`fixed z-50 top-0 inset-x-0 transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-md py-3" : "bg-transparent py-5"
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
              className={`md:hidden flex items-center justify-center ${
                isScrolled ? "text-[#171717]" : "text-white"
              }`}
            >
              <HugeiconsIcon
                icon={Menu01Icon}
                strokeWidth={2}
                className="size-8"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
