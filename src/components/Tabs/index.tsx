/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Tabs } from 'antd';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import Icon from '#c/Icons/index';
import { useNavigate, useLocation } from 'react-router-dom';
import './index.scss';
import { tabsOption } from '#/typings/menu';
import { menuOption } from '#/typings/store/index';
import { useDispatch, useSelector } from 'react-redux';
import { addTabs, removeTabs } from '#/redux/feature/Tabs';
function MyTabs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activePath, setActivePath] = useState<string>('');
  const List: menuOption[] = useSelector(
    (state: { tabs: { tabsList: menuOption[] } }): menuOption[] => state.tabs.tabsList
  );
  const flatMenuLIst = useSelector((state: { menu: { flatMenuList: menuOption[] } }): menuOption[] => {
    return state.menu.flatMenuList || [];
  });
  const getTabsItem = (
    label: ReactNode,
    key: string | number,
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
  const getTabs = (List: menuOption[]) => {
    let result = [];
    result = List.map((it: menuOption, index: number) => {
      return getTabsItem(
        <>
          {it.icon ? <Icon name={it.icon}></Icon> : ''}
          {it.title}
        </>,
        it.path ?? index,
        [],
        index > 0 ? true : false
      );
    });
    return result;
  };
  // 获取一点击/展示的Tabs
  const tabList = useMemo(() => {
    return getTabs(List);
  }, [List]);

  // 监听路由变换
  useEffect(() => {
    const index: number = tabList.findIndex((it) => it.key == pathname);
    console.log(index, 'path-----tans');
    if (index == -1) {
      const routeObject: menuOption | undefined = flatMenuLIst.find(
        (it: { path: string; title: string }): menuOption | undefined => {
          if (it.path == pathname) {
            return it;
          }
        }
      );
      console.log(routeObject, 'routeObject');
      if (routeObject) {
        dispatch(addTabs(routeObject));
      }
    }

    setActivePath(pathname);
  }, [pathname]);

  //   事件
  const onChange = (activeKey: string) => {
    console.log(activeKey, 'activeKey');
    navigate(activeKey);
  };
  const onEdit = () => {
    console.log(List, 'e');
    const index: number = List.findIndex((it: { path: string }) => it.path == pathname);
    const tabsItem: { path: string } = List[index + 1] || List[index - 1];
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
      activeKey={activePath}
      onChange={onChange}
      onEdit={onEdit}
    />
  );
}

export default MyTabs;
