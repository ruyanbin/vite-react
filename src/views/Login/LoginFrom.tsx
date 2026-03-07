import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from '@iconify/react';
import { Button, Checkbox, Col, Divider, Form, Input, Row } from 'antd';
import FormItem from 'antd/es/form/FormItem';

import { HOME_URL, PROJECT_NAME } from '#/config/config.ts';

const LoginFrom = () => {
  const navigate = useNavigate();
  const [formData] = useState({
    userName: '',
    password: '',
    remember: false,
    account: '',
  });
  const onFinsh = (values: any) => {
    console.log(values, '验证');
    login();
  };
  const login = () => {
    navigate(HOME_URL);
  };
  const onFinshFailed = (errorInfo: any) => {
    console.log(errorInfo, 'error');
  };

  return (
    <div className='w-full max-w-md min-h-[500px] rounded-2xl shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 box-border transition-all duration-300 hover:shadow-3xl'>
      <h2 className='text-3xl font-bold text-center mb-8 text-blue-600 tracking-wide'>{PROJECT_NAME}</h2>
      <Form
        name='login'
        initialValues={formData}
        onFinish={onFinsh}
        onFinishFailed={onFinshFailed}
        className='space-y-4'
      >
        <FormItem
          layout='vertical'
          label='用户名'
          name='username'
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder='请输入用户名' size='large' className='rounded-lg' />
        </FormItem>
        <FormItem layout='vertical' label='账   号' name='account' rules={[{ required: true, message: '请输入账号' }]}>
          <Input placeholder='请输入账号' size='large' className='rounded-lg' />
        </FormItem>
        <FormItem layout='vertical' label='密  码' name='passsword' rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password placeholder='请输入密码' size='large' className='rounded-lg' />
        </FormItem>
        <FormItem name='remember' valuePropName='checked' className='mb-4'>
          <Row justify='space-between' align='middle'>
            <Col>
              <Checkbox>记录密码</Checkbox>
            </Col>
            <Col>
              <Button type='link' className='p-0 h-auto text-blue-600 hover:text-blue-700'>
                忘记密码
              </Button>
            </Col>
          </Row>
        </FormItem>
        <Row className='mt-6' justify='center'>
          <Col span={24}>
            <Button
              className='w-full h-12 rounded-lg text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-0'
              type='primary'
              htmlType='submit'
            >
              登录
            </Button>
          </Col>
        </Row>
      </Form>
      <Row className='mt-6 mb-4' justify='space-between' gutter={16}>
        <Col span={11}>
          <Button
            className='w-full h-10 rounded-lg border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300'
            type='link'
          >
            验证码登录
          </Button>
        </Col>

        <Col span={11}>
          <Button
            className='w-full h-10 rounded-lg border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300'
            type='link'
          >
            注册账号
          </Button>
        </Col>
      </Row>
      <Divider plain className='text-gray-400'>
        其他登录方式
      </Divider>
      <Row justify='space-around' className='mt-4'>
        <Col span={4} className='text-center cursor-pointer hover:scale-110 transition-transform duration-300'>
          <Icon icon='ant-design:qq-circle-filled' className='text-4xl text-blue-500 hover:text-blue-600' />
        </Col>
        <Col span={4} className='text-center cursor-pointer hover:scale-110 transition-transform duration-300'>
          <Icon icon='ant-design:wallet-filled' className='text-4xl text-green-500 hover:text-green-600' />
        </Col>
        <Col span={4} className='text-center cursor-pointer hover:scale-110 transition-transform duration-300'>
          <Icon icon='ant-design:wechat-filled' className='text-4xl text-green-600 hover:text-green-700' />
        </Col>
      </Row>
    </div>
  );
};

export default LoginFrom;
