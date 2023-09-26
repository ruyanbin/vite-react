import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HOME_URL } from '@/config/config.ts';

const Error403 = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(HOME_URL);
  };
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button onClick={goHome} type="primary">
          返回首页
        </Button>
      }
    />
  );
};
export default Error403;
