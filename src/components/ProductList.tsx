import React from 'react';

import type { IProduct } from '../types/product';

import ProductCard from './ProductCard';

interface ProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Products showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;