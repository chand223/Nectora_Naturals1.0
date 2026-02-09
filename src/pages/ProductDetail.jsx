import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import ScrollReveal from "../components/shared/ScrollReveal";
import AnimatedButton from "../components/shared/AnimatedButton";
import {
  ShoppingBag, Heart, Share2, Star, ChevronRight,
  Leaf, Shield, Truck, RotateCcw, Minus, Plus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const placeholderProduct = {
  id: "p1",
  name: "Raw Himalayan Honey",
  price: 599,
  compare_price: 799,
  image_url: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1200&q=80",
  gallery_urls: [
    "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80",
    "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80",
  ],
  badges: ["Antioxidant Rich", "Raw", "Unfiltered"],
  category: "kitchen_heroes",
  short_description: "Pure, unfiltered honey from the Himalayan foothills",
  long_description: "Our Raw Himalayan Honey is sourced from wild beehives nestled in the pristine Himalayan foothills. Unlike commercial honey, this is never heated, filtered, or processed — preserving all the natural enzymes, pollen, and nutrients that make honey a superfood. Each jar carries the unique floral notes of the Himalayan wildflowers.",
  benefits: ["Rich in antioxidants", "Natural energy booster", "Supports immunity", "Anti-inflammatory", "Soothes sore throat"],
  ingredients: ["100% Raw Himalayan Honey"],
  origin: "Sourced from beekeepers in the pristine valleys of Himachal Pradesh, where wild bees forage on untouched Himalayan wildflowers at altitudes of 3000-5000 feet.",
  usage_ritual: "Morning Ritual: Mix a tablespoon of raw honey in warm (not hot) water with a squeeze of lemon. Sip slowly as you welcome the day. The enzymes in raw honey help kickstart your metabolism and cleanse your system naturally.",
  weight: "500g",
  need_tags: ["immunity", "energy"],
};

export default function ProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);

  const { data: product } = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      if (!productId || productId.startsWith("p")) return null;
      const products = await base44.entities.Product.filter({ id: productId });
      return products[0] || null;
    },
    initialData: null,
  });

  const p = product || placeholderProduct;
  const images = [p.image_url, ...(p.gallery_urls || [])].filter(Boolean);

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-[#FDFBF7]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-[#8B8578]">
          <Link to={createPageUrl("Home")} className="hover:text-[#5C7C5E] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to={createPageUrl("Shop")} className="hover:text-[#5C7C5E] transition-colors">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-[#2D3A2E]">{p.name}</span>
        </div>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <ScrollReveal direction="left">
            <div className="space-y-4">
              <motion.div
                className="aspect-square rounded-2xl overflow-hidden bg-[#F5F0E8]"
                layoutId={`product-${p.id}`}
              >
                <motion.img
                  key={selectedImage}
                  src={images[selectedImage]}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              {images.length > 1 && (
                <div className="flex gap-3">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === i
                          ? "border-[#5C7C5E] shadow-md"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#8B8578] mb-2">
                  {p.category?.replace(/_/g, " ")}
                </p>
                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#2D3A2E] mb-3">
                  {p.name}
                </h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-[#D4A853] fill-[#D4A853]" />
                    ))}
                  </div>
                  <span className="text-sm text-[#8B8578]">(24 reviews)</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-semibold text-[#2D3A2E]">₹{p.price}</span>
                  {p.compare_price && (
                    <>
                      <span className="text-lg text-[#8B8578] line-through">₹{p.compare_price}</span>
                      <Badge className="bg-[#C17A5A]/10 text-[#C17A5A] border-0">
                        Save {Math.round(((p.compare_price - p.price) / p.compare_price) * 100)}%
                      </Badge>
                    </>
                  )}
                </div>
              </div>

              <p className="text-[#8B8578] leading-relaxed">{p.short_description}</p>

              {/* Badges */}
              {p.badges?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {p.badges.map((badge, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-[#5C7C5E]/10 text-[#5C7C5E] text-xs font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {p.weight && (
                <p className="text-sm text-[#8B8578]">
                  Size: <span className="font-medium text-[#2D3A2E]">{p.weight}</span>
                </p>
              )}

              {/* Qty + Add to cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#F5F0E8] rounded-full">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-[#F5F0E8] rounded-l-full transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center font-medium">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-[#F5F0E8] rounded-r-full transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <AnimatedButton variant="primary" size="large" className="flex-1" icon={false}>
                  <ShoppingBag size={18} /> Add to Cart
                </AnimatedButton>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setLiked(!liked)}
                  className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                    liked ? "bg-red-50 border-red-200 text-red-500" : "border-[#F5F0E8] text-[#8B8578] hover:bg-[#F5F0E8]"
                  }`}
                >
                  <Heart size={18} className={liked ? "fill-red-500" : ""} />
                </motion.button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#F5F0E8]">
                {[
                  { icon: Leaf, text: "100% Natural" },
                  { icon: Shield, text: "Quality Assured" },
                  { icon: Truck, text: "Free Delivery" },
                  { icon: RotateCcw, text: "Easy Returns" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#8B8578]">
                    <item.icon size={14} className="text-[#5C7C5E]" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Details sections */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {p.long_description && (
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 border border-[#F5F0E8]">
                <h3 className="font-serif text-xl font-semibold text-[#2D3A2E] mb-4">About this Product</h3>
                <p className="text-[#8B8578] leading-relaxed text-sm">{p.long_description}</p>
              </div>
            </ScrollReveal>
          )}
          {p.benefits?.length > 0 && (
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-[#F5F0E8]">
                <h3 className="font-serif text-xl font-semibold text-[#2D3A2E] mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {p.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#8B8578]">
                      <div className="w-5 h-5 rounded-full bg-[#5C7C5E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Leaf size={10} className="text-[#5C7C5E]" />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          )}
          {p.origin && (
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-[#F5F0E8]">
                <h3 className="font-serif text-xl font-semibold text-[#2D3A2E] mb-4">Origin & Sourcing</h3>
                <p className="text-[#8B8578] leading-relaxed text-sm">{p.origin}</p>
              </div>
            </ScrollReveal>
          )}
          {p.usage_ritual && (
            <ScrollReveal delay={0.3}>
              <div className="bg-[#5C7C5E]/5 rounded-2xl p-8 border border-[#5C7C5E]/10">
                <h3 className="font-serif text-xl font-semibold text-[#2D3A2E] mb-4">✨ Your Daily Ritual</h3>
                <p className="text-[#8B8578] leading-relaxed text-sm">{p.usage_ritual}</p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </div>
  );
}