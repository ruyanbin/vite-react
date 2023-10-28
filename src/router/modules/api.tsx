import { RouterObj } from '#/typings/router';
import LazyLoad from '#p/uitls/lazyLoad.tsx';
import { LayoutIndex } from '../content';
import { lazy } from 'react';

const homeRouter: RouterObj[] = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/react/Comp',
        name: 'Comp',
        element: LazyLoad(lazy(() => import('#v/API/Comp'))),
      },
      {
        path: '/react/Formal',
        name: 'Formal',
        element: LazyLoad(lazy(() => import('#v/API/Formal'))),
      },
    ],
  },
];

export default homeRouter;
