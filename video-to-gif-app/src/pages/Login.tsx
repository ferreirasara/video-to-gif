import { Alert, Button, Card, Form, Input } from "antd";
import { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { login } from "../api/api";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [form] = Form.useForm();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const res = await login({ password: values.password, username: values.username })
      if (res?.userId) {
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
        onFinish={handleLogin}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Provide a username' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Provide a password' }]}
        >
          <Input type="password" />
        </Form.Item>
        <Button block htmlType="submit" loading={loading}>Login</Button>
      </Form>
      {errorMessage && <Alert description={errorMessage} type="error" showIcon style={{ padding: '8px' }} />}
      <span>Doesn't have an accout? Click <NavLink to='/signup'>here</NavLink> to signup.</span>
    </Card>
}