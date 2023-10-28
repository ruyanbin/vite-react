import { isNull } from '#/utils/is';
import type { ReactNode, RefObject } from 'react';
import React, { createElement, memo, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import CacheComponent from './CacheComponent';
import { Outlet } from 'react-router-dom';
import KeepAliveProvider from './KeepAliveProvider';
export interface ComponentReactElement {
  children?: ReactNode | ReactNode[];
}
export interface KeepAliveRef {
  getCaches: () => { name: string; ele?: ReactNode }[];
  /**
   * 清除指定缓存
   * @param name
   */
  removeCache: (name: string) => void;
  /**
   * 清除所有缓存
   */
  cleanAllCache: () => void;
  // 清除其他缓存
  cleanOtherCache: () => void;
}

interface Props extends ComponentReactElement {
  activeName: string;
  include?: string[];
  exclude?: string[];
  maxLen?: number;
  cache?: boolean;
  aliveRef?: RefObject<KeepAliveRef>;
}

const KeepAlive = (props: Props) => {
  const { activeName, cache, children, include, exclude, maxLen, aliveRef } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const [cacheReactNodes, setCacheReactNodes] = useState<
    { name: string; ele?: ReactNode[] | ReactNode | undefined; cache: boolean }[]
  >([]);
  // 将子组件中的方法暴露给父组件 useImperativeHandle 第一个参数 父组件的ref 必传 第二个参数 子组件暴露给父组件的事件 必传 第三个参数 依赖参数
  useImperativeHandle(
    aliveRef,
    () => ({
      getCaches: () => cacheReactNodes,
      removeCache: (name: string) => {
        setTimeout(() => {
          setCacheReactNodes((cacheReactNodes) => {
            return cacheReactNodes.filter((res) => res.name !== name);
          });
        }, 0);
      },
      cleanAllCache: () => {
        setCacheReactNodes([]);
      },
      cleanOtherCache: () => {
        setCacheReactNodes((cacheReactNodes) => {
          return cacheReactNodes.filter((res) => res.name !== activeName);
        });
      },
    }),
    [cacheReactNodes, setCacheReactNodes, activeName]
  );

  useLayoutEffect(() => {
    if (isNull(activeName)) {
      return;
    }
    // if (children) {
    //   console.log(1, children);
    //   return;
    // }
    console.log(2, children);
    setCacheReactNodes((cacheReactNodes) => {
      console.log(children, typeof children, 'children', cacheReactNodes);
      // max
      if (cacheReactNodes.length >= (maxLen ?? 20)) {
        cacheReactNodes = cacheReactNodes.slice(1, cacheReactNodes.length);
      }
      // remove
      if (exclude && exclude.length > 0) {
        cacheReactNodes = cacheReactNodes.filter(({ name }) => !exclude?.includes(name));
      }
      // only
      if (include && include.length > 0) {
        cacheReactNodes = cacheReactNodes.filter(({ name }) => include.includes(name));
      }
      cacheReactNodes = cacheReactNodes.filter(({ cache }) => cache);
      const cacheReactNode = cacheReactNodes.find((res) => res.name === activeName);
      if (isNull(cacheReactNode) && children) {
        cacheReactNodes.push({
          cache: cache ?? true,
          name: activeName,
          ele: children,
        });
      } else {
        cacheReactNodes = cacheReactNodes.map((res) => {
          return res.name === activeName ? { ...res, ele: children } : res;
        });
      }
      return cacheReactNodes;
    });
    console.log(cacheReactNodes, 'cacheReactNodes');
  }, [children, cache, activeName, exclude, include, maxLen]);
  return (
    <>
      <div ref={containerRef} className="keep-alive">
        <KeepAliveProvider initialActiveName={activeName}>
          {cacheReactNodes?.map(({ name, cache, ele }) => (
            <CacheComponent active={name === activeName} renderDiv={containerRef} cache={cache} name={name} key={name}>
              {ele}
            </CacheComponent>
          ))}
        </KeepAliveProvider>
      </div>
    </>
  );
};

export default KeepAlive;
