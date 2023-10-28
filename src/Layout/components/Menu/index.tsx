import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateOpenkeys } from '#/redux/feature/Menu';
import Icon from '#c/Icons/index';
import './index.scss';
import { myMenuItem } from '#/typings/menu';
const MenuComponent = (props: { collapse: boolean; menuList: myMenuItem[] }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { collapse, menuList } = props;
  const [menuArr, setMenuArr] = useState([]);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState('');
  // 获取存储的key
  const keys = useSelector((state: { menu: { openkeys: string[] } }) => state.menu.openkeys);
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
  // 递归改变数据格式
  const dg = (list: myMenuItem[], arr: myMenuItem[] = []): myMenuItem[] => {
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
  const menuClick = (items: { key: string; keyPath: string[] }) => {
    console.log(items, 'items');
    const { key, keyPath } = items;
    dispatch(updateOpenkeys(keyPath));
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
          openKeys={keys}
          defaultOpenKeys={[defaultSelectedKeys]}
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
