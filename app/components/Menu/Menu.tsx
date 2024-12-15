'use client';
import styles from './Menu.module.css';
import { MenuProps } from './Menu.props';
import cn from 'classnames';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Menu(props: MenuProps) {
  const { firstMenu, secondMenu, firstCategory } = props;
  const pathname = usePathname();

  const [secMenu, setSecMenu] = useState(secondMenu);

  const openSecondLevel = (secondCategory: string) => {
    secMenu &&
      setSecMenu(
        secMenu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        }),
      );
  };

  function buildThirdLevel(pages: PageItem[], route: string) {
    return (
      <ul className={styles.thirdlevellist}>
        {pages.map((p) => {
          return (
            <li key={p._id}>
              <Link
                href={`/${route}/${p.alias}`}
                className={cn(styles.thirdlevelitem, {
                  [styles.thirdlevelactive]: `/${route}/${p.alias}` === pathname,
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
    if (!secMenu) {
      return <></>;
    }
    return (
      <ul className={cn(styles.secondlevellist)}>
        {secMenu.map((m: MenuItem) => {
          let isActive = false;
          if (m.pages.map((p) => p.alias).includes(pathname.split('/')[2])) {
            m.isOpened = true;
            isActive = true;
          }
          return (
            <li key={m._id.secondCategory}>
              <p
                className={cn(styles.secondlevelitem, {
                  [styles.secondlevelactive]: isActive,
                })}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </p>
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
