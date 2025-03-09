import React from "react";
import { Flex } from "antd";
import { SigninForm } from "@/components";

const SigninPage: React.FC = () => {
  return (
    <div className="w-full">
      <Flex className="text-center !mb-3" vertical>
        <h1 className="text-xl text-center text-gray-700 font-medium">
          Dashboard Access
        </h1>
        <p>Provide your account credentials to sign in</p>
      </Flex>

      <SigninForm />
    </div>
  );
};

export default SigninPage;
