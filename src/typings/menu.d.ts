import { ReactNode } from 'react';
export interface myMenuItem {
  path: string;
  title?: string;
  label?: string;
  key?: string;
  icon?: string;
  type?: string;
  children?: myMenuItem[];
}
export interface tabsOption {
  label: ReactNode;
  key: string;
  children?: ReactNode | string;
  closable?: boolean;
}
