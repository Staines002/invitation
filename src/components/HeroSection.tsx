import { motion } from "framer-motion";
import { heroPhoto } from "@/lib/photos";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-wedding-black">
      <motion.img
        src={heroPhoto}
        alt="Anusha & Robin"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.85 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-black/60 via-wedding-black/30 to-wedding-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(26,26,26,0.6)_100%)]" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-wedding-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-serif-italic text-wedding-gold tracking-[0.2em] text-xs uppercase mb-8 max-w-xl leading-relaxed"
        >
          “The Lord has made everything beautiful in its time.” <br/> (Ecclesiastes 3:11)
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-[8rem] leading-[0.95] font-light"
        >
          Anusha
          <span className="block font-serif-italic text-wedding-gold text-4xl md:text-6xl my-2 md:my-4">
            &amp;
          </span>
          Robin
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-10 flex items-center gap-6 text-wedding-white/85"
        >
          <span className="h-px w-16 bg-wedding-gold/60" />
          <span className="text-sm md:text-base tracking-[0.5em] uppercase">
            28 · 05 · 2026
          </span>
          <span className="h-px w-16 bg-wedding-gold/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="mt-6 max-w-md text-sm md:text-base text-wedding-white/70 tracking-wider"
        >
          Levinjipuram, Tirunelveli
        </motion.p>

        <motion.a
          href="#story"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-14 group inline-flex items-center gap-3 rounded-full bg-wedding-gold px-8 py-4 text-xs uppercase tracking-[0.3em] text-wedding-black transition-all hover:shadow-[0_20px_50px_-10px_rgba(212,175,55,0.6)]"
        >
          View Details
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-wedding-white/60"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-wedding-gold to-transparent animate-float" />
      </motion.div>
    </section>
  );
}