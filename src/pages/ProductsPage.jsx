import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import StickyWhatsApp from "../components/StickyWhatsApp";
import ProductCard from "../components/ProductCard";
import allProducts from "../data/products.json";
import { CATEGORIES } from "../data/categories";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const [active, setActive] = useState(
    CATEGORIES.some((c) => c.id === initialCat) ? initialCat : "all"
  );

  const counts = useMemo(() => {
    const c = { all: allProducts.length };
    for (const p of allProducts) c[p.category] = (c[p.category] || 0) + 1;
    return c;
  }, []);

  const filtered = useMemo(
    () =>
      active === "all"
        ? allProducts
        : allProducts.filter((p) => p.category === active),
    [active]
  );

  function selectCategory(id) {
    setActive(id);
    if (id === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", id);
    }
    setSearchParams(searchParams, { replace: true });
  }

  return (
    <div className="min-h-screen bg-white text-bark-900">
      <Navbar />
      <main>
        {/* Page header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-leaf-50 via-white to-white pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36">
          <div className="bg-grain pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="container-x relative">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-bark-700/80 transition hover:text-leaf-700"
            >
              <FiArrowLeft /> Back to home
            </Link>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-leaf-700">
                  Catalog
                </span>
                <h1 className="mt-3 text-4xl font-extrabold leading-tight text-bark-900 sm:text-5xl">
                  All eco-friendly products
                </h1>
                <p className="mt-3 max-w-xl text-base text-bark-700/80 sm:text-lg">
                  Pure leaf plates, bowls, boxes, cutlery and cups — all
                  biodegradable, all made with care.
                </p>
              </div>
              <div className="text-sm text-bark-700/70">
                Showing{" "}
                <span className="font-semibold text-bark-900">
                  {filtered.length}
                </span>{" "}
                of {allProducts.length} products
              </div>
            </div>
          </div>
        </section>

        {/* Sticky filter bar */}
        <div className="sticky top-16 z-30 -mt-2 border-y border-leaf-100 bg-white/90 backdrop-blur sm:top-20">
          <div className="container-x">
            <div className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto py-3 sm:gap-3 sm:py-4">
              {CATEGORIES.map((c) => {
                const isActive = active === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => selectCategory(c.id)}
                    className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition sm:px-5 sm:py-2.5 ${
                      isActive
                        ? "bg-leaf-600 text-white shadow-md shadow-leaf-600/20"
                        : "border border-leaf-200 bg-white text-bark-900 hover:border-leaf-400 hover:text-leaf-700"
                    }`}
                  >
                    <span>{c.label}</span>
                    <span
                      className={`ml-2 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-leaf-100 text-leaf-700"
                      }`}
                    >
                      {counts[c.id] || 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid */}
        <section className="bg-white pb-20 pt-8 sm:pb-24 lg:pb-28">
          <div className="container-x">
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                <motion.div
                  key={active}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                >
                  {filtered.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-3xl border border-dashed border-leaf-200 bg-leaf-50/50 p-12 text-center"
                >
                  <p className="text-base text-bark-700/80">
                    No products in this category yet.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
