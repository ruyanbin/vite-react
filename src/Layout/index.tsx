import { Layout } from 'antd';
import { ContentView } from '@/Layout/components/ContentView.tsx';
import MenuComponent from '@/Layout/components/Menu/index.tsx';
const LayoutIndex = () => {
  const { Header, Footer: Footer } = Layout;
  return (
    <Layout className="min-h-full min-h-full flex flex-row">
      <MenuComponent />
      <Layout>
        <Header>Header</Header>
        <ContentView></ContentView>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutIndex;
