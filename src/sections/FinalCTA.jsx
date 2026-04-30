import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";

const POINTS = [
  "Free quote within minutes",
  "Bulk discounts for 1,000+ plates",
  "Pan-India shipping available",
];

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-leaf-700 via-leaf-600 to-leaf-700 px-6 py-14 text-white shadow-2xl shadow-leaf-700/30 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
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
              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-[44px]">
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
                  <li key={p} className="flex items-center gap-2.5 text-sm sm:text-base">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-leaf-700">
                      <FiCheck className="text-[12px]" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton size="lg" className="bg-white !text-leaf-700 hover:!bg-leaf-50">
                  Message on WhatsApp
                </WhatsAppButton>
                <CallButton size="lg" variant="solid" className="!bg-white/10 !text-white hover:!bg-white/20 border border-white/30" />
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-sm" />
              <div className="relative grid grid-cols-2 gap-4 p-2">
                {[
                  { k: "30 days", v: "Composts naturally" },
                  { k: "0%", v: "Plastic, glue, chemicals" },
                  { k: "1.2M+", v: "Plates delivered" },
                  { k: "24h", v: "Quote turnaround" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl bg-white/10 p-5 backdrop-blur transition hover:bg-white/15"
                  >
                    <div className="text-3xl font-extrabold">{s.k}</div>
                    <div className="mt-1 text-sm text-white/80">{s.v}</div>
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
