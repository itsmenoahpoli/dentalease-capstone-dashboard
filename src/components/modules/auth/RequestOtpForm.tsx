import React from "react";
import { Form, Input, Button, type FormProps } from "antd";
import { type RequestOtpCredentials } from "@/types/auth";

export const RequestOtpForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleFormSubmit: FormProps<RequestOtpCredentials>["onFinish"] = (
    values
  ) => {
    console.log(values);
  };

  return (
    <Form form={form} onFinish={handleFormSubmit} layout="vertical">
      <Form.Item
        label="E-mail"
        name="email"
        className="!mb-2"
        rules={[{ required: true, message: "E-mail address required" }]}
        required
      >
        <Input placeholder="Enter your e-mail" />
      </Form.Item>
      <Button type="primary" htmlType="submit" className="mt-3" block>
        Send
      </Button>
    </Form>
  );
};
