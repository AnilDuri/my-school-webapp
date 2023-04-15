import React, { useState } from "react";

import DashboardSectionV2 from "../components/DashboardSectionV2";
import { requireAuth } from "./../util/auth";
import { HomeIcon } from "@heroicons/react/24/outline";

function DashboardPage(props) {
  const [selectedTab, setSelectedTab] = useState({ name: 'Admins', href: '#', icon: HomeIcon, count: '5', current: true },);
  return (
    <div className="flex flex-1">
      <DashboardSectionV2 setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      <div className="w-5/6 py-4">
        {selectedTab && selectedTab.component ? selectedTab.component :
          <p>All Items will be displayed here</p>
        }
      </div>
    </div>
  );
}

export default requireAuth(DashboardPage);
