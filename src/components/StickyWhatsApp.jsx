import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { waLink } from "../data/site";

export default function StickyWhatsApp() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 18 }}
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-leaf-600 px-4 py-3 text-white shadow-xl shadow-leaf-700/30 ring-4 ring-leaf-100 transition hover:bg-leaf-700 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-leaf-500 opacity-60 motion-safe:animate-ping" />
      <FaWhatsapp className="text-2xl" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </motion.a>
  );
}
