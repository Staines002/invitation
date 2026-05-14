import { Instagram, Mail, Phone, Heart } from "lucide-react";
import photo from "@/assets/photos/photo-2.jpeg";

export function Footer() {
  return (
    <footer className="relative bg-wedding-black text-wedding-white pt-24 pb-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-3 gap-12 md:gap-8">
        <div>
          <p className="font-serif-italic text-wedding-gold tracking-[0.3em] text-xs uppercase">
            — With love —
          </p>
          <h3 className="mt-4 font-display text-3xl font-light">
            J. Sundar Singh <span className="font-serif-italic text-wedding-gold">&amp;</span> S. Premajeya
          </h3>
          <p className="mt-4 text-wedding-white/60 text-sm leading-relaxed max-w-xs">
            Brother: S. Jebasingh, BBA <br/>
            Thank you for being a part of our story. We can't wait to make new memories with you on our special day.
          </p>
        </div>

        <div>
          <p className="font-serif-italic text-wedding-gold tracking-[0.3em] text-xs uppercase">
            Reach Us
          </p>
          <ul className="mt-4 space-y-3 text-wedding-white/70 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-wedding-gold" />
              +91 9944905723 (S. Jebasingh, Brother)
            </li>
          </ul>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-wedding-gold/20">
          <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-wedding-black/80 to-transparent" />
          <p className="absolute bottom-4 left-5 font-serif-italic text-wedding-gold">
            See you on 28·05·26
          </p>
        </div>
      </div>

      <div className="mt-16 border-t border-wedding-gold/15 pt-8 mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-wedding-white/40">
        <p className="tracking-widest uppercase">© 2026 Anusha & Robin</p>
        <p className="flex items-center gap-2">
          Made with <Heart size={12} className="text-wedding-gold animate-float" /> for our family & friends
        </p>
      </div>
    </footer>
  );
}