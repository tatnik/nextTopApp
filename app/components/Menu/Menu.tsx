import { getMenu } from '@/api/menu';
import styles from './Menu.module.css';
import { MenuProps } from './Menu.props';
import cn from 'classnames';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import CoursesIcon from '@/public/icons/courses.svg';
import ServicesIcon from '@/public/icons/services.svg';
import BooksIcon from '@/public/icons/books.svg';
import ProductsIcon from '@/public/icons/products.svg';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

const firstCategory = 0;

function buildThirdLevel(pages: PageItem[], route: string) {
  return (
    <ul>
      {pages.map((p) => {
        return (
          <li key={p._id}>
            <a
              href={`/${route}/${p.alias}`}
              className={cn(styles.thirdlevelitem, {
                [styles.thirdlevelactive]: false,
              })}
            >
              {p.category}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

async function buildSecondLevel(firstItem: FirstLevelMenuItem) {
  const secondMenu = await getMenu(firstItem.id);
  if (!secondMenu) {
    return <></>;
  }
  return (
    <ul className={cn(styles.secondlevellist)}>
      {secondMenu.map((m: MenuItem) => (
        <li
          key={m._id.secondCategory}
          className={styles.secondlevelitem}
        >
          {m._id.secondCategory}
          <div
            className={cn(styles.secondlevelblock, {
              [styles.secondlevelblockopen]: false,
            })}
          >
            {buildThirdLevel(m.pages, firstItem.route)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export async function Menu() {
  const menu = await getMenu(firstCategory);

  const buildFirstLevel = () => {
    return (
      <ul className={cn(styles.firstlevellist)}>
        {firstLevelMenu.map((item) => (
          <li key={item.route}>
            <a
              href={`/${item.route}`}
              className={cn(styles.firstlevelitem, {
                [styles.firstlevelactive]: item.id === firstCategory,
              })}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
            {item.id === firstCategory && buildSecondLevel(item)}
          </li>
        ))}
      </ul>
    );
  };

  if (!menu) {
    return <></>;
  }
  return <nav className={styles.menu}>{buildFirstLevel()}</nav>;
}
