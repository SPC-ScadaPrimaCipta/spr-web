import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Home, Target, Cpu, Briefcase } from "lucide-react";
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionAlias: Record<string, string> = {
    "layanan-pendukung": "layanan",
  };

  const navIconMap: Record<string, any> = {
    "#beranda": Home,
    "#visi-misi": Target,
    "#teknologi": Cpu,
    "#layanan": Briefcase,
    "#kontak": Phone,
  };

  const navLinks = [
    { name: "Home", href: "#beranda" },
    { name: "Visi & Misi", href: "#visi-misi" },
    { name: "Solusi dan Teknologi", href: "#teknologi" },
    { name: "Services", href: "#layanan" },
    { name: "Kontak", href: "#kontak" },
  ];

  const isActive = (href: string) => {
    const id = href.substring(1);
    return activeSection === id || sectionAlias[activeSection] === id;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "lg:bg-slate-900/95 lg:backdrop-blur-md lg:shadow-lg lg:border-b lg:border-slate-800/40 lg:py-3 max-lg:top-3 max-lg:left-3 max-lg:right-3 max-lg:bg-slate-950/90 max-lg:backdrop-blur-xl max-lg:shadow-[0_-8px_30px_rgba(0,0,0,0.5)] max-lg:rounded-2xl max-lg:py-3"
            : "bg-slate-950/40 backdrop-blur-xs lg:border-b lg:border-slate-800/20 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#beranda"
              onClick={(e) => handleLinkClick(e, "#beranda")}
              className="flex items-center gap-2.5 group"
            >
              <div className="group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
                <SakatoyoLogo className="h-10 w-10 sm:h-11 sm:w-11" />
              </div>
              <span className="font-display font-bold text-sm text-white max-lg:text-xs max-lg:leading-tight lg:hidden">
                Sakatoyo Prima Resources
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium tracking-wide font-display transition-all duration-200 relative ${
                    isActive(link.href)
                      ? "text-amber-400 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-amber-400 to-orange-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Desktop Contact CTA */}
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

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
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
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed z-40 lg:hidden max-lg:top-20 max-lg:left-3 max-lg:right-3 bg-slate-950/98 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-4 pt-4 pb-4 space-y-1.5">
              {navLinks.filter(l => l.href !== "#kontak").map((link) => {
                const Icon = navIconMap[link.href] || Home;
                const active = isActive(link.href);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center gap-3 px-3 py-3.5 rounded-xl text-sm font-medium font-display transition-colors ${
                      active
                        ? "bg-amber-500/10 text-amber-400 font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href="#kontak"
                  onClick={(e) => handleLinkClick(e, "#kontak")}
                  className="flex items-center justify-center w-full px-4 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider font-display text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Hubungi Kami
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
