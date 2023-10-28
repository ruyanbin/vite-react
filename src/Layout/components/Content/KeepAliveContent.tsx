import React, { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import KeepAlive from '#/components/KeepAlive';
import { useOutlet, useLocation } from 'react-router-dom';

function KeepAliveContent() {
  const { pathname } = useLocation();
  const componentList = useRef(new Map());
  const outlet = useOutlet();
  const keepAliveRef = useRef(null);
  useLayoutEffect(() => {
    console.log(1);
    if (!componentList.current.has(pathname)) {
      componentList.current.set(pathname, outlet);
    }
  }, [pathname]);
  return (
    <KeepAlive aliveRef={keepAliveRef} activeName={pathname}>
      {componentList.current &&
        Array.from(componentList.current).map(([key, component]: [string, ReactNode]) => (
          <div key={key}>{component}</div>
        ))}
    </KeepAlive>
  );
}

export default KeepAliveContent;
