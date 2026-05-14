import { Calendar, MapPin, Clock, Heart } from "lucide-react";
import { motion } from "framer-motion";
import photo from "@/assets/photos/photo-1.jpeg";

const items = [
  { icon: Calendar, label: "Date", value: "Thursday, 28th May 2026" },
  { icon: Clock, label: "Time", value: "10:00 AM to 11:30 AM" },
  { icon: MapPin, label: "Venue", value: "CSI St. Thomas Church, Levinjipuram", link: "https://maps.app.goo.gl/4oVnMUhearZRKJWPA" },
  { icon: Heart, label: "Reception", value: "Bride's Residence, Levinjipuram" },
];

const schedule = [
  { time: "10:00 AM", event: "Wedding Service" },
  { time: "11:30 AM", event: "Reception Feast" },
];

export function EventDetails() {
  return (
    <section
      id="details"
      className="relative bg-wedding-black text-wedding-white py-32 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: `url(${photo})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-black via-wedding-black/95 to-wedding-black" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-center mb-20">
          <p className="font-serif-italic text-wedding-gold tracking-[0.4em] text-xs uppercase mb-4">
            — The Celebration —
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-light">
            Event <span className="font-serif-italic gold-gradient-text">Details</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group flex items-start gap-5 rounded-sm border border-wedding-gold/20 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-wedding-gold/60"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-wedding-gold/40 text-wedding-gold transition-colors group-hover:bg-wedding-gold group-hover:text-wedding-black">
                <it.icon size={20} />
              </span>
              <div>
                <p className="font-serif-italic text-wedding-gold text-xs tracking-[0.3em] uppercase mb-2">
                  {it.label}
                </p>
                {it.link ? (
                  <a
                    href={it.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl md:text-2xl text-wedding-white/95 font-light hover:text-wedding-gold transition-colors block"
                  >
                    {it.value}
                  </a>
                ) : (
                  <p className="font-display text-xl md:text-2xl text-wedding-white/95 font-light">
                    {it.value}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-light mb-8">
              Order of <span className="font-serif-italic gold-gradient-text">the Day</span>
            </h3>
            <ul className="space-y-5">
              {schedule.map((s) => (
                <li
                  key={s.time}
                  className="flex items-baseline gap-6 border-b border-wedding-gold/15 pb-4"
                >
                  <span className="font-serif-italic text-wedding-gold w-24 shrink-0">
                    {s.time}
                  </span>
                  <span className="font-display text-lg text-wedding-white/90">{s.event}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://maps.app.goo.gl/4oVnMUhearZRKJWPA"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-wedding-gold/30 block group"
          >
            <img src={photo} alt="The venue" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-wedding-black/70 to-transparent transition-colors duration-500 group-hover:from-wedding-black/90" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif-italic text-wedding-gold text-xs tracking-[0.3em] uppercase mb-2">
                The Venue
              </p>
              <p className="font-display text-2xl group-hover:text-wedding-gold transition-colors">CSI St. Thomas Church</p>
              <p className="text-sm text-wedding-white/70 mt-1">Levinjipuram (Click to open Map)</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}