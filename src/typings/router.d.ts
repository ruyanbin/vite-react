import { ReactNode } from 'react';

export interface RouterObj {
  path?: string;
  element: ReactNode;
  children?: RouterObj[];
  meta?: {
    title: string;
  };
}
export interface modules {
  default: RouterObj[];
}
