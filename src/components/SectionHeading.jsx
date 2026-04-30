import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mx-auto flex max-w-2xl flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-leaf-700">
          <span className="h-1.5 w-1.5 rounded-full bg-leaf-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-bark-900 sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && (
        <p className="text-base text-bark-700/80 sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
