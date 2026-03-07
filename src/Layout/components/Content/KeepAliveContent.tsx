import { ReactNode, useLayoutEffect, useRef } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

import KeepAlive from '#/components/KeepAlive';
import type { KeepAliveRef } from '#/components/KeepAlive';

function KeepAliveContent() {
  const { pathname } = useLocation();
  const componentList = useRef(new Map());
  const outlet = useOutlet();
  const keepAliveRef = useRef<KeepAliveRef>(null as unknown as KeepAliveRef);
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
