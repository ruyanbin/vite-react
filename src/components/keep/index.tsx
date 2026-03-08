import { ReactNode, useEffect, useRef } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

import { useUpdate } from 'ahooks';

function Keep() {
  const componentList = useRef(new Map());
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const forceUpdate = useUpdate();
  useEffect(() => {
    if (!componentList.current.has(pathname)) {
      componentList.current.set(pathname, outlet);
    }

    forceUpdate();
  }, [pathname]);

  return (
    <div className='  transition-colors duration-300 h-full'>
      {Array.from(componentList.current).map(([key, component]: [string, ReactNode]) => (
        <div key={key} style={{ display: pathname === key ? 'block' : 'none' }} className='min-h-full'>
          {component}
        </div>
      ))}
    </div>
  );
}

export default Keep;
