import React from "react";
import { Flex } from "antd";
import { SidebarCollapseTrigger } from "./SidebarCollapseTrigger";
import { MyAccountDropdown } from "./MyAccountDropdown";

export const Navbar: React.FC = () => {
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
        <MyAccountDropdown userName={"John Doe"} />
      </Flex>
    </Flex>
  );
};
