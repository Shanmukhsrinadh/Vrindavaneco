import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { waLink } from "../data/site";
import roundPlate from "../assets/product-round-plate.png";
import thaliPlate from "../assets/product-thali-plate.png";
import leafBowl from "../assets/product-leaf-bowl.png";

const PRODUCTS = [
  {
    name: "Round Leaf Plate",
    size: '10" diameter',
    price: "From ₹1.80 / plate",
    features: ["Sturdy 2-layer build", "Perfect for thalis & meals"],
    img: roundPlate,
    tag: "Bestseller",
    msg: "Hi! I'm interested in your Round Leaf Plates. Can you share bulk pricing?",
  },
  {
    name: "Compartment Thali",
    size: "4 sections",
    price: "From ₹3.50 / plate",
    features: ["No mixing of curries", "Ideal for events & weddings"],
    img: thaliPlate,
    tag: "For events",
    msg: "Hi! Please share pricing for Compartment Thali plates.",
  },
  {
    name: "Leaf Bowl",
    size: "180 ml",
    price: "From ₹1.20 / piece",
    features: ["Leak-resistant", "Great for desserts & curries"],
    img: leafBowl,
    msg: "Hi! I'd like a quote for your Leaf Bowls.",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our products"
          title="Plates that look as good as they feel"
          subtitle="Pressed from naturally fallen sal leaves and stitched with bamboo. Every piece is unique."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-leaf-100 bg-leaf-50/50 p-5 transition hover:border-leaf-300 hover:bg-white hover:shadow-xl hover:shadow-leaf-200/40 sm:p-6"
            >
              {p.tag && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-leaf-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {p.tag}
                </span>
              )}

              <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-2xl bg-white">
                <motion.img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-bark-900 sm:text-xl">{p.name}</h3>
                  <span className="text-xs font-medium text-bark-700/70">{p.size}</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-leaf-700">{p.price}</p>

                <ul className="mt-3 flex flex-1 flex-col gap-1.5 text-sm text-bark-900/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(p.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-leaf-200 bg-white px-4 py-2.5 text-sm font-semibold text-bark-900 transition hover:border-leaf-600 hover:bg-leaf-600 hover:text-white"
                >
                  Get a quote
                  <FiArrowRight className="transition group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
