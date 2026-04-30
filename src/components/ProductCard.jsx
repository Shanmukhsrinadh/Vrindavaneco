import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { waLink } from "../data/site";
import { productImage } from "../data/productImages";

export default function ProductCard({ product, index = 0 }) {
  const msg = `Hi! I'm interested in your ${product.name}. Can you share bulk pricing?`;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.05, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-leaf-100 bg-leaf-50/50 p-5 transition hover:border-leaf-300 hover:bg-white hover:shadow-xl hover:shadow-leaf-200/40 sm:p-6"
    >
      {product.tag && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-leaf-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
          {product.tag}
        </span>
      )}

      <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-2xl bg-white">
        <img
          src={productImage(product.image)}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold text-bark-900 sm:text-xl">{product.name}</h3>
          <span className="text-xs font-medium text-bark-700/70">{product.size}</span>
        </div>
        <p className="mt-1 text-sm font-semibold text-leaf-700">{product.price}</p>

        <ul className="mt-3 flex flex-1 flex-col gap-1.5 text-sm text-bark-900/80">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500" />
              {f}
            </li>
          ))}
        </ul>

        <a
          href={waLink(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-leaf-200 bg-white px-4 py-2.5 text-sm font-semibold text-bark-900 transition hover:border-leaf-600 hover:bg-leaf-600 hover:text-white"
        >
          Get a quote
          <FiArrowRight className="transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.article>
  );
}
