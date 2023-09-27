import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HOME_URL } from '@/config/config.ts';

const Login = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(HOME_URL);
  };
  return (
    <>
      <Button onClick={goHome}>登录</Button>
    </>
  );
};
export default Login;
