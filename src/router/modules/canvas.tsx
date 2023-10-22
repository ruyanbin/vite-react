import { RouterObj } from '#/typings/router';
import LazyLoad from '#p/uitls/lazyLoad.tsx';
import { LayoutIndex } from '../content';
import { lazy } from 'react';

const canvasRouter: RouterObj[] = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/canvas/Color',
        element: LazyLoad(lazy(() => import('#v/canvas/updateColor'))),
      },
    ],
  },
];

export default canvasRouter;
