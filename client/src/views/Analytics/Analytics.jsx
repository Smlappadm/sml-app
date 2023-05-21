import React from "react";
import Nav from "../../components/Nav/Nav";
import AnalyticsNumerics from "../../components/C-Level/Analytics/AnalyticsNumerics/AnalyticsNumerics";
import Reports from "../../components/C-Level/Analytics/Reports/Reports";
import Goals from "../../components/C-Level/Analytics/Goals/Goals";
import BestSellers from "../../components/C-Level/Analytics/BestSellers/BestSellers";
import { Sales } from "../../components/C-Level/Analytics/Sales/Sales";

import Analytic from "../../components/C-Level/Analytics/Analytic";

function Analytics() {
  return (
    
    <>
    <Nav/>
       <Analytic /> 
     {/* <AnalyticLeader />*/}
    </>
  );
}

export default Analytics;
