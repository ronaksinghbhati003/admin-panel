import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
export default function AddWhyChoose() {
  return (
    <>
        <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Why Choose us</p>
                <p>/</p>
                <p>Add</p>
        </div>

        <div className='my-[20px] p-[10px_10px] bg-white rounded-lg w-[100%] border'>
                                <h1 className='p-[10px_10px] text-[25px] font-semibold bg-[#F1F5F9] rounded-lg '>Add Why Choose Us</h1>
                                <form className='grid grid-cols-[40%_58%] mt-[10px] gap-[20px]'>
                                      <div className=''>
                                           <div className=''>
                                             <p className='font-semibold block'>Choose Image</p>
                                             <label for="whyChooseUs">
                                                   <div className='cursor-pointer w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                                         <FaCloudDownloadAlt className='text-gray-400 text-[50px]'/>
                                                         <span className='text-center'>Drag and Drop</span>
                                                   </div>
                                             </label>
                                             <input type='file' className='hidden' id="whyChooseUs" name="subCategoryImage"/>
                                           </div>
                                           <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[20px]" >Add Category</button>
                                      </div>
                                      <div className=''>
                                          <div className='mb-[20px]'>
                                             <label className='font-semibold'>Title</label>
                                             <input type='text' name="whyChooseUsTitle" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Title' required  />
                                          </div> 
                                          <div className='mb-[20px]'>
                                             <label className='font-semibold'>Order</label>
                                             <input type='number' name="whyChooseUsOrder" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Order' required  />
                                          </div>
                                          <div  className='mb-[20px]'>
                                             <label className='font-semibold'>Description</label>
                                             <textarea className='w-[100%] resize-none h-[250px]'></textarea>
                                             
                                          </div>
                 
                                      </div>
                                      
                                 </form>            
                          </div>
        
    </>
  )
}
