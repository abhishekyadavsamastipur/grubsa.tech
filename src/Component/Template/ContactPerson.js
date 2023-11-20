import React from "react";



export default function ContactPerson(){
    return(
        <div className="flex max-w-[1240px] mx-auto justify-center ">
            <div className="p-[40px]">
                <h1 className="py-[40px] font-bold text-[25px]">Contact</h1>
                <button className="px-[80px] font-bold text-white text-[20px] py-[20px] bg-[red] rounded">Call Now</button>
                <p className="py-[40px]">7321977040</p>
            </div>
            <div className="py-[40px] px-[190px]">
                <h1 className="py-[40px] font-bold text-[25px]">Address</h1>
                <button className="px-[80px] font-bold text-white text-[20px] py-[20px] bg-[red] rounded">Location</button>
                <p  className="py-[40px]">Chaknoor <br/> Rahmatpur <br/> Samastipur <br/> 8484101 Bihar</p>
            </div>
            <div className="p-[40px] text-[20px]">
                <h1 className="py-[40px] font-bold text-[25px]">Opining Hours</h1>
                
                <p>Mon: 10:00am - 6:00pm</p>
                <p>Tue: 10:00am - 6:00pm</p>
                <p>Wed: 10:00am - 6:00pm</p>
                <p>Thu: 10:00am - 6:00pm</p>
                <p>Fri: 10:00am - 6:00pm</p>
                <p>Sat: 10:00am - 6:00pm</p>
                <p>Sun: Closed</p>
            </div>



        </div>
    )
}