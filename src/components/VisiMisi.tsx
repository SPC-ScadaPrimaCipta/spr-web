import { motion } from "motion/react";
import { visiMisi } from "../data";
import { ToggleLeft, CircleChevronRight, Target, Telescope } from "lucide-react";

export default function VisiMisi() {
  return (
    <section id="visi-misi" className="py-24 bg-slate-900 border-t border-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-black text-xs uppercase tracking-widest text-amber-400">
            Arah Strategis Perusahaan
          </h2>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Visi & Misi PT. SPR
          </h3>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Card Visi (Left 5-cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 p-8 sm:p-10 rounded-2xl flex flex-col justify-between shadow-xl relative group"
          >
            <div className="absolute top-4 right-4 text-amber-500/20">
              <Telescope className="h-24 w-24 stroke-[1.5]" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center justify-center p-3 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Telescope className="h-6 w-6" />
              </div>
              <h4 className="font-display font-black text-2xl tracking-wide text-white uppercase">
                Visi Kami
              </h4>
              <p className="font-sans font-light text-slate-300 text-lg leading-relaxed">
                "{visiMisi.visi}"
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                PT. SAKATOYO PRIMA RESOURCES
              </div>
            </div>
          </motion.div>

          {/* List Misi (Right 7-cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-10 w-1 bg-amber-500 rounded-full" />
              <h4 className="font-display font-bold text-2xl tracking-wide text-white">
                Misi Operasional
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {visiMisi.misi.map((m, idx) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start space-x-4 bg-slate-950/60 hover:bg-slate-950 border border-slate-800/60 hover:border-slate-800 p-5 rounded-xl transition-all duration-200 group shadow-inner"
                >
                  <span className="flex-shrink-0 flex items-center justify-center font-mono font-bold text-lg h-9 w-9 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/25 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                    {idx + 1}
                  </span>
                  <div className="space-y-1">
                    <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-light group-hover:text-white transition-colors">
                      {m.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
