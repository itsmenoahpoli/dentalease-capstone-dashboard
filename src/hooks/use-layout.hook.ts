import React from "react";
import { useAtom } from "jotai";
import { layoutStoreAtom } from "@/stores";

export const useLayout = () => {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [layoutStoreData, setLayoutStoreData] = useAtom(layoutStoreAtom);

  const toggleSidebar = React.useCallback(
    (isCollapsed?: boolean) => {
      const collapsedBool: boolean = isCollapsed ? isCollapsed : !layoutStoreData.sidebarCollapsed;

      setLayoutStoreData({
        sidebarCollapsed: collapsedBool,
      });
    },
    [layoutStoreData.sidebarCollapsed, setLayoutStoreData]
  );

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const isMobileScreen = screenWidth < 600;

  React.useEffect(() => {
    if (isMobileScreen) toggleSidebar(true);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    sidebarCollapsed: layoutStoreData.sidebarCollapsed,
    toggleSidebar,
    screenWidth,
    isMobileScreen,
  };
};
