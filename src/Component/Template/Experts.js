import React from 'react'
import moniter from '../Assets/img/moniter.png';

export default function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 p-2  md:grid grid-cols-3'>
        <div className='  col-span-1 md:w-[80%]  '>
            <img src={moniter} alt=''  />
        </div>
        <div className='  col-span-2 flex flex-col justify-center'>
          <h1 className='text-[#00df9a] font-bold my-2'>Why Learn Grubsa Tech</h1>
          <p className='my-2'>Grubsa Tech Computer Education Centre,We offer basic as well as advance level computer training.</p>
          <p className='my-2'>Our courses are structured in such a way that you will get detail explanation of each of the topics. After successfully completing of your course certificate is issued by issued by us which is valid for Central government, state government and Private Jobs. Under Digital & Information Technology domain, the institute provides a wide variety of career, professional, short term and certification courses, designed by our expert academicians after careful market study and research. All the courses are taught by experienced and certified faculty. Our trainers constantly update their technical skills to maintain their expertise.</p>
          <button className='bg-black text-white p-3 rounded w-[30%]'>Get started</button>
        </div>
    </div>
  )
}
