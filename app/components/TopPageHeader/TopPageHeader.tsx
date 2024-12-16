import { Htag, Tag } from '@/components';
import styles from './TopPageHeader.module.css';
import { TopPageHeaderProps } from './TopPageHeader.props';
import cn from 'classnames';

export const TopPageHeader = (props: TopPageHeaderProps): JSX.Element => {
  const { title, count, className, ...rest } = props;

  return (
    <header
      className={cn(styles.header, className)}
      {...rest}
    >
      <Htag tag="h1">{title}</Htag>
      <Tag
        color="grey"
        size="m"
      >
        {count}
      </Tag>
      <span>Сортировка</span>
    </header>
  );
};
