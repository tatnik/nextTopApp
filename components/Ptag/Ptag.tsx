import styles from './Ptag.module.css';
import cn from 'classnames';
import { PtagProps } from './Ptag.props';

export const Ptag = (props: PtagProps): JSX.Element => {
  const { size = 'm', children, className, ...rest } = props;

  return (
    <p
      className={cn(styles.ptag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
        [styles.xl]: size === 'xl',
        [styles.xxl]: size === 'xxl',
      })}
      {...rest}
    >
      {children}
    </p>
  );
};
