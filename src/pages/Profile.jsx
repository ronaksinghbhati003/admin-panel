import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { FaCloudDownloadAlt, FaMobile } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { loginContext } from '../common/MainLayout';
import { routePath } from './Config';
export default function Profile() {
   let [change, setChange] = useState(true);
   let [image, setImage] = useState(null);
   let { user, setUser,check,setCheck} = useContext(loginContext);
   let [error, setError] = useState('');
   let[viewAdmin,setViewAdmin]=useState(null);
   let[path,setPath]=useState('');
   let navigate=useNavigate();

   console.log(check);
   let changePassword = (event) => {
      event.preventDefault();
      let currentPassword = event.target.currentPassword.value;
      let newPassword = event.target.newPassword.value;
      let confirmPassword = event.target.confirmPassword.value;
      if (newPassword.length > 7) {
         if (newPassword == confirmPassword) {
            axios.put(`${routePath}/changepassword/${user._id}`, {
               currentPassword,
               newPassword
            })
               .then(res => {
                  if (res.data.status == 0) {
                     toast.warning(res.data.msg, {
                        position: "top-center",
                        theme: "dark",
                        autoClose: 1500
                     })
                  }
                  else {
                     toast.success(res.data.msg, {
                        position: "top-center",
                        theme: "dark",
                        autoClose: 1500
                     })
                     event.target.reset();
                  }
               })
               .catch(err => {
                  console.log(err);
               })
         }
         else {
            setError("Please check confirm password. It not match with new password");
            setTimeout(() => setError(''), 2000)
         }
      }
      else {
         setError("Please Enter 8 Digit Passowrd");
         setTimeout(() => setError(''), 2000)
      }

   }

   let editProfile = (event) => {
      event.preventDefault();
      let form = new FormData(event.target);
      axios.put(`${routePath}/editprofile/${user._id}`, form)
         .then(res => {
            event.target.reset();
            setImage('');
            toast.success(res.data.msg,{
               position:"top-center",
               theme:"dark",
               autoClose:1500
            })
            getData();  
            setCheck(check=check+1);
         })
         .catch(err => {
            console.log(err);
         })
   }
 
   let getData= async()=>{
       axios.get(`${routePath}/view`,{
         params:{
            id:user._id
         }
      })
      .then(res=>{
         console.log(res);
         setViewAdmin(res.data.adminView);
         setPath(res.data.adminImagePath);
      })
      .catch(err=>{
         console.log(err);
      })
   }

   useEffect(()=>{
      getData();
   },[])

   return (
      <>
         <ToastContainer />
         <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
            <p>Home</p>
            <p>/</p>
            <p>Profile</p>
         </div>

         <div className='w-full  mt-10 grid grid-cols-[30%_auto] gap-4'>

            {viewAdmin &&  <div className=' rounded-lg overflow-hidden self-start'>
               <div className='bg-white py-[30px] flex flex-col gap-[10px] justify-center items-center'>
                  <img className='w-[100px] h-[100px] rounded-[100%]' src={path+viewAdmin.adminImage} />
                  <p className='font-semibold'>{viewAdmin.adminName}</p>
               </div>
               <div className='bg-gray-200 p-5'>
                  <h1 className='font-bold text-[18px]'>Contact Information</h1>
                  <ul className='p-0 mt-5'>
                     <li className='mb-3'>
                        <FaMobile className='inline text-[16px]' />
                        <span className='ms-2'>{viewAdmin.adminEmail}</span>
                     </li>
                     <li>
                        <MdOutlineMail className='inline text-[16px]' />
                        <span className='ms-2'>{viewAdmin.adminNumber}</span>
                     </li>
                  </ul>
               </div>
            </div>}
           
            <div className='p-[20px] bg-white rounded-[10px]'>
               <div className='border-b-1 border-black flex gap-[20px] '>
                  <p className={`${change ? 'text-purple-700  border-b-3 border-b-purple-700' : null} cursor-pointer text-[20px] font-bold pb-2`} onClick={() => setChange(true)}>Edit Profile</p>
                  <p className={`${change ? null : 'text-purple-700  border-b-3 border-b-purple-700'} cursor-pointer text-[20px] font-bold pb-2`} onClick={() => setChange(false)}>Change Password</p>
               </div>
               {
                  change ?
                     <div className='mt-4'>
                        <form onSubmit={editProfile}>
                           <div className='flex  gap-[20px]'>
                              <div className=' basis-[30%]'>
                                 <p className='font-semibold mb-2'>Choose Image</p>
                                 <div className='mb-4'>
                                    <label for="subCategoryUpload">
                                       <div className=' relative cursor-pointer w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                          <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                                          <span className='text-center'>Upload</span>
                                          {image ? <div className='absolute w-[100%] h-[100%] top-[0] left-[0]'>
                                             <img className='w-[100%] h-[100%]' src={image} />
                                          </div> : ''}
                                       </div>
                                    </label>
                                    <input required type='file' className='hidden' id="subCategoryUpload" name="profileImage" onChange={(e) => {
                                       const File = e.target.files[0];
                                       if (File) {
                                          const imageUrl = URL.createObjectURL(File);
                                          setImage(imageUrl);
                                       }
                                    }} />
                                 </div>
                                 <button className='p-[10px_20px] text-white font-bold bg-purple-600 rounded-[10px]'>Update Profile</button>
                              </div>

                              <div className='basis-[70%]'>
                                 <div className='mb-5'>
                                    <label className='font-semibold block mb-1'>Name</label>
                                    <input required type='text' name='profileName' className='w-full border border-gray-300 p-[5px_10px] rounded-[10px]' placeholder='Enter Name' />
                                 </div>
                                 <div className='mb-5'>
                                    <label className='font-semibold block mb-1'>Email</label>
                                    <input required type='email' name='profileEmail' className='w-full border border-gray-300 p-[5px_10px] rounded-[10px]' placeholder='Enter Email Address' />
                                 </div>
                                 <div className='mb-5'>
                                    <label className='font-semibold block mb-1'>Mobile Number</label>
                                    <input required type='tel' name='profileNumber' className='w-full border border-gray-300 p-[5px_10px] rounded-[10px]' placeholder='Enter Mobile Number' />
                                 </div>
                              </div>

                           </div>
                        </form>
                     </div>
                     :
                     <div className='mt-4'>
                        <form onSubmit={changePassword}>
                           <div className='mb-5'>
                              <label className='font-semibold block mb-1'>Current Password</label>
                              <input required type='password' name='currentPassword' className='w-full border border-gray-300 p-[5px_10px] rounded-[10px]' placeholder='Enter Current Passowrd' />
                           </div>
                           <div className='mb-5'>
                              <label className='font-semibold block mb-1'>New Password</label>
                              <input required type='password' name='newPassword' className='w-full border border-gray-300 p-[5px_10px] rounded-[10px]' placeholder='Enter New Passowrd' />
                           </div>
                           <div className='mb-5'>
                              <label className='font-semibold block mb-1'>Confirm Password</label>
                              <input required type='password' name='confirmPassword' className='w-full border border-gray-300 p-[5px_10px] rounded-[10px]' placeholder='Enter Confirm Passowrd' />
                              {error && <p className='text-red-500 mt-2 ml-1'>{error}</p>}
                           </div>

                           <button className='p-[10px_20px] text-white font-semibold bg-purple-600 rounded-[10px]'>Change Password</button>
                        </form>
                     </div>
               }
            </div>
         </div>
      </>
   )
}
