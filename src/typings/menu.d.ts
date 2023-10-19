import { ReactNode } from 'react';
declare interface myMenuItem {
  path: string;
  title?: string;
  label: string;
  key: string;
  icon?: string;
  type?: string;
  children?: myMenuItem[];
}
interface tabsOption {
  label: ReactNode;
  key: string;
  children?: ReactNode | string;
  closable?: boolean;
}
