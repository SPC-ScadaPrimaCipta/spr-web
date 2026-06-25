import { useState, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: ReactNode[];
  itemsPerView?: { mobile?: number; tablet?: number; desktop?: number };
  className?: string;
}

export default function Carousel({
  items,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  className = "",
}: CarouselProps) {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerView.desktop!));

  const prev = useCallback(() => setPage((p) => Math.max(0, p - 1)), []);
  const next = useCallback(() => setPage((p) => Math.min(totalPages - 1, p + 1)), [totalPages]);

  if (items.length === 0) return null;

  const startIdx = page * itemsPerView.desktop!;
  const visibleItems = items.slice(startIdx, startIdx + itemsPerView.desktop!);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleItems.map((child, idx) => (
              <div key={idx} className="h-full">
                {child}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            disabled={page === 0}
            className="p-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-amber-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === page
                    ? "bg-amber-500 w-6"
                    : "bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={page >= totalPages - 1}
            className="p-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-amber-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
