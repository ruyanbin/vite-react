import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const MenuComponent = (props: { collapse: boolean }) => {
  const { collapse } = props;
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
      <Sider trigger={null} collapsible collapsed={collapse}>
        <Menu mode="inline" theme="dark" inlineCollapsed={collapse} items={items} />
      </Sider>
      ;
    </>
  );
};
export default MenuComponent;
