import React from 'react';

import { useCartStore, selectTotalQuantity } from '@/presentation/controllers/useCartStore';

const Header: React.FC = () => {
  const totalQuantity = useCartStore(selectTotalQuantity);
  const openCart = useCartStore(state => state.openCart);

  return (
    <header className="mb-8 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-800 animate-in fade-in slide-in-from-top-4 duration-500">
        Shop
      </h1>
      <button 
        onClick={openCart} 
        className={`relative p-3 text-white rounded-lg shadow transition-all duration-200 cursor-pointer transform hover:scale-105 ${
          totalQuantity > 0 
            ? 'bg-indigo-600 hover:bg-indigo-700 animate-pulse' 
            : 'bg-gray-400 hover:bg-gray-500'
        }`}
      >
        🛒 {totalQuantity > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce">
            {totalQuantity}
          </span>
        )}
        <span className="ml-2">
          {totalQuantity > 0 ? `Cart (${totalQuantity})` : 'Cart'}
        </span>
      </button>
    </header>
  );
};

export default Header;