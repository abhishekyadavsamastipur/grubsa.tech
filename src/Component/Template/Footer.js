import React from 'react'
import logo from '../Assets/img/logo.png'



export default function Footer(){
    return(
        <div className='bg-black  w-full flex justify-center py-[100px] grid grid-cols-2 md:grid-cols-3'>
            <div>
                <ul className='text-white md:mx-[100px]'>
                    <li className='p-[10px]'>HOME</li>
                    <li className='p-[10px]'>COURCES</li>
                    <li className='p-[10px]'>GALLERY</li>
                    <li className='p-[10px]'>CONTACT US</li>
                    <li className='p-[10px]'>STUDENT</li>
                </ul>
            </div>
            <div>
            <ul className='text-white md:mx-[100px]'>
                    <li className='md:p-[10px]'>WEB DEVLOPMENT</li>
                    <li className='md:p-[10px]'>APP DEVLOPMENT</li>
                    <li className='md:p-[10px]'>WEB DESIGN</li>
                    <li className='md:p-[10px]'>DIGITAL MARKETING</li>
                    <li className='md:p-[10px]'>VIDEO EDITING</li>
                </ul>
            </div>
            <div>
            <ul className='text-white text-sm'>
                   
                    <li className='ml-[20px]'>Grubsa Tech</li>
                    <li className='ml-[20px]'>MOB-7321977040</li>
                    <li className='ml-[20px]'>ABHISHEKYADAVSAMASTIPUR@GMAIL.COM</li>

                     <div className='w-[350px]'>
                        <img src={logo} alt={logo} className='w-[200px] mx-auto'/>
                    </div>
                </ul>
            </div>

        </div>
    )
}