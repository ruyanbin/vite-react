import LazyLoad from '#p/uitls/lazyLoad.tsx';

import { lazy } from 'react';

import { RouterObj } from '#/typings/router';

import { LayoutIndex } from '../content';

const canvasRouter: RouterObj[] = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/canvas/Color',
        name: 'UpdateColor',
        element: LazyLoad(lazy(() => import('#v/canvas/updateColor'))),
      },
    ],
  },
];

export default canvasRouter;
