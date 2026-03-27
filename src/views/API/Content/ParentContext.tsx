import { useState } from 'react';

import ChildrenContext from './ChildrenContext';
import { ThemeContent } from './ContentThent';

const ParentContext = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContent value={theme}>
      <div>ParentContext</div>
      <label>
        <input type='checkbox' onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
        light/dark
      </label>

      <ChildrenContext />
    </ThemeContent>
  );
};
export default ParentContext;
