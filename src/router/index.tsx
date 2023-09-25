import { Navigate, useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';

const layLoad = (path: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const Element = lazy(() => import(`@v/${path}`));
  return (
    <Suspense fallback={<Spin />}>
      <Element />
    </Suspense>
  );
};

const routes = [
  {
    path: '/',
    element: <Navigate to="/" />,
  },
  {
    path: '/login',
    element: layLoad('Login/index.tsx'),
  },
  {
    path: '/home',
    element: layLoad('Hone/index.tsx'),
  },
];
s;
const Router = () => {
  const element = useRoutes(routes);
  return element;
};

export default Router;
