import { useEffect } from 'react';

import { Layout } from 'antd';

import MyTabs from '#/Layout/components/HeaderComponent/Tabs';
import LayoutHeader from '#/Layout/components/HeaderComponent/index.tsx';
import MenuComponent from '#/Layout/components/Menu/index.tsx';
import Menu from '#/config/menu.json';
import { useGlobalStore } from '#/store/global';
import { useMenuStore } from '#/store/menu';
import { FloatMenuList, FloatRouterDetail, generatePathTitleMap, getRouteToParentMap } from '#/utils/Menu';

import Keep from '#c/keep/index';

const LayoutIndex = () => {
  const collapsed = useGlobalStore((state) => state.collapsed);
  // const updateFlatMenuList = useMenuStore((state) => state.updateFlatMenuList);
  const { updatePathTitleMap, updateFlatMenuList } = useMenuStore(); // updatePathTitleMap
  const flatMenuLIst = useMenuStore((state) => state.flatMenuList);
  useEffect(() => {
    console.log(flatMenuLIst, 'flatMenuLIst', flatMenuLIst.length);
    const list = FloatMenuList(Menu.menuList);
    updateFlatMenuList(list);

    const list2 = generatePathTitleMap(Menu.menuList);
    updatePathTitleMap(list2);
  }, [updateFlatMenuList]);
  return (
    <div className='w-full h-full flex'>
      <MenuComponent collapse={collapsed} menuList={Menu.menuList} />
      <Layout className='flex flex-col flex-1'>
        <LayoutHeader />
        <MyTabs />
        <div className='flex-1 px-4 py-2'>
          <Keep></Keep>
        </div>
      </Layout>
    </div>
  );
};
export default LayoutIndex;
