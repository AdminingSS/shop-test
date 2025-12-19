import { create } from 'zustand';

import { supabase } from '../lib/supabase';

import type { IProduct } from '../types/product';

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

    const { data, error, count } = await supabase
      .from('products')
      .select('*', { count: 'exact' })
      .order('quantity', { ascending: false }) 
      .order('id', { ascending: true })
      .range(from, to);

    if (error) {
      set({ error: error.message, isLoading: false });
    } else {
      set({ 
        products: data || [], 
        totalCount: count || 0,
        isLoading: false 
      });
    }
  },

  setCurrentPage: (page) => {
    set({ currentPage: page });
    get().fetchProducts();
  },
}));