import { FC } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { AuthForm, ButtonStyled, LinkForgotPassword, LinkRegister } from './styles';

export const Auth: FC = () => {

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <AuthForm
      initialValues={{ remember: false }}
      onFinish={onFinish}
      size="large"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password 
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          noStyle
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <LinkForgotPassword to="/change-password">
          Forgot password
        </LinkForgotPassword>
      </Form.Item>

      <Form.Item>
        <ButtonStyled type="primary" htmlType="submit">
          Log in
        </ButtonStyled>
        <LinkRegister to="/registration">
          Don't have an account? Sign Up
        </LinkRegister>
      </Form.Item>
    </AuthForm>
  );
};