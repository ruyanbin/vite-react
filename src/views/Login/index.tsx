import { useNavigate } from 'react-router-dom';
import { HOME_URL } from '#/config/config.ts';
import { useEffect } from 'react';
import LoginFrom from '#v/Login/LoginFrom.tsx';
// import Circlebg from './car.ts';
const Login = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(HOME_URL);
  };
  // const canRef = useRef();
  useEffect(() => {
    // new Circlebg(100, canRef.current);
  }, []);
  return (
    <div className="min-w-full min-h-full bg-indigo-400 relative">
      <LoginFrom></LoginFrom>
    </div>
  );
};
export default Login;
