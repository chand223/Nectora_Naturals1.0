import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../shared/ScrollReveal";
import AnimatedButton from "../shared/AnimatedButton";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

export default function RitualBanner() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1920&q=80"
          alt="Ritual"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2D3A2E]/80" />
      </div>

      {/* Decorative circles */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#D4A853]/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <ScrollReveal>
          <span className="text-[#E8C97A] text-xs tracking-[0.4em] uppercase font-medium mb-6 block">
            Daily Rituals
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Don't Just Eat.
            <br />
            <span className="text-[#E8C97A]">Create a Ritual.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-white/60 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Transform everyday moments into mindful ceremonies. A spoonful of raw
            honey in warm water. A pinch of hand-ground turmeric in golden milk.
            Nature's way of healing.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Link to={createPageUrl("Rituals")}>
            <AnimatedButton variant="honey" size="large">
              Explore Rituals
            </AnimatedButton>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}