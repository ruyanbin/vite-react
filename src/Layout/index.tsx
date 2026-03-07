import { useEffect } from 'react';

import { Layout } from 'antd';

import LayoutHeader from '#/Layout/components/HeaderComponent/index.tsx';
import MenuComponent from '#/Layout/components/Menu/index.tsx';
import MyTabs from '#/components/Tabs';
import Menu from '#/config/menu.json';
import { useGlobalStore } from '#/store/global';
import { useMenuStore } from '#/store/menu';
import { FloatMenuList } from '#/utils/Menu';

import Keep from '#c/keep/index';

const LayoutIndex = () => {
  const { Footer } = Layout;
  const collapsed = useGlobalStore((state) => state.collapsed);
  const updateFlatMenuList = useMenuStore((state) => state.updateFlatMenuList);
  const flatMenuLIst = useMenuStore((state) => state.flatMenuList);
  useEffect(() => {
    console.log(flatMenuLIst, 'flatMenuLIst', flatMenuLIst.length);
    const list = FloatMenuList(Menu.menuList);
    console.log(list, 'layout-,emulist');
    updateFlatMenuList(list);
  }, [updateFlatMenuList]);
  return (
    <Layout className='min-h-full min-h-full flex flex-row bg-white dark:bg-gray-900 transition-colors duration-300'>
      <MenuComponent collapse={collapsed} menuList={Menu.menuList} />
      <Layout className='bg-white dark:bg-gray-900 transition-colors duration-300'>
        <LayoutHeader />
        <MyTabs />
        <Keep></Keep>
        {/* <KeepAliveContent></KeepAliveContent> */}
        <Footer className='bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-300'>
          Footer
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutIndex;
