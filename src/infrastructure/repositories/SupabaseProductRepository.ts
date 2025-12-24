import { supabase } from '@/infrastructure/external/supabase';
import type { IProduct } from '@/domain/entities/product';
import type { IProductRepository } from '@/domain/repositories/IProductRepository';

export class SupabaseProductRepository implements IProductRepository {
  async fetchProducts(from: number, to: number) {
    const { data, error, count } = await supabase
      .from('products')
      .select('*', { count: 'exact' })
      .order('quantity', { ascending: false })
      .order('id', { ascending: true })
      .range(from, to);

    return { data, count, error };
  }

  async fetchProductByIds(ids: number[]) {
    const { data } = await supabase.from('products').select('*').in('id', ids);
    return data || [];
  }
}