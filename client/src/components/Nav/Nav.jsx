import React from "react";
import { Link } from "react-router-dom";
import {
  IoLogOut,
  IoStatsChart,
  IoSettingsSharp,
  IoGrid,
} from "react-icons/io5";

function Nav() {
  return (
    <div className="bg-[#39394b] flex md:min-w-[12rem] w-1/5 h-screen">
      <div className="flex flex-col justify-between items-center mt-2 w-full">
        <div className="flex flex-col items-center justify-center gap-2 mt-5 w-full">
          <div className="flex flex-col items-center justify-center">
            <Link to="/">
              <span>ICONO</span>
            </Link>
            <h1 className=" text-2xl">SML</h1>
          </div>
          <div className="w-full" />
          <div className="flex w-full ml-10">
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-center">
                <span className=" text-lg">
                  <IoGrid />
                </span>
                <span>
                  <Link to="/dashboard" className=" hover:text-gray-200">
                    Dashboard
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <span className=" text-lg">
                  <IoStatsChart />
                </span>
                <span>
                  <Link to="/analytics" className=" hover:text-gray-200">
                    Analytics
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <span className=" text-lg">
                  <IoSettingsSharp />
                </span>
                <span>
                  <Link to="/settings" className=" hover:text-gray-200">
                    Settings
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 ml-1 mb-5">
          <img
            className="w-12 h-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFADjIwjVTPKIf_2YkWdv2-N5TPzIItNC0TQ&usqp=CAU"
            alt="profile avatar"
          />
          <div className=" text-sm">
            <p>Easin Arafat</p>
            <p>Free Account</p>
          </div>
          <div className=" text-lg ml-1">
            <IoLogOut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
