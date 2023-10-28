import React, { useState, useRef, useEffect, RefObject, memo } from 'react';
import { ComponentReactElement } from './index';
import { createPortal } from 'react-dom';
interface CacheCompoinentProps extends ComponentReactElement {
  active: boolean;
  name: string;
  renderDiv: RefObject<HTMLDivElement>;
  cache?: boolean;
}
/**
 *
 * @param param0 createPortal(children,targteElement)
 * @returns 挂在到组件内部的state 上的div 里
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CacheComponent = ({ active, children, name, renderDiv, cache }: CacheCompoinentProps) => {
  console.log('CacheComponent');
  const [targetElement] = useState(() => {
    // 设置id 区分不同的路由reactElement 获取激活状态的id
    const container = document.createElement('div');
    container.setAttribute('id', name);
    container.className = 'cache-component' + name + '' + (cache ? 'cached' : 'no-cache');
    return container;
  });
  const activeRef = useRef<string | boolean>(false);
  activeRef.current = activeRef.current || active;
  useEffect(() => {
    console.log(active, children, 'children--------cache', targetElement, 'targetElement');
    if (active) {
      // 挂在路由ReactElement (children) 节点
      renderDiv.current?.appendChild(targetElement);
    } else {
      try {
        renderDiv.current?.removeChild(targetElement);
      } catch (e) {
        console.log(e, 'removeChild');
      }
    }
  }, [active, renderDiv, targetElement, children]);

  //   return <>{activeRef.current && createPortal(children, targetElement)}</>;
  return <>{children}</>;
};

export default CacheComponent;
