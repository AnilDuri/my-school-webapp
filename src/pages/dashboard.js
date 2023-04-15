import React, { useState } from "react";

import DashboardSectionV2 from "../components/DashboardSectionV2";
import { requireAuth } from "./../util/auth";

function DashboardPage(props) {
  const [selectedTab, setSelectedTab] = useState();
  return (
    <div className="flex flex-1">
      <DashboardSectionV2 setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      <div className="flex w-5/6 justify-center items-center">
        <p>All Items will be displayed here</p>
      </div>
    </div>
  );
}

export default requireAuth(DashboardPage);
