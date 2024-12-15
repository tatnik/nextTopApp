import { getMenu } from '@/api/menu';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import CoursesIcon from '@/public/icons/courses.svg';
import ServicesIcon from '@/public/icons/services.svg';
import BooksIcon from '@/public/icons/books.svg';
import ProductsIcon from '@/public/icons/products.svg';
import { Menu } from './Menu';

export const firstMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export async function ServerMenu() {
  const firstCategory = firstMenu[0].id;
  const secondMenu = await getMenu(firstCategory);
  return (
    <Menu
      firstCategory={firstCategory}
      firstMenu={firstMenu}
      secondMenu={secondMenu}
    />
  );
}
