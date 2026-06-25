import { useState, useCallback, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CarouselProps {
  items: ReactNode[];
  className?: string;
}

export default function Carousel({ items, className = "" }: CarouselProps) {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const touchStart = useRef(0);
  const totalPages = items.length;

  const goTo = useCallback((i: number) => {
    const next = ((i % totalPages) + totalPages) % totalPages;
    setDir(next > page ? 1 : -1);
    setPage(next);
  }, [page, totalPages]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      goTo(diff > 0 ? page + 1 : page - 1);
    }
  }, [goTo, page]);

  if (items.length === 0) return null;

  const nextIdx = ((page + 1) % totalPages + totalPages) % totalPages;
  const prevIdx = ((page - 1) % totalPages + totalPages) % totalPages;

  return (
    <div className={`relative ${className}`}>
      {/* Mobile: carousel with drag, peek, seamless loop */}
      <div className="md:hidden -mx-4 px-4">
        <div
          className="relative overflow-hidden py-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-stretch">
            {/* Previous card peek (left side) */}
            <div className="w-[10%] min-w-[10%] flex-shrink-0 relative z-0">
              <div className="absolute inset-0 rounded-2xl border border-slate-800/80 bg-slate-900/60 opacity-40 scale-[0.85] origin-right" />
            </div>

            {/* Current card */}
            <div className="w-[80%] flex-shrink-0 relative z-10">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={page}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -100 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="min-h-[300px] h-full"
                >
                  {items[page]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next card peek (right side) */}
            <div className="w-[10%] min-w-[10%] flex-shrink-0 relative z-0">
              <div className="absolute inset-0 rounded-2xl border border-slate-800/80 bg-slate-900/60 opacity-40 scale-[0.85] origin-left" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all ${
                i === page
                  ? "bg-amber-500 w-8 h-2.5"
                  : "bg-slate-700 hover:bg-slate-500 w-2.5 h-2.5"
              }`}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((child, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="h-full"
          >
            {child}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
