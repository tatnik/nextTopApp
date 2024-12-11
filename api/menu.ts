import { MenuItem } from '@/interfaces/menu.interface';
import { API } from './api';

export async function getMenu(firstCategory: number): Promise<MenuItem[] | null> {
  const res = await fetch(API.topPage.find, {
    method: 'POST',
    body: JSON.stringify({
      firstCategory,
    }),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
  if (!res.ok) {
    console.log(`меню категории ${firstCategory} не найдено`);
    return null;
  }
  return res.json();
}
