import React from "react";
import { useLayout } from "@/hooks";
import { SidebarLinks } from "./SidebarLinks";
import { ASSETS } from "@/constants";
import { type SidebarGroup } from "@/types/layout";

export const DashboardSidebar: React.FC<{ items: SidebarGroup[] }> = (props) => {
  const { sidebarCollapsed } = useLayout();
  const sidebarWidthClass = sidebarCollapsed ? "w-[70px]" : "w-[230px]";

  return (
    <div
      className={`${sidebarWidthClass} h-screen transition-all duration-300 bg-[#0f1d40] fixed top-0 left-0 overflow-y-auto py-5 mb-3`}
    >
      <div className="h-full w-full relative">
        <div className={`${sidebarWidthClass} bg-[#0f1d40] mx-auto fixed top-0 p-3`}>
          <img src={ASSETS.BRAND_LOGO} alt="brand-logo" className="w-full h-auto" />
        </div>

        <div className="pt-[60px] px-3">
          <SidebarLinks items={props.items} hideLabels={sidebarCollapsed} />
        </div>
      </div>
    </div>
  );
};
