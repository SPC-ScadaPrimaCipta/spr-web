import { useState, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: ReactNode[];
  className?: string;
}

export default function Carousel({ items, className = "" }: CarouselProps) {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const totalPages = items.length;

  const goTo = useCallback((i: number) => {
    const next = ((i % totalPages) + totalPages) % totalPages;
    setDir(next > page ? 1 : -1);
    setPage(next);
  }, [page, totalPages]);

  const prev = useCallback(() => goTo(page - 1), [goTo, page]);
  const next = useCallback(() => goTo(page + 1), [goTo, page]);

  if (items.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      {/* Mobile: carousel with peek and infinite loop */}
      <div className="md:hidden -mx-4 px-4">
        <div className="relative overflow-hidden py-4">
          <AnimatePresence mode="popLayout" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              initial={{ opacity: 0, x: dir * 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -200 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="min-h-[300px]"
            >
              {items[page]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-2">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-amber-500 transition-all flex-shrink-0"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all ${
                  i === page
                    ? "bg-amber-500 w-7 h-2.5"
                    : "bg-slate-700 hover:bg-slate-500 w-2.5 h-2.5"
                }`}
                aria-label={`Go to item ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-amber-500 transition-all flex-shrink-0"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
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
