import Home from '#v/Home/index';

import { HOME_URL } from '../../config/config';
import { RouterObj } from '../../typings/router';
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
