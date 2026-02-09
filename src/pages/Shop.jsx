import React, { useState, useMemo } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import ScrollReveal from "../components/shared/ScrollReveal";
import SectionHeader from "../components/shared/SectionHeader";
import { ShoppingBag, Filter, X, SlidersHorizontal, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  { value: "all", label: "All Products" },
  { value: "daily_rituals", label: "Daily Rituals" },
  { value: "kitchen_heroes", label: "Kitchen Heroes" },
  { value: "seasonal_essentials", label: "Seasonal Essentials" },
  { value: "gifts_bundles", label: "Gifts & Bundles" },
];

const needTags = [
  "hydration", "digestion", "glow", "immunity", "energy", "detox", "sleep",
];

const placeholderProducts = [
  { id: "p1", name: "Raw Himalayan Honey", price: 599, compare_price: 799, image_url: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80", badges: ["Antioxidant Rich", "Raw"], category: "kitchen_heroes", short_description: "Pure, unfiltered honey from the Himalayan foothills", need_tags: ["immunity", "energy"], best_seller: true },
  { id: "p2", name: "Kashmir Saffron Threads", price: 1299, compare_price: 1599, image_url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80", badges: ["Premium Grade"], category: "kitchen_heroes", short_description: "Hand-harvested saffron from the valleys of Kashmir", need_tags: ["glow"], best_seller: true },
  { id: "p3", name: "Pink Salt Collection", price: 449, image_url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80", badges: ["Mineral Rich"], category: "daily_rituals", short_description: "Ancient Himalayan pink salt", need_tags: ["detox", "hydration"] },
  { id: "p4", name: "Turmeric & Black Pepper", price: 349, image_url: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80", badges: ["Immunity Boost"], category: "daily_rituals", short_description: "A golden duo for daily wellness", need_tags: ["immunity", "digestion"] },
  { id: "p5", name: "Wild Forest Honey", price: 699, image_url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80", badges: ["Wild Harvest"], category: "kitchen_heroes", short_description: "Collected from wild forest beehives", need_tags: ["energy", "immunity"] },
  { id: "p6", name: "Wellness Gift Box", price: 1999, compare_price: 2499, image_url: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=80", badges: ["Gift Set"], category: "gifts_bundles", short_description: "A curated box of nature's finest", need_tags: ["glow", "immunity"] },
  { id: "p7", name: "Organic Cinnamon Sticks", price: 299, image_url: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80", badges: ["Organic"], category: "seasonal_essentials", short_description: "Hand-rolled Ceylon cinnamon", need_tags: ["digestion", "detox"] },
  { id: "p8", name: "Golden Milk Blend", price: 499, image_url: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80", badges: ["Best Seller"], category: "daily_rituals", short_description: "Turmeric, pepper, cinnamon & honey blend", need_tags: ["sleep", "immunity"], best_seller: true },
];

export default function Shop() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeNeed, setActiveNeed] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const { data: products } = useQuery({
    queryKey: ["all-products"],
    queryFn: () => base44.entities.Product.list("-created_date", 50),
    initialData: [],
  });

  const displayProducts = products.length > 0 ? products : placeholderProducts;

  const filtered = useMemo(() => {
    return displayProducts.filter((p) => {
      const catMatch = activeCategory === "all" || p.category === activeCategory;
      const needMatch = !activeNeed || p.need_tags?.includes(activeNeed);
      return catMatch && needMatch;
    });
  }, [displayProducts, activeCategory, activeNeed]);

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-[#FDFBF7]">
      {/* Hero banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1920&q=80"
          alt="Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2D3A2E]/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <span className="text-[#E8C97A] text-xs tracking-[0.4em] uppercase font-medium mb-3 block">
              Collections
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-semibold text-white">
              Shop by Nature
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Category tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-[#5C7C5E] text-white shadow-md shadow-[#5C7C5E]/20"
                  : "bg-white border border-[#F5F0E8] text-[#8B8578] hover:border-[#5C7C5E]/30 hover:text-[#5C7C5E]"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="ml-auto whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-medium bg-white border border-[#F5F0E8] text-[#8B8578] hover:border-[#5C7C5E]/30 flex items-center gap-2"
          >
            <SlidersHorizontal size={14} /> Filter by Need
          </button>
        </div>

        {/* Need tags */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 py-4 border-t border-[#F5F0E8]">
                <span className="text-xs text-[#8B8578] uppercase tracking-wider mr-2 self-center">
                  Shop by need:
                </span>
                {needTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveNeed(activeNeed === tag ? null : tag)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-all ${
                      activeNeed === tag
                        ? "bg-[#D4A853] text-white"
                        : "bg-[#F5F0E8] text-[#8B8578] hover:bg-[#D4A853]/20"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
                {activeNeed && (
                  <button
                    onClick={() => setActiveNeed(null)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-red-500 hover:bg-red-50 flex items-center gap-1"
                  >
                    <X size={12} /> Clear
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          <AnimatePresence mode="wait">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link to={createPageUrl(`ProductDetail?id=${product.id}`)}>
                  <motion.div
                    className="group card-shine rounded-2xl bg-white border border-[#F5F0E8] overflow-hidden"
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {product.best_seller && (
                          <span className="bg-[#D4A853] text-white text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                            <Star size={10} className="fill-white" /> Best Seller
                          </span>
                        )}
                        {product.badges?.slice(0, 1).map((badge, j) => (
                          <span
                            key={j}
                            className="bg-white/90 backdrop-blur-sm text-[#5C7C5E] text-[10px] tracking-wider uppercase font-medium px-2.5 py-1 rounded-full"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      {product.compare_price && (
                        <span className="absolute top-3 right-3 bg-[#C17A5A] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                          {Math.round(((product.compare_price - product.price) / product.compare_price) * 100)}% OFF
                        </span>
                      )}
                      <motion.div
                        className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-10 h-10 bg-[#5C7C5E] rounded-full flex items-center justify-center shadow-lg">
                          <ShoppingBag size={16} className="text-white" />
                        </div>
                      </motion.div>
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B8578] mb-1">
                        {product.category?.replace(/_/g, " ")}
                      </p>
                      <h3 className="font-serif text-lg font-semibold text-[#2D3A2E] mb-1 group-hover:text-[#5C7C5E] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#8B8578] mb-3 line-clamp-2">
                        {product.short_description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-[#2D3A2E]">₹{product.price}</span>
                        {product.compare_price && (
                          <span className="text-sm text-[#8B8578] line-through">₹{product.compare_price}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#8B8578] text-lg">No products found matching your filters.</p>
            <button
              onClick={() => { setActiveCategory("all"); setActiveNeed(null); }}
              className="mt-4 text-[#5C7C5E] font-medium underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}