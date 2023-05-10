import React from "react";
import style from "./Employees.module.css";
import CardEmploy from "../../components/Employees_components/CardEmploy/CardEmploy";
import Detail from "../../components/Employees_components/Detail/Detail";
import Nav from "../../components/Nav/Nav";
import { TableEmployees } from "../../components/Employees_components/TableEmployees/TableEmployees";

function Employees() {
  return (
    <>
      <Nav />
      <div className="bg-gray-900 flex items-start justify-between flex-row w-screen h-screen">
        <TableEmployees />
        <Detail />
      </div>
    </>
  );
}

export default Employees;
