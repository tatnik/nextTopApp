import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TopPageHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  count: number;
}
