'use client';
import { Htag, Ptag, Tag } from '@/components';
import styles from './TopPage.module.css';
import { TopPageProps } from './TopPage.props';
import cn from 'classnames';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { TopPageHeader, TopPageHh } from '@/app/components';
export const TopPage = (props: TopPageProps): JSX.Element => {
  const { page, products, firstCategory, className, ...rest } = props;
  console.log(styles);
  return (
    <div
      className={cn(styles.toppage, className)}
      {...rest}
    >
      <TopPageHeader
        title={page ? page.title : ''}
        count={products ? products.length : 0}
      />

      <div>
        {products && products.map((product) => <Ptag key={product._id}>{product.title}</Ptag>)}
      </div>

      <TopPageHh
        title={page ? page.category : ''}
        hhData={page ? page.hh : null}
      />
    </div>
  );
};
