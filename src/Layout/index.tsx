import { Layout } from 'antd';
const LayoutIndex = () => {
  const { Header, Sider, Footer: Footer, Content } = Layout;
  return (
    <Layout>
      <Sider>sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutIndex;
