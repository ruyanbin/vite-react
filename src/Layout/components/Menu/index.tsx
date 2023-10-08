import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { memo, useState } from 'react';

const MenuComponent: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'nav 1',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'nav 2',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'nav 3',
    },
  ];
  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu mode="inline" theme="dark" inlineCollapsed={collapsed} items={items} />
      </Sider>
      ;
    </>
  );
};
export default memo(MenuComponent);
