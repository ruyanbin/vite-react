import { RouterObj } from '#/typings/router';
import LazyLoad from '#p/uitls/lazyLoad.tsx';
import { LayoutIndex } from '../content';
import { lazy } from 'react';

const homeRouter: RouterObj[] = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/antd/form',
        name: 'Form',
        element: LazyLoad(lazy(() => import('#v/antd/Form.tsx'))),
      },
    ],
  },
];

export default homeRouter;
