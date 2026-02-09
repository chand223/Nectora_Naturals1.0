import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../shared/ScrollReveal";
import SectionHeader from "../shared/SectionHeader";
import AnimatedButton from "../shared/AnimatedButton";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Sprout, Droplets, Sun } from "lucide-react";

const pillars = [
  {
    icon: Sprout,
    title: "Rooted in Nature",
    desc: "Every product begins its journey in the untouched fields and forests where nature thrives in its purest form.",
  },
  {
    icon: Droplets,
    title: "Unprocessed Purity",
    desc: "We never refine, bleach, or alter. What nature creates, we deliver — raw, alive, and full of goodness.",
  },
  {
    icon: Sun,
    title: "Sustainable Sourcing",
    desc: "Partnering directly with farming communities who practice age-old, chemical-free cultivation methods.",
  },
];

export default function StoryPreview() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5C7C5E]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4A853]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Our Story"
          title="From Root to Ritual"
          description="For generations, nature has offered its finest. We simply carry it to you — unchanged, unprocessed, unforgettable."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={i} delay={i * 0.15} direction="up">
              <motion.div
                className="group text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#F5F0E8] hover:border-[#5C7C5E]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#5C7C5E]/5"
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-[#5C7C5E]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#5C7C5E]/20 transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <pillar.icon
                    size={24}
                    className="text-[#5C7C5E]"
                    strokeWidth={1.5}
                  />
                </motion.div>
                <h3 className="font-serif text-xl font-semibold text-[#2D3A2E] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#8B8578] text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="text-center mt-14">
          <Link to={createPageUrl("OurStory")}>
            <AnimatedButton variant="secondary">
              Discover Our Journey
            </AnimatedButton>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}