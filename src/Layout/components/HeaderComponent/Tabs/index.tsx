import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



import IconContainer from '#/components/Icons';
import useMenuStore from '#/store/menu';
import { useTabsStore } from '#/store/tabs';
import { tabsOption } from '#/typings/menu';
import { menuOption } from '#/typings/store/index';



import './index.scss';



































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
        <div className='flex items-center gap-1.5'>
          {it.icon ? (
            <IconContainer name={it.icon} />
          ) : (
            <IconContainer name='ant-design:file-outlined' className='text-base' />
          )}
          <span className='text-sm'>{it.title}</span>
        </div>,
        it.path ?? index,
        [],
        index > 0 ? true : false
      );
    });
    return result;
  };

  const tabList = useMemo(() => {
    return getTabs(List);
  }, [List]);

  useEffect(() => {
    const index: number = tabList.findIndex((it) => it.key == pathname);

    if (index == -1) {
      const routeObject: menuOption | undefined = flatMenuLIst.find((it: menuOption): boolean => {
        if (it.path == pathname) {
          return true;
        }
        return false;
      });
      if (routeObject) {
        addTabs(routeObject);
      }
    }

    setActivePath(pathname);
  }, [pathname, tabList, flatMenuLIst, addTabs]);

  const handleTabClick = (key: string) => {
    navigate(key);
  };

  const handleRemoveTabs = (key: string, index: number, e: React.MouseEvent) => {
    // removeTabs(key);
    e.stopPropagation();
    if (key === activePath) {
      const nextTab = tabList[index - 1] || tabList[index + 1];
      if (nextTab) {
        handleTabClick(nextTab.key);
        setTimeout(() => {
          removeTabs(index);
        }, 300);
      }
    } else {
      removeTabs(index);
    }
  };

  return (
    <div className='tabs-container h-10 py-2 gap-1 header-style  flex items-center px-2 overflow-x-auto overflow-y-hidden'>
      {tabList.map((it: tabsOption, index: number) => {
        const isActive = it.key === activePath;
        return (
          <div key={it.key} className={`tabItem ${isActive ? 'active' : ''}`}>
            <div className={` ${isActive ? 'active' : ''}`} onClick={() => handleTabClick(it.key)}>
              {it.label}
            </div>

            {it.closable && (
              <IconContainer
                name='ant-design:close-outlined'
                className='removeClass'
                onClick={(e) => handleRemoveTabs(it.key, index, e)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MyTabs;
