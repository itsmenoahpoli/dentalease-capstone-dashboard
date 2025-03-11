import React from "react";
import { PageHeader } from "@/components";

const OverviewPage: React.FC = () => {
  return (
    <div className="h-full w-full">
      <PageHeader
        title="Dashboard Overview"
        subtitle="View overall data and contents in the system"
      />
    </div>
  );
};

export default OverviewPage;
