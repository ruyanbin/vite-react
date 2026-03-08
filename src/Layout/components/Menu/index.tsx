import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Icon } from '@iconify/react';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import type { ItemType } from 'antd/es/menu/interface';

import { useMenuStore } from '#/store/menu';
import type { myMenuItem } from '#/typings/menu';

const MenuComponent = (props: { collapse: boolean; menuList: myMenuItem[] }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { collapse, menuList } = props;
  const updateOpenkeys = useMenuStore((state) => state.updateOpenkeys);

  const menuItems = useMemo((): ItemType[] => {
    const transformMenuItem = (item: myMenuItem): ItemType => {
      return {
        key: item.path || item.title || '',
        label: item.title || '',
        icon: item.icon ? <Icon icon={item.icon} /> : <Icon icon='ant-design:border-outlined' />,
        children: item.children && item.children.length > 0 ? item.children.map(transformMenuItem) : undefined,
      };
    };
    return menuList.map(transformMenuItem);
  }, [menuList]);

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  useEffect(() => {
    if (collapse) {
      updateOpenkeys([]);
    }
  }, [collapse, updateOpenkeys]);

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapse} collapsedWidth={50}>
      <Menu
        inlineIndent={12}
        mode='inline'
        theme='dark'
        selectedKeys={selectedKeys}
        inlineCollapsed={collapse}
        onClick={handleMenuClick}
        items={menuItems}
      />
    </Sider>
  );
};

export default MenuComponent;
