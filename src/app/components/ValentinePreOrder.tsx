'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Heart, Timer, Sparkles, ArrowRight, Calendar, Loader2 } from 'lucide-react';
import { getPreorderProducts } from '@/app/lib/api';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
}

export function ValentinePreOrder() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await getPreorderProducts();
        setProducts(list.map(p => ({
          id: p.id,
          name: p.name,
          price: p.price,
          originalPrice: p.original_price ?? undefined,
          image: p.image,
        })));
      } catch (error) {
        console.error('Failed to fetch pre-order products', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-[#FFF0F5] to-white h-[600px] flex items-center justify-center">
         <Loader2 className="size-10 animate-spin text-[#CD5C5C]" />
      </section>
    );
  }

  return (
    <section id="valentine-preorder" className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-[#FFF0F5] to-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 text-pink-100 opacity-50 rotate-12">
          <Heart size={400} fill="currentColor" />
        </div>
        <div className="absolute top-40 -left-20 text-pink-100 opacity-40 -rotate-12">
          <Heart size={300} fill="currentColor" />
        </div>
        {/* Floating petals effect could go here */}
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 text-center md:text-left">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#CD5C5C]/10 text-[#CD5C5C] rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Sparkles className="size-3" />
              <span>Limited Edition</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-[1.1] mb-6">
              Valentine's <span className="text-[#CD5C5C] italic">Collection</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Хайртай хүндээ бэлэглэх хамгийн нандин бэлгээ эрт захиалж, 
              <span className="font-bold text-gray-900"> 20% хөнгөлөлт</span> эдлээрэй.
            </p>
          </div>

          {/* Countdown Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-pink-100 border border-pink-100 min-w-[300px] md:min-w-[380px]">
            <div className="flex items-center gap-2 text-[#CD5C5C] mb-6 justify-center">
              <Timer className="size-5" />
              <span className="font-bold uppercase tracking-wider text-sm">Урьдчилсан захиалга дуусахад</span>
            </div>
            
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { val: timeLeft.days, label: 'Өдөр' },
                { val: timeLeft.hours, label: 'Цаг' },
                { val: timeLeft.minutes, label: 'Мин' },
                { val: timeLeft.seconds, label: 'Сек' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="bg-gray-50 rounded-lg py-3 mb-2 border border-gray-100">
                    <span className="text-2xl md:text-3xl font-bold text-gray-900 font-mono">
                      {item.val.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <Link key={product.id} href={`/products/${product.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300 border border-pink-50 cursor-pointer flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-pink-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <span className="bg-white/95 backdrop-blur text-[#CD5C5C] px-3 py-1 rounded-md text-xs font-bold shadow-sm flex items-center gap-1.5">
                      <Calendar className="size-3" />
                      Feb 14
                    </span>
                  </div>
                  <div className="bg-[#CD5C5C] text-white p-2 rounded-full shadow-lg">
                    <Heart className="size-4 fill-current" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-lg text-gray-900 leading-tight mb-2 group-hover:text-[#CD5C5C] transition-colors">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-bold text-[#CD5C5C]">
                    {product.price.toLocaleString()}₮
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice.toLocaleString()}₮
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 text-gray-500 hover:text-[#CD5C5C] transition-colors font-medium border-b border-gray-200 pb-0.5 hover:border-[#CD5C5C]">
            Бүх баярын багцыг үзэх
            <ArrowRight className="size-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
