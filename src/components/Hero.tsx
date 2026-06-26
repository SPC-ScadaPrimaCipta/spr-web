import React from "react";
import { motion } from "motion/react";
import { companyProfile, mengapaSPR } from "../data";
import SakatoyoLogo from "./SakatoyoLogo";
import { 
  ArrowRight, 
  ChevronRight, 
  Zap, 
  Target, 
  Award, 
  Microscope, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Leaf,
  Users,
  Briefcase,
  Shield,
  BookOpen,
  Heart
} from "lucide-react";

const Hero = React.memo(function Hero() {
  const mengapaIconMap: Record<string, any> = {
    Users: Users,
    Briefcase: Briefcase,
    ShieldAlert: Shield,
    Sparkles: Sparkles,
    BookOpen: BookOpen,
    Heart: Heart,
  };

  const steps = [
    { title: "Eksplorasi & Geologi", icon: Microscope, color: "text-amber-400 border-amber-500/20 bg-amber-950/20" },
    { title: "Karakterisasi & Studi", icon: Target, color: "text-orange-400 border-orange-500/20 bg-orange-950/20" },
    { title: "Desain Proses & DED", icon: Cpu, color: "text-amber-300 border-amber-300/20 bg-amber-950/10" },
    { title: "Otomasi & PLC/SCADA", icon: Zap, color: "text-emerald-400 border-emerald-500/20 bg-emerald-950/20" },
    { title: "Metalurgi & Alloy", icon: Sparkles, color: "text-yellow-400 border-yellow-500/20 bg-yellow-950/20" },
  ];

  const handleLearnMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector("#visi-misi");
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

  const handleContactUs = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector("#kontak");
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
      {/* SECTION 1: Unified Corporate Header */}
      <section
        id="beranda"
        className="relative min-h-dvh pt-32 max-md:pt-16 pb-16 max-md:pb-8 flex flex-col justify-center items-center bg-slate-950 text-white overflow-hidden text-center"
      >
         <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 pointer-events-none transform transition-transform duration-[10s]"
            style={{ 
              backgroundImage: "url('/bg-hero.jpg')",
              filter: "brightness(0.3) contrast(1.15) saturate(0.95)"
            }}
          />


        {/* Ambient background glows */}
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 max-md:space-y-4 flex flex-col items-center">

          {/* Large Display Titles */}
          <div className="space-y-4 max-md:space-y-2 max-w-3xl">
            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-black text-[1.35rem] sm:text-5xl lg:text-5xl tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500"
            >
              SAKATOYO PRIMA RESOURCES
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-xs sm:text-base lg:text-lg font-medium text-slate-300 leading-relaxed max-w-2xl mx-auto"
            >
              {companyProfile.tagline}
            </motion.p>
          </div>

          {/* Action CTAs */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row max-md:grid max-md:grid-cols-2 gap-4 max-md:gap-3 items-center justify-center w-full sm:w-auto"
          >
            <button
              onClick={handleContactUs}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 max-md:px-3 py-3.5 max-md:py-1.5 rounded-xl max-md:rounded-lg text-sm max-md:text-xs font-bold uppercase tracking-wider font-display text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-lg max-md:shadow-md shadow-orange-500/20 transition-all duration-250 cursor-pointer"
            >
              Hubungi Kami
              <ArrowRight className="ml-2.5 max-md:ml-1.5 h-4.5 max-md:h-3.5 w-4.5 max-md:w-3.5" />
            </button>
            <button
              onClick={handleLearnMore}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 max-md:px-3 py-3.5 max-md:py-1.5 rounded-xl max-md:rounded-lg text-sm max-md:text-xs font-semibold uppercase tracking-wider font-display text-white bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 shadow-lg max-md:shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 transition-all duration-250 cursor-pointer"
            >
              Services
            </button>
          </motion.div>

          {/* Mengapa SPR Preview */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl pt-10 max-md:pt-4 border-t border-white/10"
          >
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-md:gap-2">
              {mengapaSPR.map((item, idx) => {
                const IconComp = mengapaIconMap[item.icon] || Award;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      const el = document.querySelector("#mengapa-spr");
                      if (el) {
                        const offset = 80;
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elRect = el.getBoundingClientRect().top;
                        window.scrollTo({ top: elRect - bodyRect - offset, behavior: "smooth" });
                      }
                    }}
                    className="flex flex-col items-center text-center space-y-2 group cursor-pointer"
                  >
                    <div className="h-11 max-md:h-9 w-11 max-md:w-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:bg-amber-500/25 group-hover:border-amber-400/50 transition-all">
                      <IconComp className="h-5.5 max-md:h-4.5 w-5.5 max-md:w-4.5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-white leading-tight transition-colors">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Overview / Profil Perusahaan */}
      <section
        id="profil-perusahaan"
        className="py-24 max-md:py-12 bg-slate-900 text-white relative border-t border-slate-950"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-md:gap-8 items-start">
            
            {/* Header Column Block with Key Stats */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                  Profil Perusahaan
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
              </div>

              {/* Company description lead text */}
              <p className="font-sans font-light text-slate-300 text-sm sm:text-base leading-relaxed">
                Sakatoyo Prima Resources (SPR) didukung oleh para profesional berpengalaman luas di sektor pertambangan nasional untuk menghadirkan komitmen rekayasa berujung pada peningkatan profitabilitas berkelanjutan pelanggan kami.
              </p>

            </div>

            {/* Detailed text Blocks representing complete data in single section */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6 max-md:space-y-4"
              >
                <h3 className="font-display font-bold text-lg text-amber-400 uppercase tracking-widest flex items-center">
                  <Award className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0" />
                  Overview
                </h3>

                <div className="space-y-6 max-md:space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-light">
                  <p className="text-white pl-3 border-l-2 border-amber-500">
                    {companyProfile.overviews[0]}
                  </p>
                  <p>
                    {companyProfile.overviews[1]}
                  </p>
                  <p>
                    {companyProfile.overviews[2]}
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
});

export default Hero;
