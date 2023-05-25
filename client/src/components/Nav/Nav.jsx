import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../views/Login/Profile";
import { UserButton } from "@clerk/clerk-react";
import { IoStatsChart, IoSettingsSharp, IoBagSharp } from "react-icons/io5";

function Nav() {
  return (
    <div className="bg-[#39394B] flex flex-col justify-between items-center h-screen min-w-[190px]">
      <div className="flex flex-col items-center justify-center mt-16">
        <div className="flex flex-col items-center justify-center m-1">
          <Link to={"/home"}>
            <img
              className="opacity-80 w-44"
              src="https://cdn.discordapp.com/attachments/1105243107555037294/1106577865698459788/White_Logo_Social_Media_Lab.png"
            />
          </Link>
        </div>
        <div />
        <div className=" flex  w-fit mt-12 ">
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 items-center text-[18px] text-white">
              <span className=" text-lg">
                <IoStatsChart className=" text-[#e0dddd]" />
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
            <li className="flex gap-2 items-center text-[18px] text-white">
              <span className="text-[1.5rem]">
                <IoBagSharp className="w-4 text-[#e0dddd]" />
              </span>
              <span>
                <Link
                  to="/employees"
                  className="text-[#e0dddd] hover:text-white"
                >
                  Employees
                </Link>
              </span>
            </li>
            <li className="flex gap-2 items-center text-[18px] text-white">
              <span className="text-[1.5rem]">
                <IoBagSharp className="w-4 text-[#e0dddd]" />
              </span>
              <span>
                <Link
                  to="/protected"
                  className="text-[#e0dddd] hover:text-white"
                >
                  Home
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full items-center mb-5">
        <Profile />
        <UserButton />
      </div>
    </div>
  );
}

export default Nav;
