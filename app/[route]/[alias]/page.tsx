import { TopPage } from '../../components';
import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page';
import { getProducts } from '@/api/product';
import { ProductModel } from '@/interfaces/product.interface';
import { firstMenu } from '@/helpers/helpers';

type Params = Promise<{ route: string; alias: string }>;

export default async function pageCategory({ params }: { params: Params }) {
  const { route, alias } = await params;
  const page = await getPage(alias);
  const cat = firstMenu.filter((m) => m.route === route)[0].id;
  let products: ProductModel[] | null = [];
  if (page) {
    products = await getProducts(page.category, 10);
  }
  return (
    <>
      <TopPage
        page={page}
        firstCategory={cat}
        products={products}
      />
    </>
  );
}

export const generateStaticParams = async () => {
  for (const m of firstMenu) {
    const menu = await getMenu(m.id);
    if (menu) {
      return menu.flatMap((s) =>
        s.pages.map((p) => ({
          route: m.route,
          alias: p.alias,
        })),
      );
    }
  }
};
