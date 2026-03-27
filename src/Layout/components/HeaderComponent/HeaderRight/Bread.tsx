import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { Breadcrumb } from 'antd';

import IconContainer from '#/components/Icons';
import useMenuStore from '#/store/menu';

export default function BreadcrumbComponent() {
  const { pathname } = useLocation();
  const { pathTitleMap } = useMenuStore();

  const breadcrumbItems = useMemo(() => {
    const items = pathTitleMap[pathname] || [];
    console.log(items, 'items');
    return items.map((item, index) => ({
      key: item.path || index,
      title: (
        <div className='flex items-center'>
          {item.icon && <IconContainer name={item.icon} />}
          <span>{item.title}</span>
        </div>
      ),
    }));
  }, [pathname, pathTitleMap]);

  return <Breadcrumb className='flex items-center' items={breadcrumbItems} />;
}
