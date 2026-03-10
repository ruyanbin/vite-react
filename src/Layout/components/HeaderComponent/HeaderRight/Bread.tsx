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
    return items.map((item, index) => ({
      key: item.path || index,
      title: (
        <>
        {item.icon && <IconContainer name={item.icon} />}
          <span>{item.title}</span>
        </>
      ),
    }));
  }, [pathname, pathTitleMap]);

  return <Breadcrumb items={breadcrumbItems} />;
}
