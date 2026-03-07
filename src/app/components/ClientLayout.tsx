'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Toaster } from 'sonner';
import { MessageCircle } from 'lucide-react';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';
import { CartProvider } from '@/app/context/CartContext';
import { FavoritesProvider } from '@/app/context/FavoritesContext';

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const hideFooterOnMobile =
    pathname === '/products' || (pathname?.startsWith('/products/') && pathname !== '/products');

  return (
    <CartProvider>
      <FavoritesProvider>
        <div className="min-h-screen flex flex-col">
          <Toaster position="top-center" expand={true} richColors />
          <Header />
          <CartDrawer />
          {/* Messenger FAB - bottom right, desktop & mobile */}
          <a
            href="https://www.messenger.com/t/103715851508871/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-1.5 group"
            title="AI Туслах - Messenger"
            aria-label="AI Туслах - Messenger"
          >
            <span className="flex items-center justify-center size-14 rounded-full bg-[#0084FF] text-white shadow-lg hover:bg-[#0066CC] group-hover:scale-105 active:scale-95 transition-all">
              <MessageCircle className="size-7" strokeWidth={2} />
            </span>
            <span className="text-xs font-medium text-gray-700 bg-white/90 backdrop-blur px-2 py-1 rounded shadow-sm">
              AI Туслах
            </span>
          </a>
          <main className="flex-1">{children}</main>
          <div className={hideFooterOnMobile ? 'hidden md:block' : ''}>
            <Footer />
          </div>
        </div>
      </FavoritesProvider>
    </CartProvider>
  );
}
