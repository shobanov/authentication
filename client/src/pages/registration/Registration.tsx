import { Button, Form, Input } from 'antd';
import { FC } from 'react';

// import { RegistrationForm, LinkRouterDom, Nav, NameContainer } from './styles';

export const Registration: FC = () => {

  const [form] = Form.useForm();
  
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };

  return (
    <Form
      style={{backgroundColor: 'gold'}}
      
      wrapperCol={{span: 8, offset: 8}}
      form={form}
      name="register"
      size="large"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder='E-mail' />
      </Form.Item>

      <Form.Item
        name="password"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder='Password' />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder='Confirm Password' />
      </Form.Item>

      <Form.Item
        name="nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true, message: 'Please input your nickname!',
            whitespace: true
          }
        ]}
      >
        <Input placeholder='Nickname' />
      </Form.Item>
    
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

// return (
//   <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
//     <Title title="Sign up" />
//     <NameContainer>
//       <Input
//         type="text"
//         placeholder="First Name *"
//         {...register("firstName")}
//       />
//       {errors.firstName && <span>This field is required</span>}
//       <Input
//         type="text"
//         placeholder="Last Name *"
//         {...register("lastName")}
//       />
//       {errors.lastName && <span>This field is required</span>}
//     </NameContainer>
//     <Input
//       type="email"
//       placeholder="Email Address *"
//       {...register("email")}
//     />
//     {errors.email && <span>This field is required</span>}
//     <Input
//       type="password"
//       placeholder="Password *"
//       {...register("password")}
//     />
//     {errors.password && <span>This field is required</span>}
//     <Checkbox
//       title="I want to receive inspiration, marketing promotions and updates via email."
//     />
//     <Button title="SIGN UP" />
//     <Nav>
//       <LinkRouterDom to="/auth">
//         Already have an account? Sign in
//       </LinkRouterDom>
//     </Nav>
//   </RegistrationForm>
// );