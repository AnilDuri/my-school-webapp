import { HomeIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

import DashboardSectionV2 from "../components/DashboardSectionV2";
import { requireAuth } from "./../util/auth";

const Padding = ({children}) => {
  return (<div className="p-10">
    {children}
  </div>)
}

function DashboardPage(props) {
  const [selectedTab, setSelectedTab] = useState({ name: 'Admins', href: '#', icon: HomeIcon, count: '5', current: true },);
  return (
    <div className="flex flex-row h-full">
      <div className="w-1/6 h-full grow bg-orange-700">
        <DashboardSectionV2 setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      </div>
      <div className="flex w-5/6 h-full overflow-auto flex-col">
        <Padding>
          {/* {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,].map((a) => <div className="p-10">{a}</div>)} */}
          {selectedTab && selectedTab.component ? selectedTab.component :
            <p>All Items will be displayed here</p>
          }
        </Padding>
      </div>
    </div>
  );
}

export default requireAuth(DashboardPage);
