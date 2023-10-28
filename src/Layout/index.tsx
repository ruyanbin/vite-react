import { Layout } from 'antd';
import { ContentView } from '#/Layout/components/Content/ContentView';
import MenuComponent from '#/Layout/components/Menu/index.tsx';
import LayoutHeader from '#/Layout/components/HeaderComponent/index.tsx';
import { useSelector, useDispatch } from 'react-redux';
import Menu from '#/config/menu.json';
import MyTabs from '#/components/Tabs';
import { useEffect } from 'react';
import { FloatMenuList } from '#/utils/Menu';
import { myMenuItem } from '#/typings/menu';
import { updateFlatMenuList } from '#/redux/feature/Menu';
import KeepAliveContent from './components/Content/KeepAliveContent';
import Keep from '#c/keep/index';
import { Outlet } from 'react-router-dom';
const LayoutIndex = () => {
  const { Header, Footer: Footer } = Layout;
  const dispatch = useDispatch();
  const collapsed = useSelector(
    (state: { global: { collapsed: boolean } } = { global: { collapsed: false } }): boolean => {
      return state.global.collapsed;
    }
  );
  const flatMenuLIst = useSelector((state: { menu: { flatMenuList: myMenuItem[] } }): myMenuItem[] => {
    return state.menu.flatMenuList || [];
  });
  useEffect(() => {
    console.log(flatMenuLIst, 'flatMenuLIst', flatMenuLIst.length);
    // if (flatMenuLIst.length == 0) {
    const list = FloatMenuList(Menu.menuList);
    console.log(list, 'layout-,emulist');
    dispatch(updateFlatMenuList(list));
    // }
  }, []);
  return (
    <Layout className="min-h-full min-h-full flex flex-row">
      <MenuComponent collapse={collapsed} menuList={Menu.menuList} />
      <Layout>
        <Header className="bg-white">
          <LayoutHeader />
        </Header>
        <MyTabs />

        <Keep></Keep>
        {/* <KeepAliveContent></KeepAliveContent> */}
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default LayoutIndex;
