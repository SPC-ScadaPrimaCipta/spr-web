import { motion } from "motion/react";
import { mengapaSPR } from "../data";
import { Users, Briefcase, Award, Sparkles, BookOpen, Heart, Shield } from "lucide-react";

// Map key string names to Lucide icon components
const iconMap: Record<string, any> = {
  Users: Users,
  Briefcase: Briefcase,
  ShieldAlert: Shield, // Map to Shield for a nicer professional look than Alert
  Sparkles: Sparkles,
  BookOpen: BookOpen,
  Heart: Heart,
};

export default function MengapaMemilih() {
  return (
    <section id="mengapa-spr" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Dynamic diagonal subtle highlight panels */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-amber-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-slate-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title layout */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold tracking-widest text-amber-500 uppercase block">
            Kemitraan Jangka Panjang
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
            Mengapa Memilih SPR
          </h2>
          <p className="font-sans font-light text-slate-400 text-sm sm:text-base leading-relaxed">
            Keunggulan kapasitas rekayasa dan komitmen kami menjamin keberlanjutan investasi pertambangan dan pengolahan Anda.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        </div>

        {/* Responsive Grid block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {mengapaSPR.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-slate-950/60 hover:bg-slate-950 border border-slate-800/80 hover:border-amber-500/30 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 group shadow-lg"
              >
                <div className="space-y-4">
                  {/* Icon section */}
                  <div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800/60 flex items-center justify-center text-amber-400 group-hover:text-amber-300 group-hover:bg-amber-950/10 transition-colors">
                    <IconComponent className="h-5.5 w-5.5" />
                  </div>
                  
                  {/* Paragraph copy */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors tracking-tight">
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
