import React from "react";
import { Flex } from "antd";
import { SidebarLinksGroup } from "./SidebarLinksGroup";
import { type SidebarGroup } from "@/types/layout";
import { FORMATTERS } from "@/utils";

export const SidebarLinks: React.FC<{
  items: SidebarGroup[];
  hideLabels?: boolean;
}> = (props) => {
  return (
    <Flex gap="2" vertical>
      {props.items.map((item) => (
        <SidebarLinksGroup
          key={FORMATTERS.slugifyString(item.group)}
          groupName={item.group}
          children={item.children}
          hideLabels={props.hideLabels}
        />
      ))}
    </Flex>
  );
};
