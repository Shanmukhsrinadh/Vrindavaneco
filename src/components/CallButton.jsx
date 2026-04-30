import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import { telLink, SITE } from "../data/site";

export default function CallButton({
  children = `Call ${SITE.phoneDisplay}`,
  className = "",
  size = "md",
  variant = "outline",
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm sm:text-base",
    lg: "px-6 py-3.5 text-base sm:text-lg",
  };
  const variants = {
    outline:
      "bg-white text-bark-900 border border-leaf-200 hover:border-leaf-400 hover:bg-leaf-50",
    solid: "bg-bark-900 text-white hover:bg-bark-700",
  };
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      href={telLink}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <FiPhone className="text-lg" aria-hidden="true" />
      <span>{children}</span>
    </motion.a>
  );
}
