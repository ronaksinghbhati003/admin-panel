import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../pages/SideBar'
export default function Layout() {
  return (
    <>
      <div className='w-full'>
         <div className='grid grid-cols-[16.5%_auto]'>
             <div className='p-[20px] bg-[#1F2937] h-[100vh]'>
                   <SideBar/>
             </div>
             <div className=''>
                  <Outlet/>
             </div>
         </div>
      </div>
    </>
  )
}
