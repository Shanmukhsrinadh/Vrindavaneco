import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import allProducts from "../data/products.json";

export default function Products() {
  const featured = allProducts.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="products" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our products"
          title="Plates that look as good as they feel"
          subtitle="Pressed from naturally fallen sal leaves and stitched with bamboo. Every piece is unique."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col items-center gap-3 sm:mt-12"
        >
          <Link
            to="/products"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-bark-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-leaf-700 sm:text-base"
          >
            Show all products
            <FiArrowRight className="transition group-hover:translate-x-0.5" />
          </Link>
          <p className="text-xs text-bark-700/70 sm:text-sm">
            Browse plates, bowls, boxes, cutlery & cups
          </p>
        </motion.div>
      </div>
    </section>
  );
}
