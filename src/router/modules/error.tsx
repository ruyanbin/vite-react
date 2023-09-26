import LazyLoad from '@p/uitls/lazyLoad.tsx';
import { lazy } from 'react';
import { RouterObj } from '@/typings/router';
const errorRoutrer: RouterObj[] = [
  {
    path: '/403',
    element: LazyLoad(lazy(() => import('@c/ErrorMessage/403.tsx'))),
    meta: {
      title: '403',
    },
  },
  {
    path: '/404',
    element: LazyLoad(lazy(() => import('@c/ErrorMessage/404.tsx'))),
  },
];

export default errorRoutrer;
