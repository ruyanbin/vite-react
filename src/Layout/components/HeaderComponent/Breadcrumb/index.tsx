import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { Breadcrumb } from 'antd';

import { useMenuStore } from '#/store/menu';
import IconContainer from '#/components/Icons';

export default function BreadcrumbComponent() {
  const { pathname } = useLocation();
  const pathTitleMap = useMenuStore((state) => state.pathTitleMap);

  const breadcrumbItems = useMemo(() => {
    const items = pathTitleMap[pathname] || [];
    return items.map((item, index) => ({
      key: item.path || index,
      title: (
        <>
        {item.icon && <IconContainer name={item.icon} />}
          <span >{item.title}</span>
        </>
      ),
    }));
  }, [pathname, pathTitleMap]);

  return (
    <div className='flex items-center flex-1'>
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
}
