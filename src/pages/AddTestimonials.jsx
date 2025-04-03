import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
export default function AddTestimonials() {
  return (
    <>
         <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Testimonials</p>
                <p>/</p>
                <p>Add</p>
         </div>
         <div className='my-[20px] p-[10px_10px] bg-white rounded-lg w-[100%] border'>
                                <h1 className='p-[10px_10px] text-[25px] font-semibold bg-[#F1F5F9] rounded-lg '>Add Testimonials</h1>
                                <form className='grid grid-cols-[40%_58%] mt-[10px] gap-[20px]'>
                                      <div className='mb-[]'>
                                           <div className='mb-[20px]'>
                                             <p className='font-semibold block'>Catergory Image</p>
                                             <label for="testimonialsImage">
                                                   <div className='w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                                         <FaCloudDownloadAlt className='text-gray-400 text-[50px]'/>
                                                         <span className='text-center'>Drag and Drop</span>
                                                   </div>
                                             </label>
                                             <input type='file' className='hidden' id="testimonialsImage" name="testimonialsImage"/>
                                           </div>
                                           <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white mt-[180px]" >Add Category</button>
                                      </div>
                                      <div className=''>
                                          <div className='mb-[20px]'>
                                             <label className='font-semibold'>Name</label>
                                             <input type='text' name="addtestimonialsName" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Name' required  />
                                          </div>
                                          <div  className='mb-[20px]'>
                                             <label className='font-semibold'>Designation</label>
                                             <input type='number' name="testimonialsDesignation" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Designation' required  />
                                          </div>
                                          <div  className='mb-[20px]'>
                                             <label className='font-semibold'>Rating</label>
                                             <input type='number' name="testimonialsRating" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Rating' required  />
                                          </div>
                                          <div  className='mb-[20px]'>
                                             <label className='font-semibold'>Order</label>
                                             <input type='number' name="testimonialsOrder" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Order' required  />
                                          </div>
                                          <div  className='mb-[20px]'>
                                             <label className='font-semibold'>Message</label>
                                             <textarea className='w-[100%] resize-none min-h-[100px] border rounded-lg' name='testimonialsMessage'></textarea>
                                          </div>
                 
                                      </div>
                                      
                                 </form>            
                          </div>
                 
    </>
  )
}
