import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./CorredoresAnalytics.module.css";
import PaginationOutlined from "../../pagination/PaginationOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getLeadUnchecked } from "../../../redux/actions";
import Nav from "../../Nav/Nav";
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

import { CiGlobe, CiWarning, CiInstagram, CiMail } from "react-icons/ci";

const CorredoresAnlaytics = () => {
  const { leadUnchecked } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeadUnchecked());
  }, [dispatch]);

  const [pageStyle, setPageStyle] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardXPage, setCardXpage] = useState(10);
  const indexLastCard = currentPage * cardXPage;
  const indexFirstCard = indexLastCard - cardXPage;
  const currentCard = leadUnchecked.slice(indexFirstCard, indexLastCard);

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (currentCard.length === 1 && currentCard[0].hasOwnProperty("error")) {
    return <p className={style.noResults}>No hay resultados...</p>;
  }

  return (
    <>
      <Nav />
      <div className=" flex flex-col justify-start items-center w-full h-screen mx-5">
        <Card className="w-full m-5 h-screen ">
          <div className="flex justify-between items-center mt-2 mx-5 ">
            <Title className="font-bold text-[#e2e2e2] text-lg">
              Analytics
            </Title>
          </div>
          <Table className="flex">
            <TableHead className="text-gray-400 text-14 font-thin">
              <TableRow className={style.tableRow}>
                <TableHeaderCell className="text-start">
                  Invoice Id
                </TableHeaderCell>
                <TableHeaderCell className="text-start">Name</TableHeaderCell>
                <TableHeaderCell className="text-start">Web</TableHeaderCell>
                <TableHeaderCell className="text-start">
                  Instagram
                </TableHeaderCell>
                <TableHeaderCell className="text-start">Nivel</TableHeaderCell>
                <TableHeaderCell className="text-start">
                  Incidencia
                </TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody className="h-3/4">
              {currentCard?.map((item, index) => (
                <TableRow key={index} className={style.tableCards}>
                  <TableCell className="flex justify-start items-center p-0">
                    <div className="w-24 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute">
                      {item._id}
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-start items-center p-0">
                    <Text className="w-96 p-1 px-3 rounded-full text-ellipsis opacity-1 whitespace-nowrap overflow-hidden hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">{item.name}</Text>
                  </TableCell>
                  <TableCell className="flex justify-start items-center p-0">
                    {item.url ? (
                      <Link to={item.url} target="_blank">
                        <div>
                          <CiGlobe className="text-[30px] mr-5 text-[#418df0]" />
                        </div>
                      </Link>
                    ) : (
                      <div>
                        <CiGlobe className="text-[30px] mr-5 text-[#9eabbe]" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="flex justify-start items-center p-0 mx-3">
                    {item.instagram ? (
                      <Link to={item.instagram} target="_blank">
                        <div>
                          <CiInstagram className="text-[30px] mr-5 text-[#fc3f8d]" />
                          <Text className="text-start">{item.Instagram}</Text>
                        </div>
                      </Link>
                    ) : (
                      <div>
                        <CiInstagram className="text-[30px] mr-5 text-[#418df0]" />
                        <Text className="text-start">{item.Instagram}</Text>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="flex justify-start items-center p-0">
                    {item.level == "0" ? (
                      <label className={style.buttonNivelActive}>0</label>
                    ) : (
                      <label className={style.buttonNivel}>0</label>
                    )}
                    {item.level == "1" ? (
                      <label className={style.buttonNivelActive}>1</label>
                    ) : (
                      <label className={style.buttonNivel}>1</label>
                    )}
                    {item.level == "2" ? (
                      <label className={style.buttonNivelActive}>2</label>
                    ) : (
                      <label className={style.buttonNivel}>2</label>
                    )}
                  </TableCell>
                  <TableCell className="flex justify-start items-center p-0">
                    <div>
                      {item.level == "3" ? (
                        <CiWarning className="text-[30px] mr-5 text-[#f0de41]" />
                      ) : (
                        <CiWarning className="text-[30px] mr-5 text-[#418df0]" />
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* <Pagination2
        pageStyle={pageStyle}
        setPageStyle={setPageStyle}
        cardXPage={cardXPage}
        data={leadUnchecked}
      pages={pages}/> */}
        </Card>
        <div className="">
          <PaginationOutlined
            pageStyle={pageStyle}
            setPageStyle={setPageStyle}
            cardXPage={cardXPage}
            data={leadUnchecked}
            pages={pages}
          />
        </div>
      </div>
    </>
  );
};

export default CorredoresAnlaytics;
