import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { HhData } from '@/interfaces/page.interface';

export interface TopPageHhProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  hhData: HhData | null;
}
