import { useEffect } from 'react';

import { supabase } from '@/infrastructure/external/supabase';

import { type IProduct } from '@/domain/entities/product';

import { useProductStore } from '../controllers/useProductStore';
import { useCartStore } from '../controllers/useCartStore';

export const useRealtimeSync = () => {
  useEffect(() => {
    const channel = supabase
      .channel('global-updates')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'products' },
        (payload) => {
          const updatedProduct = payload.new as IProduct;

          useProductStore.setState((state) => ({
            products: state.products.map((p) =>
              p.id === updatedProduct.id ? updatedProduct : p
            ),
          }));

          const { cartItems, updateProductDataInCart } = useCartStore.getState();
          const isInCart = cartItems.some(item => item.productId === updatedProduct.id);
          
          if (isInCart) {
            updateProductDataInCart(updatedProduct);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
};