import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { photos } from "@/lib/photos";

export function PhotoGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".tile").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 80,
          scale: 0.95,
          duration: 1.2,
          delay: (i % 3) * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const go = (d: number) => {
    setDirection(d);
    setActive((p) => (p + d + photos.length) % photos.length);
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative bg-wedding-white py-32 md:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-20">
          <p className="font-serif-italic text-wedding-gold tracking-[0.4em] text-xs uppercase mb-4">
            — Moments —
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-wedding-black font-light">
            The <span className="font-serif-italic text-wedding-gold">Gallery</span>
          </h2>
        </div>

        {/* Liquid showcase */}
        <div className="relative mx-auto mb-24 aspect-[16/10] max-w-5xl overflow-hidden rounded-sm bg-wedding-black/5 ring-1 ring-wedding-gold/20">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={active}
              src={photos[active].src}
              alt={photos[active].alt}
              custom={direction}
              initial={{
                clipPath:
                  direction > 0
                    ? "inset(0 0 0 100% round 4px)"
                    : "inset(0 100% 0 0 round 4px)",
                scale: 1.1,
              }}
              animate={{ clipPath: "inset(0 0 0 0 round 4px)", scale: 1 }}
              exit={{
                clipPath:
                  direction > 0
                    ? "inset(0 100% 0 0 round 4px)"
                    : "inset(0 0 0 100% round 4px)",
                scale: 1.05,
              }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-wedding-black/50 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 z-10 text-wedding-white">
            <p className="font-serif-italic text-wedding-gold text-sm tracking-widest">
              {String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </p>
            <p className="font-display text-2xl md:text-3xl">{photos[active].caption}</p>
          </div>

          <button
            aria-label="Previous"
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full glass text-wedding-black transition hover:bg-wedding-gold hover:text-wedding-black"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next"
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full glass text-wedding-black transition hover:bg-wedding-gold hover:text-wedding-black"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > active ? 1 : -1);
                setActive(i);
              }}
              className={`tile group relative overflow-hidden rounded-sm ${
                i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"
              } ${active === i ? "ring-2 ring-wedding-gold" : "ring-1 ring-wedding-black/5"}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-wedding-black/0 transition-colors duration-500 group-hover:bg-wedding-black/30" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-wedding-black/80 to-transparent p-4 text-left text-wedding-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-serif-italic text-wedding-gold text-xs tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-display">{p.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}