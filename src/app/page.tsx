'use client';

import { HeroSection } from '@/app/components/HeroSection';
import { OccasionsGrid } from '@/app/components/OccasionsGrid';
import { IntroSection } from '@/app/components/IntroSection';
import { FlowerTypesNav } from '@/app/components/FlowerTypesNav';
import { FeaturedProductsSection } from '@/app/components/FeaturedProductsSection';
import { ValentinePreOrder } from '@/app/components/ValentinePreOrder';
import { FAQSection } from '@/app/components/FAQSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OccasionsGrid />
      <IntroSection />

      {/* Valentine Pre-Order Section */}
      <ValentinePreOrder />

      {/* Filter / Flower Types Nav */}
      <FlowerTypesNav />

      {/* Featured Products Section */}
      <FeaturedProductsSection />

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
