import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { SupabaseProductRepository } from '@/infrastructure/repositories/SupabaseProductRepository';
import { FetchProductsByIdsUseCase } from '@/application/use-cases/FetchProductsByIdsUseCase';

import type { ICartItem } from '@/domain/entities/cart';
import type { IProduct } from '@/domain/entities/product';

const productRepository = new SupabaseProductRepository();
const fetchProductsByIdsUseCase = new FetchProductsByIdsUseCase(productRepository);

interface CartState {
  cartItems: ICartItem[];
  isCartOpen: boolean;

  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  refreshCartData: () => Promise<void>;
  updateProductDataInCart: (product: IProduct) => void;
  openCart: () => void;
  closeCart: () => void;
}

export const selectTotalQuantity = (state: CartState) => 
  state.cartItems.reduce((sum, item) => sum + item.quantity, 0);

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      cartProductsData: [],
      isCartOpen: false,

      addToCart: (product) => set(state => {
        if (product.quantity <= 0) return state;

        const existing = state.cartItems.find(i => i.productId === product.id);
        if (existing) {
          if (existing.quantity >= product.quantity) return state;

          return {
            cartItems: state.cartItems.map(i => 
              i.productId === product.id ? { ...i, quantity: i.quantity + 1, productData: product } : i
            )
          };
        }

        return {
          cartItems: [...state.cartItems, { productId: product.id, quantity: 1, productData: product }]
        };
      }),

      removeFromCart: (productId) => set(state => ({
        cartItems: state.cartItems.filter(i => i.productId !== productId),
      })),

      increaseQuantity: (productId) => set(state => {
        const item = state.cartItems.find(i => i.productId === productId);
        if (item && item.quantity < item.productData.quantity) {
          return {
            cartItems: state.cartItems.map(i => 
              i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i
            )
          };
        }
        return state;
      }),

      decreaseQuantity: (productId) => set(state => {
        const item = state.cartItems.find(i => i.productId === productId);
        if (item && item.quantity > 1) {
          return {
            cartItems: state.cartItems.map(i => 
              i.productId === productId ? { ...i, quantity: i.quantity - 1 } : i
          )};
        }
        return { cartItems: state.cartItems.filter(i => i.productId !== productId) };
      }),

      updateProductDataInCart: (product) => set((state) => ({
        cartItems: state.cartItems.map((item) =>
          item.productId === product.id ? { ...item, productData: product } : item
        ),
      })),

      refreshCartData: async () => {
        const { cartItems } = get();
        if (cartItems.length === 0) return;
        const ids = cartItems.map((i) => i.productId);
        const data = await fetchProductsByIdsUseCase.execute(ids);
        if (data) {
          set({
            cartItems: cartItems.map((item) => {
              const fresh = data.find((d) => d.id === item.productId);
              return fresh ? { ...item, productData: fresh } : item;
            }),
          });
        }
      },

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
    }),
    {
      name: 'shopping-cart-storage', 
      storage: createJSONStorage(() => localStorage),
    }
  )
);