import React from "react";
import Performance from "../Performance/Performance";
import About from "../About/About";

function Detail(props) {
  return (
    <div className="  flex h-screen bg-slate-700  justify-center items-center w-1/5 flex-col relative ">
      <div className=" h-1/4 justify-center items-center text-center flex flex-col w-full gap-2 relative">
        <div className=" bg-emerald-700  w-20 h-20 rounded-full flex ">
          <img src={props.picture} alt="avatar" className="rounded-full " />
        </div>
        <p className=" font-bold text-24 pt-1 text-white">{props.name} </p>
        {/* <p className=" font-light text-14 text-gray-400">
          Developer / FullStack
        </p> */}
      </div>

      <div className=" h-1/4 justify-center items-left text-left flex flex-col w-4/5 relative gap-2">
        <p className=" font-normal text-18 pt-1 text-gray-200">Contact Info</p>
        <div className="flex items-center gap-2 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-6 h-6 "
            viewBox="0 0 24 24"
            stroke="white"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
          <p className=" font-normal text-14  text-white pt-0">{props.email}</p>
        </div>
        <div className="flex items-center gap-2 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-6 h-6 "
            viewBox="0 0 24 24"
            stroke="white"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
          <p className=" font-normal text-14  text-white pt-0">{props.country}</p>
        </div>
        <div className="flex  gap-2 text-left items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="min-w-fit h-6 "
            viewBox="0 0 24 24"
            stroke="white"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          <p className=" font-normal text-14 pt-0 text-white">
            {props.contactNumber}
          </p>
          
        </div>
        <div className="flex  gap-2 text-left items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="min-w-fit h-6 "
            viewBox="0 0 24 24"
            stroke="white"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          <p className=" font-normal text-14 pt-0 text-white">
            {props.birthdate}
          </p>
          
        </div>


      </div>

        
        <div className=" flex flex-col h-2/4 w-full items-center pt-3">
      <div className="w-4/5 h-4/5 flex flex-col items-center justify-start border border-white p-2 gap-y-4 text-center">
        <p className="text-18 font-semibold text-white">About Me!</p>
        <p>{props.description} </p>
      </div>
    </div>
      {/* {props.performance ? <Performance /> : <About />} */}
    </div>
  );
}

export default Detail;

