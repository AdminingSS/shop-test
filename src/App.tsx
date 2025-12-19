import React, { useEffect } from 'react';

import { useCartStore } from './store/useCartStore';

import { useRealtimeSync } from './hooks/useRealtimeSync';
import { useSyncTabs } from './hooks/useSyncTabs';

import Header from './components/Header';
import ProductManager from './components/ProductManager';
import ShoppingCart from './components/ShoppingCart';
import Modal from './components/Modal';

const App: React.FC = () => {
  const { refreshCartData, isCartOpen, closeCart  } = useCartStore();

  useRealtimeSync();
  useSyncTabs();

  useEffect(() => {
    refreshCartData ();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <Header />

      <ProductManager />

      <Modal isOpen={isCartOpen} onClose={closeCart} title="Your cart">
          <ShoppingCart />
      </Modal>
    </div>
  );
};

export default App;