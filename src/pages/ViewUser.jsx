import React, { useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdEdit, MdFilterAltOff } from "react-icons/md";

export default function ViewUser() {
    let[show,setShow]=useState(false);
  return (
     <>
        <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
         <p>Home</p>
         <p>/</p>
         <p>User</p>
         <p>/</p>
         <p>View</p>
       </div>


       <div className='w-[100%] p-[20px_10px]'>
           {
            show?
            <div className='p-[20px_10px] border rounded-lg  mb-[25px] bg-gray-300 '>
                <form className='flex items-center gap-[10px]'>
                <input type='text' className='w-[350px] pl-2 py-[8px] rounded-[5px] bg-[#374151] text-white font-semibold' placeholder='Serach Name' name="userInfo"/>
                <FaMagnifyingGlass className='text-[40px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]'/>
                </form>
            </div> :" "
            }
        <div className=''>
            <div className='flex justify-between border p-[15px_10px] rounded-lg bg-[#F1F5F9]'>
                 <h1 className='text-[25px] font-semibold'>View User</h1>
                 <div className='flex items-center gap-[10px]'>
                      {show?<MdFilterAltOff className='p-[8px_8px] text-[35px] bg-[#2563EB] rounded-lg text-white cursor-pointer ' onClick={()=>setShow(!show)}/>:<FaFilter className='p-[8px_8px] text-[35px] bg-[#2563EB] rounded-lg text-white cursor-pointer ' onClick={()=>setShow(!show)}/>}
                      <button className='p-[8px_15px] bg-[#15803D] text-white text-[18px] rounded-lg cursor-pointer'>Change Status</button>
                      <button className='p-[8px_10px] bg-[#B91C1C] text-white text-[18px] rounded-lg cursor-pointer'>Delete</button>
                 </div>
            </div>
            <div className='rounded-lg overflow-hidden'>
                <table className='w-[100%]'>
                      <thead className='' bgcolor='#374151'>
                         <tr>
                            <th className='border p-[10px_10px] text-gray-400 font-normal'> <input type='checkbox'/></th>
                            <th className='border p-[10px_10px] text-gray-400 font-normal w-[600px] text-left'> Name</th>
                            <th className='border p-[10px_10px] text-gray-400 font-normal'>EMAIL ID</th>
                            <th className='border p-[10px_10px] text-gray-400 font-normal'>Mobile Number</th>
                            <th className='border p-[10px_10px] text-gray-400 font-normal'>Status</th>
                            <th className='border p-[10px_10px] text-gray-400 font-normal'>Action</th>
                         </tr>
                      </thead>
                      <tbody className='' bgcolor="#1F2937">
                        <tr className='text-center'>
                             <td className=' p-[30px_10px] text-white'><input type='checkbox'/></td>
                             <td className=' p-[30px_10px] text-white text-left'>Ronak Singh Bhati</td>
                             <td className=' p-[30px_10px] text-gray-400 text-[14px]'>singhbhatironak2004@gmail.com</td>
                             <td className=' p-[30px_10px] text-gray-400'>8279235047</td>
                             <td className=' p-[30px_10px] text-white'><button className='p-[5px_20px] text-white bg-[#22C35D] rounded-lg cursor-pointer'>Active</button></td>
                             <td className=' p-[30px_10px] text-white'><MdEdit className='p-[5px_10px] text-[40px] bg-[#1D4ED8] rounded-[100%] cursor-pointer'/></td>
                        </tr>
                        <tr className='text-center'>
                             <td className=' p-[30px_10px] text-white'><input type='checkbox'/></td>
                             <td className=' p-[30px_10px] text-white text-left'>Arvind Singh</td>
                             <td className=' p-[30px_10px] text-gray-400 text-[14px]'>singhbhatiarvind@gmail.com</td>
                             <td className=' p-[30px_10px] text-gray-400'>7014439020</td>
                             <td className=' p-[30px_10px] text-white'><button className='p-[5px_20px] text-white bg-[#F35959] rounded-lg cursor-pointer'>Deactive</button></td>
                             <td className=' p-[30px_10px] text-white'><MdEdit className='p-[5px_10px] text-[40px] bg-[#1D4ED8] rounded-[100%] cursor-pointer'/></td>
                        </tr>
                      </tbody>
                      
                </table>
            </div>
        </div>
       </div>
    </>
  )
}
