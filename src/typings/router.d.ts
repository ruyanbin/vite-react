import { ReactNode } from 'react';

declare interface RouterObj {
  path?: string;
  element: ReactNode;
  children?: RouterObj[];
  meta?: {
    title: string;
  };
}
declare interface modules {
  default: RouterObj[];
}
