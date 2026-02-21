import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GG</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">Golo Gaia</h1>
              <p className="text-emerald-400 text-xs">Climate Technologies</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('solution')} className="text-neutral-300 hover:text-emerald-400 transition-colors text-sm font-medium">
              Solution
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-neutral-300 hover:text-emerald-400 transition-colors text-sm font-medium">
              Impact
            </button>
            <button onClick={() => scrollToSection('advantage')} className="text-neutral-300 hover:text-emerald-400 transition-colors text-sm font-medium">
              Why Us
            </button>
            <button onClick={() => scrollToSection('commercial')} className="text-neutral-300 hover:text-emerald-400 transition-colors text-sm font-medium">
              Commercial
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-neutral-300 hover:text-emerald-400 transition-colors text-sm font-medium">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Partner With Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('solution')} className="block w-full text-left text-neutral-300 hover:text-emerald-400 transition-colors text-sm font-medium py-2">
              Solution
            </button>
            <button onClick={() => scrollToSection('impact')} className="block w-full text-left text-neutral-300 hover:text-emerald-400 transition-colors text-sm font-medium py-2">
              Impact
            </button>
            <button onClick={() => scrollToSection('advantage')} className="block w-full text-left text-neutral-300 hover:text-emerald-400 transition-colors text-sm font-medium py-2">
              Why Us
            </button>
            <button onClick={() => scrollToSection('commercial')} className="block w-full text-left text-neutral-300 hover:text-emerald-400 transition-colors text-sm font-medium py-2">
              Commercial
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-neutral-300 hover:text-emerald-400 transition-colors text-sm font-medium py-2">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-2"
            >
              Partner With Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
