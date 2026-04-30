import { motion } from "framer-motion";
import { FiCheck, FiMapPin, FiExternalLink } from "react-icons/fi";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";
import { SITE, mapOpenUrl } from "../data/site";

const POINTS = [
  "Free quote within minutes",
  "Bulk discounts for 1,000+ plates",
  "Pan-India shipping available",
];

const STATS = [
  { k: "30 days", v: "Composts naturally" },
  { k: "0%", v: "Plastic, glue, chemicals" },
  { k: "1.2M+", v: "Plates delivered" },
  { k: "24h", v: "Quote turnaround" },
];

export default function FinalCTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-20">

      {/* MAP BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.google.com/maps?q=17.6868,83.2185&z=15&output=embed"
          className="w-full h-full pointer-events-none"
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>

      {/* TOP & BOTTOM FADE */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-5xl rounded-3xl
          bg-[#1f6f43]/85
          backdrop-blur-sm
          px-6 py-10 sm:px-10 sm:py-12
          text-white shadow-2xl"
        >
          {/* subtle glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 bg-white/10 blur-3xl rounded-full" />

          <div className="grid items-center gap-8 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Ready to switch?
              </span>

              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                Send a WhatsApp message.
                <br />
                Get a quote in 5 minutes.
              </h2>

              <p className="mt-3 text-sm text-white/80 sm:text-base">
                Tell us how many plates you need and your event date — we’ll handle the rest.
              </p>

              {/* POINTS */}
              <ul className="mt-5 space-y-2.5">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm sm:text-base">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-green-700">
                      <FiCheck className="text-[11px]" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              {/* BUTTONS (FIXED — NO BLEED) */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <WhatsAppButton
                  size="md"
                  className="bg-white !text-green-700
                  transition-transform duration-200 ease-out
                  hover:scale-105
                  hover:bg-[#ecfdf5]
                  active:scale-95"
                >
                  Message on WhatsApp
                </WhatsAppButton>

                <CallButton
                  size="md"
                  variant="solid"
                  className="border border-white/30 bg-white/10 text-white
                  transition-transform duration-200 ease-out
                  hover:scale-105
                  hover:bg-white/20
                  active:scale-95"
                />
              </div>

              {/* ADDRESS */}
              <div className="mt-7 flex flex-col gap-3 rounded-xl border border-white/15 bg-white/10 p-4 sm:flex-row sm:items-center sm:justify-between backdrop-blur">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                    <FiMapPin />
                  </span>
                  <div>
                    <div className="text-xs text-white/70 uppercase">
                      Visit us
                    </div>
                    <div className="text-sm">{SITE.address}</div>
                  </div>
                </div>

                <a
                  href={mapOpenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-700
                  transition-transform duration-200 ease-out
                  hover:scale-105
                  hover:bg-[#ecfdf5]
                  active:scale-95"
                >
                  Open in Maps <FiExternalLink />
                </a>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div>
              <div className="grid grid-cols-2 gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.k}
                    className="rounded-xl bg-white/10 backdrop-blur-sm px-4 py-3 text-center"
                  >
                    <div className="text-xl font-bold">{s.k}</div>
                    <div className="text-xs text-white/80">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}