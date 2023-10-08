import { Form, Input, Checkbox, Button, Row, Col, Divider } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useState } from 'react';
import { HOME_URL, PROJECT_NAME } from '@/config/config.ts';
import { QqCircleFilled, WalletFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

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
  const onFinshFailed = (errorInfo) => {
    console.log(errorInfo, 'error');
  };

  return (
    <div className="w-1/3 md:w-500 h-1/2 bg-white rounded absolute top-1/4 left-1/3 p-4 box-border">
      <h2 className="h-1/8 text-3xl leading-8 text-center mb-20 text-blue-500">{PROJECT_NAME}</h2>
      <Form name="login" initialValues={formData} onFinish={onFinsh} onFinishFailed={onFinshFailed}>
        <FormItem name="username">
          <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem name="account">
          <Input placeholder="请输入账号" />
        </FormItem>
        <FormItem name="passsword">
          <Input.Password placeholder="请输入密码" />
        </FormItem>
        <FormItem name="remember" valuePropName="checked">
          <Row justify="space-between">
            <Col span={6}>
              <Checkbox> 记录密码</Checkbox>
            </Col>
            <Col span={6}>
              <Button type="link" block>
                忘记密码
              </Button>
            </Col>
          </Row>
        </FormItem>
        <Row className="mt-10" justify="center">
          <Col span={24}>
            <Button className="min-w-full bg-blue-700 text-cyan-50 " type="primary" htmlType="submit">
              登录
            </Button>
          </Col>
        </Row>
      </Form>
      <Row className="mt-10 mb-5" justify="space-between" gutter={10}>
        <Col span={10}>
          <Button className="min-w-full border-black" type="link">
            验证码登录
          </Button>
        </Col>

        <Col span={10}>
          <Button type="link" className="min-w-full border-black">
            注册账号
          </Button>
        </Col>
      </Row>
      <Divider plain>其他登录方式</Divider>
      <Row justify="space-around">
        <Col span={2}>
          <QqCircleFilled />
        </Col>
        <Col span="3">
          <WalletFilled />
        </Col>
      </Row>
    </div>
  );
};

export default LoginFrom;
