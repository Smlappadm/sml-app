import { Link } from "react-router-dom"
import Nav from "../../Nav/Nav"

import { useSelector } from "react-redux"
import { IoGrid } from "react-icons/io5"
import { IoStatsChart } from "react-icons/io5"
import axios from "axios"




const Incidences = () =>{
  const { lead } = useSelector((state) => state);

  

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
 const handleSend = async (event) =>{
  event.preventDefault()
  const {instagram,level} = event.currentTarget
  const fixed={
  instagram: instagram.value,
  level:level.value,
  }
  await axios.put('http://localhost:3001/:id', fixed)
 }



return (
  <div className="flex w-screen">
    <Nav />
    <div className="flex flex-col">
      <div className="flex items-center justify-between  ml-[40px] mt-[30px] mb-[30px]">
        <div className='flex flex-row items-center'>
          <h1 className="text-2xl font-bold text-white">History</h1>
          <div className="flex gap-5">
            <Link to={"/lideres"}>
              <IoGrid className="text-[2rem] text-[#418df0] hover:text-[#3570bd] ml-[10px]" />
            </Link>
            <Link className="text-5xl" to={"/lideres/analytics"}>
              <IoStatsChart className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
            </Link>
          </div>
        </div>

        <button onClick={handleSend} className="w-32 h-10 rounded-lg bg-purple-500 text-white text-center">
          Send
        </button>
      </div>
      <div className="h-3/5">
        <div className="flex flex-col">
          <div className="w-full flex   mb-[15px] ">
            <div className="flex flex-row  w-[1500px] text-left mt-80px text-14 font-thin text-gray-400">
              <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[30px]">Invoice ID</div>
              <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[130px]">Name</div>
              <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ">instagram</div>
              <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[165px]">Telefono</div>
              <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[110px]">Email</div>
              <div className=" sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[175px]">vendedor</div>
              <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ml-[205px]">nivel</div>
              <div className="sticky whitespace-nowrap  top-0 px-4 py-3.5 font-semibold text-start ">Status</div>
            </div>
          </div>
          {lead.map((item) =>
          (
            <div className="w-full flex justify-center mb-4 h-3/5" key={item.id}>
              <div className="flex flex-row rounded-[10px] bg-[#39394B] w-[1650px] h-16 items-center mt-80px ml-[40px] text-18 text-gray-300">
                <td className="flex justify-start items-center p-0 w-fit">
                  <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 overflow-hidden whitespace-nowrap hover:overflow-visible ">
                    {item.id}
                  </div>
                </td>
                <td className="flex justify-start items-center p-0 w-fit">
                  <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 ml-[70px] overflow-hidden whitespace-nowrap hover:overflow-visible ">
                    {item.name}
                  </div>
                </td>
                <td className="flex justify-start items-center p-0 w-fit">
                  <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 ml-[70px] overflow-hidden whitespace-nowrap hover:overflow-visible">
                    {item.instagram}
                  </div>
                </td>
                
                <td className="flex justify-start items-center p-0 w-fit">
                  <div className="w-1/6 text-center ml-[80px] overflow-hidden whitespace-nowrap hover:overflow-visible ">{item.telephone}</div>
                </td>
                <td className="flex justify-start items-center p-0 w-fit">
                  <div className="w-1/6 ml-[100px]">{item.email}</div>
                </td>
                <td className="flex justify-start items-center p-0 w-fit">
                  <div className="w-24 p-1 px-3 rounded-full text-ellipsis text-18 opacity-1 ml-[125px] overflow-hidden whitespace-nowrap hover:overflow-visible ">
                    {item.vendedor_id}
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
                    ) : item.nivel === 2 ? (
                      <div className='bg-[#6254ff] text-[#ffffff] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl'>
                        2
                      </div>
                    ):
                    <div className='text-[#ffffff] w-[40px] rounded h-10 flex items-center justify-center text-[35px] drop-shadow-xl'>
                        ⚠️
                      </div>
                    }
                  </div>
                </td>
                <td className="flex justify-start items-center p-0 w-fit">
                  <div className="w-1/6 text-center ml-[70px]">
                    {status[item.status]}
                  </div>
                </td>
              </div>
            </div>
          )

          ).filter(item=>item.level==="incidencia")}
        </div>
        
      </div>

    </div>
  </div>
)
}
export default Incidences