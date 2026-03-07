import Login from '#v/Login/index.tsx';

import { Navigate, useRoutes } from 'react-router-dom';

import type { RouterObj } from '#/typings/router';

// 一异步处理所有路由ss
const modules = (import.meta as any).glob('./modules/*.tsx', { eager: true }) as Record<
  string,
  Record<string, RouterObj[]>
>;
console.log(modules, 'modules', typeof modules);
// 处理路由
export const routerArray: RouterObj[] = [];
Object.keys(modules).forEach((item) => {
  const module = modules[item];
  if (module) {
    Object.keys(module).forEach((key) => {
      console.log(key, typeof key);
      const routes = module[key];
      if (Array.isArray(routes)) {
        routerArray.push(...routes);
      }
    });
  }
});
console.log(routerArray, 'arr');
const routes = [
  {
    path: '/',
    element: <Navigate to='/login' />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to='/404' />,
  },
];

export const RouterView = () => {
  const element = useRoutes(routes);
  return element;
};
