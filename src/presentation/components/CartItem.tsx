import React from 'react';

import type { ICartItem } from '@/domain/entities/cart';

import { useCartStore } from '@/presentation/controllers/useCartStore';

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
    <div className="flex flex-col gap-3 p-4 bg-white shadow-sm rounded-lg border border-gray-100">
      {/* Product Image and Info */}
      <div className="flex items-start space-x-3">
        <img
          src={productData.image_url}
          alt={productData.title}
          className="w-14 h-14 object-cover rounded shadow-sm shrink-0"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/56x56?text=No+Img';
          }}
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm sm:text-base leading-tight mb-1">{productData.title}</h4>
          <p className="text-sm text-gray-600">${productData.price.toFixed(2)} each</p>

          {isOverStock && (
            <p className="text-red-500 text-xs font-bold mt-2">
              ⚠️ Only {productData.quantity} available
            </p>
          )}

          {isDiscountApplied && (
            <p className="text-green-600 text-xs font-medium mt-1">
              🎉 10% discount applied!
            </p>
          )}
        </div>
      </div>

      {/* Price, Quantity Controls and Remove */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => decreaseQuantity(item.productId)}
              className="px-2 py-1 text-indigo-600 hover:bg-indigo-50 rounded-l-lg transition text-sm"
              title="Decrease quantity"
            >
              -
            </button>
            <span className={`px-3 py-1 border-l border-r font-medium text-sm ${isOverStock ? 'text-red-600' : ''}`}>
              {item.quantity}
            </span>
            <button
              disabled={isLimitReached}
              onClick={() => increaseQuantity(item.productId)}
              className={`px-2 py-1 rounded-r-lg transition text-sm ${
                isLimitReached
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-indigo-600 hover:bg-indigo-50'
              }`}
              title={isLimitReached ? "Quantity limit reached" : "Increase quantity"}
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.productId)}
            className="text-red-500 hover:text-red-700 transition p-2 rounded-full hover:bg-red-50"
            title="Remove item"
          >
            ✕
          </button>
        </div>

        <div className="text-right">
          {isDiscountApplied && (
            <p className="text-sm text-gray-400 line-through">${originalItemPrice.toFixed(2)}</p>
          )}
          <p className="font-bold text-lg text-indigo-600">${finalItemPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;