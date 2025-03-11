import React from "react";
import { Flex } from "antd";
import { Spinner } from "./spinner";
import { ASSETS } from "@/constants";

export const AppLoader: React.FC = () => {
  return (
    <Flex
      justify="center"
      align="center"
      gap="large"
      className="h-screen w-screen fixed top-0 bottom-0 left-0 right-0"
      style={{ background: "rgba(255, 255, 255, 0.85)" }}
      vertical
    >
      <img src={ASSETS.BRAND_LOGO} height="250" width="250" />
      <Spinner />
    </Flex>
  );
};
