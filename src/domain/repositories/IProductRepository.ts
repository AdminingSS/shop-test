import type { IProduct } from '../entities/product';

export interface IProductRepository {
  fetchProducts(from: number, to: number): Promise<{ data: IProduct[] | null; count: number | null; error: any }>;
  fetchProductByIds(ids: number[]): Promise<IProduct[]>;
}