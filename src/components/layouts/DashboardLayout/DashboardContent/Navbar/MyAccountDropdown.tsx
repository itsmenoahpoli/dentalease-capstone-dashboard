import React from "react";
import { useNavigate } from "react-router-dom";
// import { Avatar, DropdownMenu } from "@radix-ui/themes";
// import { AppSignoutButton } from "@/components";
import { WEB_ROUTES } from "@/constants";
import { FORMATTERS } from "@/utils";

export const MyAccountDropdown: React.FC<{ userName: string }> = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleDropdownOpen = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const handleNavigate = (url: string) => {
    handleDropdownOpen(false);
    navigate(url);
  };

  return (
    <></>
    // <DropdownMenu.Root open={open} onOpenChange={setOpen}>
    //   <DropdownMenu.Trigger>
    //     <button onClick={() => handleDropdownOpen(true)}>
    //       <Avatar size="3" radius="full" fallback={FORMATTERS.getInitials(props.userName)} />
    //     </button>
    //   </DropdownMenu.Trigger>
    //   <DropdownMenu.Content>
    //     <DropdownMenu.Item onClick={() => handleNavigate(WEB_ROUTES.DASHBOARD_MY_ACCOUNT)}>
    //       My Account
    //     </DropdownMenu.Item>
    //     <DropdownMenu.Item onClick={() => handleNavigate(WEB_ROUTES.DASHBOARD_CHANGE_PASSWORD)}>
    //       Change Password
    //     </DropdownMenu.Item>
    //     <DropdownMenu.Item onClick={() => handleNavigate(WEB_ROUTES.DASHBOARD_SESSION_LOGS)}>
    //       Session Logs
    //     </DropdownMenu.Item>
    //     <DropdownMenu.Separator />
    //     <DropdownMenu.Item color="red" onSelect={(e) => e.preventDefault()}>
    //       <AppSignoutButton handleDropdownOpen={handleDropdownOpen} />
    //     </DropdownMenu.Item>
    //   </DropdownMenu.Content>
    // </DropdownMenu.Root>
  );
};
