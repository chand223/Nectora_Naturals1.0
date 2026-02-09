import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../shared/ScrollReveal";
import { Send, Check } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#2D3A2E]">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent" />
      <motion.div
        className="absolute top-1/4 right-10 w-32 h-32 border border-[#5C7C5E]/10 rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-20 h-20 border border-[#D4A853]/10 rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
        <ScrollReveal>
          <span className="text-[#E8C97A] text-xs tracking-[0.4em] uppercase font-medium mb-4 block">
            Stay Connected
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
            Join the Nectora Family
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-white/60 text-base mb-8 leading-relaxed">
            Get exclusive recipes, wellness tips, seasonal rituals, and early
            access to new products — delivered to your inbox.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/10 text-white placeholder:text-white/40 rounded-full px-5 h-12 focus:border-[#D4A853] focus:ring-[#D4A853]/20"
              required
            />
            <motion.button
              type="submit"
              className={`h-12 px-6 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                submitted
                  ? "bg-green-500 text-white"
                  : "bg-[#D4A853] text-white hover:bg-[#C19840]"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {submitted ? (
                <>
                  <Check size={16} /> Subscribed!
                </>
              ) : (
                <>
                  <Send size={16} /> Subscribe
                </>
              )}
            </motion.button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}