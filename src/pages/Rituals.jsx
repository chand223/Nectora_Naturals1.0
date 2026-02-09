import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import ScrollReveal from "../components/shared/ScrollReveal";
import SectionHeader from "../components/shared/SectionHeader";
import AnimatedButton from "../components/shared/AnimatedButton";
import { Clock, BookOpen, Sunrise, Moon, Sun, Coffee } from "lucide-react";

const ritualGuides = [
  {
    time: "Morning",
    icon: Sunrise,
    color: "from-amber-100 to-orange-100",
    iconColor: "text-amber-600",
    title: "Golden Morning Ritual",
    steps: [
      "Warm a glass of water (not boiling)",
      "Add 1 tbsp raw Himalayan honey",
      "Squeeze half a lemon",
      "Add a pinch of turmeric",
      "Sip slowly, mindfully",
    ],
    product: "Raw Himalayan Honey",
    benefit: "Kickstart metabolism, cleanse the system, boost immunity",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80",
  },
  {
    time: "Afternoon",
    icon: Sun,
    color: "from-green-50 to-emerald-50",
    iconColor: "text-emerald-600",
    title: "Spice-Infused Energy Boost",
    steps: [
      "Brew your favourite tea or warm water",
      "Add a pinch of cinnamon",
      "Add a dash of black pepper",
      "Stir in half a teaspoon of honey",
      "Breathe in the aroma before sipping",
    ],
    product: "Organic Cinnamon Sticks",
    benefit: "Natural energy without caffeine crash, improved focus",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
  },
  {
    time: "Evening",
    icon: Moon,
    color: "from-indigo-50 to-purple-50",
    iconColor: "text-indigo-600",
    title: "Golden Milk Wind-Down",
    steps: [
      "Warm a cup of milk (any kind)",
      "Add ½ tsp turmeric powder",
      "Pinch of black pepper (for absorption)",
      "½ tsp honey for sweetness",
      "Dash of cinnamon on top",
    ],
    product: "Golden Milk Blend",
    benefit: "Reduce inflammation, promote restful sleep, soothe muscles",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
  },
];

const stories = [
  {
    title: "What Makes Himalayan Pink Salt Special?",
    category: "Ingredient Deep Dive",
    excerpt: "Formed over 250 million years ago, discover why this ancient mineral is more than just a seasoning.",
    cover_image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    read_time: 5,
  },
  {
    title: "The Science Behind Raw Honey",
    category: "Wellness Tip",
    excerpt: "Why heating honey destroys its most powerful compounds, and how raw honey preserves nature's medicine.",
    cover_image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80",
    read_time: 4,
  },
  {
    title: "Turmeric's Golden Secret: Piperine",
    category: "Ingredient Deep Dive",
    excerpt: "Black pepper increases turmeric absorption by 2000%. The ancient wisdom modern science confirmed.",
    cover_image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
    read_time: 3,
  },
  {
    title: "30-Day Honey Challenge",
    category: "Ritual",
    excerpt: "Replace processed sugar with raw honey for 30 days and watch the transformation in energy, skin, and sleep.",
    cover_image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80",
    read_time: 6,
  },
];

export default function Rituals() {
  const { data: dbStories } = useQuery({
    queryKey: ["stories"],
    queryFn: () => base44.entities.Story.list("-created_date", 10),
    initialData: [],
  });

  const displayStories = dbStories.length > 0 ? dbStories : stories;

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-[#FDFBF7]">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1920&q=80"
          alt="Rituals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D3A2E]/50 to-[#2D3A2E]/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#E8C97A] text-xs tracking-[0.4em] uppercase font-medium mb-4 block">
              Stories & Rituals
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white leading-tight mb-4">
              Live Naturally,<br /><span className="text-[#E8C97A]">Every Day</span>
            </h1>
            <p className="text-white/60 max-w-lg mx-auto text-base md:text-lg">
              Transform ordinary moments into mindful ceremonies with our curated rituals and stories.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Ritual Guides */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Daily Rituals"
            title="Simple Rituals, Powerful Results"
            description="Three moments in your day to reconnect with nature. No fuss — just mindful simplicity."
          />

          <div className="space-y-12">
            {ritualGuides.map((ritual, i) => (
              <ScrollReveal key={i} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 rounded-3xl overflow-hidden bg-gradient-to-br ${ritual.color} p-1`}>
                  <div className="lg:col-span-2 aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden">
                    <img src={ritual.image} alt={ritual.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center`}>
                        <ritual.icon size={20} className={ritual.iconColor} />
                      </div>
                      <span className="text-xs tracking-[0.2em] uppercase text-[#8B8578] font-medium">
                        {ritual.time} Ritual
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[#2D3A2E] mb-4">
                      {ritual.title}
                    </h3>
                    <ol className="space-y-2 mb-5">
                      {ritual.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-[#8B8578]">
                          <span className="w-5 h-5 rounded-full bg-[#5C7C5E]/10 flex items-center justify-center text-[10px] font-semibold text-[#5C7C5E] flex-shrink-0 mt-0.5">
                            {j + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                    <p className="text-xs text-[#5C7C5E] font-medium mb-1">✨ Benefits</p>
                    <p className="text-sm text-[#8B8578] mb-4">{ritual.benefit}</p>
                    <div className="flex items-center gap-2 text-xs text-[#8B8578]">
                      <Coffee size={12} className="text-[#D4A853]" />
                      Made with: <span className="font-medium text-[#2D3A2E]">{ritual.product}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Hub */}
      <section className="py-24 px-6 bg-[#F5F0E8]/40">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Stories Hub"
            title="Deep Dives & Discoveries"
            description="The knowledge that Instagram posts can't capture — here to stay, here to inspire."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayStories.map((story, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="group bg-white rounded-2xl overflow-hidden border border-[#F5F0E8] hover:shadow-xl hover:shadow-[#5C7C5E]/5 transition-all cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={story.cover_image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#5C7C5E] font-medium bg-[#5C7C5E]/10 px-2.5 py-1 rounded-full">
                        {story.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-[#8B8578]">
                        <Clock size={10} /> {story.read_time} min read
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#2D3A2E] mb-2 group-hover:text-[#5C7C5E] transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-sm text-[#8B8578] leading-relaxed line-clamp-2">
                      {story.excerpt}
                    </p>
                  </div>
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
            Start Your Natural Journey
          </h2>
          <Link to={createPageUrl("Shop")}>
            <AnimatedButton variant="honey" size="large">
              Shop Ritual Essentials
            </AnimatedButton>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}