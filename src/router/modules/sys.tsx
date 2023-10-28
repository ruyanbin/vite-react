import { RouterObj } from '#/typings/router';
import LazyLoad from '#p/uitls/lazyLoad.tsx';
import { LayoutIndex } from '../content';
import { lazy } from 'react';

const homeRouter: RouterObj[] = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/Role',
        name: 'Role',
        element: LazyLoad(lazy(() => import('#v/sys/Role'))),
      },
      {
        path: '/User',
        name: 'User',
        element: LazyLoad(lazy(() => import('#v/sys/user'))),
      },
    ],
  },
];

export default homeRouter;
