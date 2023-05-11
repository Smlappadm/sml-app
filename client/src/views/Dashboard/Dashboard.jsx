import React from "react";
import DashboardContract from "../../components/CardPotencialLead/CardPotencialLead";
import Nav from "../../components/Nav/Nav";

function Dashboard() {
  return (
    <div className="flex flex-row w-screen">
      <Nav />
      <div className="flex flex-col w-[2000px] items-center">
        <div>Dashboard</div>
        <DashboardContract />
      </div>
    </div>
  );
}

export default Dashboard;
