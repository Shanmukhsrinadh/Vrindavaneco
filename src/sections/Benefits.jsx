import { motion } from "framer-motion";
import { FiShield, FiDroplet, FiThermometer, FiTag } from "react-icons/fi";
import { GiPlantRoots, GiRecycle } from "react-icons/gi";
import SectionHeading from "../components/SectionHeading";

const BENEFITS = [
  {
    icon: GiPlantRoots,
    title: "Truly eco-friendly",
    text: "Made only from leaves & bamboo stitches. Composts in 30 days flat.",
    color: "bg-leaf-100 text-leaf-700",
  },
  {
    icon: FiShield,
    title: "Health-safe",
    text: "Zero plastic lining means no microplastics or carcinogens leaking into food.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: FiThermometer,
    title: "Heat & oil resistant",
    text: "Holds piping hot rasam, gravies and oily snacks without leaking or warping.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: FiTag,
    title: "Affordable in bulk",
    text: "Wholesale pricing for caterers, weddings, temples and restaurants.",
    color: "bg-leaf-100 text-leaf-700",
  },
  {
    icon: FiDroplet,
    title: "Leak-resistant",
    text: "Tightly pressed two-layer build keeps liquids in, even after long meals.",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: GiRecycle,
    title: "Zero-waste cycle",
    text: "Used plates can be tossed straight into the compost bin — no cleanup.",
    color: "bg-leaf-100 text-leaf-700",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why choose us"
          title="Six reasons to switch from plastic"
          subtitle="Better for your guests, your wallet and the planet — all in one plate."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-leaf-100 bg-white p-6 shadow-sm transition hover:shadow-xl hover:shadow-leaf-200/40"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${b.color}`}
              >
                <b.icon className="text-xl" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-bark-900">{b.title}</h3>
              <p className="mt-2 text-sm text-bark-700/80">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
