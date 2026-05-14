import { useEffect, useState } from "react";

const links = [
  { href: "#story", label: "Bride & Groom" },
  { href: "#gallery", label: "Gallery" },
  { href: "#details", label: "Details" },
  { href: "#rsvp", label: "RSVP" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass border-b border-wedding-gold/15" : "py-6 bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-wedding-gold/40 text-wedding-gold font-display text-sm tracking-widest transition-colors group-hover:bg-wedding-gold group-hover:text-wedding-black">
            A&R
          </span>
          <span className="hidden sm:block font-serif-italic text-wedding-black text-lg">
            Anusha <span className="text-wedding-gold">&amp;</span> Robin
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide text-wedding-black/80">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 transition-colors hover:text-wedding-gold after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:scale-x-0 after:origin-right after:bg-wedding-gold after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#rsvp"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-wedding-gold/60 px-5 py-2 text-xs uppercase tracking-[0.25em] text-wedding-black transition-all hover:bg-wedding-gold hover:text-wedding-black hover:shadow-[0_8px_30px_-10px_rgba(212,175,55,0.7)]"
        >
          Reply
        </a>
      </nav>
    </header>
  );
}