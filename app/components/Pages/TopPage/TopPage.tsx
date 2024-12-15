'use client';
import { Card, HhData, Htag, Ptag, Tag } from '@/components';
import styles from './TopPage.module.css';
import { TopPageProps } from './TopPage.props';
import cn from 'classnames';
import { TopLevelCategory } from '@/interfaces/page.interface';

export const TopPage = (props: TopPageProps): JSX.Element => {
  const { page, products, firstCategory, className, ...rest } = props;
  console.log(styles);
  return (
    <div className={cn(styles.toppage, className, { ...rest })}>
      <header className={styles.header}>
        <Htag tag="h1">{page?.title}</Htag>
        {products && (
          <Tag
            color="grey"
            size="m"
          >
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </header>
      <div>
        {products && products.map((product) => <Ptag key={product._id}>{product.title}</Ptag>)}
      </div>
      <section>
        <header className={styles.hhTitle}>
          <Htag tag="h2">Вакансии - {page?.category} </Htag>
          <Tag
            color="red"
            size="m"
          >
            hh.ru
          </Tag>
        </header>
        <main className={styles.hhMain}>
          {firstCategory == TopLevelCategory.Courses && <HhData {...page?.hh} />}
        </main>
      </section>
    </div>
  );
};
