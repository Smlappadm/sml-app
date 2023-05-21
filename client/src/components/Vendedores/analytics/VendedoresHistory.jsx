import style from "./VendedoresHistory.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PaginationOutlined from "../../pagination/PaginationOutlined";
import { filterLevel, getLeadCheckedInactive100 } from "../../../redux/actions";
import { AiOutlinePhone } from "react-icons/ai";
import { IoGrid, IoStatsChart } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { CiWarning, CiInstagram, CiMail } from "react-icons/ci";

import Nav from "../../Nav/Nav";

const VendedoresHistory = () => {
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

  const updateLeads = () => {
    dispatch(getLeadCheckedInactive100());
    setData(leadCheckedInactive100);
  };

  return (
    <>
      <Nav />

      <div className="flex flex-col justify-between items-center w-screen  z-0">
        {showCopiedMessage && (
          <p className="mt-2 p-3 bg-[#b9b9b978] text-white rounded-md absolute">
            Copiado al portapapeles
          </p>
        )}

        <div className="w-full flex flex-col justify-center items-center">
          <div className={style.divTitle}>
            <h1 className="font-bold text-[#e2e2e2] w-28 text-lg mx-5 mt-2">
              History
            </h1>
            <div className="flex gap-5 ">
              <Link to={"/vendedores"}>
                <IoGrid className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
              </Link>
              <Link className="text-5xl" to={"/vendedores/history"}>
                <FaHistory className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
              </Link>
              <Link className="text-5xl" to={"/vendedores/analytics"}>
                <IoStatsChart className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
              </Link>
              <div className="absolute right-14">
                    <select className="w-32 h-10 rounded-lg bg-purple-500 text-white text-center">
        <option className="py-1">2023</option>
      </select>
              </div>
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
          {leadCheckedInactive100.length ? (
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

                    <td className="flex justify-start items-center p-0 w-fit">
                      <p className="text-start w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute">
                        {item.province}
                      </p>
                    </td>

                    <td className="flex justify-center items-center p-0 w-fit">
                      {item.email !== "-" ? (
                        <div onClick={() => handleCopyClick(item.email)}>
                          <div className="cursor-pointer">
                            <CiMail className="text-[35px] mr-5 text-[#418df0] z-0" />
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
                    <td>
                      {/* esto es hardcodeo */}
                      {item.level === "2" ? (
                        <p className="bg-[#26af7f] w-44 h-11 flex justify-center items-center text-white rounded-3xl text-18">
                          Contratado
                        </p>
                      ) : (
                        <p className="bg-[#2148b4] w-44 h-11 flex justify-center items-center text-white rounded-3xl text-18">
                          Sin responder
                        </p>
                      )}
                    </td>
                    {/* <td className="flex justify-start items-start p-0 w-fit">
                      {item.status === "Sin contactar" && (
                        <p className="bg-[#ff69b4] w-44 h-11 flex justify-center items-center text-white rounded-3xl text-18">
                          {item.status}
                        </p>
                      )}
                      {item.status === "No responde" && (
                        <p className="bg-[#2148b4] w-44 h-11 flex justify-center items-center text-white rounded-3xl text-18">
                          {item.status}
                        </p>
                      )}
                    </td> */}
                    <td className="flex justify-start items-start p-0 w-fit"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex items-center justify-center w-full h-screen">
              <h1>LEADS NOT FOUND...</h1>
            </div>
          )}
        </div>
        {data.length > 10 && (
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
      </div>
    </>
  );
};

export default VendedoresHistory;

// import Nav from '../../Nav/Nav'
// import { useState, useEffect } from 'react';
// import PaginationOutlined from '../../pagination/PaginationOutlined';
// import { Link } from 'react-router-dom';
// import { IoGrid, IoStatsChart } from 'react-icons/io5';
// import { FaHistory } from "react-icons/fa";

// const VendedoresHistory = () => {
//   const data = [
//     {
//       id: '876364',
//       client: 'Social Media Lab',
//       profesion: 'Abogado',
//       nivel: 1,
//       telefono: '+492563627',
//       Email: 'arroragaur@gmail.com',
//       status: "contratado"
//     },
//     {
//       id: '131231',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "rechazado"
//     },
//     {
//       id: '223456',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 2,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "no responde"
//     },
//     {
//       id: '242562',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "sin contactar"
//     },
//     {
//       id: '295267',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "sin contactar"
//     },
//     {
//       id: '211111',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "sin contactar"
//     },
//     {
//       id: '222222',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "sin contactar"
//     },
//     {
//       id: '244444',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "sin contactar"
//     },
//     {
//       id: '255555',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "contratado"
//     },
//     {
//       id: '266666',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "contratado"
//     },
//     {
//       id: '277777',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "contratado"
//     },
//     {
//       id: '288888',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "rechazado"
//     },
//     {
//       id: '299999',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "rechazado"
//     },
//     {
//       id: '888888',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "rechazado"
//     },
//     {
//       id: '777777',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "no responde"
//     },
//     {
//       id: '666666',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "no responde"
//     },
//     {
//       id: '555555',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "no responde"
//     },
//     {
//       id: '444444',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "no responde"
//     },
//     {
//       id: '333333',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "rechazado"
//     },
//     {
//       id: '111111',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "contratado"
//     },
//     {
//       id: '123213',
//       client: 'juenito jobs',
//       profesion: 'macdonalero',
//       nivel: 0,
//       telefono: '+222222222',
//       Email: 'siemprepar@gmail.com',
//       status: "rechazado"
//     },
//   ].filter(item => item.status === "contratado" || item.status === "rechazado" || item.status === "no responde")
//   const cardsPerPage = 8;

//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentCards, setCurrentCards] = useState([]);

//   const status = {
//     contratado: (
//       <div className="bg-emerald-400 w-44 h-11 flex justify-center items-center text-white rounded-3xl">
//         Contratado
//       </div>
//     ),
//     rechazado: (
//       <div className="bg-pink-500 w-44 h-11 flex justify-center items-center text-white rounded-3xl ">
//         Rechazado
//       </div>
//     ),
//     "no responde": (
//       <div className="bg-pink-500 w-44 h-11 flex justify-center items-center text-white rounded-3xl ">
//         No responde
//       </div>
//     )
//   }

//   useEffect(() => {
//     const indexOfLastCard = currentPage * cardsPerPage;
//     const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//     const cardsToDisplay = data.slice(indexOfFirstCard, indexOfLastCard);
//     setCurrentCards(cardsToDisplay);
//   }, [currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     )
//   }

// export default VendedoresHistory

// <div className="flex w-screen">
//   <Nav />
//   <div className="flex flex-col">
//     <div className="flex items-center justify-between  ml-[40px] mt-[30px] mb-[30px]">
//       <div className='flex flex-row items-center'>
//       <h1 className="font-bold text-[#e2e2e2] w-28 text-lg mx-5 mt-2">
//           History
//         </h1>
//         <div className="flex gap-5">
//           <Link to={"/vendedores"}>
//             <IoGrid className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
//           </Link>
//           <Link className="text-5xl" to={"/vendedores/history"}>
//             <FaHistory className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
//           </Link>
//           <Link className="text-5xl" to={"/vendedores/analytics"}>
//             <IoStatsChart className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
//           </Link>
//         </div>
//       </div>


//     </div>
//     <div className="h-3/5">
//       <div className="flex flex-col">
//         <div className="w-full flex   mb-[15px] ">
//           <div className="flex flex-row  w-[1500px] text-left mt-80px text-14 font-thin text-gray-400">
//             <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[30px]">Invoice ID</div>
//             <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[130px]">Name</div>
//             <div className=" sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[175px]">Profession</div>
//             <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[205px]">Nivel</div>
//             <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[165px]">Telefono</div>
//             <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[110px]">Email</div>
//             <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[255px]">Status</div>
//           </div>
//         </div>
//         {currentCards.map((item) =>
//         (
//           <div className="w-full flex justify-center mb-4 h-3/5" key={item.id}>
//             <div className="flex flex-row rounded-[10px] bg-[#39394B] w-[1650px] h-16 items-center mt-80px ml-[40px] text-18 text-gray-300">
//               <td className="flex justify-start items-center p-0 w-fit">
//                 <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible ">
//                   {item.id}
//                 </div>
//               </td>
//               <td className="flex justify-start items-center p-0 w-fit">
//                 <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 ml-[125px] overflow-hidden whitespace-nowrap hover:overflow-visible ">
//                   {item.client}
//                 </div>
//               </td>
//               <td className="flex justify-start items-center p-0 w-fit">
//                 <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 ml-[150px]">
//                   {item.profesion}
//                 </div>
//               </td>
//               <td className="flex justify-start items-center p-0 w-fit">
//                 <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 ml-[200px]">
//                   {item.nivel === 0 ? (
//                     <div className='bg-[#6254ff] text-[#ffffff] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl'>
//                       0
//                     </div>
//                   ) : item.nivel === 1 ? (
//                     <div className='bg-[#6254ff] text-[#ffffff] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl'>
//                       1
//                     </div>
//                   ) : (
//                     <div className='bg-[#6254ff] text-[#ffffff] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl'>
//                       2
//                     </div>
//                   )}
//                 </div>
//               </td>
//               <td className="flex justify-start items-center p-0 w-fit">
//                 <div className="w-1/6 text-center ml-[150px]">{item.telefono}</div>
//               </td>
//               <td className="flex justify-start items-center p-0 w-fit">
//                 <div className="w-1/6 ml-[100px]">{item.Email}</div>
//               </td>
//               <td className="flex justify-start items-center p-0 w-fit">
//                 <div className="w-1/6 text-center ml-[70px]">
//                   {status[item.status]}
//                 </div>
//               </td>
//             </div>
//           </div>
//         )

//         )}
//       </div>
//       <div className="flex justify-center relative mt-[25px] ">
//         <PaginationOutlined
//           pageStyle={currentPage}
//           setPageStyle={setCurrentPage}
//           cardXPage={cardsPerPage}
//           data={data}
//           pages={handlePageChange}
//           current={currentPage}
//         />
//       </div>
//     </div>

//   </div>
// </div>
