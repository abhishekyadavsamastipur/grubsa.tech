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
          <div className="shadow-xl h-[250px] my-2 hover:scale-110 duration-500 ">
            <img src={cc} alt={adca} />
          </div>
          <div className="shadow-xl h-[250px] my-2 bg-gray-100  hover:scale-110 duration-500">
            <img src={R} alt={R} className="h-[250px] w-[520px]" />
          </div>
          <div className="shadow-xl h-[250px] my-2 hover:scale-110 duration-500">
            <img src={adca} alt={cc} className="h-[250px]" />
          </div>
        </div>
      </div>
    </>
  );
}
