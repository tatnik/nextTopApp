import { ProductModel } from '@/interfaces/product.interface';
import { API } from './api';

export async function getProducts(category: string, limit: number): Promise<ProductModel[] | null> {
  const res = await fetch(API.product.find, {
    method: 'POST',
    body: JSON.stringify({ category, limit }),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });

  if (!res.ok) {
    throw new Error(`не найдены продукты для категории  ${category}`);
  } else {
    const resp = res.json();
    return resp;
  }
}
