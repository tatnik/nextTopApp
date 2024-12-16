import { getMenu } from '@/api/menu';
import { Menu } from './Menu';
import { firstMenu } from '@/helpers/helpers';

export async function ServerMenu() {
  const firstCategory = firstMenu[0].id;
  const secondMenu = await getMenu(firstCategory);
  return (
    <Menu
      firstCategory={firstCategory}
      firstMenu={firstMenu}
      secondMenu={secondMenu}
    />
  );
}
