import React from 'react';

import type { ICartItem } from '../types/cart';

import { useCartStore } from '../store/useCartStore';

interface CartItemProps {
  item: ICartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore();

  const productData = item?.productData;

  if (!productData) {
    return <div className="p-4 bg-red-100 rounded">Product not found</div>;
  }

  const discountThreshold = 5;
  const discountRate = 0.10;
  
  const originalItemPrice = productData.price * item.quantity;
  let finalItemPrice = originalItemPrice;
  let isDiscountApplied = false;

  if (item.quantity > discountThreshold) {
    isDiscountApplied = true;
    finalItemPrice = originalItemPrice * (1 - discountRate);
  }

  const isOverStock = item.quantity > productData.quantity;
  const isLimitReached = item.quantity >= productData.quantity;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 bg-white shadow-sm rounded-lg mb-3">
      <div className="flex items-center space-x-4 md:col-span-2">
        <img src={productData.image_url} alt={productData.title} className="w-16 h-16 object-cover rounded shadow-sm" />
        <div>
          <h4 className="font-semibold truncate max-w-xs">{productData.title}</h4>
          <p className="text-sm text-gray-500">Price: ${productData.price.toFixed(2)}</p>

          {isOverStock && (
            <p className="text-red-500 text-xs font-bold mt-1">
              ⚠️ Available only {productData.quantity} pc. Decrease quantity.
            </p>
          )}

          <p className={`text-xs mt-1 font-medium ${isDiscountApplied ? 'text-green-600' : 'text-transparent'}`}>
              {isDiscountApplied ? 'Discoint 10% for buying more than 5.' : '\u00A0'}
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-between md:justify-end space-x-4 md:col-span-1">

        <div className="flex items-center border rounded-lg">
            <button 
                onClick={() => decreaseQuantity(item.productId)}
                className="px-3 py-1 text-indigo-600 hover:bg-indigo-100 rounded-l-lg transition cursor-pointer"
                title="Decrease quantity"
            >
                -
            </button>
            <span className={`px-3 py-1 border-l border-r ${isOverStock ? 'text-red-600 font-bold' : ''}`}>
                {item.quantity}
            </span>
            <button 
                disabled={isLimitReached}
                onClick={() => increaseQuantity(item.productId)}
                className={`px-3 py-1 rounded-r-lg transition ${
                    isLimitReached 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-indigo-600 hover:bg-indigo-100 cursor-pointer'
                }`}
                title={isLimitReached ? "Quantity limit reached" : "Increase quantity"}
            >
                +
            </button>
        </div>

        <div className="text-right w-32">
            {isDiscountApplied && (
                <p className="text-sm text-gray-400 line-through">${originalItemPrice.toFixed(2)}</p>
            )}
            <p className="font-bold text-lg text-indigo-600">${finalItemPrice.toFixed(2)}</p>
        </div>

        <button 
            onClick={() => removeFromCart(item.productId)}
            className="text-red-500 hover:text-red-700 transition p-2 cursor-pointer"
            title="Remove item from cart"
        >
            ✕
        </button>
      </div>
    </div>
  );
};

export default CartItem;