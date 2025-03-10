import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "antd";
// import { useAuth } from "@/hooks";
import { SidebarCollapseTrigger } from "./SidebarCollapseTrigger";
// import { MyAccountDropdown } from "./MyAccountDropdown";
import { WEB_ROUTES } from "@/constants";

export const Navbar: React.FC = () => {
  // const { userName } = useAuth();

  return (
    <Flex
      className="w-full h-[60px] bg-white border-b border-gray-200 pl-2 pr-5 pt-1"
      align="center"
      justify="between"
    >
      <div className="pl-5">
        <SidebarCollapseTrigger />
      </div>

      <Flex className="w-full !pr-5" justify="end" gap="5">
        <Link to={WEB_ROUTES.AUTH.SIGNIN} className="!text-sm !text-red-600">
          Sign Out
        </Link>
        {/* <MyAccountDropdown userName={"John Doe"} /> */}
      </Flex>
    </Flex>
  );
};
