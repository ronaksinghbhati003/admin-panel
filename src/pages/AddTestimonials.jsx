import axios from "axios";
import { useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { routePath } from "./Config";
export default function AddTestimonials() {
   let navigate=useNavigate();
   let[image,setImage]=useState('');
   let[details,setDetails]=useState({
      name:'',
      designation:'',
      rating:'',
      order:'',
      message:'',
   })
   let{id}=useParams();
   console.log(details);
     let insertData=(event)=>{
             event.preventDefault();
             let form=new FormData(event.target);

             if(id){
               axios.put(`${routePath}/testimoanial/update/${id}`,form)
               .then(res=>{
                  console.log(res);
                  let check=res.data.error==undefined?true:false;
                  if(check){
                     setDetails(
                     {
                          name:'',
                          designation:'',
                          rating:'',
                          order:'',
                          message:'',
                     }
                  )
                   navigate('/viewtestimonials');   
                  }
                  else{
                     toast.warning(res.data.msg,{
                        position:"top-center",
                        theme:"dark",
                        autoClose:1500
                     })
                  }
                  
               })
               .catch(err=>{
                  console.log(err);
               })
             }
             else{
                  axios.post(`${routePath}/testimoanial/insert`,form)
               .then(res=>{
                    console.log(res);
                    let check=res.data.error==undefined?true:false;
                    if(check){
                     event.target.reset();
                     navigate('/viewtestimonials');
                    }
                    else{
                         toast.warning(res.data.msg,{
                           position:"top-center",
                           theme:"dark",
                           autoClose:1500
                         })
                    }
               })
               .catch(err=>{
                  console.log(err);
               })
             }
     }

     let  editData= async()=>{
      try{
         let res=await axios.get(`${routePath}/testimoanial/editdata/${id}`);
         let data= await res.data;
         let finalData=data.editData;
         let{testName,testDesignation,testRating,testOrder,testMessage,testImage}=finalData;
         setDetails({...details,name:testName,designation:testDesignation,rating:testRating,order:testOrder,message:testMessage});
         setImage(data.testImagePath+testImage);
      }
      catch(error){
         console.log(error);
      }
        
   
     }

   useEffect(()=>{
      editData();
   },[])
  return (
    <>
    <ToastContainer/>
         <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Testimonials</p>
                <p>/</p>
                <p>{id?"Updata":"Add"}</p>
         </div>
         <div className='my-[20px] p-[10px_10px] bg-white rounded-lg w-[100%] border'>
                                <h1 className='p-[10px_10px] text-[25px] font-semibold bg-[#F1F5F9] rounded-lg '>{id?"Update Testimonials":"Add Testimonials"}</h1>
                                <form className='grid grid-cols-[40%_58%] mt-[10px] gap-[20px]' onSubmit={insertData}>
                                      <div className='mb-[]'>
                                           <div className='mb-[20px]'>
                                             <p className='font-semibold block'>Testimoanials Image</p>
                                             <label for="testimonialsImage">
                                                   <div className=' relative w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                                         <FaCloudDownloadAlt className='text-gray-400 text-[50px]'/>
                                                         <span className='text-center'>Upload</span>
                                                      <div className="absolute w-full h-full">
                                                         <img src={image} className="w-full h-full"/>
                                                      </div>
                                                   </div>
                                             </label>
                                             <input type='file' className='hidden' id="testimonialsImage" name="testImage" onChange={(e)=>{
                                                let file=e.target.files[0];
                                                if(file){
                                                   let imageUrl=URL.createObjectURL(file);
                                                   setImage(imageUrl);
                                                }
                                             }}/>
                                           </div>
                                           <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white mt-[180px]" >{id?"Update Testimonials":"Add Testimonials"}</button>
                                      </div>
                                      <div className=''>
                                          <div className='mb-[20px]'>
                                             <label className='font-semibold'>Name</label>
                                             <input type='text' name="testName" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' value={details.name} placeholder='Name' onChange={e=>{
                                                setDetails({...details,name:e.target.value});
                                             }}  />
                                          </div>
                                          <div  className='mb-[20px]'>
                                             <label className='font-semibold'>Designation</label>
                                             <input type='text' name="testDesignation" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' value={details.designation} placeholder='Designation' onChange={e=>{
                                                setDetails({...details,designation:e.target.value});
                                             }}   />
                                          </div>
                                          <div  className='mb-[20px]'>
                                             <label className='font-semibold'>Rating</label>
                                             <input type='number' name="testRating" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Rating' value={details.rating}  onChange={e=>{
                                                setDetails({...details,rating:e.target.value})
                                             }}  />
                                          </div>
                                          <div  className='mb-[20px]'>
                                             <label className='font-semibold'>Order</label>
                                             <input type='number' name="testOrder" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Order'  value={details.order} onChange={e=>{
                                                setDetails({...details,order:e.target.value});
                                             }}  />
                                          </div>
                                          <div  className='mb-[20px]'>
                                             <label className='font-semibold'>Message</label>
                                             <textarea className='w-[100%] resize-none min-h-[100px] border rounded-lg' name='testMessage' value={details.message} onChange={e=>{
                                                setDetails({...details,message:e.target.value})
                                             }}></textarea>
                                          </div>
                 
                                      </div>
                                      
                                 </form>            
                          </div>
                 
    </>
  )
}
