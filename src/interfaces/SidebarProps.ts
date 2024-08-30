export interface SidebarProps {
  menuItems: menuItem[];
}

interface menuItem {
  path: string;
  title: string;
  disabled: boolean;
}
