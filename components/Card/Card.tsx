import styles from './Card.module.css';
import { CardProps } from './Card.props';
import cn from 'classnames';

export const Card = (props: CardProps): JSX.Element => {
  const { color = 'primary', children, className, ...rest } = props;

  return (
    <div
      className={cn(styles.card, className, {
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
      })}
      {...rest}
    >
      {children}
    </div>
  );
};
