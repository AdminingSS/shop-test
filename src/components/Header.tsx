import React from 'react';

import { useCartStore, selectTotalQuantity } from '../store/useCartStore'; 

const Header: React.FC = () => {
  const totalQuantity = useCartStore(selectTotalQuantity);
  const openCart = useCartStore(state => state.openCart);

  return (
    <header className="mb-8 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-800">
        Shop
      </h1>
      <button 
        onClick={openCart} 
        className="relative p-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition cursor-pointer"
      >
          🛒 Products in cart: {totalQuantity}
      </button>
    </header>
  );
};

export default Header;