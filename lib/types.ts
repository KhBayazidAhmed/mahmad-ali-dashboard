export interface NavItem {
  name: string;
  href: string;
}
export interface HeaderNavItemsProps {
  setIsOpen: (isOpen: boolean) => void;
  items: NavItem[];
}
export type Log = {
  id: number;
  message: string;
  level: "Info" | "Warning" | "Error";
  time: string;
};
export type User = {
  id: number;
  name: string;
  email: string;
  balance: number;
  whatsapp: string;
};
export type AdminAllUserActions = {
  name: string;
  actions: () => void;
};
