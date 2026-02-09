import React from "react";
import HeroSection from "../components/home/HeroSection";
import StoryPreview from "../components/home/StoryPreview";
import FeaturedProducts from "../components/home/FeaturedProducts";
import CategoryGrid from "../components/home/CategoryGrid";
import RitualBanner from "../components/home/RitualBanner";
import TestimonialsSection from "../components/home/TestimonialsSection";
import InstagramFeed from "../components/home/InstagramFeed";
import NewsletterSection from "../components/home/NewsletterSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StoryPreview />
      <FeaturedProducts />
      <CategoryGrid />
      <RitualBanner />
      <TestimonialsSection />
      <InstagramFeed />
      <NewsletterSection />
    </div>
  );
}