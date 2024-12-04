export interface NavItem {
  name: string;
  href: string;
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
export type UserProps = {
  _id: string;
  name: string;
  email: string;
  balance: number;
  role: string;
  signCopy: boolean;
  signCopyPrice: number;
  nidCopy: boolean;
  nidCopyPrice: number;
  serverCopy: boolean;
  serverCopyPrice: number;
  minimumBalance: number;
  whatsapp?: string;
  whatsappService: boolean;
  createdAt: string;
  updatedAt: string;
};
