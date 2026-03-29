import { ThemeContent } from '#v/API/Content/ContentThent.ts';

import { useContext } from 'react';

const ChildrenContext = () => {
  const theme = useContext(ThemeContent);
  return <div>子组件接受数据-------{theme}</div>;
};
export default ChildrenContext; // 這樣可以讓ChildrenContextProvider成為ChildrenContext的別名
