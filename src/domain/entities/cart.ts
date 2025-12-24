import type { IProduct } from "./product";

export interface ICartItem {
  productId: number;
  quantity: number;
  productData: IProduct;
}