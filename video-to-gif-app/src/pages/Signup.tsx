import { Alert, Button, Card, Form, Input } from "antd";
import { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { signup } from "../api/api";
import { KeyOutlined, LoginOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

export default function Signup() {
  const [loading, setLoading] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [form] = Form.useForm();

  const handleSignup = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const res = await signup({ password: values.password, email: values.email, username: values.username })
      if (res?.id) {
        localStorage?.setItem('user_id', res?.userId);
        setLoggedIn(true)
        setErrorMessage(undefined)
      } else {
        setErrorMessage(res?.message)
      }
    } catch (e) {
      console.log(e)
    }
    setLoading(false);
  }

  return loggedIn ? <Navigate to="/" replace={true} /> :
    <Card styles={{ body: { display: 'flex', flexDirection: 'column', gap: '8px' } }}>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleSignup}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Provide a username' }]}
        >
          <Input prefix={<UserOutlined style={{ color: '#AAA' }} />} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Provide a email' }]}
        >
          <Input prefix={<MailOutlined style={{ color: '#AAA' }} />} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Provide a password' }]}
        >
          <Input.Password prefix={<KeyOutlined style={{ color: '#AAA' }} />} />
        </Form.Item>

        <Button
          block
          htmlType="submit"
          loading={loading}
          icon={<LoginOutlined />}
        >
          Sign up
        </Button>
      </Form>
      {errorMessage && <Alert message={errorMessage} type="error" showIcon style={{ padding: '8px' }} />}
      <span>Already have an account? Click <NavLink to='/login'>here</NavLink> to login.</span>
    </Card>
}