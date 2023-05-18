import style from "./VendedoresDashboard.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PaginationOutlined from "../../pagination/PaginationOutlined";
import { filterLevel, getLeadCheckedInactive100 } from "../../../redux/actions";
import { SiGooglemaps } from "react-icons/si";
import { AiOutlinePhone, AiTwotonePhone } from "react-icons/ai";
import Modal from "./Modal/Modal";
import { FaRegEdit } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { IoGrid, IoStatsChart } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  CiGlobe,
  CiWarning,
  CiInstagram,
  CiMail,
  CiEdit,
} from "react-icons/ci";
import { AiOutlineSend } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

import Nav from "../../Nav/Nav";

const VendedoresDashboard = () => {
  const [data, setData] = useState([]);
  const { leadCheckedInactive100 } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  useEffect(() => {
    dispatch(getLeadCheckedInactive100());
  }, [dispatch]);
  useEffect(() => {
    setData(leadCheckedInactive100);
  }, [leadCheckedInactive100]);


  const [pageStyle, setPageStyle] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardXPage, setCardXpage] = useState(10);
  const indexLastCard = currentPage * cardXPage;
  const indexFirstCard = indexLastCard - cardXPage;
  const currentCard = data.slice(indexFirstCard, indexLastCard);
  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  //FILTER**********************
  const [filters, setFilters] = useState({
    level: false,
    runner: false,
    sellers: false,
    status: false,
  });

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
    setLevelValue(value);
    dispatch(filterLevel(value));
    setData(leadCheckedInactive100);
    setCurrentPage(1);
  };
  //********************************* */

  const handleCopyClick = (copyToProps) => {
    navigator.clipboard
      .writeText(copyToProps)
      .then(() => {
        setShowCopiedMessage(true);
        setTimeout(() => setShowCopiedMessage(false), 2000);
      })
      .catch((err) => alert(`Error al copiar: ${err}`));
  };

  const openEditMenu = (index, id) => {
    setEdit(true);
    setEditIndex(index);
  };
  const sendEdit = () => {
    setEdit(false);
  };
  const SendLeadAlert = () => {
    toast.success("✔ Lead Update!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch(getLeadCheckedInactive100());
  };
  const SendErrorUpdateAlert = () => {
    toast.error("The lead could not be updated!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const SendIncidenceAlert = () => {
    toast.warn("incidence sent!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch(getLeadCheckedInactive100());
  };
  const updateLeads = () => {
    dispatch(getLeadCheckedInactive100());
    setData(leadCheckedInactive100);
  };

  return (
    <>
      <Nav />

      {leadCheckedInactive100.length ? (
        <div className="flex flex-col justify-between items-center w-screen  z-0">
          {showCopiedMessage && (
            <p className="mt-2 p-3 bg-[#b9b9b978] text-white rounded-md absolute">
              Copiado al portapapeles
            </p>
          )}

          <div className="w-full flex flex-col justify-center items-center">
            <div className={style.divTitle}>
              <h1 className="font-bold text-[#e2e2e2] text-lg mx-5 mt-2">
                Dashboard
              </h1>
              <div className="flex gap-5">
                <Link to={"/vendedores"}>
                  <IoGrid className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
                </Link>
                <Link className="text-5xl" to={"/vendedores/analytics"}>
                  <IoStatsChart className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
                </Link>
              </div>
              {filters.level === true ? (
                <select
                  name="level"
                  id="level"
                  onChange={(event) => {
                    onChangeLevel(event.target.value);
                  }}
                  className="w-1/5 text-center bg-transparent border border-white rounded-md p-1 absolute left-[40%] "
                >
                  <option value="" disabled selected className="bg-[#222131]">
                    Seleccione un nivel
                  </option>
                  <option value="0" className="bg-[#222131]">
                    0
                  </option>
                  <option value="1" className="bg-[#222131]">
                    1
                  </option>
                  <option value="2" className="bg-[#222131]">
                    2
                  </option>
                  <option value="incidencia" className="bg-[#222131]">
                    Incidencia
                  </option>
                </select>
              ) : (
                ""
              )}
            </div>
            <table className={style.table}>
              <thead className="text-gray-400 text-14 font-thin">
                <tr className={style.tableRow}>
                  <th className="text-start">Invoice Id</th>
                  <th className="text-start">Name</th>
                  <th className="text-start">Profesion</th>
                  <th className="text-start">Country</th>
                  <th className="text-start">Email</th>
                  <th className="text-start">Instagram</th>
                  <th className="text-start">Phone</th>
                  <th className="text-start">
                    <button onClick={() => handlerFilter("level")}>
                      Nivel
                    </button>
                  </th>
                  <th className="text-start">Status</th>
                  <th className="text-start"></th>
                </tr>
              </thead>

              <tbody className="">
                {currentCard.map((item, index) => (
                  <tr key={item._id} className={style.tableCards}>
                    <td className="flex justify-start items-center p-0 w-fit">
                      <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">
                        {item._id}
                      </div>
                    </td>
                    <td className="flex justify-start items-center  p-0 w-fit">
                      <p className="w-52 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">
                        {item.name}
                      </p>
                    </td>
                    <td className="flex justify-start items-center p-0 w-fit">
                      <p className="w-40 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">
                        {item.category}
                      </p>
                    </td>

                    <td className="flex justify-center items-center p-0 w-fit">
                      <p className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">
                        {item.province}
                      </p>
                    </td>

                    <td className="flex justify-center items-center p-0 w-fit">
                      {item.email !== "-" ? (
                        <div onClick={() => handleCopyClick(item.email)}>
                          <div className="cursor-pointer">
                            <CiMail className="text-[35px] mr-5 text-[#418df0]" />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <CiMail className="text-[35px] mr-5 text-[#9eabbe]" />
                        </div>
                      )}
                    </td>
                    <td className="flex justify-center items-center p-0 w-fit">
                      {item.instagram ? (
                        <div onClick={() => handleCopyClick(item.instagram)}>
                          <div className="cursor-pointer">
                            <CiInstagram className="text-[35px] mr-5 text-[#ff598b]" />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <CiInstagram className="text-[35px] mr-5 text-[#9eabbe]" />
                        </div>
                      )}
                    </td>
                    <td className="flex justify-start items-center p-0 w-fit">
                      {item.telephone ? (
                        <div onClick={() => handleCopyClick(item.telephone)}>
                          <div className="cursor-pointer">
                            <AiOutlinePhone className="text-[35px] mr-5 text-[#418df0]" />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <AiOutlinePhone className="text-[35px] mr-5 text-[#9eabbe]" />
                        </div>
                      )}
                    </td>
                    <td className="flex justify-start items-center p-0 w-fit">
                      {item.level !== "incidencia" ? (
                        <p className="bg-[#6254ff] text-[#ffffff] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl">
                          {item.level}
                        </p>
                      ) : (
                        <div className="bg-[#6254ff] text-[#e8e8e9] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl">
                          <CiWarning className="text-[#fdfa3a] p-0 text-[35px] font-bold" />
                        </div>
                      )}
                    </td>
                    <td className="flex justify-start items-start p-0 w-fit">
                      {item.status !== "Contratado" && (
                        <p className="bg-[#e95ea3] w-44 h-11 flex justify-center items-center text-white rounded-3xl text-18">
                          {/* bg-[#ff69b4]  */}
                          {item.status}
                        </p>
                      )}
                    </td>
                    <td className="flex justify-start items-start p-0 w-fit">
                      <Modal
                        item={item}
                        SendLeadAlert={SendLeadAlert}
                        SendIncidenceAlert={SendIncidenceAlert}
                        SendErrorUpdateAlert={SendErrorUpdateAlert}
                        updateLeads={updateLeads}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {pages.length > 1 && (
            <div className="mb-5">
              <PaginationOutlined
                pageStyle={pageStyle}
                setPageStyle={setPageStyle}
                cardXPage={cardXPage}
                data={data}
                pages={pages}
                current={currentPage}
              />
            </div>
          )}
          <ToastContainer />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-screen">
          <h1>LEADS NOT FOUND...</h1>
        </div>
      )}
    </>
  );
};

export default VendedoresDashboard;
