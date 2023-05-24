import React from "react";

function Analytic() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <iframe
        title="dashboard SML"
        width="100%"
        height="100%"
        src="https://app.powerbi.com/view?r=eyJrIjoiY2NlZGM5ZjItODdjYS00YmM1LTgzODMtMDAzNTYyYjcxZjVkIiwidCI6ImZhMTYyNmJlLTUxMDMtNGM5MC1iYzJmLTY2NzAxMWIzMzAwYyJ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

{
  /* <div className="flex justify-between items-center mt-[7px] mb-[5px] ">
        <h1 className="text-2xl font-bold text-white ml-[10px]">Analytics</h1>
        <select className="w-32 h-12 rounded-lg bg-purple-500 text-white text-center mr-[10px]">
          <option className="py-1">2023</option>
        </select>
      </div>
      <div className="flex flex-col  items-center gap-5 mb-10">
        <AnalyticsNumerics />
        <div className="flex flex-col gap-5 h-full">
          <div className="flex gap-5 space-x-72">
            <Reports />
            <Goals />
          </div>
          <div className="flex gap-5 h-[450px] space-x-72">
            <Sales />
            <BestSellers />
          </div>
        </div>
      </div> */
}

export default Analytic;
