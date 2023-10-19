import { Tabs } from 'antd';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;
import Icon from '#c/Icons/index';
import { useNavigate, useLocation } from 'react-router-dom';
import './index.scss';
import { myMenuItem, tabsOption } from '#/typings/menu';
import { useDispatch, useSelector } from 'react-redux';
import { addTabs, removeTabs } from '#/redux/feature/Tabs';
import Menu from '#/config/menu.json';
function MyTabs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activePath, setActivePath] = useState<string>('');
  const [MenuList] = useState<myMenuItem[]>([
    {
      title: '首页',
      path: '/home',
      icon: 'icon-[mdi-light--home]',
    },
    {
      title: '用户管理',
      path: '/User',
      icon: 'icon-[carbon--user]',
    },
    {
      title: '角色管理',
      path: '/Role',
      icon: 'icon-[majesticons--t-shirt-line]',
    },
  ]);
  const [tabList, setTabList] = useState<tabsOption[]>([]);

  const List: myMenuItem[] = useSelector(
    (state: { tabs: { tabsList: myMenuItem[] } }): myMenuItem[] => state.tabs.tabsList
  );
  const getTabsItem = (
    label: ReactNode,
    key: string,
    children?: ReactNode | string,
    closable?: boolean
  ): tabsOption => {
    return {
      label,
      key,
      children,
      closable,
    } as tabsOption;
  };
  const getTabs = (List: myMenuItem[]) => {
    let result = [];
    result = List.map((it: myMenuItem, index: number) => {
      return getTabsItem(
        <>
          {it.icon ? <Icon name={it.icon}></Icon> : ''}
          {it.title}
        </>,
        it.path,
        [],
        index > 0 ? true : false
      );
    });
    return result;
  };

  useEffect(() => {
    console.log(List, 'List');
    const Arr = getTabs(List);
    setTabList(Arr);
  }, [List]);
  // 监听路由变换
  useEffect(() => {
    console.log(pathname, 'pathname');

    const routeObject: myMenuItem = MenuList.find((it: myMenuItem) => it.path == pathname);
    setActivePath(pathname);
    console.log(routeObject, 'routeObject');
    dispatch(addTabs(routeObject));
  }, [pathname]);

  //   事件
  const onChange = (activeKey: string) => {
    console.log(activeKey, 'activeKey');
    navigate(activeKey);
  };
  const onEdit = (item: string) => {
    console.log(List);
    const index: number = List.findIndex((it: myMenuItem) => it.path == item);
    console.log(index, 'remove');

    const tabsItem: myMenuItem = List[index + 1] || List[index - 1];
    console.log(tabsItem);
    dispatch(removeTabs(index));

    navigate(tabsItem.path);
  };
  return (
    <Tabs
      hideAdd
      defaultActiveKey="2"
      type="editable-card"
      moreIcon={<Icon name="icon-[carbon--close-filled]"></Icon>}
      items={tabList}
      activeKey={pathname}
      onChange={onChange}
      onEdit={onEdit}
    />
  );
}

export default MyTabs;
