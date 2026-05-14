import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { storyPhotos } from "@/lib/photos";

const details = [
  {
    title: "The Bride",
    name: "Miss S. Anusha, B.Com., PGDCA",
    parents: "Mr. S. Sundar Singh & Mrs. S. Premajeya",
    maternal: "Mr. C. Muthaiya Nadar & Mrs. Pakkiyarethinam of Andarkulam",
    paternal: "Mr. S. Jeyasingh Nadar & Mrs. Anna Jothi of Levinjipuram, Thirukkurungudi, Tirunelveli District",
  },
  {
    title: "The Groom",
    name: "Mr. S. Robin, B.Sc., IT",
    parents: "Mr. Sudhesan & Mrs. Christy Pushpakala",
    maternal: "Mr. Sellathurai Nadar & Mrs. Jebakanthi of Nerinjivilai",
    paternal: "Mr. M. Thangaiya Nadar & Mrs. Chellammal of Levinjipuram, Thirukkurungudi, Tirunelveli District",
  },
];

export function OurStory() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".story-img").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
      gsap.utils.toArray<HTMLElement>(".story-block").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={ref}
      className="relative bg-wedding-cream py-32 md:py-48 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-center mb-24">
          <p className="font-serif-italic text-wedding-gold tracking-[0.4em] text-xs uppercase mb-4">
            — Two Families Unite —
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-wedding-black font-light">
            Bride <span className="font-serif-italic text-wedding-gold">&amp;</span> Groom
          </h2>
        </div>

        <div className="space-y-32 md:space-y-48">
          {details.map((d, i) => (
            <div
              key={d.title}
              className={`story-block grid md:grid-cols-2 gap-10 md:gap-20 items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={storyPhotos[i % storyPhotos.length]}
                  alt={d.title}
                  className="story-img absolute inset-0 h-[120%] w-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-wedding-gold/20" />
              </div>
              <div className="md:px-6">
                <span className="font-serif-italic text-wedding-gold text-sm tracking-[0.4em]">
                  {d.title}
                </span>
                <h3 className="mt-4 font-display text-4xl md:text-5xl text-wedding-black font-light">
                  {d.name}
                </h3>
                <div className="mt-6 h-px w-16 bg-wedding-gold" />
                
                <div className="mt-8 space-y-6 text-wedding-black/75">
                  <div>
                    <p className="font-serif-italic text-sm text-wedding-gold mb-1">Beloved child of</p>
                    <p className="text-lg">{d.parents}</p>
                  </div>
                  <div>
                    <p className="font-serif-italic text-sm text-wedding-gold mb-1">Grandchild (Maternal) of</p>
                    <p className="text-base">{d.maternal}</p>
                  </div>
                  <div>
                    <p className="font-serif-italic text-sm text-wedding-gold mb-1">Grandchild (Paternal) of</p>
                    <p className="text-base">{d.paternal}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}