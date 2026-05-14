import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    party: "1",
    attending: "yes",
    diet: "",
    song: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/staines425@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Wedding RSVP from ${form.name}`,
          Name: form.name,
          Attending: form.attending === "yes" ? "Joyfully accepts" : "Regretfully declines",
          "Party Size": form.party,
          "Dietary Restrictions": form.diet || "None",
          "Song Request": form.song || "None"
        })
      });
    } catch (error) {
      console.error("Error sending RSVP:", error);
    }
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative bg-wedding-cream py-32 md:py-40 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-px bg-gradient-to-b from-transparent to-wedding-gold/40" />
      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <p className="font-serif-italic text-wedding-gold tracking-[0.4em] text-xs uppercase mb-4">
          — Kindly Reply —
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-wedding-black font-light">
          Will you <span className="font-serif-italic text-wedding-gold">join us?</span>
        </h2>
        <p className="mt-6 text-wedding-black/65 max-w-xl mx-auto leading-relaxed">
          Your presence is the greatest gift. Please reply by May 15, 2026, so we can prepare a seat just for you.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-16 rounded-sm border border-wedding-gold/30 bg-white p-12"
          >
            <Heart className="mx-auto text-wedding-gold animate-float" size={36} />
            <p className="mt-6 font-display text-3xl text-wedding-black">Thank you, {form.name}.</p>
            <p className="mt-3 font-serif-italic text-wedding-gold">
              We can't wait to celebrate with you.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 text-left"
          >
            <Field label="Full Name" className="md:col-span-2">
              <input
                required
                maxLength={100}
                value={form.name}
                onChange={update("name")}
                className="rsvp-input"
                placeholder="Your name"
              />
            </Field>

            <Field label="Attending">
              <select value={form.attending} onChange={update("attending")} className="rsvp-input">
                <option value="yes">Joyfully accepts</option>
                <option value="no">Regretfully declines</option>
              </select>
            </Field>

            <Field label="Party Size">
              <select value={form.party} onChange={update("party")} className="rsvp-input">
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Dietary Restrictions" className="md:col-span-2">
              <input
                maxLength={200}
                value={form.diet}
                onChange={update("diet")}
                className="rsvp-input"
                placeholder="Vegetarian, allergies, etc."
              />
            </Field>

            <Field label="Song Request" className="md:col-span-2">
              <input
                maxLength={200}
                value={form.song}
                onChange={update("song")}
                className="rsvp-input"
                placeholder="A song that will get you on the dance floor"
              />
            </Field>

            <div className="md:col-span-2 mt-4 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-3 rounded-full bg-wedding-black px-10 py-4 text-xs uppercase tracking-[0.3em] text-wedding-white transition-all hover:bg-wedding-gold hover:text-wedding-black hover:shadow-[0_20px_50px_-10px_rgba(212,175,55,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Reply"}
                {!isSubmitting && (
                  <Heart
                    size={14}
                    className="transition-transform group-hover:scale-125"
                  />
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      <style>{`
        .rsvp-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid color-mix(in oklab, #1A1A1A 20%, transparent);
          padding: 0.75rem 0.25rem;
          font-family: var(--font-sans);
          color: #1A1A1A;
          outline: none;
          transition: border-color .3s ease;
        }
        .rsvp-input:focus { border-color: #D4AF37; }
        .rsvp-input::placeholder { color: rgba(26,26,26,0.35); }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="font-serif-italic text-wedding-gold text-[10px] tracking-[0.4em] uppercase">
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}