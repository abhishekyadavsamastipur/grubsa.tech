import React from 'react'
import Typed from 'react-typed'
import logo from '../Assets/img/logo.png'


export default function Banner(){
    return(
        <>
        <div className='bg-[gold] w-full '>
            <div className='max-w-[1240px] mx-auto font-bold text-center md:flex '>
                <div className='md:w-[600px]'>
                    <img src={logo} alt='logo' className='w-[100px] md:w-[800px]  mx-auto' />
                </div>
                <div className='my-auto mx-auto'>
                    <div className='text-white  md:text-[80px] text-[40px] '>
                        Grow with us.
                    </div>
                    <div className='text-[25px] text-white'>
                        Learn 
                        <Typed
                        className='pl-1 text-2xl'
                        strings={[' web Development',' Digital Marketing',' Ethical Hacking']}
                        typeSpeed={100}
                        backSpeed={50}
                        loop={true}
                    />
                    </div>
                    <button className='bg-black text-white p-3 rounded'>Get started</button>
               </div>
            </div>

        </div>
       
        
        
        </>
    )
}