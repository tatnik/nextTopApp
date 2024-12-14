import { FirstLevelMenuItem, MenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  firstCategory: TopLevelCategory;
  firstMenu: FirstLevelMenuItem[];
  secondMenu: MenuItem[] | null;
}
