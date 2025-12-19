import React, { useEffect } from 'react';

import { useProductStore } from '../store/useProductStore';

import ProductList from './ProductList';
import Pagination from './Pagination';

const ProductManager: React.FC = () => {
    const {
        products,
        totalCount,
        isLoading,
        error,
        currentPage,
        itemsPerPage,
        fetchProducts,
        setCurrentPage,
    } = useProductStore();
    

    useEffect(() => {
        fetchProducts();
    }, []);

    if (isLoading) {
        return <div className="p-8 text-center">Loading...</div>;
    }

    if (error) {
        return <div className="p-8 text-center text-red-600">Error: {error}</div>;
    }

    return (
        <main>
            <ProductList products={products} /> 
            <Pagination 
                itemsPerPage={itemsPerPage} 
                totalItems={totalCount}
                currentPage={currentPage} 
                paginate={setCurrentPage}
            />
        </main>
    );
};

export default ProductManager;