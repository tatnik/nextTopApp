import { TopPageModel } from '@/interfaces/page.interface';
import { API } from './api';

export async function getPage(alias: string): Promise<TopPageModel | null> {
  const res = await fetch(API.topPage.byAlias + alias);
  if (!res.ok) {
    console.log(`страница ${alias} не найдена`);
    return null;
  }
  const resp = res.json();
  // console.log(resp);
  return resp;
}
