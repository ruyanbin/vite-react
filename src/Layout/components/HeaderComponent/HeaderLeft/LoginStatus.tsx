import { useNavigate } from 'react-router-dom';

import { Dropdown } from 'antd';

import IconContainer from '#/components/Icons';
import { useUserStore } from '#/store/user';

const LoginStatus = () => {
  const { isLogin, userInfo, logout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const menuItems = [
    {
      label: <div className='text-sm font-medium text-gray-700 dark:text-gray-200'>{userInfo?.name || '用户'}</div>,
      key: 'userInfo',
      disabled: true,
    },
    {
      type: 'divider' as const,
    },
    {
      label: (
        <div className='text-sm font-medium text-red-500 dark:text-red-400 cursor-pointer hover:text-red-600 dark:hover:text-red-300'>
          退出登录
        </div>
      ),
      key: 'logout',
      onClick: handleLogout,
      icon: <IconContainer name='ant-design:logout-outlined' className='text-sm' />,
    },
  ];

  if (!isLogin) {
    return (
      <div
        className='text-sm font-medium text-gray-700 dark:text-gray-200 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
        onClick={handleLoginClick}
      >
        登录
      </div>
    );
  }

  return (
    <Dropdown menu={{ items: menuItems }} placement='bottomRight' trigger={['click']}>
      <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-3 py-2 transition-colors'>
        <IconContainer name='ant-design:user-outlined' className='text-lg' />
        <span className='text-sm font-medium text-gray-700 dark:text-gray-200'>{userInfo?.name || '用户'}</span>
        <IconContainer name='ant-design:down-outlined' className='text-xs text-gray-500 dark:text-gray-400' />
      </div>
    </Dropdown>
  );
};

export default LoginStatus;
