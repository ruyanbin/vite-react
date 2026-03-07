import LazyLoad from '#p/uitls/lazyLoad.tsx';

import { lazy } from 'react';

import { RouterObj } from '#/typings/router';

import { LayoutIndex } from '../content';

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
