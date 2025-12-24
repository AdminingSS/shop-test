import type { IProductRepository } from '@/domain/repositories/IProductRepository';
import type { IProduct } from '@/domain/entities/product';

export class FetchProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(from: number, to: number): Promise<{ products: IProduct[]; totalCount: number; error: any }> {
    const { data, count, error } = await this.productRepository.fetchProducts(from, to);
    return {
      products: data || [],
      totalCount: count || 0,
      error,
    };
  }
}