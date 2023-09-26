import { Navigate, useRoutes } from 'react-router-dom';
import { RouterObj } from '@/typings/router';
import Login from '@v/Login/index.tsx';
// 一异步处理所有路由
const modules = import.meta.glob('./modules/*.tsx', { eager: true });
// 处理路由
export const routerArray: RouterObj[] = [];
Object.keys(modules).forEach((item) => {
  Object.keys(modules[item]).forEach((key: any) => {
    routerArray.push(...modules[item][key]);
  });
});

const routes = [
  {
    path: '/',
    element: <Navigate to="/" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
];

const Router = () => {
  const element = useRoutes(routes);
  return element;
};

export default Router;
