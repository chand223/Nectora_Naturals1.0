import React from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function AnimatedLogo({ size = "default", light = false }) {
  const sizes = {
    small: { text: "text-xl", icon: 16, gap: "gap-1.5" },
    default: { text: "text-2xl", icon: 20, gap: "gap-2" },
    large: { text: "text-4xl md:text-5xl", icon: 32, gap: "gap-3" },
  };

  const s = sizes[size];
  const textColor = light ? "text-white" : "text-[#2D3A2E]";

  return (
    <motion.div
      className={`flex items-center ${s.gap}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Leaf
            size={s.icon}
            className={light ? "text-[#E8C97A]" : "text-[#5C7C5E]"}
            strokeWidth={1.5}
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-col leading-none">
        <motion.span
          className={`font-serif font-semibold ${s.text} ${textColor} tracking-wide`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Nectora
        </motion.span>
        <motion.span
          className={`text-[0.55em] tracking-[0.35em] uppercase ${light ? "text-white/70" : "text-[#8B8578]"} font-light`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Naturals
        </motion.span>
      </div>
    </motion.div>
  );
}