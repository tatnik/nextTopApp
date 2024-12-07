import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from '../../public/arrow.svg';
import cn from 'classnames';

export const Button = (props: ButtonProps): JSX.Element => {
  const { children, appearance, arrow = 'none', className, ...rest } = props;
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...rest}
    >
      {children}
      {arrow !== 'none' && (
        <span className={cn(styles.arrow, { [styles.down]: arrow === 'down' })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
