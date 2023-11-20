import React from "react";

export default function Experts() {
  return (
    <div className="max-w-[1240px] mx-auto my-10 p-2  md:grid grid-cols-3">
      <div className="  col-span-1 md:w-[100%] bg-[darkblue] text-white text-center ">
        <h1 className="m-[40px] pb-4 text-[30px] font-bold border-b border-black">
          Certificate Verification
        </h1>
        <p className="px-[60px] ">
          Online Certificate verification for students.
        </p>
      </div>
      <div className=" mx-4 text-center h-[250px]  col-span-2 flex flex-col justify-center bg-[lightblue]">
        <div>
          <h1 className="text-[blue] text-[30px]  my-2">Certificate Check</h1>
        </div>
        <div>
          <input className="m-[20px] p-3 w-[600px]" placeholder="Enter Certificate Number"></input>
          <button className="bg-black text-white p-3 rounded w-[30%]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
