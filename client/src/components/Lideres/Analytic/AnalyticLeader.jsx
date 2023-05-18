import style from "./TableEmployees.module.css";
import PaginationOutlined from "../../pagination/PaginationOutlined";
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
import { CiMail, CiInstagram, CiPhone } from "react-icons/ci";
import InputRunner from "./MaterialUi/InputRunner";
import InputSeller from "./MaterialUi/InputSeller";
import SelectLevel from "./MaterialUi/SelectLevel";
import SelectStatus from "./MaterialUi/SelectStatus";
import ModalCient from "./MaterialUi/ModalClient";
import Nav from "../../Nav/Nav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterLevel,
  filterStatus,
  getLeadChecked,
  orderCategory,
  orderClients,
} from "../../../redux/actions";
//
export const AnalyticLeader = () => {
  const [data, setData] = useState([]);
  const { leaderDashboard } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLeadChecked());
  }, [dispatch]);

  const [pageStyle, setPageStyle] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardXPage, setCardXpage] = useState(10);
  const indexLastCard = currentPage * cardXPage;
  const indexFirstCard = indexLastCard - cardXPage;
  const currentCard = data.slice(indexFirstCard, indexLastCard);
  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [clientOrder, setClientOrder] = useState("");
  const [filters, setFilters] = useState({
    level: false,
    runner: false,
    sellers: false,
    status: false,
  });

  const headerClient = () => {
    if (clientOrder === "ASC") {
      return "Cliente ⤴";
    } else if (clientOrder === "DES") {
      return "Cliente ⤵";
    } else {
      return "Cliente";
    }
  };
  const handleOrderByClient = () => {
    if (clientOrder === "ASC" || clientOrder === "") {
      setClientOrder("DES");
      dispatch(orderClients(clientOrder));
      setData(leaderDashboard);
    } else {
      setClientOrder("ASC");
      dispatch(orderClients(clientOrder));
      setData(leaderDashboard);
    }
    setCurrentPage(1);
  };
  const headerCategory = () => {
    if (clientOrder === "ASC") {
      return "Profesion ⤴";
    } else if (clientOrder === "DES") {
      return "Profesion ⤵";
    } else {
      return "Profesion";
    }
  };
  const handleOrderByCategory = () => {
    if (clientOrder === "ASC" || clientOrder === "") {
      setClientOrder("DES");
      dispatch(orderCategory(clientOrder));
      setData(leaderDashboard);
    } else {
      setClientOrder("ASC");
      dispatch(orderCategory(clientOrder));
      setData(leaderDashboard);
    }
    setCurrentPage(1);
  };
  const handlerFilter = (filter) => {
    if (filter === "level") {
      setFilters({ level: true, runner: false, sellers: false, status: false });
    } else if (filter === "runner") {
      setFilters({ level: false, runner: true, sellers: false, status: false });
    } else if (filter === "sellers") {
      setFilters({ level: false, runner: false, sellers: true, status: false });
    } else {
      setFilters({ level: false, runner: false, sellers: false, status: true });
    }
  };
  const [levelValue, setLevelValue] = useState("");
  const onChangeLevel = (value) => {
    console.log(value);
    setLevelValue(value);
    dispatch(filterLevel(value));
    setData(leaderDashboard);
    setCurrentPage(1);
  };
  const [statusValue, setStatusValue] = useState("");
  const onChangeStatus = (value) => {
    setStatusValue(value);
    dispatch(filterStatus(value));
    setData(leaderDashboard);
    setCurrentPage(1);
  };

  useEffect(() => {
    console.log(leaderDashboard);
    setData(leaderDashboard);
  }, [leaderDashboard]);

  const [open, setOpen] = useState(false);
  const [modalItems, setModalItems] = useState([]);
  const handleOpen = (item, index) => {
    setOpen(true);
    setModalItems(item);
    console.log(item.name);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Nav />
      <div className="w-full h-screen flex flex-col">
        <Card className="w-full h-full bg-[#222131] rounded-none p-5">
          <div className="flex justify-between items-center mx-5 mb-0">
            <Title className={style.title}>Analisis</Title>
            {filters.level === true ? (
              <SelectLevel onChange={onChangeLevel} value={levelValue} />
            ) : (
              ""
            )}
            {filters.runner === true ? <InputRunner /> : ""}
            {filters.sellers === true ? <InputSeller /> : ""}
            {filters.status === true ? (
              <SelectStatus onChange={onChangeStatus} value={statusValue} />
            ) : (
              ""
            )}
            <button className="bg-gray-700 w-fit h-fit p-2 rounded-md">
              Agregar Clientes
            </button>
          </div>
          <Table>
            <TableHead className="text-gray-300 text-14 font-thin">
              <TableRow className="flex items-center justify-around p-3 ">
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-start w-8 p-0">ID</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <button onClick={() => handleOrderByClient()}>
                    <Text className="text-center w-28 p-0">
                      {headerClient()}
                    </Text>
                  </button>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <button onClick={() => handleOrderByCategory()}>
                    <Text className="text-center w-28 p-0">
                      {headerCategory()}
                    </Text>
                  </button>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <button onClick={() => handlerFilter("level")}>
                    <Text className="text-center w-6 p-0">Nivel</Text>
                  </button>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-6 p-0">Email</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-6 p-0">Instagram</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-6 p-0">Telefono</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <button onClick={() => handlerFilter("runner")}>
                    <Text className="text-center w-28 p-0">Corredor</Text>
                  </button>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <button onClick={() => handlerFilter("sellers")}>
                    <Text className="text-center w-28 p-0">Vendedor</Text>
                  </button>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <button onClick={() => handlerFilter("status")}>
                    <Text className="text-center w-48 p-0">Estado</Text>
                  </button>
                </TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <ModalCient
                open={open}
                handleClose={handleClose}
                name={modalItems.name}
                category={modalItems.category}
                level={modalItems.level}
                email={modalItems.email}
                instagram={modalItems.instagram}
                telephone={modalItems.telephone}
                status={modalItems.status}
              />
              {currentCard.map((item, index) => (
                <TableRow
                  key={item._id}
                  className="flex bg-gray-700 text-gray-400 text-sm p-3 rounded-lg h-14 my-5"
                >
                  <div className="w-full flex justify-around items-center">
                    <button
                      className="w-full flex justify-around items-center"
                      onClick={(index) => handleOpen(item, index)}
                    >
                      <TableCell className="flex justify-center items-center p-0  ">
                        <div className="text-ellipsis w-8  flex justify-start items-center p-0">
                          <Text className=" opacity-1 overflow-hidden hover:overflow-visible  hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute ">
                            {item._id}
                          </Text>
                        </div>
                      </TableCell>
                      <TableCell className="flex justify-center items-center p-0 ">
                        <div className="w-28 text-ellipsis  flex justify-start items-center p-0">
                          <Text className=" opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                            {item.name}
                          </Text>
                        </div>
                      </TableCell>
                      <TableCell className="flex justify-center items-center p-0">
                        <div className="w-28 text-ellipsis  flex justify-start items-center p-0 ">
                          <Text className=" opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                            {item.category}
                          </Text>
                        </div>
                      </TableCell>
                      <TableCell className="flex justify-center items-center p-0">
                        <div className="flex w-6 text-ellipsis justify-start items-center p-0 ">
                          <Text className=" opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                            {item.level}
                          </Text>
                        </div>
                      </TableCell>
                      <TableCell className="flex justify-center items-center p-0 ">
                        <div className="flex w-6 text-ellipsis justify-start items-center p-0 ">
                          {item.email !== "-" ? (
                            <div className=" flex opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                              <div>
                                <CiMail className={style.mail} />
                              </div>
                              <Text>{item.email}</Text>
                            </div>
                          ) : (
                            <div>
                              <CiMail className={style.notMail} />
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="flex justify-center items-center p-0 ">
                        <div className="flex w-6 text-ellipsis justify-start items-center p-0 ">
                          {item.instagram !== "" ? (
                            <div className=" flex opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                              <div>
                                <CiInstagram className={style.mail} />
                              </div>
                              <Text>{item.instagram}</Text>
                            </div>
                          ) : (
                            <div>
                              <CiInstagram className={style.notMail} />
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="flex justify-center items-center p-0 ">
                        <div className="flex w-6 text-ellipsis justify-start items-center p-0 ">
                          {item.telephone !== "-" ? (
                            <div className=" flex opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                              <div>
                                <CiPhone className={style.mail} />
                              </div>
                              <Text>{item.telephone}</Text>
                            </div>
                          ) : (
                            <div>
                              <CiPhone className={style.notMail} />
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="flex justify-center items-center p-0 ">
                        <div className="w-28 text-ellipsis  flex justify-start items-center p-0">
                          <Text className=" opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                            Nombre del Corredor
                          </Text>
                        </div>
                      </TableCell>
                      <TableCell className="flex justify-center items-center p-0 ">
                        <div className="w-28 text-ellipsis  flex justify-start items-center p-0">
                          <Text className=" opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                            Nombre del Vendedor
                          </Text>
                        </div>
                      </TableCell>
                      <TableCell className="flex justify-center items-center p-0">
                        {item.status ? (
                          <Text className="bg-[#26af7f]  text-[#1f1e1e]   px-2 py-1.5 rounded-xl text-center w-48">
                            Contratado
                          </Text>
                        ) : (
                          <Text className="bg-[#b44f82] text-[#e0dfdf] w-full px-2 py-1.5 rounded-xl text-center">
                            No Contactado
                          </Text>
                        )}
                      </TableCell>
                    </button>
                  </div>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <PaginationOutlined
            pageStyle={pageStyle}
            setPageStyle={setPageStyle}
            cardXPage={cardXPage}
            data={data}
            pages={pages}
            current={currentPage}
          />
        </Card>
      </div>
    </>
  );
};
