import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCollapsed } from '#/redux/feature/Global';
export default function CollapseComponent() {
  const dispatch = useDispatch();
  const status = useSelector((state: { global: { collapsed: boolean } }): boolean => {
    return state.global.collapsed;
  });
  const onCollapsed = () => {
    dispatch(updateCollapsed(!status));
  };
  return <div onClick={onCollapsed}>{status ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</div>;
}
