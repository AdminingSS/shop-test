import type { IProductRepository } from '@/domain/repositories/IProductRepository';
import type { IProduct } from '@/domain/entities/product';

export class FetchProductsByIdsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(ids: number[]): Promise<IProduct[]> {
    return await this.productRepository.fetchProductByIds(ids);
  }
}