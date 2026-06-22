import { motion } from "motion/react";
import { layananPendukung } from "../data";
import { CheckCircle2, Globe, Map, ShieldCheck, Recycle, Factory, Cpu } from "lucide-react";

const pendukungIcons = [
  Map, // Pemetaan geologi
  Globe, // Konsultansi eksplorasi
  ShieldCheck, // Pendampingan perizinan
  Recycle, // Pengelolaan limbah B3
  Factory, // Perancangan kawasan industri
  Cpu, // Pengembangan sistem otomasi/digitalisasi
];

export default function LayananPendukung() {
  return (
    <section id="layanan-pendukung" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Blueprint grid background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title & layout pairing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs font-bold tracking-widest text-emerald-400 uppercase block">
              Mendukung Ekosistem Hulu ke Hilir
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Layanan Pendukung
            </h2>
            <p className="font-sans font-light text-slate-300 text-sm sm:text-base leading-relaxed">
              Untuk memberikan solusi yang lebih menyeluruh, SPR menyediakan layanan tambahan terpadu dalam ranah eksplorasi, regulasi pertambangan, dan optimalisasi sirkular sumber daya sekunder.
            </p>
            <div className="w-16 h-1 bg-emerald-500 rounded-full" />
          </div>

          <div className="lg:col-span-7">
            {/* Displaying as list cards with custom illustrative layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {layananPendukung.map((service, idx) => {
                const Icon = pendukungIcons[idx] || CheckCircle2;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="flex items-center space-x-4 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/30 p-5 rounded-2xl transition-all duration-200 group"
                  >
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-emerald-400 group-hover:text-emerald-300 group-hover:bg-emerald-950/10 transition-colors flex-shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-sans font-light text-slate-300 text-xs sm:text-sm leading-relaxed group-hover:text-white transition-colors">
                        {service}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Blueprint mini status badge */}
        <div className="mt-12 bg-slate-900/40 border border-slate-800/60 p-4.5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-white tracking-wide">KOMITMEN 3R & SIRKULAR EKONOMI</span>
          </div>
          <p className="font-sans font-light text-slate-400 text-center sm:text-right text-[11px] leading-tight">
            *Merujuk pada penanganan limbah B3, mineral berkadar rendah, dan optimalisasi tailing sisa pengolahan.
          </p>
        </div>

      </div>
    </section>
  );
}
