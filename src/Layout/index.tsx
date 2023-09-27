import { Layout } from 'antd';
import { ContentView } from '@/Layout/components/ContentView.tsx';
const LayoutIndex = () => {
  const { Header, Sider, Footer: Footer, Content } = Layout;
  return (
    <Layout className="min-h-full min-h-full">
      <Layout>
        <Header>Header</Header>
        <ContentView></ContentView>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutIndex;
