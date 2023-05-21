import Nav from '../../Nav/Nav'
import { useState, useEffect } from 'react';
import PaginationOutlined from '../../pagination/PaginationOutlined';
import { Link } from 'react-router-dom';
import { IoGrid, IoStatsChart } from 'react-icons/io5';
import { FaHistory } from "react-icons/fa";

const VendedoresHistory = () => {
  const data = [
    {
      id: '876364',
      client: 'Social Media Lab',
      profesion: 'Abogado',
      nivel: 1,
      telefono: '+492563627',
      Email: 'arroragaur@gmail.com',
      status: "contratado"
    },
    {
      id: '131231',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "rechazado"
    },
    {
      id: '223456',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 2,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "no responde"
    },
    {
      id: '242562',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "sin contactar"
    },
    {
      id: '295267',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "sin contactar"
    },
    {
      id: '211111',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "sin contactar"
    },
    {
      id: '222222',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "sin contactar"
    },
    {
      id: '244444',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "sin contactar"
    },
    {
      id: '255555',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "contratado"
    },
    {
      id: '266666',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "contratado"
    },
    {
      id: '277777',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "contratado"
    },
    {
      id: '288888',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "rechazado"
    },
    {
      id: '299999',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "rechazado"
    },
    {
      id: '888888',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "rechazado"
    },
    {
      id: '777777',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "no responde"
    },
    {
      id: '666666',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "no responde"
    },
    {
      id: '555555',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "no responde"
    },
    {
      id: '444444',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "no responde"
    },
    {
      id: '333333',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "rechazado"
    },
    {
      id: '111111',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "contratado"
    },
    {
      id: '123213',
      client: 'juenito jobs',
      profesion: 'macdonalero',
      nivel: 0,
      telefono: '+222222222',
      Email: 'siemprepar@gmail.com',
      status: "rechazado"
    },
  ].filter(item => item.status === "contratado" || item.status === "rechazado" || item.status === "no responde")
  const cardsPerPage = 8;


  const [currentPage, setCurrentPage] = useState(1);
  const [currentCards, setCurrentCards] = useState([]);

  const status = {
    contratado: (
      <div className="bg-emerald-400 w-44 h-11 flex justify-center items-center text-white rounded-3xl">
        Contratado
      </div>
    ),
    rechazado: (
      <div className="bg-pink-500 w-44 h-11 flex justify-center items-center text-white rounded-3xl ">
        Rechazado
      </div>
    ),
    "no responde": (
      <div className="bg-pink-500 w-44 h-11 flex justify-center items-center text-white rounded-3xl ">
        No responde
      </div>
    )
  }

  useEffect(() => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const cardsToDisplay = data.slice(indexOfFirstCard, indexOfLastCard);
    setCurrentCards(cardsToDisplay);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex w-screen">
      <Nav />
      <div className="flex flex-col">
        <div className="flex items-center justify-between  ml-[40px] mt-[30px] mb-[30px]">
          <div className='flex flex-row items-center'>
          <h1 className="font-bold text-[#e2e2e2] w-28 text-lg mx-5 mt-2">
              History
            </h1>
            <div className="flex gap-5">
              <Link to={"/vendedores"}>
                <IoGrid className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
              </Link>
              <Link className="text-5xl" to={"/vendedores/history"}>
                <FaHistory className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
              </Link>
              <Link className="text-5xl" to={"/vendedores/analytics"}>
                <IoStatsChart className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
              </Link>
            </div>
          </div>

          <select className="w-32 h-10 rounded-lg bg-purple-500 text-white text-center">
            <option className="py-1">2023</option>
          </select>
        </div>
        <div className="h-3/5">
          <div className="flex flex-col">
            <div className="w-full flex   mb-[15px] ">
              <div className="flex flex-row  w-[1500px] text-left mt-80px text-14 font-thin text-gray-400">
                <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[30px]">Invoice ID</div>
                <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[130px]">Name</div>
                <div className=" sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[175px]">Profession</div>
                <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[205px]">Nivel</div>
                <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[165px]">Telefono</div>
                <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[110px]">Email</div>
                <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[255px]">Status</div>
              </div>
            </div>
            {currentCards.map((item) =>
            (
              <div className="w-full flex justify-center mb-4 h-3/5" key={item.id}>
                <div className="flex flex-row rounded-[10px] bg-[#39394B] w-[1650px] h-16 items-center mt-80px ml-[40px] text-18 text-gray-300">
                  <td className="flex justify-start items-center p-0 w-fit">
                    <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible ">
                      {item.id}
                    </div>
                  </td>
                  <td className="flex justify-start items-center p-0 w-fit">
                    <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 ml-[125px] overflow-hidden whitespace-nowrap hover:overflow-visible ">
                      {item.client}
                    </div>
                  </td>
                  <td className="flex justify-start items-center p-0 w-fit">
                    <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 ml-[150px]">
                      {item.profesion}
                    </div>
                  </td>
                  <td className="flex justify-start items-center p-0 w-fit">
                    <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 ml-[200px]">
                      {item.nivel === 0 ? (
                        <div className='bg-[#6254ff] text-[#ffffff] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl'>
                          0
                        </div>
                      ) : item.nivel === 1 ? (
                        <div className='bg-[#6254ff] text-[#ffffff] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl'>
                          1
                        </div>
                      ) : (
                        <div className='bg-[#6254ff] text-[#ffffff] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl'>
                          2
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="flex justify-start items-center p-0 w-fit">
                    <div className="w-1/6 text-center ml-[150px]">{item.telefono}</div>
                  </td>
                  <td className="flex justify-start items-center p-0 w-fit">
                    <div className="w-1/6 ml-[100px]">{item.Email}</div>
                  </td>
                  <td className="flex justify-start items-center p-0 w-fit">
                    <div className="w-1/6 text-center ml-[70px]">
                      {status[item.status]}
                    </div>
                  </td>
                </div>
              </div>
            )

            )}
          </div>
          <div className="flex justify-center relative mt-[25px] ">
            <PaginationOutlined
              pageStyle={currentPage}
              setPageStyle={setCurrentPage}
              cardXPage={cardsPerPage}
              data={data}
              pages={handlePageChange}
              current={currentPage}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default VendedoresHistory
