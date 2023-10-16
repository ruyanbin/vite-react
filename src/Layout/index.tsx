import { Layout } from 'antd';
import { ContentView } from '@/Layout/components/ContentView.tsx';
import MenuComponent from '@/Layout/components/Menu/index.tsx';
import LayoutHeader from '@/Layout/components/HeaderComponent/index.tsx';
import { useSelector } from 'react-redux';
const LayoutIndex = () => {
  const { Header, Footer: Footer } = Layout;
  const collapsed = useSelector(
    (state: { global: { collapsed: boolean } } = { global: { collapsed: false } }): boolean => {
      return state.global.collapsed;
    }
  );
  return (
    <Layout className="min-h-full min-h-full flex flex-row">
      <MenuComponent collapse={collapsed} />
      <Layout>
        <Header className='bg-white'>
          <LayoutHeader />
        </Header>
        <ContentView></ContentView>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutIndex;
