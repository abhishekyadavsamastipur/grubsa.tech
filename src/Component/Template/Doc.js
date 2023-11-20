import React from "react";
import mca from "../Assets/img/mca.png";

export default function Doc() {
  return (
    <>
      <div className=" mt-[40px] w-full ">
        <h1 className=" text-center font-bold text-[30px]">OUR CERTIFICATE</h1>
      </div>
      <div className="py-[50px]">
        <div className="md:grid grid-cols-3 max-w-[1240px] mx-auto gap-6">
          <div className="  my-1 hover:scale-110 duration-500 ">
            <img src={mca} alt={mca} className="h-[490px] w-[500px]" />
          </div>
          <div className=" my-1 bg-gray-100   hover:scale-110 duration-500">
            <img src={mca} alt={mca} className="h-[490px]" />
          </div>
          <div className="  my-1 hover:scale-110 duration-500 ">
            <img src={mca} alt={mca} className="h-[490px] " />
          </div>
        </div>
      </div>
    </>
  );
}
