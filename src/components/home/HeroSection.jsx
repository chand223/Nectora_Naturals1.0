import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "../shared/AnimatedButton";
import AnimatedLogo from "../shared/AnimatedLogo";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1920&q=80",
    tagline: "Nature You Can",
    highlight: "Taste, Touch & Trust",
    sub: "From ancient farms to your table — pure, unprocessed, alive.",
  },
  {
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920&q=80",
    tagline: "The Ritual of",
    highlight: "Pure Ingredients",
    sub: "Himalayan salts, raw honey, hand-ground spices — crafted by nature.",
  },
  {
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80",
    tagline: "Farm to Home",
    highlight: "Botanical Wellness",
    sub: "Sustainably sourced. Ethically crafted. Naturally yours.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="text-[#E8C97A] text-xs tracking-[0.4em] uppercase font-medium mb-6 block">
              Nectora Naturals
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-2">
              {slide.tagline}
            </h1>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-[#E8C97A] leading-[1.1] mb-6">
              {slide.highlight}
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              {slide.sub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={createPageUrl("Shop")}>
                <AnimatedButton variant="honey" size="large">
                  Explore Products
                </AnimatedButton>
              </Link>
              <Link to={createPageUrl("OurStory")}>
                <AnimatedButton variant="light" size="large">
                  Our Story
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-24 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-[#E8C97A]" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 text-white/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
}