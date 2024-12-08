import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import cn from 'classnames';

export const Header = (props: HeaderProps): JSX.Element => {
  const { className, ...rest } = props;

  return (
    <div className={cn(styles.header, className, { ...rest })}>
      Header
      
    </div>
  );
};
