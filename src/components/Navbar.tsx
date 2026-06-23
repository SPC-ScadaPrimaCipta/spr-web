import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import SakatoyoLogo from "./SakatoyoLogo";
import { companyProfile } from "../data";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#beranda" },
    { name: "Visi & Misi", href: "#visi-misi" },
    { name: "Solusi dan Teknologi", href: "#teknologi" },
    { name: "Services", href: "#layanan" },
    { name: "Kontak", href: "#kontak" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800/40 py-3"
          : "bg-slate-950/40 backdrop-blur-xs py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#beranda"
            onClick={(e) => handleLinkClick(e, "#beranda")}
            className="flex items-center space-x-3 group"
          >
            <div className="group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
              <SakatoyoLogo className="h-10 w-10 sm:h-11 sm:w-11" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium tracking-wide font-display transition-all duration-200 relative ${
                    isActive
                      ? "text-amber-400 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-amber-400 to-orange-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#kontak"
              onClick={(e) => handleLinkClick(e, "#kontak")}
              className="inline-flex items-center justify-center px-4.5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-display text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-md shadow-amber-500/10 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="h-3.5 w-3.5 mr-2" />
              Hubungi Kami
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden border-t border-slate-800 bg-slate-950/98 backdrop-blur-lg"
            id="mobile-menu"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5 sm:px-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium font-display transition-colors ${
                      isActive
                        ? "bg-amber-500/10 text-amber-400 font-semibold border-l-2 border-amber-500"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 pb-2">
                <a
                  href="#kontak"
                  onClick={(e) => handleLinkClick(e, "#kontak")}
                  className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider font-display text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Hubungi Kami
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
