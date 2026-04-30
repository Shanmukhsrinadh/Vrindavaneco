import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiMapPin, FiExternalLink, FiPhone } from "react-icons/fi";
import { SITE, mapOpenUrl, mapEmbedUrl, waLink, telLink } from "../data/site";

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
      className="relative isolate overflow-hidden min-h-screen flex items-center py-10 sm:py-14"
    >
      {/* MAP WRAPPER (clipped + zoomed) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          title={`Map showing ${SITE.name} location`}
          src={mapEmbedUrl}
          loading="eager"
          aria-hidden="true"
          tabIndex={-1}
          className="
            pointer-events-none
            absolute
            top-1/2 left-1/2
            w-[110%] h-[110%]
            -translate-x-1/2 -translate-y-1/2
            scale-[1.1]
            border-0
          "
        />
      </div>

      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-white via-white/80 to-transparent" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-white via-white/80 to-transparent" />

      <div className="container-x relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-leaf-700/90 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 text-white shadow-2xl shadow-leaf-900/30 ring-1 ring-white/15 backdrop-blur-[2px]"
        >
          {/* blobs */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-2">

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

              <p className="mt-3 max-w-md text-sm text-white/85 sm:text-base">
                Tell us how many plates you need and your event date — we’ll
                handle the rest.
              </p>

              <ul className="mt-4 space-y-2">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-leaf-700">
                      <FiCheck className="text-xs" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-leaf-700 shadow-lg transition-all hover:bg-leaf-50"
                >
                  <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
                  Message on WhatsApp
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={telLink}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-leaf-700"
                >
                  <FiPhone className="text-lg group-hover:scale-110 transition-transform" />
                  Call {SITE.phoneDisplay}
                </motion.a>
              </div>

              {/* ADDRESS */}
              <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/15 bg-black/15 p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                    <FiMapPin />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase text-white/60">
                      Visit us
                    </div>
                    <div className="text-sm">{SITE.address}</div>
                  </div>
                </div>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={mapOpenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-leaf-700"
                >
                  Open in Maps
                  <FiExternalLink />
                </motion.a>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="grid grid-cols-2 gap-3">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.k}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center"
                  >
                    <div className="text-2xl font-bold sm:text-3xl">
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