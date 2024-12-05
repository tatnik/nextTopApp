import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = (props: ButtonProps): JSX.Element => {
  const {children, appearance, className, ...rest} = props;
  return (
    <button className={cn(styles.button, className, {
      [styles.primary]: appearance=== 'primary',
      [styles.ghost]: appearance ==='ghost',
      })}
      {...rest}
    >
      {children}
    </button>
  );
}
