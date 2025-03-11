import React from "react";
import { Flex } from "antd";

export const PageHeader: React.FC<{
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}> = (props) => {
  return (
    <Flex className="!mb-5">
      <Flex className="!w-full" vertical>
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <h4 className="text-gray-500">{props.subtitle}</h4>
      </Flex>

      <div className="!w-full">{props.children}</div>
    </Flex>
  );
};
