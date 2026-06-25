import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";

interface CarouselProps {
  items: ReactNode[];
  className?: string;
}

export default function Carousel({ items, className = "" }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    startIndex: 0,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((i: number) => {
    emblaApi?.scrollTo(i);
  }, [emblaApi]);

  if (items.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      {/* Mobile: Embla carousel with loop */}
      <div className="md:hidden -mx-4 px-4">
        <div className="overflow-hidden py-4" ref={emblaRef}>
          <div className="flex">
            {items.map((child, idx) => (
              <div
                key={idx}
                className="shrink-0 grow-0 min-w-0 w-[80%] pr-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  className="min-h-[300px] h-full"
                >
                  {child}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all ${
                i === selected
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
