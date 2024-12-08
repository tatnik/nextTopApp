import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';

export const Sidebar = (props: SidebarProps): JSX.Element => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        styles.sidebar,
        className,

        { ...rest },
      )}
    >
      Sidebar
    </div>
  );
};
