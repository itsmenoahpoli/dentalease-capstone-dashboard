import React from "react";
import { Flex, Card } from "antd";
import { Outlet } from "react-router-dom";
import { ASSETS } from "@/constants";

const currentYear = new Date().getFullYear();

export const AuthLayout: React.FC = () => {
  return (
    <React.Suspense fallback={"loading page ..."}>
      <Flex align="center" className="h-screen w-screen !pt-[100px] relative auth-layout" vertical>
        <Flex align="center" style={{ zoom: 0.9 }} vertical>
          <img src={ASSETS.BRAND_LOGO} alt="dentalease-logo" height="250" width="250" />
          <Card className="!w-[375px] !border-gray-200 !bg-white !shadow-md !mt-5">
            <Outlet />
          </Card>
          <p className="text-xs text-center text-gray-600 mt-4">
            &copy; {currentYear} DentalEase All Rights Reserved
          </p>
        </Flex>

        <p className="text-[11px] text-black absolute bottom-2 left-3">
          App version v1.0.0.1 (beta)
        </p>
      </Flex>
    </React.Suspense>
  );
};
