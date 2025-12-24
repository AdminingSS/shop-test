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

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cartItems } = useCartStore();

  const total = calculateTotal(cartItems);

  const hasInventoryErrors = cartItems.some(item =>
    item.quantity > item.productData.quantity
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
            <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors text-3xl leading-none cursor-pointer"
            >
              &times;
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <p className="text-gray-400 text-sm mt-2">Add some products to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div
                    key={item.productId}
                    className="animate-in slide-in-from-right-5 duration-300"
                  >
                    <CartItem item={item} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50 sticky bottom-0">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xl font-bold text-indigo-600">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button
                  disabled={hasInventoryErrors}
                  className={`w-full py-4 rounded-lg transition-all duration-200 font-bold text-lg ${
                    hasInventoryErrors
                      ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                      : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg cursor-pointer transform hover:scale-[1.02]'
                  }`}
                >
                  {hasInventoryErrors ? 'Check Inventory' : 'Checkout Now'}
                </button>

                {hasInventoryErrors && (
                  <div className="p-3 bg-red-50 rounded-md border border-red-100 animate-in fade-in duration-300">
                    <p className="text-red-600 text-sm text-center font-medium">
                      ⚠️ Not enough stock for some items
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;