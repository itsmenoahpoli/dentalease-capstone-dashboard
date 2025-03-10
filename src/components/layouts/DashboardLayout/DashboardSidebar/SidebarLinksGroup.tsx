import React from "react";
import { Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { SidebarButton } from "./SidebarButton";
import { useLayout } from "@/hooks";
import { FORMATTERS } from "@/utils";
import { type SidebarGroup } from "@/types/layout";

export const SidebarLinksGroup: React.FC<{
  groupName: string;
  children: SidebarGroup["children"];
  hideLabels?: boolean;
}> = (props) => {
  const navigate = useNavigate();
  const { isMobileScreen } = useLayout();
  const [toggled, setToggled] = React.useState<boolean>(false);

  const handleClickItem = (url?: string) => {
    return url ? navigate(url) : handleToggle();
  };

  const handleToggle = () => {
    setToggled((prevState) => !prevState);
  };

  return (
    <Flex gap="2" justify="center" className="!mt-5 mb-3" vertical>
      <small
        className={`${
          props.hideLabels ? "text-[10px] text-center" : "text-[10px]"
        } !text-white font-bold`}
      >
        {props.groupName}
      </small>
      {props.children.map((child) => (
        <div className="flex flex-col" key={FORMATTERS.slugifyString(child.url || child.label)}>
          <SidebarButton
            data={child}
            toggled={toggled}
            handleToggle={handleToggle}
            handleClickItem={handleClickItem}
            hideLabels={props.hideLabels}
            asDropdown={isMobileScreen}
          />

          {child.children?.length ? (
            <Flex
              className={`${
                toggled ? "max-h-96" : "max-h-0"
              } transition-all duration-300 border-l border-slate-500 overflow-hidden pl-3`}
              gap="3"
              vertical
            >
              {child.children.map((child) => (
                <SidebarButton
                  key={FORMATTERS.slugifyString(child.url || child.label)}
                  data={child}
                  handleToggle={handleToggle}
                  handleClickItem={handleClickItem}
                  hideLabels={props.hideLabels}
                />
              ))}
            </Flex>
          ) : null}
        </div>
      ))}
    </Flex>
  );
};
