import { create } from 'zustand';

import { SupabaseProductRepository } from '@/infrastructure/repositories/SupabaseProductRepository';
import { FetchProductsUseCase } from '@/application/use-cases/FetchProductsUseCase';

import type { IProduct } from '@/domain/entities/product';

const productRepository = new SupabaseProductRepository();
const fetchProductsUseCase = new FetchProductsUseCase(productRepository);

interface ProductState {
  products: IProduct[];
  totalCount: number;
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  itemsPerPage: number;
  fetchProducts: () => Promise<void>;
  setCurrentPage: (page: number) => void;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  totalCount: 0,
  isLoading: false,
  error: null,
  currentPage: 1,
  itemsPerPage: 9,

  fetchProducts: async () => {
    const { currentPage, itemsPerPage } = get();
    set({ isLoading: true, error: null });

    const from = (currentPage - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1;

    const { products, totalCount, error } = await fetchProductsUseCase.execute(from, to);

    if (error) {
      set({ error: error.message, isLoading: false });
    } else {
      set({ 
        products, 
        totalCount,
        isLoading: false 
      });
    }
  },

  setCurrentPage: (page) => {
    set({ currentPage: page });
    get().fetchProducts();
  },
}));