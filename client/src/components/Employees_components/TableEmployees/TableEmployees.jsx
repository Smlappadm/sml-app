import CardEmploy from "../CardEmploy/CardEmploy";
import style from "./TableEmployees.module.css";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
//
export const TableEmployees = () => {
  const data = [
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Vendedor",

      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Adgilar",
      mail: "tomasa@gmail.com",
      phone: "11-5566-8899",
      position: "Vendedor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomr@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
  ];

  return (
    <Card className="w-3/5 h-screen bg-[#222131] rounded-none">
      <div className="flex justify-between items-center m-5">
        <Title className={style.title}>Employees</Title>
        <button className={style.buttonAdd}>Add Customer +</button>
      </div>
      <Table className={style.table}>
        <TableHead className={style.tableHead}>
          <TableRow className={style.tableRow}>
            <TableHeaderCell className="text-start">Name</TableHeaderCell>
            <TableHeaderCell className="text-start">Email</TableHeaderCell>
            <TableHeaderCell className="text-start">
              Phone Number
            </TableHeaderCell>
            <TableHeaderCell className="text-start">Position</TableHeaderCell>
            <TableHeaderCell className="text-start">
              <h1></h1>
            </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody className={style.tableBody}>
          {data.map((item) => (
            <TableRow key={item.name} className={style.tableCards}>
              <TableCell className="flex justify-start items-center p-0">
                <img
                  className="w-8 ml-2 mr-4 rounded-full"
                  src={item.image}
                  alt="avatar image"
                />
                <Text className="text-start">{item.name}</Text>
              </TableCell>
              <TableCell className="flex justify-start items-center p-0">
                <CiMail className={style.icon} />
                <Text className="text-start">{item.mail}</Text>
              </TableCell>
              <TableCell className="p-0 mx-3">
                <Text className="text-start">{item.phone}</Text>
              </TableCell>
              <TableCell className="p-0">
                {item.position === "Corredor" ? (
                  <Text className="bg-[#26af7f]  text-[#1f1e1e] w-fit p-1 px-2 pb-1.5 rounded-xl">
                    {item.position}
                  </Text>
                ) : (
                  <Text className="bg-[#b44f82] text-[#e0dfdf] w-fit p-1 px-2 pb-1.5 rounded-xl">
                    {item.position}
                  </Text>
                )}
              </TableCell>
              <TableCell className="p-0">
                <a href="">
                  <HiOutlineDotsHorizontal className="text-18" />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
