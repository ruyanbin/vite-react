import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import { Icon } from '@iconify/react';
import { Button, Card, Checkbox, Col, Divider, Form, Input, Row } from 'antd';
import FormItem from 'antd/es/form/FormItem';



import IconContainer from '#/components/Icons';
import { HOME_URL, PROJECT_NAME } from '#/config/config.ts';
import { useUserStore } from '#/store/user';







































interface LoginFormValues {
  username: string;
  account: string;
  password: string;
  remember: boolean;
}

const LoginFrom = () => {
  const navigate = useNavigate();
  const { login } = useUserStore();
  const [form] = Form.useForm<LoginFormValues>();
 useEffect(() => {
   console.log('登录');
   form.setFieldsValue({
     username: 'admin',
     account: 'admin',
     password: '123456',
     remember: true,
   });
 }, [form]);
  const onFinish = (values: LoginFormValues) => {
    console.log(values, '验证');
    login({ name: values.username || '用户' });
    navigate(HOME_URL);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo, 'error');
  };

  const handleThirdPartyLogin = (platform: string) => {
    console.log(`${platform} 登录`);
  };

  const handleCodeLogin = () => {
    console.log('验证码登录');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleQQLogin = () => {
    handleThirdPartyLogin('QQ');
  };

  const handleAlipayLogin = () => {
    handleThirdPartyLogin('Alipay');
  };

  const handleWeChatLogin = () => {
    handleThirdPartyLogin('WeChat');
  };

  const handleWeiboLogin = () => {
    handleThirdPartyLogin('Weibo');
  };

  return (
    <Card className='w-full max-w-md min-h-[500px] rounded-2xl shadow-2xl  p-8 box-border transition-all duration-300 hover:shadow-3xl bg-white text-black dark:bg-gray-900 dark:text-white'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-bold text-blue-600 tracking-wide'>{PROJECT_NAME}</h2>
        <p className='text-gray-500 dark:text-gray-400 mt-2 text-sm'>欢迎回来，请登录您的账号</p>
      </div>

      <Form
        form={form}
        name='login'
        layout='horizontal'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        size='large'
      >
        <FormItem
          label={<span>用户名</span>}
          layout='vertical'
          name='username'
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input
            placeholder='请输入用户名'
            allowClear
            onClear={() => form.setFieldValue('username', '')}
            prefix={<Icon icon='ant-design:user-outlined' className='text-gray-400' />}
          />
        </FormItem>

        <FormItem
          label={<span className='text-gray-700 dark:text-gray-300'>账号</span>}
          layout='vertical'
          name='account'
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input
            placeholder='请输入账号'
            allowClear
            onClear={() => form.setFieldValue('account', '')}
            prefix={<Icon icon='ant-design:idcard-outlined' className='text-gray-400' />}
          />
        </FormItem>

        <FormItem
          label={<span className='text-gray-700 dark:text-gray-300'>密码</span>}
          layout='vertical'
          name='password'
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password allowClear onClear={() => form.setFieldValue('password', '')} placeholder='请输入密码' />
        </FormItem>

        <Row justify='space-between' align='middle'>
          <Col>
            <FormItem name='remember' valuePropName='checked' className='mb-4'>
              <Checkbox className='text-gray-600 dark:text-gray-400'>记住密码</Checkbox>
            </FormItem>
          </Col>
          <Col>
            <Button
              type='link'
              className='p-0 h-auto text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400'
            >
              忘记密码
            </Button>
          </Col>
        </Row>

        <FormItem>
          <Button
            className='w-full h-12 rounded-lg text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300'
            type='primary'
            htmlType='submit'
            size='large'
          >
            登录
          </Button>
        </FormItem>
      </Form>

      <Row justify='space-between' gutter={16} className='mb-4'>
        <Col span={11}>
          <Button
            className='w-full h-10 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300'
            type='default'
            onClick={handleCodeLogin}
          >
            验证码登录
          </Button>
        </Col>

        <Col span={11}>
          <Button
            className='w-full h-10 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300'
            type='default'
            onClick={handleRegister}
          >
            注册账号
          </Button>
        </Col>
      </Row>

      <Divider plain className='text-gray-400 dark:text-gray-500'>
        其他登录方式
      </Divider>

      <div className='flex justify-around align-center'>
        <IconContainer
          className='text-4xl text-blue-500 hover:text-blue-600'
          onClick={handleQQLogin}
          name={'qq-circle-filled'}
        />

        <IconContainer
          className='text-4xl text-blue-600 hover:text-blue-700'
          onClick={handleAlipayLogin}
          name={'alipay-circle-filled'}
        />

        <IconContainer
          className='text-4xl text-green-600 hover:text-green-700'
          onClick={handleWeChatLogin}
          name={'wechat-filled'}
        />

        <IconContainer
          className='text-4xl text-red-500 hover:text-red-600'
          onClick={handleWeiboLogin}
          name={'weibo-circle-filled'}
        />
      </div>
    </Card>
  );
};

export default LoginFrom;
