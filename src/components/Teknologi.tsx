import { motion } from "motion/react";
import { teknologiPendekatan } from "../data";
import { Cpu, TrendingUp, Layers, Sliders, Leaf, Shield } from "lucide-react";
import Carousel from "./Carousel";

const iconMap: Record<string, any> = {
  Cpu: Cpu,
  TrendingUp: TrendingUp,
  Layers: Layers,
  Sliders: Sliders,
  Leaf: Leaf,
};

export default function Teknologi() {
  const cards = teknologiPendekatan.items.map((item) => {
    const IconComp = iconMap[item.icon] || Cpu;
    return (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className="flex flex-col justify-between border rounded-2xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden group shadow-lg bg-slate-900/60 hover:bg-slate-900 border-slate-800/80 hover:border-slate-700 h-full"
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all duration-300 pointer-events-none" />

        <div className="space-y-6">
          <div className="inline-flex items-center justify-center p-3 rounded-xl border transition-colors bg-slate-900 text-amber-400 border-slate-800 group-hover:bg-amber-950/10 group-hover:text-amber-300">
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
  });

  return (
    <section id="teknologi" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-1/3 left-10 w-40 h-[1px] bg-amber-500/10" />
      <div className="absolute bottom-1/3 right-10 w-40 h-[1px] bg-orange-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <Carousel items={cards} />
      </div>
    </section>
  );
}
