import { Htag, Tag } from '@/components';
import styles from './TopPageHh.module.css';
import { TopPageHhProps } from './TopPageHh.props';
import { TopPageHhData } from '@/app/components';
import cn from 'classnames';

export const TopPageHh = (props: TopPageHhProps): JSX.Element => {
  const { title, hhData, className, ...rest } = props;

  return (
    <section
      className={cn(styles.hh, className)}
      {...rest}
    >
      <header className={styles.title}>
        <Htag tag="h2">Вакансии - {title} </Htag>
        <Tag
          color="red"
          size="m"
        >
          hh.ru
        </Tag>
      </header>
      <main className={styles.main}>{hhData && <TopPageHhData {...hhData} />}</main>
    </section>
  );
};
