import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">GG</span>
          </div>
          <div>
            <div className="text-white font-semibold leading-tight">
              Gologaiaa
            </div>
            <div className="text-emerald-400 text-xs">
              Climate Technologies
            </div>
          </div>
        </div>

        {/* CENTER: Nav */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection("solution")}
            className="text-white/80 hover:text-white transition text-sm"
          >
            Solution
          </button>

          <button
            onClick={() => scrollToSection("impact")}
            className="text-white/80 hover:text-white transition text-sm"
          >
            Impact
          </button>

          <button
            onClick={() => scrollToSection("advantage")}
            className="text-white/80 hover:text-white transition text-sm"
          >
            Why Us
          </button>

          <button
            onClick={() => scrollToSection("commercial")}
            className="text-white/80 hover:text-white transition text-sm"
          >
            Commercial
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="text-white/80 hover:text-white transition text-sm"
          >
            Contact
          </button>
        </nav>

        {/* RIGHT: CTA */}
        <div className="hidden md:block">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5"
          >
            Partner With Us
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 pb-6 space-y-4">
          {[
            ["solution", "Solution"],
            ["impact", "Impact"],
            ["advantage", "Why Us"],
            ["commercial", "Commercial"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left text-white/80 hover:text-emerald-400 transition text-sm"
            >
              {label}
            </button>
          ))}

          <Button
            onClick={() => scrollToSection("contact")}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-2"
          >
            Partner With Us
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;