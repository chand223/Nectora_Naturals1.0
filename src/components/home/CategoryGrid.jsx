import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../shared/ScrollReveal";
import SectionHeader from "../shared/SectionHeader";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Sunrise, ChefHat, CloudRain, Gift } from "lucide-react";

const categories = [
  {
    slug: "daily_rituals",
    name: "Daily Rituals",
    desc: "Things you use everyday, made extraordinary",
    icon: Sunrise,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80",
    color: "from-[#5C7C5E]/80",
  },
  {
    slug: "kitchen_heroes",
    name: "Kitchen Heroes",
    desc: "Honeys, salts, spices — your cooking companions",
    icon: ChefHat,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    color: "from-[#D4A853]/80",
  },
  {
    slug: "seasonal_essentials",
    name: "Seasonal Essentials",
    desc: "Nature's answer to every season's needs",
    icon: CloudRain,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
    color: "from-[#C17A5A]/80",
  },
  {
    slug: "gifts_bundles",
    name: "Gifts & Bundles",
    desc: "Curated sets for every special occasion",
    icon: Gift,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80",
    color: "from-[#8B6B4E]/80",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Shop by Need"
          title="Discover Your Path"
          description="Whether it's your morning cup or a special gift, find exactly what nature intended for you."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal
              key={cat.slug}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <Link to={createPageUrl(`Shop?category=${cat.slug}`)}>
                <motion.div
                  className="relative group rounded-2xl overflow-hidden aspect-[16/9] cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent`}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <motion.div
                      className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4"
                      whileHover={{ rotate: 10 }}
                    >
                      <cat.icon size={20} className="text-white" />
                    </motion.div>
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-white/70 text-sm max-w-xs">
                      {cat.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}