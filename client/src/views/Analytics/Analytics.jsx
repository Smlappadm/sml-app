import React from "react";
import Nav from "../../components/Nav/Nav";
import AnalyticsNumerics from "../../components/Analytics/AnalyticsNumerics/AnalyticsNumerics";
import Reports from "../../components/Analytics/Reports/Reports";
import Goals from "../../components/Analytics/Goals/Goals";
import BestSellers from "../../components/Analytics/BestSellers/BestSellers";
import { Sales } from "../../components/Analytics/Sales/Sales";

function Analytics() {
  return (
    <div className="flex w-screen">
      <Nav />
      <div className="flex flex-col w-screen">
        <div className="flex justify-between m-8">
          <h1 className="text-2xl font-bold text-white">Analytics</h1>
          <select className="w-32 h-12 rounded-lg bg-purple-500 text-white text-center">
            <option className="py-1">2023</option>
          </select>
        </div>
        <div>
          <AnalyticsNumerics />
        </div>
        <div className="flex flex-col justify-between items-center gap-5 mt-12 ml-10 mb-10">
          <div className="flex gap-5 ">
            <Reports />
            <Goals />
          </div>
          <div className="flex gap-5">
            <Sales />
            <BestSellers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
