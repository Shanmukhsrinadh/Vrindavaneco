import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiMapPin, FiExternalLink, FiPhone } from "react-icons/fi";
import { SITE, mapOpenUrl, waLink, telLink } from "../data/site";
import MapBackground from "../components/MapBackground";

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
    <section
      id="contact"
      className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Map background — sits underneath the green card */}
      <MapBackground className="absolute inset-0 z-0 h-full w-full" />

      {/* Soft top + bottom fade so the section blends with the page */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute top-0 left-0 h-28 w-full bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-leaf-700 via-leaf-600 to-leaf-700 px-6 py-12 text-white shadow-2xl shadow-leaf-900/30 ring-1 ring-white/10 sm:px-10 sm:py-14 lg:px-14 lg:py-16"
        >
          {/* decorative blobs */}
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
                Ready to switch?
              </span>

              <h2 className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Send a WhatsApp message.
                <br />
                Get a quote in 5 minutes.
              </h2>

              <p className="mt-4 max-w-md text-sm text-white/85 sm:text-base">
                Tell us how many plates you need and your event date — we’ll
                handle the rest.
              </p>

              <ul className="mt-5 space-y-2.5">
                {POINTS.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2.5 text-sm text-white/95"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-leaf-700">
                      <FiCheck className="text-xs" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              {/* BUTTONS */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {/* Primary — solid white, no green-flip on hover */}
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-leaf-700 shadow-lg shadow-leaf-900/20 ring-1 ring-white/40 transition-all duration-200 hover:bg-leaf-50 hover:text-leaf-800 hover:shadow-xl hover:shadow-leaf-900/30 sm:text-base"
                >
                  <FaWhatsapp className="text-lg transition-transform group-hover:scale-110" />
                  Message on WhatsApp
                </motion.a>

                {/* Secondary — outlined, color-inverts cleanly on hover */}
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={telLink}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-leaf-700 hover:shadow-lg hover:shadow-leaf-900/20 sm:text-base"
                >
                  <FiPhone className="text-lg transition-transform group-hover:scale-110" />
                  Call {SITE.phoneDisplay}
                </motion.a>
              </div>

              {/* ADDRESS */}
              <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-white/15 bg-black/15 p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 ring-1 ring-white/20">
                    <FiMapPin />
                  </span>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                      Visit us
                    </div>
                    <div className="text-sm text-white">{SITE.address}</div>
                  </div>
                </div>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={mapOpenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-leaf-700 shadow-md shadow-leaf-900/20 ring-1 ring-white/40 transition-all duration-200 hover:bg-leaf-50 hover:text-leaf-800 hover:shadow-lg sm:text-sm"
                >
                  Open in Maps
                  <FiExternalLink className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              </div>
            </div>

            {/* RIGHT — STATS */}
            <div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.k}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-sm transition-colors hover:bg-white/15"
                  >
                    <div className="font-display text-2xl font-bold sm:text-3xl">
                      {s.k}
                    </div>
                    <div className="mt-1 text-xs text-white/80 sm:text-sm">
                      {s.v}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
