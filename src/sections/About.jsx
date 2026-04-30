import { motion } from "framer-motion";
import { FiAward, FiHeart, FiUsers } from "react-icons/fi";
import leafTexture from "../assets/leaf-texture.png";

const STATS = [
  { value: "12+", label: "Years of leaf craft" },
  { value: "1.2M", label: "Plates delivered" },
  { value: "200+", label: "Happy partners" },
];

const POINTS = [
  {
    icon: FiHeart,
    title: "Rooted in tradition",
    text: "We follow the centuries-old way of pressing fallen sal & palash leaves — no trees are harmed.",
  },
  {
    icon: FiUsers,
    title: "Made by local hands",
    text: "Every plate is crafted by women artisans from villages near Vrindavan, supporting their livelihood.",
  },
  {
    icon: FiAward,
    title: "Why not plastic-coated?",
    text: "Plastic & polythene plates leach toxins into hot food and pollute land for centuries. Leaves don't.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-leaf-50/60 py-20 sm:py-24 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-leaf-200 shadow-xl shadow-leaf-700/10">
            <img
              src={leafTexture}
              alt="Close-up texture of stitched sal leaves used to make eco plates"
              loading="lazy"
              className="h-[420px] w-full object-cover sm:h-[480px]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-3 rounded-2xl border border-leaf-100 bg-white p-4 shadow-xl shadow-leaf-700/10 sm:left-8 sm:right-8 sm:p-5"
          >
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-extrabold text-leaf-700 sm:text-2xl">
                  {s.value}
                </div>
                <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-bark-700/70 sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-leaf-700"
          >
            Our story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-3xl font-bold text-bark-900 sm:text-4xl md:text-[40px]"
          >
            From the forests of Vrindavan to your table
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base text-bark-700/85 sm:text-lg"
          >
            What began as one family's wish to bring back the old way of dining
            — clean, leafy, and chemical-free — is now a small movement.
            Vrindavan Eco Plates partners with rural artisans to turn naturally
            fallen leaves into beautiful, useful plates that return to the soil
            in weeks.
          </motion.p>

          <div className="mt-8 grid gap-4 sm:gap-5">
            {POINTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-leaf-100 bg-white p-4 sm:p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-leaf-100 text-leaf-700">
                  <p.icon className="text-lg" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-bark-900 sm:text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-bark-700/80">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
