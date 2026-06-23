import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { layananUtama } from "../data";
import { 
  Briefcase, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  Settings, 
  FileCheck, 
  GitBranch, 
  Activity, 
  Beaker, 
  Cpu, 
  Hammer, 
  Sparkles 
} from "lucide-react";

// Helper map to match services to beautiful visual icons
const designIcons: Record<string, any> = {
  "Studi Potensi dan Karakterisasi Material": Beaker,
  "Studi Kelayakan (Feasibility Study)": FileCheck,
  "Perancangan Proses Penambangan dan Pengolahan Mineral": GitBranch,
  "Desain Fasilitas Proses": Layers,
  "Manajemen Proyek": Briefcase,
  "Sistem Otomasi Industri": Activity,
  // Section B
  "Pelatihan Proses Penambangan dan Pengolahan Mineral": Cpu,
  "Pelatihan Metalurgi dan Paduan Logam (Alloy)": Settings,
  "Pelatihan Teknologi Perhiasan dan Kriya Logam": Hammer,
  "Pelatihan Otomasi Industri": Sparkles,
};

export default function Layanan() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="layanan" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative vertical coordinates overlay & background grid */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-amber-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold tracking-widest text-amber-500 uppercase block">
            Solusi Rekayasa Komprehensif
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Services
          </h2>
          <p className="font-sans font-light text-slate-300 text-sm sm:text-base leading-relaxed">
            SPR menawarkan layanan terintegrasi mulai dari studi awal rekayasa hingga program peningkatan kompetensi praktis berbasis industri.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        </div>

        {/* Action Tabs switcher */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          {layananUtama.map((cat, idx) => {
            const isSelected = activeTab === idx;
            const Icon = idx === 0 ? Briefcase : BookOpen;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`relative px-6 py-4.5 rounded-2xl w-full sm:w-auto min-w-[280px] font-display text-sm font-bold tracking-wide flex items-center justify-center space-x-3 transition-all duration-200 cursor-pointer overflow-hidden group border ${
                  isSelected
                    ? "bg-slate-950 border-amber-500/50 text-amber-400 shadow-xl"
                    : "bg-slate-950/40 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-950/60"
                }`}
              >
                {/* Background active glow pill controlled by layoutId */}
                {isSelected && (
                  <motion.div
                    layoutId="layananActiveTabBg"
                    className="absolute inset-0 bg-amber-500/5 pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                
                <Icon className={`h-5 w-5 transition-transform duration-200 group-hover:scale-105 ${isSelected ? "text-amber-500" : "text-slate-400"}`} />
                <span className="text-left leading-tight truncate">
                  {idx === 0 ? "Konsultansi & Rekayasa" : "Pelatihan & SDM"}
                </span>
                
                {isSelected && (
                  <span className="flex h-1.5 w-1.5 rounded-full bg-amber-500 absolute top-4 right-4" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Intro Banner */}
        <div className="bg-slate-950 border border-slate-800/80 p-6 sm:p-8 rounded-2xl mb-8 relative">
          <div className="absolute top-0 right-0 h-full w-32 bg-[radial-gradient(circle_at_right_center,#d97706,transparent_60%)] opacity-10 pointer-events-none" />
          <p className="font-display font-semibold text-lg text-amber-400 mb-2">
            {layananUtama[activeTab].categoryTitle}
          </p>
          <p className="font-sans font-light text-slate-300 text-sm sm:text-base leading-relaxed">
            {layananUtama[activeTab].categorySubtitle}
          </p>
        </div>

        {/* Services Grid Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            {layananUtama[activeTab].items.map((item, idx) => {
              const ServiceIcon = designIcons[item.title] || Briefcase;
              return (
                <div
                  key={idx}
                  className="bg-slate-950 hover:bg-slate-950/90 border border-slate-800/80 hover:border-amber-500/40 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 group shadow-lg relative"
                >
                  <div className="space-y-5">
                    {/* Icon header line */}
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-amber-500 group-hover:text-amber-400 group-hover:bg-amber-950/10 transition-colors">
                        <ServiceIcon className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-sans font-light text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Supporting sub bullets if they exist (e.g. perhiasan kriya logam) */}
                    {item.bullets && item.bullets.length > 0 && (
                      <div className="pt-3 border-t border-slate-900">
                        <ul className="grid grid-cols-2 gap-2 text-xs">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-center space-x-1.5 text-slate-300">
                              <CheckCircle2 className="h-3 w-3 text-amber-500 flex-shrink-0" />
                              <span className="font-medium truncate">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
