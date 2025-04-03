import React, { useState } from 'react';
import { FaEdit, FaRegUser, FaShoppingBag, FaUserEdit } from "react-icons/fa";
import { FaBars, FaBarsStaggered, FaCircleDot, FaClockRotateLeft, FaLocationArrow, FaRegMessage, FaRegNewspaper } from "react-icons/fa6";
import { FcFaq } from "react-icons/fc";
import { IoIosArrowDown } from "react-icons/io";
import { IoWaterOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';


export default function SideBar() {
    let[user,setUser]=useState(false);
    let[enquiry,setEnquiry]=useState(false);
    let[color,setColor]=useState(false);
    let[material,setMaterial]=useState(false);
    let[category,setCategory]=useState(false);
    let[subcategory,setSubCategory]=useState(false);
    let[subcategory1,setSubCategory1]=useState(false);
    let[product,setProduct]=useState(false);
    let[choose,setChoose]=useState(false);
    let[order,setOrder]=useState(false);
    let[slider,setSlider]=useState(false);
    let[country,setCountry]=useState(false);
    let[testimonials,setTestimonials]=useState(false);
    let[faq,setFaq]=useState(false);
    let[term,setTerm]=useState(false);
  return (
    <>
      <div className='flex justify-center pb-[10px] border-b border-gray-400'>
         <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" />
      </div>
      <div className='flex items-center my-[30px] text-white gap-[10px] text-[19px]'>
         <LuLayoutDashboard/>
         <Link to={'/dashboard'}><h1>DashBoard</h1></Link>
      </div>
      <div>
         <ul>
             
             <li onClick={()=>{
                setUser(!user);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <FaRegUser/>
                 <p>User</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${user?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${user?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <Link to={'/user'}><p>View User</p></Link>
                    </li>
                 </ul>
             </li>
            
            
            
             <li onClick={()=>{
                setEnquiry(!enquiry);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <FaRegMessage/>
                 <p>Enquiry</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${enquiry?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${enquiry?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/enquiry'}><p>Contact Enquiry</p></Link>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <Link to={'/newsletter'}><p>Newsletter</p></Link>
                    </li>
                 </ul>
             </li>

            
             <li onClick={()=>{
                setColor(!color);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <IoWaterOutline/>
                 <p>Color</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${color?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${color?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                     <Link to={'/addcolor'}><p>Add Color</p></Link>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <Link to={'/viewcolor'}><p>View Color</p></Link>
                    </li>
                 </ul>
             </li>



             <li onClick={()=>{
                setMaterial(!material);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <MdDashboard/>
                 <p>Materials</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${material?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${material?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/addmaterial'}><p>Add Material</p></Link>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <Link to={'/viewmaterial'}><p>View Material</p></Link>
                    </li>
                 </ul>
             </li>


             <li onClick={()=>{
                setCategory(!category);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <FaBarsStaggered/>
                 <p>Parent Category</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${category?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${category?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/addcategory'}><p>Add Category</p></Link>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <Link to={'/viewcategory'}><p>View Category</p></Link>
                    </li>
                 </ul>
             </li>


             <li onClick={()=>{
                setSubCategory(!subcategory);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <FaBarsStaggered/>
                 <p>Sub Category</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${subcategory?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${subcategory?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/addsubcategory'}><p>Add Sub Category</p></Link>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <Link to={'/viewsubcategory'}><p>View Sub Category</p></Link>
                    </li>
                 </ul>
             </li>



             <li onClick={()=>{
                setSubCategory1(!subcategory1);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <FaBarsStaggered/>
                 <p>Sub Sub Category</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${subcategory1?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${subcategory1?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/addsubsubcategory'}><p>Add Sub Sub Category</p></Link>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <Link to={'/viewsubsubcategory'}><p>View Sub Sub Category</p></Link>
                    </li>
                 </ul>
             </li>


             
             <li onClick={()=>{
                setProduct(!product);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <FaShoppingBag/>
                 <p>Products</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${product?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${product?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/addproduct'}><p>Add Products</p></Link>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <Link to={'/viewproduct'}><p>View Products</p></Link>
                    </li>
                 </ul>
             </li>

            
             <li onClick={()=>{
                setChoose(!choose);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <FaClockRotateLeft/>
                 <p>Why Choose us</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${choose?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${choose?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/addwhychooseus'}><p>Add Why Choose us</p></Link>
                    </li>
                    <li className='flex items-center gap-[15px] cursor-pointer '>
                      <FaCircleDot/>
                      <Link to={'/viewwhychooseus'}><p>View Why Choose us</p></Link>
                    </li>
                 </ul>
             </li>


             <li onClick={()=>{
                setOrder(!order);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <FaEdit/>
                 <p>Order</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${order?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${order?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/orders'}><p>Orders</p></Link>
                    </li>
                 </ul>
             </li>


             
             <li onClick={()=>{
                setSlider(!slider);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <FaBars/>
                 <p>Sliders</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${slider?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${slider?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/addslider'}><p>Add Slider</p></Link>
                    </li>
                    <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/viewslider'}><p>View Slider</p></Link>
                    </li>
                 </ul>
             </li>

             <li onClick={()=>{
                setCountry(!country);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <FaLocationArrow/>
                 <p>Country</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${country?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${country?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/addcountry'}><p>Add Country</p></Link>
                    </li>
                    <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/viewcountry'}><p>View Country</p></Link>
                    </li>
                 </ul>
             </li>


             <li onClick={()=>{
                setTestimonials(!testimonials);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <FaUserEdit/>
                 <p>Testimonials</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${testimonials?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${testimonials?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/addtestimonials'}><p>Add Testimonials</p></Link>
                    </li>
                    <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/viewtestimonials'}><p>View Testimonials</p></Link>
                    </li>
                 </ul>
             </li>


             
             <li onClick={()=>{
                setFaq(!faq);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <FcFaq/>
                 <p>Faq</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-0 text-[18px] ${faq?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 <ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${faq?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/addfaq'}><p>Add Faq</p></Link>
                    </li>
                    <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <Link to={'/viewfaq'}><p>View Faq</p></Link>
                    </li>
                 </ul>
             </li>

             <li onClick={()=>{
                setTerm(!term);
             }} className='mb-[20px]'>
                <div className='flex items-center gap-[10px] text-white text-[18px] relative cursor-pointer'>
                 <FaRegNewspaper/>
                 <p>Terms and Condition</p>
                 <IoIosArrowDown className={`absolute top-[50%] translate-y-[-50%] right-[-15px] text-[18px] ${term?'rotate-[180deg]':'rotate-0'} duration-[0.5s]`} />
                 </div>
                 {/*<ul className={` text-white text-[13.5px]  my-[15px] pl-3 ${faq?'block':'hidden'}`}>
                     <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <p>Add Faq</p>
                    </li>
                    <li className='flex items-center gap-[15px] mb-[10px] cursor-pointer'>
                      <FaCircleDot/>
                      <p>View Faq</p>
                    </li>
                 </ul>*/}
             </li>


      </ul>
      </div>
    </>
  )
}
