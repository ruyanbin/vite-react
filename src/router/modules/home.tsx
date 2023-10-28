import { RouterObj } from '../../typings/router';
import { HOME_URL } from '../../config/config';
import Home from '#v/Home/index';
import { LayoutIndex } from '../content';

const homeRouter: RouterObj[] = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: HOME_URL,
        name: 'Home',
        element: <Home />,
      },
    ],
  },
];

export default homeRouter;
