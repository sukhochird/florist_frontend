'use client';

import { useState } from 'react';
import { HeroSection } from '@/app/components/HeroSection';
import { OccasionsGrid } from '@/app/components/OccasionsGrid';
import { IntroSection } from '@/app/components/IntroSection';
import { FlowerTypesNav } from '@/app/components/FlowerTypesNav';
import { FeaturedProductsSection } from '@/app/components/FeaturedProductsSection';
import { ValentinePreOrder } from '@/app/components/ValentinePreOrder';
import { FAQSection } from '@/app/components/FAQSection';

export default function HomePage() {
  const [featuredCategory, setFeaturedCategory] = useState<string>('all');

  return (
    <>
      <HeroSection />
      <OccasionsGrid />
      <IntroSection />

      {/* Valentine Pre-Order Section */}
      <ValentinePreOrder />

      {/* Filter / Flower Types Nav — онцлох бүтээгдэхүүнийг ангилалаар шүүнэ */}
      <FlowerTypesNav activeType={featuredCategory} onActiveTypeChange={setFeaturedCategory} />

      {/* Featured Products Section */}
      <FeaturedProductsSection categorySlug={featuredCategory === 'all' ? undefined : featuredCategory} />

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
