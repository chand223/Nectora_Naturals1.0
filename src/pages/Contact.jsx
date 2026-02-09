import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import ScrollReveal from "../components/shared/ScrollReveal";
import AnimatedButton from "../components/shared/AnimatedButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail, Phone, MapPin, Instagram, Clock, Send, Check, Leaf, MessageSquare,
} from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.entities.ContactMessage.create(form);
    setSending(false);
    setSent(true);
    toast.success("Message sent! We'll get back to you soon.");
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@nectoranaturals.com", href: "mailto:hello@nectoranaturals.com" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: MapPin, label: "Location", value: "Himachal Pradesh, India" },
    { icon: Clock, label: "Hours", value: "Mon - Sat, 9 AM - 6 PM IST" },
    { icon: Instagram, label: "Instagram", value: "@nectora.naturals", href: "https://www.instagram.com/nectora.naturals" },
  ];

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-[#FDFBF7]">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt="Contact"
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
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white leading-tight">
              We'd Love to<br /><span className="text-[#E8C97A]">Hear from You</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal>
              <h2 className="font-serif text-2xl font-semibold text-[#2D3A2E] mb-2">
                Let's Connect
              </h2>
              <p className="text-[#8B8578] leading-relaxed text-sm">
                Questions about our products, sourcing, or anything nature-related? 
                We're here to help and always happy to chat.
              </p>
            </ScrollReveal>

            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <a
                    href={item.href || "#"}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#5C7C5E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5C7C5E]/20 transition-colors">
                      <item.icon size={18} className="text-[#5C7C5E]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8B8578] mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-[#2D3A2E] group-hover:text-[#5C7C5E] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.5}>
              <div className="bg-[#5C7C5E]/5 rounded-2xl p-6 border border-[#5C7C5E]/10">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf size={16} className="text-[#5C7C5E]" />
                  <span className="text-sm font-medium text-[#2D3A2E]">Wholesale Inquiries</span>
                </div>
                <p className="text-xs text-[#8B8578] leading-relaxed">
                  Interested in carrying Nectora products in your store or café? 
                  Drop us a message and we'll share our wholesale catalog.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <ScrollReveal className="lg:col-span-3" direction="right">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-10 border border-[#F5F0E8] shadow-xl shadow-black/5"
            >
              <div className="flex items-center gap-2 mb-8">
                <MessageSquare size={20} className="text-[#5C7C5E]" />
                <h3 className="font-serif text-xl font-semibold text-[#2D3A2E]">
                  Send a Message
                </h3>
              </div>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-xs text-[#8B8578] uppercase tracking-wider">Name</Label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="border-[#F5F0E8] rounded-xl h-11 focus:border-[#5C7C5E] focus:ring-[#5C7C5E]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-[#8B8578] uppercase tracking-wider">Email</Label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="border-[#F5F0E8] rounded-xl h-11 focus:border-[#5C7C5E] focus:ring-[#5C7C5E]/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-[#8B8578] uppercase tracking-wider">Subject</Label>
                  <Input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="What's this about?"
                    className="border-[#F5F0E8] rounded-xl h-11 focus:border-[#5C7C5E] focus:ring-[#5C7C5E]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-[#8B8578] uppercase tracking-wider">Message</Label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    required
                    rows={5}
                    className="border-[#F5F0E8] rounded-xl focus:border-[#5C7C5E] focus:ring-[#5C7C5E]/20 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  className={`w-full h-12 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all ${
                    sent
                      ? "bg-green-500 text-white"
                      : "bg-[#5C7C5E] text-white hover:bg-[#4A6A4C] shadow-lg shadow-[#5C7C5E]/20"
                  }`}
                  whileHover={!sent ? { scale: 1.02 } : {}}
                  whileTap={!sent ? { scale: 0.98 } : {}}
                >
                  {sent ? (
                    <><Check size={18} /> Message Sent!</>
                  ) : sending ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </motion.button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}