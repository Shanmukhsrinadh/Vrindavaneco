import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Collect fallen leaves",
    text: "Naturally shed sal & palash leaves are gathered from forest floors — no tree is ever cut.",
  },
  {
    n: "02",
    title: "Sun-dry & sort",
    text: "Leaves are washed, sun-dried and graded by size to ensure consistent strength.",
  },
  {
    n: "03",
    title: "Stitch with bamboo",
    text: "Layers are stitched with thin bamboo twigs — no glue, staples or plastic anywhere.",
  },
  {
    n: "04",
    title: "Heat-press & pack",
    text: "Stitched leaves are heat-pressed into shape, quality-checked and packed for delivery.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-leaf-50/60 py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How it's made"
          title="Four simple steps. Zero plastic."
          subtitle="A process refined over generations — and trusted by hundreds of caterers."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl border border-leaf-100 bg-white p-6 shadow-sm"
            >
              <div className="text-4xl font-extrabold text-leaf-200 sm:text-5xl">
                {s.n}
              </div>
              <h3 className="mt-2 text-lg font-bold text-bark-900">{s.title}</h3>
              <p className="mt-2 text-sm text-bark-700/80">{s.text}</p>

              {i < STEPS.length - 1 && (
                <div
                  className="pointer-events-none absolute -right-3 top-10 hidden h-px w-6 bg-leaf-200 lg:block"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
