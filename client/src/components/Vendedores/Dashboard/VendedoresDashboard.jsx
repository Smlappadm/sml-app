import style from "./VendedoresDashboard.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PaginationOutlined from "../../pagination/PaginationOutlined";
import { getAllLead, getLeadChecked100 } from "../../../redux/actions";
import { SiGooglemaps } from "react-icons/si";
import { AiOutlinePhone, AiTwotonePhone } from "react-icons/ai";
import Modal from "./Modal/Modal";
import { FaRegEdit } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { IoGrid, IoStatsChart } from "react-icons/io5";

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
  const { leadChequed100 } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const [pageStyle, setPageStyle] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardXPage, setCardXpage] = useState(10);
  const indexLastCard = currentPage * cardXPage;
  const indexFirstCard = indexLastCard - cardXPage;
  const currentCard = leadChequed100.slice(indexFirstCard, indexLastCard);

  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getLeadChecked100());
  }, [dispatch]);

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
    console.log(index);
    console.log(id);
    setEdit(true);
    setEditIndex(index);
  };
  const sendEdit = () => {
    setEdit(false);
  };
  console.log(currentCard);
  return (
    <>
      <Nav />

      <div className="flex flex-col justify-between items-center w-screen m-5 z-0">
        {showCopiedMessage && (
          <p className="mt-2 p-3 bg-[#b9b9b978] text-white rounded-md absolute">
            Copiado al portapapeles
          </p>
        )}

        <div className="w-full">
          <div className="flex justify-start items-center ">
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
          </div>
          <table className="w-full">

            <thead className="text-gray-400 text-14 font-thin">
              <tr className={style.tableRow}>
                <th className="text-start">Invoice Id</th>
                <th className="text-start">Name</th>
                <th className="text-start">Profesion</th>
                <th className="text-start">Country</th>
                <th className="text-start">Email</th>
                <th className="text-start">Instagram</th>
                <th className="text-start">Phone</th>
                <th className="text-start">Nivel</th>
                <th className="text-start">Status</th>
                <th className="text-start"></th>
              </tr>
            </thead>

            <tbody className="">
              {currentCard.map((item, index) => (
                <tr key={item._id} className={style.tableCards}>
                  <td className="flex justify-start items-center p-0">
                    <div className="w-24 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">
                      {item._id}
                    </div>
                  </td>
                  <td className="flex justify-start items-center  p-0">
                    <p className="w-96 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">
                      {item.name}
                    </p>
                  </td>
                  <td className="flex justify-start items-center p-0">
                    <p className="w-96 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">
                      {item.category}
                    </p>
                  </td>

                  <td className="flex justify-center items-center p-0">
                    <p className="w-24 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">
                      {item.province}
                    </p>
                  </td>

                  <td className="flex justify-center items-center p-0">
                  {item.email !== "-" ? (
                      <div onClick={() => handleCopyClick(item.email)}>
                        <div className="cursor-pointer">
                          <CiMail className="text-[30px] mr-5 text-[#418df0]" />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <CiMail className="text-[30px] mr-5 text-[#9eabbe]" />
                      </div>
                    )}
                  </td>
                  <td className="flex justify-center items-center p-0 mx-3">
                    {item.instagram ? (
                      <div onClick={() => handleCopyClick(item.instagram)}>
                        <div className="cursor-pointer">
                          <CiInstagram className="text-[30px] mr-5 text-[#ff598b]" />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <CiInstagram className="text-[30px] mr-5 text-[#9eabbe]" />
                      </div>
                    )}
                  </td>
                  <td className="flex justify-start items-center p-0 mx-3">
                    {item.telephone ? (
                      <div onClick={() => handleCopyClick(item.telephone)}>
                        <div className="cursor-pointer">
                          <AiOutlinePhone className="text-[30px] mr-5 text-[#418df0]" />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <AiOutlinePhone className="text-[30px] mr-5 text-[#9eabbe]" />
                      </div>
                    )}
                  </td>
                  <td className="flex justify-start items-center p-0 mx-3">
                    {item.level !== "incidencia" ? (
                      <p className="text-start bg-[#6254ff] text-white py-2 px-3 text-xl rounded-md">
                        {item.level}
                      </p>
                    ) : (
                      <p className="text-start bg-[#6254ff] p-1 text-xl rounded-md text-white">
                        <CiWarning className="text-[#fdfa3a] p-0 text-24 font-bold" />
                      </p>
                    )}
                  </td>
                  <td className="flex justify-start items-start p-0">
                    {item.status !== "Activo" ? (
                      <p className="bg-[#ff69b4] text-24 text-white rounded-3xl px-6 py-2">
                        No contratado
                      </p>
                    ) : (
                      <p className="bg-[#ff69b4] text-white rounded-3xl px-6 py-1">
                        Contratado
                      </p>
                    )}
                  </td>
                  <td className="flex justify-start items-start p-0">
                    <Modal item={item} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-5">
          <PaginationOutlined
            pageStyle={pageStyle}
            setPageStyle={setPageStyle}
            cardXPage={cardXPage}
            data={leadChequed100}
            pages={pages}
          />
        </div>
      </div>
    </>
  );
};

export default VendedoresDashboard;
