import LazyLoad from '#p/uitls/lazyLoad.tsx';

import { lazy } from 'react';

import { RouterObj } from '#/typings/router';

import { LayoutIndex } from '../content';

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
      {
        path: '/react/ActionState',
        name: 'ActionState',
        element: LazyLoad(lazy(() => import('#v/API/ActionState'))),
      },
      {
        path: '/react/ParentContext',
        name: 'ParentContext',
        element: LazyLoad(lazy(() => import('#v/API/Content/ParentContext'))),
      },
    ],
  },
];

export default homeRouter;
