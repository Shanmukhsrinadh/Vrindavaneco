import { motion } from "framer-motion";
import { FiCheck, FiMapPin, FiExternalLink } from "react-icons/fi";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";
import { SITE, mapOpenUrl } from "../data/site";
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
      {/* Map background — sits underneath the green card but above the page */}
      <MapBackground className="absolute inset-0 z-0 h-full w-full" />
      {/* Soft white veil for visual contrast */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white/30 via-white/10 to-white/30"
        aria-hidden="true"
      />

      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-leaf-700/95 via-leaf-600/95 to-leaf-700/95 px-6 py-12 text-white shadow-2xl shadow-leaf-700/30 ring-1 ring-white/20 backdrop-blur-sm sm:px-10 sm:py-14 lg:px-14 lg:py-16"
        >
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-leaf-500/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
                Ready to switch?
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-[40px]">
                Send a WhatsApp message.
                <br />
                Get a quote in 5 minutes.
              </h2>
              <p className="mt-4 max-w-md text-base text-white/85 sm:text-lg">
                Tell us how many plates you need and your event date — we'll
                handle the rest.
              </p>

              <ul className="mt-6 grid gap-2.5">
                {POINTS.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2.5 text-sm sm:text-base"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-leaf-700">
                      <FiCheck className="text-[12px]" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsAppButton
                  size="lg"
                  className="bg-white !text-leaf-700 hover:!bg-leaf-50"
                >
                  Message on WhatsApp
                </WhatsAppButton>
                <CallButton
                  size="lg"
                  variant="solid"
                  className="border border-white/30 !bg-white/10 !text-white hover:!bg-white/20"
                />
              </div>

              {/* Address row + Open in Maps */}
              <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15">
                    <FiMapPin className="text-base" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      Visit us
                    </div>
                    <div className="text-sm text-white/95 sm:text-base">
                      {SITE.address}
                    </div>
                  </div>
                </div>
                <a
                  href={mapOpenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-leaf-700 transition hover:bg-leaf-50"
                >
                  Open in Maps <FiExternalLink />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {STATS.map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl bg-white/10 p-4 backdrop-blur transition hover:bg-white/15 sm:p-5"
                  >
                    <div className="text-2xl font-extrabold sm:text-3xl">
                      {s.k}
                    </div>
                    <div className="mt-1 text-xs text-white/80 sm:text-sm">
                      {s.v}
                    </div>
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
