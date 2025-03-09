import React, { PropsWithChildren } from "react";
import { Flex } from "antd";
import { useLayout } from "@/hooks";
// import { AppBreadcrumbs } from "@/components/app/AppBreadcrumbs";
import { Navbar } from "./Navbar";

export const DashboardContent: React.FC<PropsWithChildren> = React.memo((props) => {
  const { sidebarCollapsed } = useLayout();

  return (
    <div
      className={`${
        sidebarCollapsed ? "ml-[70px] w-[calc(100%-70px)]" : "ml-[230px] w-[calc(100%-230px)]"
      } transition-all duration-200 h-full`}
    >
      <Navbar />

      <Flex gap="1" className="h-full px-4 pt-2" style={{ zoom: 0.895 }} vertical>
        <div className="!pb-[80px]">{props.children}</div>
      </Flex>
    </div>
  );
});
