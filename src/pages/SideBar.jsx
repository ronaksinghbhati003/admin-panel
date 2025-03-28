import React, { useState } from 'react';
import { FaRegUser, FaShoppingBag } from "react-icons/fa";
import { FaBarsStaggered, FaCircleDot, FaRegMessage } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoWaterOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";







export default function SideBar() {
    let[user,setUser]=useState(false);
    let[enquiry,setEnquiry]=useState(false);
    let[color,setColor]=useState(false);
    let[material,setMaterial]=useState(false);
    let[category,setCategory]=useState(false);
    let[subcategory,setSubCategory]=useState(false);
    let[subcategory1,setSubCategory1]=useState(false);
    let[product,setProduct]=useState(false);
  return (
    <>
      <div className='flex justify-center pb-[10px] border-b border-gray-400'>
         <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" />
      </div>
      <div className='flex items-center my-[30px] text-white gap-[10px] text-[19px]'>
         <LuLayoutDashboard/>
         <h1>DashBoard</h1>
      </div>
      <div>
         <ul>
             
             <li onClick={()=>{
                setUser(!user);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[19px] relative cursor-pointer'>
                 <FaRegUser/>
                 <p>User</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-2 text-[18px] ${user?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13px]  my-[15px] pl-3 ${user?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <p>View User</p>
                    </li>
                 </ul>
             </li>
            
            
            
             <li onClick={()=>{
                setEnquiry(!enquiry);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[19px] relative cursor-pointer'>
                 <FaRegMessage/>
                 <p>Enquiry</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-2 text-[18px] ${enquiry?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13px]  my-[15px] pl-3 ${enquiry?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <p>Contact Enquiry</p>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <p>Newsletter</p>
                    </li>
                 </ul>
             </li>

            
             <li onClick={()=>{
                setColor(!color);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[19px] relative cursor-pointer'>
                 <IoWaterOutline/>
                 <p>Color</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-2 text-[18px] ${color?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13px]  my-[15px] pl-3 ${color?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <p>Add Color</p>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <p>View Color</p>
                    </li>
                 </ul>
             </li>



             <li onClick={()=>{
                setMaterial(!material);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[19px] relative cursor-pointer'>
                 <MdDashboard/>
                 <p>Materials</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-2 text-[18px] ${material?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13px]  my-[15px] pl-3 ${material?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <p>Add Material</p>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <p>View Material</p>
                    </li>
                 </ul>
             </li>


             <li onClick={()=>{
                setCategory(!category);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[19px] relative cursor-pointer'>
                 <FaBarsStaggered/>
                 <p>Parent Category</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-2 text-[18px] ${category?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13px]  my-[15px] pl-3 ${category?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <p>Add Category</p>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <p>View Category</p>
                    </li>
                 </ul>
             </li>


             <li onClick={()=>{
                setSubCategory(!subcategory);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[19px] relative cursor-pointer'>
                 <FaBarsStaggered/>
                 <p>Sub Category</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-2 text-[18px] ${subcategory?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13px]  my-[15px] pl-3 ${subcategory?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <p>Add Sub Category</p>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <p>View Sub Category</p>
                    </li>
                 </ul>
             </li>



             <li onClick={()=>{
                setSubCategory1(!subcategory1);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[19px] relative cursor-pointer'>
                 <FaBarsStaggered/>
                 <p>Sub Sub Category</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-2 text-[18px] ${subcategory1?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13px]  my-[15px] pl-3 ${subcategory1?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <p>Add Sub Sub Category</p>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <p>View Sub Sub Category</p>
                    </li>
                 </ul>
             </li>


             
             <li onClick={()=>{
                setProduct(!product);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[19px] relative cursor-pointer'>
                 <FaShoppingBag/>
                 <p>Products</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-2 text-[18px] ${product?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13px]  my-[15px] pl-3 ${product?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <p>Add Products</p>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <p>View Products</p>
                    </li>
                 </ul>
             </li>



             

         
         
         
         
         
         </ul>
      </div>
    </>
  )
}
