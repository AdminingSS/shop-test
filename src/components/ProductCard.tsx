import React from 'react';

import type { IProduct } from '../types/product';

import { useCartStore } from '../store/useCartStore';

interface ProductCardProps {
  product: IProduct;
}

const fallbackImageUrl = 'http://picsum.photos/400'; 

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { 
    addToCart, 
    increaseQuantity, 
    decreaseQuantity, 
    removeFromCart, 
    cartItems 
  } = useCartStore();

  const cartItem = cartItems.find(item => item.productId === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const isOutOfStock = product.quantity <= 0;
  const isLimitReached = quantityInCart >= product.quantity;

  const isInventoryExceeded = quantityInCart > product.quantity;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition duration-300 hover:shadow-xl">
      <img
        src={product.image_url}
        alt={product.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.currentTarget.src = fallbackImageUrl;
        }}
      />
      
      <div className="p-5 flex flex-col grow">
        <h2 className="text-xl font-semibold text-gray-800 line-clamp-2" title={product.title}>
          {product.title}
        </h2>

        <div className="mt-1 flex flex-col">
          <p className={`text-sm font-medium ${isOutOfStock ? 'text-red-500' : 'text-green-600'}`}>
            {isOutOfStock ? 'Not available in stock' : `In stock: ${product.quantity} pc.`}
          </p>

          {isInventoryExceeded && (
            <p className="text-[11px] text-red-600 font-bold animate-pulse bg-red-50 px-2 py-1 rounded mt-1">
              ⚠️ Cart exceeds stock!
            </p>
          )}
        </div>
        
        <p className="mt-2 text-gray-600 line-clamp-2 grow">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>

          <div className="w-36 flex justify-end items-center"> 
            {quantityInCart === 0 ? (
              <button
                disabled={isOutOfStock}
                onClick={() => addToCart(product)}
                className={`px-4 py-2 rounded-lg transition duration-200 w-full h-10 cursor-pointer ${
                  isOutOfStock 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
                title="Add to cart"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center space-x-2 h-10">
                  <button 
                      onClick={() => decreaseQuantity(product.id)}
                      className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition flex items-center justify-center cursor-pointer"
                      title="Decrease quantity"
                  >
                      -
                  </button>
                  <span className={`font-semibold ${isInventoryExceeded ? 'text-red-600' : ''}`}>
                    {quantityInCart}
                  </span>
                  <button
                    disabled={isLimitReached}
                    onClick={() => increaseQuantity(product.id)}
                    className={`w-10 h-10 rounded-lg transition flex items-center justify-center ${
                      isLimitReached 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200 cursor-pointer'
                    }`}
                    title="Increase quantity"
                  >
                      +
                  </button>
                  <button
                      onClick={() => removeFromCart(product.id)}
                      className="w-10 h-10 text-red-500 hover:text-red-700 transition flex items-center justify-center cursor-pointer"
                      title="Remove from cart"
                  >
                      ✕
                  </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;