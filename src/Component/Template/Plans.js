import React from "react";
import adca from "../Assets/img/adca.png";
import cc from "../Assets/img/cc.png";
import R from "../Assets/img/R.png";

export default function Plans() {
  return (
    <>
      <div className="w-full ">
        <h1 className=" text-center font-bold text-[30px]">OUR COURSES</h1>
      </div>
      <div className="py-[50px]">
        <div className="md:grid grid-cols-3 max-w-[1240px] mx-auto gap-6">
          <div className="shadow-xl h-[255px] my-2  hover:scale-110 duration-500 ">
            <img src={cc} alt={adca} />
            <button className="ml-[150px] font-bold text-white bg-[green] rounded p-[7px]  hover:scale-110 duration-500 ">Get Details</button>
          </div>
          <div className="shadow-xl h-[255px] my-2 bg-gray-100  hover:scale-110 duration-500">
            <img src={R} alt={R} className="h-[251px] w-[520px]" />
            <button className="ml-[150px] font-bold text-white bg-[green] rounded p-[7px]  hover:scale-110 duration-500 ">Get Details</button>

          </div>
          <div className="shadow-xl h-[255px] my-2 hover:scale-110 duration-500">
            <img src={adca} alt={cc} className="h-[250px]" />
            <button className="ml-[150px] font-bold text-white bg-[green] rounded p-[7px]  hover:scale-110 duration-500 ">Get Details</button>

          </div>
        </div>
      </div>
    </>
  );
}
