import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import { Ptag } from '../../../components/Ptag/Ptag';
import { format } from 'date-fns';

export const Footer = (props: FooterProps): JSX.Element => {
  const { className, ...rest } = props;

  return (
    <footer className={cn(styles.footer, className, { ...rest })}>
      <Ptag>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</Ptag>
      <Ptag>
        <a href="">Пользовательское соглашение</a>
      </Ptag>

      <Ptag>
        <a href="">Политика конфиденциальности</a>
      </Ptag>
    </footer>
  );
};
