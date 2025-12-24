'use client';

import { useEffect } from 'react';

import { useCartStore } from '@/presentation/controllers/useCartStore';

import { useRealtimeSync } from '@/presentation/hooks/useRealtimeSync';
import { useSyncTabs } from '@/presentation/hooks/useSyncTabs';

import Header from '@/presentation/components/Header';
import ProductManager from '@/presentation/components/ProductManager';
import CartSidebar from '@/presentation/components/CartSidebar';

export default function Page() {
  const { refreshCartData, isCartOpen, closeCart } = useCartStore();

  useRealtimeSync();
  useSyncTabs();

  useEffect(() => {
    refreshCartData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <Header />

      <ProductManager />

      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </div>
  );
};