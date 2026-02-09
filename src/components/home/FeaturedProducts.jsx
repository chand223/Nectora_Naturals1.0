import React from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import ScrollReveal from "../shared/ScrollReveal";
import SectionHeader from "../shared/SectionHeader";
import AnimatedButton from "../shared/AnimatedButton";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ShoppingBag, Star, Sparkles } from "lucide-react";

const placeholderProducts = [
  {
    id: "p1",
    name: "Raw Himalayan Honey",
    price: 599,
    compare_price: 799,
    image_url: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80",
    badges: ["Antioxidant Rich", "Raw"],
    category: "kitchen_heroes",
    short_description: "Pure, unfiltered honey from the Himalayan foothills",
  },
  {
    id: "p2",
    name: "Kashmir Saffron Threads",
    price: 1299,
    compare_price: 1599,
    image_url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
    badges: ["Premium Grade", "Hand-Picked"],
    category: "kitchen_heroes",
    short_description: "Hand-harvested saffron from the valleys of Kashmir",
  },
  {
    id: "p3",
    name: "Pink Salt Collection",
    price: 449,
    image_url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    badges: ["Mineral Rich", "Unrefined"],
    category: "daily_rituals",
    short_description: "Ancient Himalayan pink salt, 250 million years in the making",
  },
  {
    id: "p4",
    name: "Turmeric & Black Pepper",
    price: 349,
    image_url: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
    badges: ["Immunity Boost", "Organic"],
    category: "daily_rituals",
    short_description: "A golden duo for daily wellness and immunity",
  },
];

export default function FeaturedProducts() {
  const { data: products } = useQuery({
    queryKey: ["featured-products"],
    queryFn: () => base44.entities.Product.filter({ featured: true }, "-created_date", 4),
    initialData: [],
  });

  const displayProducts = products.length > 0 ? products : placeholderProducts;

  return (
    <section className="py-24 md:py-32 px-6 bg-[#F5F0E8]/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Curated Collection"
          title="Nature's Finest Picks"
          description="Hand-selected treasures from farms that respect the rhythm of the earth."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayProducts.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.1} direction="up">
              <Link to={createPageUrl(`ProductDetail?id=${product.id}`)}>
                <motion.div
                  className="group card-shine rounded-2xl bg-white border border-[#F5F0E8] overflow-hidden cursor-pointer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <motion.img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      {product.badges?.slice(0, 2).map((badge, j) => (
                        <span
                          key={j}
                          className="bg-white/90 backdrop-blur-sm text-[#5C7C5E] text-[10px] tracking-wider uppercase font-medium px-2.5 py-1 rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    {product.compare_price && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-[#C17A5A] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                          {Math.round(
                            ((product.compare_price - product.price) /
                              product.compare_price) *
                              100
                          )}
                          % OFF
                        </span>
                      </div>
                    )}
                    {/* Quick add */}
                    <motion.div
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-10 h-10 bg-[#5C7C5E] rounded-full flex items-center justify-center shadow-lg">
                        <ShoppingBag size={16} className="text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B8578] mb-1.5">
                      {product.category?.replace(/_/g, " ")}
                    </p>
                    <h3 className="font-serif text-lg font-semibold text-[#2D3A2E] mb-1.5 group-hover:text-[#5C7C5E] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#8B8578] mb-3 line-clamp-2">
                      {product.short_description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-[#2D3A2E]">
                        ₹{product.price}
                      </span>
                      {product.compare_price && (
                        <span className="text-sm text-[#8B8578] line-through">
                          ₹{product.compare_price}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="text-center mt-14">
          <Link to={createPageUrl("Shop")}>
            <AnimatedButton variant="primary" size="large">
              View All Products
            </AnimatedButton>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}