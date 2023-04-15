import React from "react";

import DashboardSectionV2 from "../components/DashboardSectionV2";
import DashboardSection from "./../components/DashboardSection";
import Meta from "./../components/Meta";
import { requireAuth } from "./../util/auth";

function DashboardPage(props) {
  return (
    <div className="flex flex-1">
      <DashboardSectionV2 />
      <div className="flex w-5/6 justify-center items-center">
        <p>All Items will be displayed here</p>
      </div>
    </div>
  );
}

export default requireAuth(DashboardPage);
