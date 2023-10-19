import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '#c/Icons/index';
import './index.scss';
import { myMenuItem } from '#/typings/menu';
const MenuComponent = (props: { collapse: boolean; menuList: myMenuItem[] }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { collapse, menuList } = props;
  const [menuArr, setMenuArr] = useState<myMenuItem[]>([]);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState('');
  function getItem(
    label: string,
    key: string,
    icon?: React.ReactNode,
    children?: myMenuItem[],
    type?: 'group'
  ): myMenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as myMenuItem;
  }
  const dg = (list: myMenuItem[], arr: myMenuItem[] = []): any[] => {
    list.forEach((it) => {
      if (it.children && it.children.length > 0) {
        arr.push(
          getItem(it.title!, it.path ? it.path : it.title!, it.icon ? <Icon name={it.icon} /> : '', dg(it.children))
        );
      } else {
        arr.push(getItem(it.title!, it.path ? it.path : it.title!, it.icon ? <Icon name={it.icon} /> : ''));
      }
    });
    return arr;
  };
  useEffect(() => {
    const arr = dg(menuList);
    console.log(arr, 'arr');
    setMenuArr(arr);
  }, [menuList]);
  useEffect(() => {
    setDefaultSelectedKeys(pathname);
  }, [pathname]);
  const menuClick = (items: { key: string }) => {
    console.log(items, 'items');
    const { key } = items;
    navigate(key);
  };

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapse}>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={collapse}
          selectedKeys={[defaultSelectedKeys]}
          defaultSelectedKeys={[defaultSelectedKeys]}
          onClick={menuClick}
          items={menuArr}
        ></Menu>
      </Sider>
      ;
    </>
  );
};
export default MenuComponent;
