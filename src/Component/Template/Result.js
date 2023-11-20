import React from "react";

export default function Experts() {
  return (
   <div className="mb-[30px]">
      <div className=" mx-4 text-center h-[250px]  col-span-2 flex flex-col justify-center bg-[lightblue]">
        <div>
          <h1 className="text-[blue] text-[30px]  my-2">Exam Result</h1>
        </div>
        <div>
            <input className="m-[20px] p-3 w-[600px]" placeholder="Enter Year"></input>
          <input className="m-[20px] p-3 w-[600px]" placeholder="Enter Month"></input>
          <button className="bg-black text-white p-3 rounded w-[30%]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
