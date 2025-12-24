import React from 'react';

import type { ICartItem } from '@/domain/entities/cart';

import { useCartStore } from '@/presentation/controllers/useCartStore';

import CartItem from './CartItem';

const calculateTotal = (cartItems: ICartItem[]) => {
    const discountThreshold = 5;
    const discountRate = 0.10;
    let total = 0;

    cartItems.forEach(item => {
      const originalItemPrice = item.productData.price * item.quantity;
      if (item.quantity > discountThreshold) {
        total += originalItemPrice * (1 - discountRate);
      } else {
        total += originalItemPrice;
      }
    });
    return total;
  };

const ShoppingCart: React.FC = () => {
  const { cartItems } = useCartStore();

  const total = calculateTotal(cartItems);

  const hasInventoryErrors = cartItems.some(item => 
    item.quantity > item.productData.quantity
  );

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-lg shadow">
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        {cartItems.map(item => (
          <CartItem 
            key={item.productId} 
            item={item}
          />
        ))}
      </div>

      <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg h-fit sticky top-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Summary</h3>
        
        <div className="space-y-3 border-t pt-4">
          <div className="flex justify-between font-bold text-2xl text-indigo-600">
            <span>Total sum:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button
          disabled={hasInventoryErrors}
          className={`mt-6 w-full py-3 rounded-lg transition duration-200 font-bold text-lg ${
            hasInventoryErrors 
            ? 'bg-gray-300 cursor-not-allowed text-gray-500' 
            : 'bg-green-600 text-white hover:bg-green-700 cursor-pointer shadow-md'
          }`}
        >
          {hasInventoryErrors ? 'Check Inventory' : 'Order Now'}
        </button>

        {hasInventoryErrors && (
          <div className="mt-4 p-3 bg-red-50 rounded-md border border-red-100">
            <p className="text-red-600 text-xs text-center font-medium uppercase tracking-wider">
              ⚠️ Not enough stock for some items
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;