import React from "react";
import { Flex } from "antd";
import { RequestOtpForm } from "@/components";

const RequestOtpPage: React.FC = () => {
  return (
    <div className="w-full">
      <Flex className="text-center !mb-3" vertical>
        <h1 className="text-xl text-center text-gray-700 font-medium">
          Reset Password
        </h1>
        <p>
          Please input the email associated to your account, the
          one-time-password will be sent to your inbox
        </p>
      </Flex>

      <RequestOtpForm />
    </div>
  );
};

export default RequestOtpPage;
