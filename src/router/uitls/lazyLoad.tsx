import { LazyExoticComponent, ReactNode, Suspense } from 'react';
import { Spin } from 'antd';

const LazyLoad = (Cmp: LazyExoticComponent<any>): ReactNode => {
  return (
    <Suspense fallback={<Spin />}>
      <Cmp />
    </Suspense>
  );
};
export default LazyLoad;
