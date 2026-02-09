import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../shared/ScrollReveal";
import SectionHeader from "../shared/SectionHeader";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const instagramPosts = [
  {
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80",
    likes: 234,
    comments: 18,
  },
  {
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80",
    likes: 189,
    comments: 12,
  },
  {
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
    likes: 312,
    comments: 27,
  },
  {
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
    likes: 156,
    comments: 9,
  },
  {
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80",
    likes: 278,
    comments: 21,
  },
  {
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
    likes: 198,
    comments: 15,
  },
];

export default function InstagramFeed() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#F5F0E8]/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="@nectora.naturals"
          title="Follow the Journey"
          description="Join our growing community on Instagram for daily inspiration, recipes, and behind-the-scenes."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.a
                href="https://www.instagram.com/nectora.naturals"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer block"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={post.image}
                  alt="Instagram"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    className="flex items-center gap-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <span className="flex items-center gap-1 text-sm font-medium">
                      <Heart size={14} className="fill-white" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium">
                      <MessageCircle size={14} /> {post.comments}
                    </span>
                  </motion.div>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="text-center mt-10">
          <motion.a
            href="https://www.instagram.com/nectora.naturals"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#5C7C5E] font-medium hover:text-[#4A6A4C] transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Instagram size={20} />
            <span className="animated-underline">Follow @nectora.naturals</span>
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}