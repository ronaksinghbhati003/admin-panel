import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { routePath } from './Config';
export default function AddWhyChoose() {
  let[image,setImage]=useState(null);
  let navigate=useNavigate();
  let[name,setName]=useState(null);
  let[order,setOrder]=useState(null);
  let[description,setDescription]=useState(null);
   let{id}=useParams();
 
  let insertData=(event)=>{
  event.preventDefault();
  let form= new FormData(event.target);
    /*for (let [key, value] of form.entries()) {
      console.log(`${key}: ${value}`);
     }
    console.log(form);*/
   
    if(id){
      axios.put(`${routePath}/whychooseus/update/${id}`,form)
      .then(res=>{
        let check=res.data.error==undefined?true:false;
        if(check){
         navigate('/viewwhychooseus');
        setName('');
        setOrder('');
        setImage('');
        setDescription('');
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
          axios.post(`${routePath}/whychooseus/insert`,form)
           .then(res=>{
            let check=res.data.error==undefined?true:false;
              if(check){
                event.target.reset();
                navigate('/viewwhychooseus');
              }
              else{
                toast.error(res.data.msg,{
                  position:"top-center",
                  theme:"dark",
                  autoClose:1500
                })
              }
           })
           .catch((err)=>{
            console.log(err);
           })
          }
          
  }

  let getData=()=>{
      axios.get(`${routePath}/whychooseus/edit-data/${id}`)
    .then(res=>{
      setName(res.data.editData.whyChooseUsName);
      setOrder(res.data.editData.whyChooseUsOrder);
      setDescription(res.data.editData.whyChooseUsDescription);
      setImage(res.data.editImagePath+res.data.editData.whyChooseUsImage);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    if(id){
      getData();
    }
  },[])
  return (
    <>
    <ToastContainer/>
        <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Why Choose us</p>
                <p>/</p>
                <p>{id?"Update":"Add"}</p>
        </div>

        <div className='my-[20px] p-[10px_10px] bg-white rounded-lg w-[100%] border'>
                                <h1 className='p-[10px_10px] text-[25px] font-semibold bg-[#F1F5F9] rounded-lg '>{id?"Update Why Choose Us":"Add Why Choose Us"}</h1>
                                <form className='grid grid-cols-[40%_58%] mt-[10px] gap-[20px]' onSubmit={insertData}>
                                      <div className=''>
                                           <div className=''>
                                             <p className='font-semibold block'>Choose Image</p>
                                             <label htmlFor="whyChooseUs">
                                                   <div className='relative cursor-pointer w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                                         <FaCloudDownloadAlt className='text-gray-400 text-[50px]'/>
                                                         <span className='text-center'>Upload</span>
                                                         {image?<div className='absolute w-[100%] h-[100%] top-[0] left-[0]'>
                                                          
                                                              <img className='w-[100%] h-[100%]' src={image}/>
                                                         </div>:''}
                                                   </div>
                                             </label>
                                             <input type='file' className='hidden' id="whyChooseUs" name="whyChooseUsImage" onChange={(e)=>{
                                                      const File=e.target.files[0];
                                                      let imageUrl;
                                                       if(File){
                                                        imageUrl=URL.createObjectURL(File);
                                                         setImage(imageUrl);
                                                       }
                                                       
                                             }}/>
                                           </div>
                                           <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[20px]" >{id?"Update WhyChooseUs":"Add WhyChooseUs"}</button>
                                      </div>
                                      <div className=''>
                                          <div className='mb-[20px]'>
                                             <label className='font-semibold'>Title</label>
                                             <input type='text' name="whyChooseUsName" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Title' value={name}  onChange={(e)=>{
                                              setName(e.target.value);
                                             }} />
                                          </div> 
                                          <div className='mb-[20px]'>
                                             <label className='font-semibold'>Order</label>
                                             <input type='number' name="whyChooseUsOrder" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Order' value={order} onChange={(e)=>{
                                              setOrder(e.target.value);
                                             }}/>
                                          </div>
                                          <div  className='mb-[20px]'>
                                             <label className='font-semibold'>Description</label>
                                             <textarea name='whyChooseUsDescription' className='w-[100%] resize-none h-[250px] border rounded-2xl' value={description} onChange={(e)=>{
                                              setDescription(e.target.value);
                                             }}></textarea>
                                             
                                          </div>
                 
                                      </div>
                                      
                                 </form>            
                          </div>
        
    </>
  )
}
