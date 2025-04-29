import React, { useState } from 'react';
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { RiProfileFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Dashboardheader() {
    let[hover,setHover]=useState(false);
    let displayProfile=()=>{
        setHover(true);
    }
    let removeProfile=()=>{
        setHover(false);
    }
  return (
    <>
      <div className='w-[100%] p-[10px] border-b-1 border-b-gray-700-700 flex justify-between bg-white rounded-lg'>
         <div className='flex items-center text-[20px] text-gray-600 gap-[20px]'>
              <FaBars />
              <p className='font-bold'>DashBoard</p>
         </div>
         <div className='relative'
              onMouseEnter={displayProfile}
              onMouseLeave={removeProfile}
         >
             <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='rounded-[50%] w-[50px] h-[50px] '
           
             />
             <div className={`absolute right-[50%] bg-white shadow-[0px_0px_2px_0px_black] py-[10px] w-[200px] rounded-2xl top-[100%] ${hover?'block':'hidden'}`}>
                    <div className='flex items-center gap-[10px] border-b-1 border-b-gray-400 py-[5px] pl-[10px]'>
                            <FaRegUserCircle className='font-medium'/>
                            <p className='font-medium'><Link to={'/profile'}>Profile</Link></p>
                    </div>
                    <div className='flex items-center gap-[10px] border-b-1 border-b-gray-400 py-[5px] pl-[10px]'>
                            <RiProfileFill className='font-medium'/>
                            <p className='font-medium'><Link to={'/companyprofile'}>Company Profile</Link></p>
                    </div>
                    <div className='flex items-center gap-[10px]  py-[5px] pl-[10px]'>
                            <IoLogOut className='font-medium'/>
                            <p className='font-medium'>Log Out</p>
                    </div>
             </div>
         </div>
      </div>
    </>
  )
}
