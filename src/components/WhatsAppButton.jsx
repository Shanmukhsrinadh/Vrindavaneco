import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { waLink } from "../data/site";

export default function WhatsAppButton({
  children = "Order on WhatsApp",
  message,
  className = "",
  size = "md",
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm sm:text-base",
    lg: "px-6 py-3.5 text-base sm:text-lg",
  };
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-leaf-600 font-semibold text-white shadow-md shadow-leaf-600/20 transition hover:bg-leaf-700 ${sizes[size]} ${className}`}
    >
      <FaWhatsapp className="text-lg" aria-hidden="true" />
      <span>{children}</span>
    </motion.a>
  );
}
