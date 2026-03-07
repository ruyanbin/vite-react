import LazyLoad from '#p/uitls/lazyLoad.tsx';

import { lazy } from 'react';

import { RouterObj } from '#/typings/router';

import { LayoutIndex } from '../content';

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
