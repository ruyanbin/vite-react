import { Navigate, useRoutes } from 'react-router-dom';
import { RouterObj } from '@/typings/router';
import Login from '@v/Login/index.tsx';
// 一异步处理所有路由
const modules = import.meta.glob('./modules/*.tsx', { eager: true });
console.log(modules, 'modules', typeof modules);
// 处理路由
export const routerArray: RouterObj[] = [];
Object.keys(modules).forEach((item) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
  Object.keys(modules[item]).forEach((key: string) => {
    console.log(key, typeof key);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    routerArray.push(...modules[item][key]);
  });
});
console.log(routerArray, 'arr');
const routes = [
  {
    path: '/',
    element: <Navigate to="/login" />,
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

export const RouterView = () => {
  const element = useRoutes(routes);
  return element;
};
