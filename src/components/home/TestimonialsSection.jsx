import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import ScrollReveal from "../shared/ScrollReveal";
import SectionHeader from "../shared/SectionHeader";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const placeholderReviews = [
  {
    id: 1,
    customer_name: "Priya Sharma",
    review: "The raw honey is absolutely divine. You can taste the difference — it's nothing like store-bought. My morning ritual is incomplete without it.",
    rating: 5,
    product_name: "Raw Himalayan Honey",
    location: "Mumbai",
  },
  {
    id: 2,
    customer_name: "Arjun Mehta",
    review: "Nectora's Kashmir saffron is the real deal. The aroma fills the entire kitchen. I use it in everything from biryani to my evening milk.",
    rating: 5,
    product_name: "Kashmir Saffron Threads",
    location: "Delhi",
  },
  {
    id: 3,
    customer_name: "Lakshmi Iyer",
    review: "I've been using the turmeric blend for three months now. My skin has never looked better. Thank you for keeping things natural and pure!",
    rating: 5,
    product_name: "Turmeric & Black Pepper",
    location: "Chennai",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const { data: testimonials } = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => base44.entities.Testimonial.filter({ featured: true }, "-created_date", 6),
    initialData: [],
  });

  const reviews = testimonials.length > 0 ? testimonials : placeholderReviews;

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 md:py-32 px-6 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Love Letters"
          title="What Our Community Says"
          description="Real stories from real people who made nature part of their daily lives."
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 border border-[#F5F0E8] text-center"
            >
              <Quote
                size={40}
                className="text-[#D4A853]/30 mx-auto mb-6"
                strokeWidth={1}
              />
              <p className="font-serif text-xl md:text-2xl text-[#2D3A2E] leading-relaxed mb-8">
                "{reviews[current].review}"
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(reviews[current].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[#D4A853] fill-[#D4A853]"
                  />
                ))}
              </div>
              <p className="font-semibold text-[#2D3A2E]">
                {reviews[current].customer_name}
              </p>
              <p className="text-sm text-[#8B8578]">
                {reviews[current].location} · {reviews[current].product_name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#F5F0E8] flex items-center justify-center hover:bg-[#F5F0E8] transition-colors"
            >
              <ChevronLeft size={18} className="text-[#2D3A2E]" />
            </motion.button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-[#5C7C5E]"
                      : "w-1.5 bg-[#5C7C5E]/20"
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#F5F0E8] flex items-center justify-center hover:bg-[#F5F0E8] transition-colors"
            >
              <ChevronRight size={18} className="text-[#2D3A2E]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}