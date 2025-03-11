import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Avatar, Menu } from "antd";
import { useAuthService } from "@/services";
import { FORMATTERS } from "@/utils";

export const MyAccountDropdown: React.FC<{ userName: string }> = ({ userName }) => {
  const navigate = useNavigate();
  const { signoutUser } = useAuthService();
  const [open, setOpen] = useState<boolean>(false);

  const handleDropdownOpen = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const handleNavigate = (url: string) => {
    handleDropdownOpen(false);
    navigate(url);
  };

  const handleSignout = () => {
    signoutUser();
  };

  const menuItems = (
    <Menu>
      <Menu.Item key="account" onClick={() => handleNavigate("/")}>
        My Account
      </Menu.Item>
      <Menu.Item key="change-password" onClick={() => handleNavigate("/")}>
        Change Password
      </Menu.Item>
      <Menu.Item key="session-logs" onClick={() => handleNavigate("/")}>
        Session Logs
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="signout" onClick={handleSignout} danger>
        Sign Out
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menuItems} trigger={["click"]} onOpenChange={handleDropdownOpen} open={open}>
      <Avatar size={40} className="!bg-[darkorange] !cursor-pointer !font-medium">
        {FORMATTERS.getInitials(userName)}
      </Avatar>
    </Dropdown>
  );
};
