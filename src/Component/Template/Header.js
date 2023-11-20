import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../Assets/img/logo.png'
import {NavLink} from 'react-router-dom'




export default function Header(){
const [toggle,setToggle] = useState(false);



return(
    <div className='bg-[gold] p-4'>
        <div className='max-w-[1240px] py-[12px] items-center  mx-auto flex justify-between'>
            <div className='text-3xl font-bold'>
                <img src={logo} alt={logo} className='w-[100px]' />
            </div>
            {
                toggle ?
                <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                :
                 <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>

            }



            <ul className='md:flex hidden  text-white gap-10'>
                <li>
                   <NavLink to="/" className={({isActive})=>`
                   block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-White-700"} border-b border-gray-100 hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                   
                   `}>
                     Home
                   </NavLink>
                        
                    
                   
                </li>
                <li>
                   <NavLink to="/Courses" className={({isActive})=>`
                   block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                   
                   `}>
                     Courses
                   </NavLink>
                        
                    
                   
                </li>
                <li>
                   <NavLink to="/Gallery" className={({isActive})=>`
                   block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                   
                   `}>
                     Gallery
                   </NavLink>
                        
                    
                   
                </li>
                <li>
                   <NavLink to="/ContactUs" className={({isActive})=>`
                   block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                   
                   `}>
                     About Us
                   </NavLink>
                        
                    
                   
                </li>
                <li>
                   <NavLink to="/Student" className={({isActive})=>`
                   block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                   
                   `}>
                    Student
                   </NavLink>
                        
                    
                   
                </li>
                
            </ul>
            {/* responsive menu */}
            <ul className={`duration-300 md:hidden h-screen text-white w-full fixed bg-black  top-[92px] ${toggle ? 'left-[-0%]' : 'left-[-100%]' } `}>
                <li className='p-3'>
                    Home
                </li>
                <li className='p-3'>
                    Courses
                </li>
                <li className='p-3'>
                    Gallery
                </li>
                <li className='p-3'>
                    Contact us
                </li>
                <li className='p-3'>
                    Student
                </li>
                
            </ul>
        </div>
    </div>
)


    
}