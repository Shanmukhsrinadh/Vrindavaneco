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
      className="relative overflow-hidden bg-gradient-to-b from-leaf-50 via-white to-white 
                 min-h-[100svh] flex items-center 
                 pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-24"
    >
      {/* Background */}
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-leaf-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-leaf-100 blur-3xl" />

      <div className="container-x relative grid items-center gap-8 lg:grid-cols-12 lg:gap-10">

        {/* LEFT */}
        <div className="lg:col-span-7">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-leaf-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-leaf-700 shadow-sm backdrop-blur"
          >
            <LuLeaf className="text-sm" /> Pure leaf · No polythene
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 text-3xl font-extrabold leading-[1.1] text-bark-900 
                       sm:text-5xl md:text-6xl lg:text-[64px]"
          >
            Eat from leaves,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-leaf-700">not plastic.</span>
              <span className="absolute inset-x-1 bottom-1 -z-0 h-3 rounded-full bg-leaf-200/80 sm:bottom-2 sm:h-4" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 max-w-xl text-sm text-bark-700/80 sm:text-lg"
          >
            Vrindavan Eco Plates are crafted from layered sal & palash leaves —
            no plastic coating, no chemicals, no cancer-causing toxins.
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="mt-5 grid gap-2 sm:grid-cols-2"
          >
            {bullets.map((b) => (
              <motion.li
                key={b}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex items-start gap-2 text-sm text-bark-900/90 sm:text-base"
              >
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-leaf-600 text-white">
                  <FiCheck className="text-[12px]" />
                </span>
                {b}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton size="lg">Order on WhatsApp</WhatsAppButton>
            <CallButton size="lg" />
          </motion.div>

          {/* ✅ MOBILE BADGES (inline instead of floating) */}
          <div className="mt-6 flex flex-wrap gap-3 lg:hidden">
            <div className="flex items-center gap-2 rounded-full border border-leaf-100 bg-white px-3 py-2 text-xs font-semibold text-leaf-700 shadow">
              <LuLeaf /> 100% biodegradable
            </div>
            <div className="flex items-center gap-2 rounded-full border border-leaf-100 bg-white px-3 py-2 text-xs font-semibold text-bark-900 shadow">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-leaf-600 text-white">
                <FiCheck className="text-[10px]" />
              </span>
              Chemical-free
            </div>
          </div>
        </div>

        {/* RIGHT (desktop only) */}
        <div className="hidden lg:block lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-md">

            <motion.div className="absolute inset-0 rounded-full bg-gradient-to-br from-leaf-100 to-leaf-200/60" />
            <motion.div className="absolute inset-6 rounded-full bg-white shadow-xl shadow-leaf-700/10" />

            <motion.img
              src={heroPlate}
              alt="Eco-friendly leaf plate"
              className="absolute inset-0 m-auto h-[88%] w-[88%] object-contain drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              draggable={false}
            />

            {/* ✅ DESKTOP FLOATING BADGES */}
            <div className="absolute left-0 top-10 flex items-center gap-2 rounded-full border border-leaf-100 bg-white px-3 py-2 text-xs font-semibold text-leaf-700 shadow-md">
              <LuLeaf /> 100% biodegradable
            </div>

            <div className="absolute right-2 bottom-10 flex items-center gap-2 rounded-full border border-leaf-100 bg-white px-3 py-2 text-xs font-semibold text-bark-900 shadow-md">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-leaf-600 text-white">
                <FiCheck className="text-[10px]" />
              </span>
              Chemical-free
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}