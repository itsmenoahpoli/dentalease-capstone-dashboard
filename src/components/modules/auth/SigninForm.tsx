import React from "react";
import { Form, Input, Button, Flex, type FormProps } from "antd";
import { Link } from "react-router-dom";
import { useAuthService } from "@/services";
import { WEB_ROUTES } from "@/constants";
import { type SigninCredentials } from "@/types/auth";

export const SigninForm: React.FC = () => {
  const { signinCredentials } = useAuthService();
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleFormSubmit: FormProps<SigninCredentials>["onFinish"] = async (values) => {
    console.log("signin credentials=", values);
    setLoading(true);
    return await signinCredentials(values, setLoading);
  };

  return (
    <Form form={form} onFinish={handleFormSubmit} disabled={loading} layout="vertical">
      <Form.Item
        label="E-mail"
        name="email"
        className="!mb-2"
        rules={[{ required: true, message: "E-mail address required" }]}
        required
      >
        <Input placeholder="Enter your e-mail" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        className="!mb-1"
        rules={[{ required: true, message: "Password address required" }]}
        required
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>
      <Flex justify="end" className="!mt-3">
        <Link to={WEB_ROUTES.AUTH.REQUEST_OTP} className="text-xs">
          Forgot password?
        </Link>
      </Flex>
      <Button type="primary" htmlType="submit" className="mt-3" block>
        Sign In
      </Button>
    </Form>
  );
};
