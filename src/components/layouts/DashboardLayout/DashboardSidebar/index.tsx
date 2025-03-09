import React from "react";
import { useLayout } from "@/hooks";
import { SidebarLinks } from "./SidebarLinks";
// import { AppLogo } from "@/components";
// import { AppLogoTypes } from "@/types/assets";
import { type SidebarGroup } from "@/types/layout";

export const DashboardSidebar: React.FC<{ items: SidebarGroup[] }> = (props) => {
  const { sidebarCollapsed } = useLayout();
  const sidebarWidthClass = sidebarCollapsed ? "w-[70px]" : "w-[230px]";
  // const logoAttrs = sidebarCollapsed
  //   ? {
  //       type: AppLogoTypes.PMR_LOGO,
  //       height: 50,
  //       width: 35,
  //     }
  //   : {
  //       type: AppLogoTypes.PMR_LOGO_WATERMARK,
  //       height: 60,
  //       width: 150,
  //     };

  return (
    <div
      className={`${sidebarWidthClass} h-screen transition-all duration-300 bg-[#0f1d40] fixed top-0 left-0 overflow-y-auto py-5 mb-3`}
    >
      <div className="h-full w-full relative">
        <div className={`${sidebarWidthClass} bg-[#0f1d40] mx-auto fixed top-0 py-3`}>
          {/* <AppLogo type={logoAttrs.type} height={logoAttrs.height} width={logoAttrs.width} /> */}
        </div>

        <div className="pt-[60px] px-3" style={{ zoom: 0.9 }}>
          <SidebarLinks items={props.items} hideLabels={sidebarCollapsed} />
        </div>
      </div>
    </div>
  );
};
