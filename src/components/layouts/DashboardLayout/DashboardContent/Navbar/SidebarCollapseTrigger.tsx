import React from "react";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useLayout } from "@/hooks";

const ICON_SIZE: number = 16;

export const SidebarCollapseTrigger: React.FC = () => {
  const { toggleSidebar, sidebarCollapsed } = useLayout();

  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  return (
    <button className="cursor-pointer" onClick={handleToggleSidebar}>
      {sidebarCollapsed ? (
        <ArrowRightFromLine color="black" size={ICON_SIZE} />
      ) : (
        <ArrowLeftFromLine color="black" size={ICON_SIZE} />
      )}
    </button>
  );
};
