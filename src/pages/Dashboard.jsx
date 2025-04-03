import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";




export default function Dashboard() {
  return (
    <>
      <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
         <p>Home</p>
         <p>/</p>
         <p>Dashboard</p>
      </div>
      <div className='w-[100%] flex flex-wrap mt-[20px] gap-[1%]'>
         <div className='basis-[32%] p-[10px_20px] bg-[#5956D3] rounded-[10px] h-[200px] mt-[10px]'>
             <div className='flex items-center justify-between'>
                <article className='flex items-center gap-[5px] text-white text-[25px]'>26k<span className='text-[16px]'>(-12.4%)</span><FaArrowDown className='text-[16px]'/></article>
                <BsThreeDotsVertical className='text-white text-[20px]'/>
             </div>
             <div className='text-white text-[23px]'>User</div>
         </div>

         <div className='basis-[32%] p-[10px_20px] bg-[#2998FE] rounded-[10px] h-[200px] mt-[10px]'>
             <div className='flex items-center justify-between'>
                <article className='flex items-center gap-[5px] text-white text-[25px]'>$6,200<span className='text-[16px]'>(40.9%)</span><FaArrowUp className='text-[16px]'/></article>
                <BsThreeDotsVertical className='text-white text-[20px]'/>
             </div>
             <div className='text-white text-[23px]'>Product</div>
         </div>

         <div className='basis-[32%] p-[10px_20px] bg-[#FCB01E] rounded-[10px] h-[200px] mt-[10px]'>
             <div className='flex items-center justify-between'>
                <article className='flex items-center gap-[5px] text-white text-[25px]'>2.49%<span className='text-[16px]'>(84.7%)</span><FaArrowDown className='text-[16px]'/></article>
                <BsThreeDotsVertical className='text-white text-[20px]'/>
             </div>
             <div className='text-white text-[23px]'>Category</div>
         </div>

         <div className='basis-[32%] p-[10px_20px] bg-[#E95353] rounded-[10px] h-[200px] mt-[10px]'>
             <div className='flex items-center justify-between'>
                <article className='flex items-center gap-[5px] text-white text-[25px]'>44k<span className='text-[16px]'>(-23.6%)</span><FaArrowDown className='text-[16px]'/></article>
                <BsThreeDotsVertical className='text-white text-[20px]'/>
             </div>
             <div className='text-white text-[23px]'>Orders</div>
         </div>

         
       
      </div>
    </>
  )
}
