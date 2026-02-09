import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AnimatedButton({
  children,
  variant = "primary",
  size = "default",
  onClick,
  href,
  icon = true,
  className = "",
}) {
  const variants = {
    primary:
      "bg-[#5C7C5E] text-white hover:bg-[#4A6A4C] shadow-lg shadow-[#5C7C5E]/20",
    secondary:
      "bg-transparent border-2 border-[#5C7C5E] text-[#5C7C5E] hover:bg-[#5C7C5E] hover:text-white",
    honey:
      "bg-[#D4A853] text-white hover:bg-[#C19840] shadow-lg shadow-[#D4A853]/20",
    ghost:
      "bg-transparent text-[#2D3A2E] hover:bg-[#F5F0E8]",
    light:
      "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20",
  };

  const sizes = {
    small: "px-4 py-2 text-xs",
    default: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 rounded-full font-medium
        transition-colors duration-300 cursor-pointer
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
      {icon && (
        <motion.span
          className="inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight size={16} />
        </motion.span>
      )}
    </Component>
  );
}