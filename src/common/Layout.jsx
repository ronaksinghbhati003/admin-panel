import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../pages/SideBar'
import Dashboardheader from './Dashboardheader'
export default function Layout() {
  return (
    <>
      <div className='w-full'>
         <div className='grid grid-cols-[16.5%_auto]'>
             <div className='p-[20px] bg-[#1F2937] h-[100vh] overflow-y-scroll self-start'>
                   <SideBar/>
             </div>
             <div className='p-[20px] bg-linear-to-r from-cyan-300 to-purple-400 overflow-y-scroll h-[100vh] '>
                  <Dashboardheader/>
                  <Outlet/>
             </div>
         </div>
      </div>
    </>
  )
}
