import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";
import heroPlate from "../assets/hero-plate.png";

const bullets = [
  "100% leaf-based, no plastic lining",
  "Biodegradable in 30 days",
  "Safe for hot, cold & oily food",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-leaf-50 via-white to-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24"
    >
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-leaf-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-leaf-100 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-leaf-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-leaf-700 shadow-sm backdrop-blur"
          >
            <LuLeaf className="text-sm" /> Pure leaf · No polythene
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
            className="mt-5 text-4xl font-extrabold leading-[1.05] text-bark-900 sm:text-5xl md:text-6xl lg:text-[64px]"
          >
            Eat from leaves,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-leaf-700">not plastic.</span>
              <span
                className="absolute inset-x-1 bottom-1 -z-0 h-3 rounded-full bg-leaf-200/80 sm:bottom-2 sm:h-4"
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-5 max-w-xl text-base text-bark-700/80 sm:text-lg"
          >
            Vrindavan Eco Plates are crafted from layered sal & palash leaves —
            no plastic coating, no chemicals, no cancer-causing toxins. Just
            pure, sturdy plates your guests (and the planet) will love.
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
            }}
            className="mt-6 grid gap-2.5 sm:grid-cols-2"
          >
            {bullets.map((b) => (
              <motion.li
                key={b}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex items-start gap-2.5 text-sm text-bark-900/90 sm:text-base"
              >
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-leaf-600 text-white">
                  <FiCheck className="text-[12px]" />
                </span>
                {b}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <WhatsAppButton size="lg">Order on WhatsApp</WhatsAppButton>
            <CallButton size="lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-bark-700/70 sm:text-sm"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-leaf-500" /> Bulk orders welcome
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-leaf-500" /> Same-day local dispatch
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-leaf-500" /> Made in India
            </span>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-leaf-100 to-leaf-200/60"
            />
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="absolute inset-6 rounded-full bg-white shadow-xl shadow-leaf-700/10"
            />
            <motion.img
              src={heroPlate}
              alt="Eco-friendly leaf plate by Vrindavan"
              className="absolute inset-0 m-auto h-[88%] w-[88%] select-none object-contain drop-shadow-2xl"
              initial={{ y: 30, opacity: 0, rotate: -6 }}
              animate={{
                y: [0, -10, 0],
                opacity: 1,
                rotate: 0,
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.2 },
                rotate: { duration: 0.8, delay: 0.2 },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
              draggable={false}
              loading="eager"
            />

            <motion.div
              initial={{ opacity: 0, y: 12, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -left-2 top-6 flex items-center gap-2 rounded-full border border-leaf-100 bg-white px-3 py-2 text-xs font-semibold text-leaf-700 shadow-md sm:left-0 sm:top-10"
            >
              <LuLeaf /> 100% biodegradable
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -right-1 bottom-10 flex items-center gap-2 rounded-full border border-leaf-100 bg-white px-3 py-2 text-xs font-semibold text-bark-900 shadow-md sm:right-2"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-leaf-600 text-white">
                <FiCheck className="text-[10px]" />
              </span>
              Chemical-free
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
