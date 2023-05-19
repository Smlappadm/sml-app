import { useState, useEffect } from "react";
import style from "./TableClevel.module.css";
import PaginationOutlined from "../../../pagination/PaginationOutlined";
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
import { CiMail } from "react-icons/ci";
import { getAllCorredores, getAllVendedores } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import NestedModal from "./MaterialUi/NestedModal";
import NestedModalEdit from "./MaterialUi/Edit/NestedModalEdit";
export const TableClevel = () => {
  const { corredores, vendedores } = useSelector((state) => state);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllCorredores());
    dispatch(getAllVendedores());
  }, [dispatch]);

  let employees = corredores.concat(vendedores);

  const [pageStyle, setPageStyle] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardXPage, setCardXpage] = useState(10);
  const indexLastCard = currentPage * cardXPage;
  const indexFirstCard = indexLastCard - cardXPage;
  const currentCard = employees.slice(indexFirstCard, indexLastCard);

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(currentCard);

  return (
    <>
      <div className=" flex flex-col justify-start items-center w-full h-screen">
        <Card className="bg-[#222131] rounded-none w-full h-screen p-5">
          <div className="flex justify-between items-center">
            <Title className="font-bold text-[#e2e2e2] text-lg ml-4">
              Employees
            </Title>
            <NestedModal />
          </div>
          <Table className="">
            <TableHead className={style.tableHead}>
              <TableRow className={style.tableRow}>
                <TableHeaderCell className="text-start">Name</TableHeaderCell>
                <TableHeaderCell className="text-start">Email</TableHeaderCell>
                <TableHeaderCell className="text-start">
                  Phone Number
                </TableHeaderCell>
                <TableHeaderCell className="text-start">
                  Position
                </TableHeaderCell>
                <TableHeaderCell className="text-start">
                  <h1></h1>
                </TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody className={style.tableBody}>
              {currentCard.map((item, index) => (
                <TableRow key={index} className={style.tableCards}>
                  <TableCell className="flex justify-start items-center p-0">
                    <img
                      className="w-8 ml-2 mr-4 rounded-full"
                      src={item.photo}
                      alt="avatar image"
                    />
                    <Text className="text-start">{item.name}</Text>
                  </TableCell>
                  <TableCell className="flex justify-start items-center p-0">
                    <CiMail className={style.icon} />
                    <Text className="text-start">{item.email}</Text>
                  </TableCell>
                  <TableCell className="p-0 mx-3">
                    <Text className="text-start">{item.contactNumber}</Text>
                  </TableCell>
                  <TableCell className="p-0">
                    {item.rol === "corredor" ? (
                      <Text className="bg-[#29c08b]  text-[#050505] text-center p-1 w-20 rounded-lg">
                        {item.rol}
                      </Text>
                    ) : (
                      <Text className="bg-[#ca4f8d] text-[#f1f1f1] text-center p-1 px-2 w-20 rounded-lg">
                        {item.rol}
                      </Text>
                    )}
                  </TableCell>
                  <TableCell className="p-0 relative">
                    <div>
                      <div className=" ml-20 pl-2">
                        <NestedModalEdit
                          itemId={item._id}
                          itemName={item.name}
                          itemEmail={item.email}
                          itemPhone={item.contactNumber}
                          itemRol={item.rol}
                        />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <div className=" mb-6">
          <PaginationOutlined
            pageStyle={pageStyle}
            setPageStyle={setPageStyle}
            cardXPage={cardXPage}
            data={employees}
            pages={pages}
            current={currentPage}
          />
        </div>
      </div>
    </>
  );
};
