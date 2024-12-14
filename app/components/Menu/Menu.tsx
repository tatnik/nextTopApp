'use client';
import styles from './Menu.module.css';
import { MenuProps } from './Menu.props';
import cn from 'classnames';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Menu(props: MenuProps) {
  const { firstMenu, secondMenu, firstCategory } = props;
  const pathname = usePathname();

  function buildThirdLevel(pages: PageItem[], route: string) {
    return (
      <ul className={styles.thirdlevellist}>
        {pages.map((p) => {
          return (
            <li key={p._id}>
              <Link
                href={`/${route}/${p.alias}`}
                className={cn(styles.thirdlevelitem, {
                  [styles.thirdlevelactive]: false,
                })}
              >
                {p.category}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  function buildSecondLevel(firstItem: FirstLevelMenuItem) {
    if (!secondMenu) {
      return <></>;
    }
    return (
      <ul className={cn(styles.secondlevellist)}>
        {secondMenu.map((m: MenuItem) => {
          if (m.pages.map((p) => p.alias).includes(pathname.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory}>
              <p className={styles.secondlevelitem}>{m._id.secondCategory}</p>
              <div
                className={cn(styles.secondlevelblock, {
                  [styles.secondlevelblockopen]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, firstItem.route)}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <nav className={styles.menu}>
      <ul className={cn(styles.firstlevellist)}>
        {firstMenu.map((item) => (
          <li key={item.route}>
            <Link
              href={`/${item.route}`}
              className={cn(styles.firstlevelitem, {
                [styles.firstlevelactive]: item.id === firstCategory,
              })}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
            {item.id === firstCategory && buildSecondLevel(item)}
          </li>
        ))}
      </ul>
    </nav>
  );
}
