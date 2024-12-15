import { TopPageModel } from '@/interfaces/page.interface';
import { API } from './api';

export async function getPage(alias: string): Promise<TopPageModel | null> {
  const res = await fetch(API.topPage.byAlias + alias, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error(`страница ${alias} не найдена`);
  } else {
    const resp = res.json();
    return resp;
  }
}
