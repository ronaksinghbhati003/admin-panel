import React, { useState } from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
export default function CompanyProfile() {
  let[image,setImage]=useState(null);
  return (
    <>
      <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
        <p>Home</p>
        <p>/</p>
        <p>Company Profile</p>
      </div>


      <div className='p-[20px] w-full border-2 border-red-500 bg-white'>
        <form>
          <div className='grid grid-cols-[30%_auto]'>

            <div className=''>
              <p className='font-bold'>Company Profile Image</p>
              <div className='mb-4'>
                <label for="subCategoryUpload">
                  <div className=' relative cursor-pointer w-[300px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                     <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                    <span className='text-center'>Drag and Drop</span>
                    {image ? <div className='absolute w-[100%] h-[100%] top-[0] left-[0]'>
                      <img className='w-[100%] h-[100%]' src={image} />
                    </div> : ''}
                  </div>
                </label>
                <input type='file' className='hidden' id="subCategoryUpload" name="subCategoryImage" onChange={(e) => {
                  const File = e.target.files[0];
                  if (File) {
                    const imageUrl = URL.createObjectURL(File);
                    setImage(imageUrl);
                  }
                }} />
              </div>
            </div>

            <div className=''>
              <div className='mb-5'>
                <label className='font-semibold block mb-1'>Name</label>
                <input type='text' name='companyName' className='w-full border border-gray-300 p-[5px_10px] rounded-[10px]' placeholder='Enter Name' />
              </div>
              <div className='mb-5'>
                <label className='font-semibold block mb-1'>Email</label>
                <input type='text' name='companyEmail' className='w-full border border-gray-300 p-[5px_10px] rounded-[10px]' placeholder='Enter Email' />
              </div>
              <div className='mb-5'>
                <label className='font-semibold block mb-1'>Mobile Number</label>
                <input type='text' name='companyMobile' className='w-full border border-gray-300 p-[5px_10px] rounded-[10px]' placeholder='Enter Name' />
              </div>
            </div>

          </div>

          <textarea placeholder='Address' className='mt-8 resize-none w-[100%] p-2 border-1 border-gray-300 rounded-lg' rows={4}></textarea>
          <textarea placeholder='Google Map URL' className='mt-8 resize-none w-[100%] p-2 border-1 border-gray-300 rounded-lg' rows={4}></textarea>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.625912922732!2d73.02805847520123!3d26.273801877033783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d6124914e7b%3A0x554409fadcb37085!2sLAXMI%20TOWER!5e0!3m2!1sen!2sin!4v1745942335004!5m2!1sen!2sin" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <button className='p-[10px_20px] bg-purple-600 text-white mt-5 rounded-[10px]'>Update Company Profile</button>
        </form>
      </div>
    </>
  )
}
