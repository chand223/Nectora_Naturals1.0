import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "./components/shared/AnimatedLogo";
import {
  Menu,
  X,
  ShoppingBag,
  Search,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Leaf,
  Heart,
} from "lucide-react";

const navItems = [
  { label: "Home", page: "Home" },
  { label: "Shop", page: "Shop" },
  { label: "Our Story", page: "OurStory" },
  { label: "Rituals", page: "Rituals" },
  { label: "Contact", page: "Contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === createPageUrl("Home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const showSolid = isScrolled || !isHome || mobileOpen;

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolid
            ? "bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#F5F0E8]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          <Link to={createPageUrl("Home")}>
            <AnimatedLogo size="small" light={!showSolid} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.page}
                to={createPageUrl(item.page)}
                className={`text-sm font-medium animated-underline transition-colors duration-300 ${
                  showSolid
                    ? "text-[#2D3A2E] hover:text-[#5C7C5E]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`hidden md:flex w-9 h-9 rounded-full items-center justify-center transition-colors ${
                showSolid
                  ? "hover:bg-[#F5F0E8] text-[#2D3A2E]"
                  : "hover:bg-white/10 text-white"
              }`}
            >
              <Search size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`hidden md:flex w-9 h-9 rounded-full items-center justify-center transition-colors ${
                showSolid
                  ? "hover:bg-[#F5F0E8] text-[#2D3A2E]"
                  : "hover:bg-white/10 text-white"
              }`}
            >
              <Heart size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                showSolid
                  ? "hover:bg-[#F5F0E8] text-[#2D3A2E]"
                  : "hover:bg-white/10 text-white"
              }`}
            >
              <ShoppingBag size={18} />
            </motion.button>

            {/* Mobile menu btn */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                showSolid
                  ? "hover:bg-[#F5F0E8] text-[#2D3A2E]"
                  : "hover:bg-white/10 text-white"
              }`}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#FDFBF7] pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-6 py-12">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.page}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={createPageUrl(item.page)}
                    className="font-serif text-2xl text-[#2D3A2E] hover:text-[#5C7C5E] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2D3A2E] text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <AnimatedLogo light size="small" />
            <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              Bringing the purest gifts of nature to your doorstep. 
              Farm-fresh, unprocessed, and crafted with love.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/nectora.naturals"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:hello@nectoranaturals.com"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#D4A853] font-medium mb-5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#D4A853] font-medium mb-5">
              Collections
            </h4>
            <div className="flex flex-col gap-3">
              <Link to={createPageUrl("Shop?category=daily_rituals")} className="text-sm text-white/60 hover:text-white transition-colors">Daily Rituals</Link>
              <Link to={createPageUrl("Shop?category=kitchen_heroes")} className="text-sm text-white/60 hover:text-white transition-colors">Kitchen Heroes</Link>
              <Link to={createPageUrl("Shop?category=seasonal_essentials")} className="text-sm text-white/60 hover:text-white transition-colors">Seasonal Essentials</Link>
              <Link to={createPageUrl("Shop?category=gifts_bundles")} className="text-sm text-white/60 hover:text-white transition-colors">Gifts & Bundles</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#D4A853] font-medium mb-5">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#D4A853]" />
                hello@nectoranaturals.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#D4A853]" />
                +91 98765 43210
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#D4A853] mt-0.5" />
                Himachal Pradesh, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Nectora Naturals. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-white/40">
            <Leaf size={12} className="text-[#5C7C5E]" />
            Crafted with love for nature
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <style>{`
        :root {
          --background: 40 33% 98%;
          --foreground: 60 6% 10%;
        }
      `}</style>
      <div className="grain-overlay" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}