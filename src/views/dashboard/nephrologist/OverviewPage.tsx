import React from "react";
import { Spin } from "antd";

const OverviewPage: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Spin spinning={true} size="large" />
      <p className="mt-3">Initializing dashboard data ...</p>
    </div>
  );
};

export default OverviewPage;
