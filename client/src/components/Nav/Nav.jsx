import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { UserButton, useClerk  } from "@clerk/clerk-react";
import {
  IoStatsChart,
  IoSettingsSharp,
  IoBagSharp,
  IoGrid,
  IoPeople,
} from "react-icons/io5";



function Nav() {
  const role = useSelector((state) => state.rol);
  const access = useSelector(state => state.isEmployee)
  const { signOut } = useClerk();

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="bg-[#39394B] flex flex-col justify-between items-center h-screen min-w-[190px]">
      
      <div className="flex flex-col items-center justify-center mt-16">

        <div className="flex flex-col items-center justify-center m-1">
          <Link to={"/protected"}>
            <img
              className="opacity-80 w-44"
              src="https://cdn.discordapp.com/attachments/1105243107555037294/1106577865698459788/White_Logo_Social_Media_Lab.png"
            />
          </Link>
        </div>
        

        {access && <div className=" flex  w-fit mt-12 ">
          {role === "clevel" ? (
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoGrid className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/clevel"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    C-Level
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoGrid className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/lideres"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    Leader
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoPeople className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/vendedores"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    Vendedor
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoPeople className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/corredores"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    Corredor
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px] text-white">
                <span className="text-[1.5rem]">
                  <IoStatsChart className="w-4 text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/analytics"
                    className="text-[#e0dddd] hover:text-white"
                  >
                    Analytics
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoSettingsSharp className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/settings"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    Settings
                  </Link>
                </span>
              </li>
            </ul>
          ) : role === "vendedor" ? (
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoGrid className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/vendedores"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    Dashboard
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoStatsChart className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/vendedores-history"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    Analytics
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoSettingsSharp className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/settings"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    Settings
                  </Link>
                </span>
              </li>
            </ul>
          ) : role === "leader" ? (
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoGrid className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/clevel"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    employees
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoGrid className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/lideres"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    Dashboard
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoPeople className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/vendedores"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    Vendedor
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoPeople className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/corredores"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    Corredor
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px] text-white">
                <span className="text-[1.5rem]">
                  <IoStatsChart className="w-4 text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/analytics"
                    className="text-[#e0dddd] hover:text-white"
                  >
                    Analytics
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoSettingsSharp className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/settings"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    Settings
                  </Link>
                </span>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoGrid className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/corredores"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    Dashboard
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px] text-white">
                <span className="text-[1.5rem]">
                  <IoStatsChart className="w-4 text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/corredores-history"
                    className="text-[#e0dddd] hover:text-white"
                  >
                    Analytics
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center text-[18px]">
                <span className=" text-lg">
                  <IoSettingsSharp className="text-[#e0dddd]" />
                </span>
                <span>
                  <Link
                    to="/settings"
                    className=" text-[#e0dddd] hover:text-white"
                  >
                    Settings
                  </Link>
                </span>
              </li>
            </ul>
          )}
        </div>}
      </div>

      {access 
      ? <div className="flex flex-col justify-center w-full items-center mb-5">
        <UserButton />
      </div>
      :
      <button onClick={handleLogout}>Salir</button>}
    </div>
  );
}

export default Nav;

