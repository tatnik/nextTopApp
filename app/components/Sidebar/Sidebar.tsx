import { ServerMenu } from '../Menu/ServerMenu';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import Logo from '@/public/logo.svg';

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
      <Logo />
      <div> поиск </div>
      <ServerMenu />
    </div>
  );
};
