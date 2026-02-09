import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/shared/ScrollReveal";
import SectionHeader from "../components/shared/SectionHeader";
import AnimatedButton from "../components/shared/AnimatedButton";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Sprout, Mountain, Heart, Users, Leaf, Sun, Droplets, Globe } from "lucide-react";

const timeline = [
  {
    year: "The Beginning",
    title: "A Journey Back to Roots",
    desc: "It started with a simple question — why has food lost its soul? We left the city, travelled to remote farming communities, and discovered ingredients that tasted like nature intended.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  },
  {
    year: "The Mission",
    title: "Connecting Farm to Home",
    desc: "We built relationships with beekeepers, spice farmers, and salt miners across the Himalayas. No middlemen, no processing — just pure, honest produce delivered with care.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  },
  {
    year: "The Promise",
    title: "Purity You Can Trust",
    desc: "Every product is tested, tasted, and loved before it reaches you. We believe in complete transparency — from the origin of every ingredient to the hands that harvested it.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
  },
];

const values = [
  { icon: Leaf, title: "100% Natural", desc: "No additives, preservatives, or artificial anything." },
  { icon: Mountain, title: "Origin Traced", desc: "Every product traced back to its farm and source." },
  { icon: Heart, title: "Ethically Sourced", desc: "Fair wages, sustainable practices, community first." },
  { icon: Globe, title: "Eco Packaging", desc: "Recyclable, minimal, and plastic-free wherever possible." },
];

const stats = [
  { number: "50+", label: "Partner Farms" },
  { number: "15K+", label: "Happy Customers" },
  { number: "100%", label: "Natural Products" },
  { number: "0", label: "Chemicals Used" },
];

export default function OurStory() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-[#FDFBF7]">
      {/* Hero */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt="Our Story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D3A2E]/60 to-[#2D3A2E]/80" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#E8C97A] text-xs tracking-[0.4em] uppercase font-medium mb-4 block">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6">
              From Root<br />
              <span className="text-[#E8C97A]">to Ritual</span>
            </h1>
            <p className="text-white/60 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
              The story of Nectora is the story of going back — to nature, to purity, to the way food was always meant to be.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#2D3A2E] py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-serif text-3xl md:text-4xl font-semibold text-[#E8C97A]">{stat.number}</p>
                <p className="text-white/50 text-sm mt-1">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="The Journey"
            title="How It All Began"
          />
          <div className="space-y-20 md:space-y-28">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <span className="text-[#D4A853] text-xs tracking-[0.3em] uppercase font-medium mb-3 block">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#2D3A2E] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#8B8578] leading-relaxed">{item.desc}</p>
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <motion.div
                      className="rounded-2xl overflow-hidden aspect-[4/3]"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#F5F0E8]/40">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our Values"
            description="These aren't just words — they're promises we keep with every product."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl p-6 text-center border border-[#F5F0E8] hover:border-[#5C7C5E]/20 transition-all hover:shadow-lg hover:shadow-[#5C7C5E]/5"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#5C7C5E]/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon size={22} className="text-[#5C7C5E]" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[#2D3A2E] mb-2">{v.title}</h4>
                  <p className="text-sm text-[#8B8578] leading-relaxed">{v.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#2D3A2E] mb-6">
            Ready to Taste the Difference?
          </h2>
          <Link to={createPageUrl("Shop")}>
            <AnimatedButton variant="primary" size="large">
              Explore Our Products
            </AnimatedButton>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}