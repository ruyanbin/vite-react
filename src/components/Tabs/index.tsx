import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Tabs } from 'antd';

import { useMenuStore } from '#/store/menu';
import { useTabsStore } from '#/store/tabs';
import { tabsOption } from '#/typings/menu';
import { menuOption } from '#/typings/store/index';

import Icon from '#c/Icons/index';

function MyTabs() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activePath, setActivePath] = useState<string>('');
  const List: menuOption[] = useTabsStore((state) => state.tabsList);
  const addTabs = useTabsStore((state) => state.addTabs);
  const removeTabs = useTabsStore((state) => state.removeTabs);
  const flatMenuLIst = useMenuStore((state) => state.flatMenuList);
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
      const routeObject: menuOption | undefined = flatMenuLIst.find((it: menuOption): boolean => {
        if (it.path == pathname) {
          return true;
        }
        return false;
      });
      console.log(routeObject, 'routeObject');
      if (routeObject) {
        addTabs(routeObject);
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
    const index: number = List.findIndex((it: menuOption) => it.path == pathname);
    const tabsItem: menuOption | undefined = List[index + 1] || List[index - 1];
    if (tabsItem?.path) {
      removeTabs(index);
      navigate(tabsItem.path);
    }
  };
  return (
    <Tabs
      hideAdd
      defaultActiveKey='2'
      type='editable-card'
      moreIcon={<Icon name='icon-[carbon--close-filled]'></Icon>}
      items={tabList}
      activeKey={activePath}
      onChange={onChange}
      onEdit={onEdit}
    />
  );
}
export default MyTabs;
