import React from "react";

export default function Contact() {
  return (
    < >
    
    
    <div className="flex absolute z-[1]">
        <div className="bg-[pink] h-[700px] w-[50vw]"></div>
        <div className="bg-[skyblue] h-[700px] w-[50vw]"></div>
    </div>




    <div className=" ">
        <div className="relative ">
            <div className="bg-[darkgreen] h-[400px]  w-[300px] text-white ml-[280px]  mt-[150px] p-[50px] z-[8] absolute">
                <h1 className="font-bold text-[20px] py-[20px]">Contact info</h1>
                <p className="py-[10px]">Chaknoor Rahmatpur Samastipur 848101</p>
                <p className="py-[10px]">Abhishekyadavsamastipur<br></br>@gmail.com</p>
                <p className="py-[10px]">7321977040</p>
            </div>
        </div>

        <div className="w-[1024px]  h-[500px] pl-[300px] pt-[70px] my-[100px] mx-[400px] border border-black z-[5] absolute">
            <h1 className="p-2 m-2 bg-[transparent] font-bold "> Send a Message</h1>

            <div className="grid grid-cols-2 ">
                <label className="p-2   bg-[transparent] ">First Name</label>
                <label className="p-2   bg-[transparent]  ">Last Name</label>
                <input className="p-2   bg-[transparent] border-b border-black w-[300px]"></input>

                <input className="p-2   bg-[transparent] border-b border-black  w-[300px]"></input>
                <label className="p-2   bg-[transparent]  ">Email Address</label>
                <label className="p-2   bg-[transparent]  ">Mobile Number</label>
                <input className="p-2   bg-[transparent] border-b border-black w-[300px]"></input>

                <input className="p-2   bg-[transparent] border-b border-black w-[300px]"></input>
            </div>

            <label className="mt-2  bg-[transparent]  ">Write your message here...</label>
            <input className="p-2 m-2 bg-[transparent] border-b border-black w-[650px]"></input>
            <button className="bg-[red] rounded font-bold w-[100px] p-1 my-6">Send</button>
        </div>
    </div>
     <div className="h-[700px]"></div>
    </>
  );
}
