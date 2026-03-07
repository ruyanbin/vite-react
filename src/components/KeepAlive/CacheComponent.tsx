import { RefObject, useEffect, useState } from 'react';

import { ComponentReactElement } from './index';

interface CacheCompoinentProps extends ComponentReactElement {
  active: boolean;
  name: string;
  renderDiv: RefObject<HTMLDivElement | null>;
  cache?: boolean;
}
/**
 *
 * @param param0 createPortal(children,targteElement)
 * @returns 挂在到组件内部的state 上的div 里
 */
const CacheComponent = ({ active, children, name, renderDiv, cache }: CacheCompoinentProps) => {
  console.log('CacheComponent');
  const [targetElement] = useState(() => {
    // 设置id 区分不同的路由reactElement 获取激活状态的id
    const element = document.createElement('div');
    element.setAttribute('id', name);
    return element;
  });
  useEffect(() => {
    console.log(active, children, 'children--------cache', targetElement, 'targetElement');
    if (active) {
      // 挂载
      renderDiv.current?.appendChild(targetElement);
    } else if (renderDiv.current?.contains(targetElement)) {
      // 卸载
      renderDiv.current?.removeChild(targetElement);
    }
  }, [active, name, children, targetElement, renderDiv, cache]);
  return <>{children}</>;
};
export default CacheComponent;
