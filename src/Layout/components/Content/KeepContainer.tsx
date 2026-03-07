import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';

export const ContentView = () => {
  const { Content } = Layout;
  return (
    <>
      <Content className='p-1'>
        <Outlet />
      </Content>
    </>
  );
};
