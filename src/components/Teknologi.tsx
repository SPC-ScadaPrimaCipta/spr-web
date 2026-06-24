import { motion } from "motion/react";
import { teknologiPendekatan } from "../data";
import { Cpu, TrendingUp, Layers, Sliders, Leaf, Shield } from "lucide-react";

// Icon mapping dictionary
const iconMap: Record<string, any> = {
  Cpu: Cpu,
  TrendingUp: TrendingUp,
  Layers: Layers,
  Sliders: Sliders,
  Leaf: Leaf,
};

export default function Teknologi() {
  return (
    <section id="teknologi" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Editorial detail lines */}
      <div className="absolute top-1/3 left-10 w-40 h-[1px] bg-amber-500/10" />
      <div className="absolute bottom-1/3 right-10 w-40 h-[1px] bg-orange-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 pb-8 border-b border-slate-900">
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs font-bold tracking-widest text-amber-500 uppercase block">
              Inovasi & Pendekatan Rekayasa
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-none">
              Solusi dan Teknologi
            </h2>
          </div>
          <div className="lg:col-span-8">
                    <p className="font-sans font-light text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
              {teknologiPendekatan.description}
            </p>
          </div>
        </div>

        {/* Dynamic Grid representing the pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {teknologiPendekatan.items.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Cpu;
            const isFirst = idx === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`flex flex-col justify-between border rounded-2xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden group shadow-lg ${
                  isFirst
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-950 border-amber-500/30 hover:border-amber-500/60"
                    : "bg-slate-900/60 hover:bg-slate-900 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                {/* Glow filter background on hover */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all duration-300 pointer-events-none" />

                <div className="space-y-6">
                  {/* Icon badge */}
                  <div className={`inline-flex items-center justify-center p-3 rounded-xl border transition-colors ${
                    isFirst 
                      ? "bg-amber-500/10 text-amber-400 border-amber-500/20 group-hover:bg-amber-500 group-hover:text-slate-950" 
                      : "bg-slate-950 text-slate-400 border-slate-800 group-hover:border-amber-500/30 group-hover:text-amber-400"
                  }`}>
                    <IconComp className="h-6 w-6" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display font-bold tracking-tight text-white text-base sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="font-sans font-light text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
