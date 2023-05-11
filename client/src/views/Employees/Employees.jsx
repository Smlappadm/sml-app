import React from "react";
import style from "./Employees.module.css";
import CardEmploy from "../../components/Employees_components/CardEmploy/CardEmploy";
import Detail from "../../components/Employees_components/Detail/Detail";
import Nav from "../../components/Nav/Nav";
import Performance from "../../components/Employees_components/Performance/Performance";
import { TableEmployees } from "../../components/Employees_components/TableEmployees/TableEmployees";

function Employees() {
  return (
    <>
      <Nav />

      <TableEmployees />
      <Detail performance={true} />
    </>
  );
}

export default Employees;
