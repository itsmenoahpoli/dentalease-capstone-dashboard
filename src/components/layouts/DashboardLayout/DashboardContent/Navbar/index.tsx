import React from "react";
import { Flex } from "antd";
// import { useAuth } from "@/hooks";
import { SidebarCollapseTrigger } from "./SidebarCollapseTrigger";
// import { MyAccountDropdown } from "./MyAccountDropdown";

export const Navbar: React.FC = () => {
  // const { userName } = useAuth();

  return (
    <Flex
      className="w-full h-[60px] bg-white border-b border-gray-200 pl-2 pr-5 pt-1"
      align="center"
      justify="between"
    >
      <div>
        <SidebarCollapseTrigger />
      </div>

      <Flex justify="end" gap="5">
        {/* <MyAccountDropdown userName={"John Doe"} /> */}
      </Flex>
    </Flex>
  );
};
