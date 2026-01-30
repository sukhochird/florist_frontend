'use client';

import { useState, useEffect } from 'react';
import { ProductGrid, Product } from '@/app/components/ProductGrid';
import { Loader2 } from 'lucide-react';
import { getFeaturedProducts } from '@/app/lib/api';

function mapApiProductToGrid(p: { id: number; name: string; price: number; image: string; discount?: number | null; is_pre_order?: boolean }): Product {
  return {
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.image,
    discount: p.discount ?? undefined,
    isPreOrder: p.is_pre_order,
  };
}

export function FeaturedProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await getFeaturedProducts();
        setProducts(list.map(mapApiProductToGrid));
      } catch (error) {
        console.error('Failed to fetch featured products', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="py-6 md:py-12 bg-white min-h-[400px] flex items-center justify-center">
         <Loader2 className="size-10 animate-spin text-gray-300" />
      </section>
    );
  }

  return (
    <ProductGrid 
      title="Онцлох бүтээгдэхүүн"
      subtitle="Таны сонголтод"
      products={products}
    />
  );
}
