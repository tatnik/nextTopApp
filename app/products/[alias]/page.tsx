import { Metadata } from 'next';
import { getPage } from '@/api/page';
import { notFound } from 'next/navigation';
import { getMenu } from '@/api/menu';

export const metadata: Metadata = {
  title: ' Страница',
};

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })));
}

export default async function PageProducts({ params }: { params: { alias: string } }) {
  const { alias } = await params;
  const page = await getPage(alias);

  if (!page) {
    notFound();
  }
  return <div>{page.title}</div>;
}
