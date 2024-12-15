'use client';
import styles from './TopPage.module.css';
import { TopPageProps } from './TopPage.props';
import cn from 'classnames';

export const TopPage = (props: TopPageProps): JSX.Element => {
  const { page, products, firstCategory, className, ...rest } = props;

  return (
    <div className={cn(styles.toppage, className, { ...rest })}>{products && products.length}</div>
  );
};
