'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'Community', href: '#testimonials' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 flex-shrink-0">
          <img
            src="/logo.png"
            alt="WorldFriends"
            width={40}
            height={40}
            className="w-10 h-10 rounded-lg"
          />
          <span className="text-xl font-bold font-display text-[#818CF8] tracking-tight hidden sm:block">
            WorldFriends
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
              className="text-sm font-medium text-slate-600 hover:text-[#818CF8] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="rounded-full bg-[#818CF8] hover:bg-[#6c78f0] text-white px-6 py-2 font-semibold shadow-lg shadow-[#818CF8]/25 hover:shadow-xl hover:shadow-[#818CF8]/30 transition-all duration-300 hover:-translate-y-0.5">
            Download App
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-[#818CF8] z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-xl border-b border-slate-100 p-6 pt-24 md:hidden flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className="text-lg font-medium text-slate-800 hover:text-[#818CF8]"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full rounded-full bg-[#818CF8] hover:bg-[#6c78f0] text-white py-3 text-lg font-semibold shadow-lg shadow-[#818CF8]/25">
                Download App
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
