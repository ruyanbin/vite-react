import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

export const ContentView = () => {
  const { Content } = Layout;
  return (
    <>
      <Content className="p-1">
        <Outlet />
      </Content>
    </>
  );
};
