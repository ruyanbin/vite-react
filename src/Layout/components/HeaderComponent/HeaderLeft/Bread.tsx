import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { Breadcrumb } from 'antd';

import IconContainer from '#/components/Icons/index';
import useMenuStore from '#/store/menu.ts';

export default function BreadcrumbComponent() {
  const { pathname } = useLocation();
  const { pathTitleMap } = useMenuStore();

  const breadcrumbItems = useMemo(() => {
    const items = pathTitleMap[pathname] || [];
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
