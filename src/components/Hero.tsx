import React from "react";
import { motion } from "motion/react";
import { companyProfile } from "../data";
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
  Leaf 
} from "lucide-react";

export default function Hero() {
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
        className="relative min-h-[90vh] max-md:min-h-[80vh] pt-32 pb-16 max-md:pt-20 max-md:pb-10 flex flex-col justify-center items-center bg-slate-950 text-white overflow-hidden text-center"
      >
         <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 pointer-events-none transform transition-transform duration-[10s]"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920')",
              filter: "brightness(0.3) contrast(1.15) saturate(0.95)"
            }}
          />


        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-amber-500/20 to-orange-600/5 blur-3xl pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 max-md:space-y-5 flex flex-col items-center">
          {/* Large Center Corporate Logo with Motion */}
          {/* <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative p-1 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent rounded-full shadow-2xl shadow-amber-500/5"
          >
            <SakatoyoLogo className="h-44 w-44 sm:h-52 sm:w-52" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 opacity-20 blur-md -z-10 animate-pulse" />
          </motion.div> */}

          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-800 px-4 py-1.5 rounded-full text-xs font-mono text-amber-400 font-bold uppercase tracking-widest shadow-inner shadow-black/40"
          >
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse mr-1" />
            PT. Sakatoyo Prima Resources
          </motion.div> */}

          {/* Large Display Titles */}
          <div className="space-y-4 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white"
            >
              PT. SAKATOYO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                PRIMA RESOURCES
              </span>{" "}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-display text-xs sm:text-base lg:text-lg font-medium text-slate-300 leading-relaxed max-w-2xl mx-auto"
            >
              {companyProfile.tagline}
            </motion.p>
          </div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
          >
            <button
              onClick={handleContactUs}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 max-md:px-5 max-md:py-2.5 rounded-xl text-sm max-md:text-xs font-bold uppercase tracking-wider font-display text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-orange-500/20 transition-all duration-250 cursor-pointer"
            >
              Hubungi Kami
              <ArrowRight className="ml-2.5 h-4.5 w-4.5" />
            </button>
            <button
              onClick={handleLearnMore}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 max-md:px-5 max-md:py-2.5 rounded-xl text-sm max-md:text-xs font-semibold uppercase tracking-wider font-display text-white border border-slate-700 hover:border-amber-500 hover:bg-slate-900/60 transition-colors cursor-pointer"
            >
              Pelajari Layanan
            </button>
          </motion.div>

          {/* Flow visualizer embedded cleanly at the bottom of header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full pt-2 max-w-2xl"
          >
            <div className="text-xs sm:text-sm font-mono font-bold tracking-widest text-white uppercase mb-3">
              ALUR REKAYASA & SOLUSI PROSES TERINTEGRASI SPR
            </div>
            <div className="grid grid-cols-5 gap-2 relative">
              {steps.map((step, idx) => {
                const IconComp = step.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className={`p-3 max-md:p-2 rounded-lg border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${step.color}`}>
                      <IconComp className="h-6 w-6 max-md:h-4 max-md:w-4" />
                    </div>
                    <span className="text-[10px] max-md:text-[8px] text-white font-medium leading-tight mt-1.5 max-w-[90px] line-clamp-2">
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Overview / Profil Perusahaan (Directly Below Header) */}
      <section
        id="profil-perusahaan"
        className="py-24 max-md:py-12 bg-slate-900 text-white relative border-t border-slate-950"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-md:gap-8 items-start">
            
            {/* Header Column Block with Key Stats */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold tracking-widest text-amber-500 uppercase block">
                  Kenali Kami Lebih Dekat
                </span>
                <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                  Profil Perusahaan
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
              </div>

              {/* Company description lead text */}
              <p className="font-sans font-light text-slate-300 text-base leading-relaxed">
                PT. Sakatoyo Prima Resources (SPR) didukung oleh para profesional berpengalaman luas di sektor pertambangan nasional untuk menghadirkan komitmen rekayasa berujung pada peningkatan profitabilitas berkelanjutan pelanggan kami.
              </p>

              {/* Dynamic stats cards layout */}
              <div className="grid grid-cols-3 gap-4 max-md:gap-2 pt-6 border-t border-slate-800">
                <div className="p-4 max-md:p-2 bg-slate-950/40 border border-slate-850 rounded-xl space-y-1 hover:border-amber-500/20 transition-all group">
                  <div className="text-xl sm:text-2xl max-md:text-base font-display font-bold text-amber-400 group-hover:text-amber-300">100%</div>
                  <div className="text-[10px] max-md:text-[8px] text-slate-400 font-mono tracking-wider uppercase">Solusi Terpadu</div>
                </div>
                <div className="p-4 max-md:p-2 bg-slate-950/40 border border-slate-850 rounded-xl space-y-1 hover:border-orange-500/20 transition-all group">
                  <div className="text-xl sm:text-2xl max-md:text-base font-display font-bold text-orange-400 group-hover:text-orange-300">Otomatis</div>
                  <div className="text-[10px] max-md:text-[8px] text-slate-400 font-mono tracking-wider uppercase">PLC, SCADA</div>
                </div>
                <div className="p-4 max-md:p-2 bg-slate-950/40 border border-slate-850 rounded-xl space-y-1 hover:border-emerald-500/20 transition-all group">
                  <div className="text-xl sm:text-2xl max-md:text-base font-display font-bold text-emerald-400 group-hover:text-emerald-300">Eko-Hijau</div>
                  <div className="text-[10px] max-md:text-[8px] text-slate-400 font-mono tracking-wider uppercase">Minim Kimia</div>
                </div>
              </div>
            </div>

            {/* Detailed text Blocks representing complete data in single section */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-slate-950 p-6 sm:p-8 max-md:p-4 rounded-2xl border border-slate-850 space-y-6 max-md:space-y-4 shadow-xl relative"
              >
                <div className="absolute top-0 right-0 h-28 w-28 bg-[radial-gradient(circle_at_top_right,#f59e0b,transparent_60%)] opacity-30 pointer-events-none" />
                
                <h3 className="font-display font-bold text-lg text-amber-400 uppercase tracking-widest flex items-center">
                  <Award className="h-5 w-5 mr-2 text-amber-500 flex-shrink-0" />
                  Selayang Pandang (Overview)
                </h3>

                <div className="space-y-6 max-md:space-y-3 text-sm sm:text-base max-md:text-xs text-slate-300 leading-relaxed font-sans font-light">
                  <p className="text-white font-medium pl-3 border-l-2 border-amber-500">
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
}
