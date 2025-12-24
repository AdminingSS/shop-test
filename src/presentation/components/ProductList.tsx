import React from 'react';

import type { IProduct } from '@/domain/entities/product';

import ProductCard from './ProductCard';

interface ProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Products showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;