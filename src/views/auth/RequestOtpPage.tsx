import React from "react";
import { Flex } from "antd";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { RequestOtpForm } from "@/components";
import { WEB_ROUTES } from "@/constants";

const RequestOtpPage: React.FC = () => {
  return (
    <div className="w-full">
      <Link to={WEB_ROUTES.AUTH.SIGNIN} className="flex items-center gap-1 text-gray-500">
        <ChevronLeft size={18} /> Back to sign-in
      </Link>

      <Flex className="text-center !mt-4 !mb-3" vertical>
        <h1 className="text-xl text-center text-gray-700 font-medium">Reset Password</h1>
        <p>
          Please input the email associated to your account, the one-time-password will be sent to
          your inbox
        </p>
      </Flex>

      <RequestOtpForm />
    </div>
  );
};

export default RequestOtpPage;
