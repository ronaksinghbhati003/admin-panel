import axios from "axios";
import { useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { routePath } from "./Config";
export default function AddSlider() {
  let[image,setImage]=useState('');
  let navigate=useNavigate(); 
  let[title,setTitle]=useState('');
  let[order,setOrder]=useState(null);
  let{id}=useParams();
  let insertData=(event)=>{
    event.preventDefault();
    let form=new FormData(event.target);
    for(let[key,value] of form.entries()){
         console.log(`${key},${value}`)
    }
     
     if(id){
      axios.put(`${routePath}/slider/update/${id}`,form)
      .then(res=>{
        let check=res.data.error==undefined?true:false;
        if(check){
          setTitle('');
          setOrder(null);
          setImage('');
          navigate('/viewslider');
        }
        else{
            toast.error(res.data.msg,{
              position:'top-center',
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
             axios.post(`${routePath}/slider/insert`,form)
          .then(res=>{
             let check=res.data.error==undefined?true:false;
             if(check){
                event.target.reset();
                navigate('/viewslider');
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


  let getData=()=>{
    axios.get(`${routePath}/slider/editdata`,{
      params:{
        id
      }
    })
    .then(res=>{
      console.log(res);
      setTitle(res.data.editData.sliderTitle);
      setOrder(res.data.editData.sliderOrder);
      setImage(res.data.editImagePath+res.data.editData.sliderImage);
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
    <ToastContainer/>
        <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Slider</p>
                <p>/</p>
                <p>{id?"Update":"Add"}</p>
        </div>
        <div className='my-[20px] p-[10px_10px] bg-white rounded-lg w-[100%] border'>
                       <h1 className='p-[10px_10px] text-[25px] font-semibold bg-[#F1F5F9] rounded-lg '>{id?"Update Slider":"Add Slider"}</h1>
                       <form className='grid grid-cols-[40%_58%] mt-[10px] gap-[20px]' onSubmit={insertData}>
                             <div className=''>
                                  <div className=''>
                                    <p className='font-semibold block'>Choose Image</p>
                                    <label htmlFor="sliderImage">
                                          <div className='relative w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                                <FaCloudDownloadAlt className='text-gray-400 text-[50px]'/>
                                                <span className='text-center'>Upload</span>
                                                 {image?
                                                  <div className="w-full h-full absolute top-0 left-0">
                                                    <img src={image}  alt="Slider Image" className="w-full h-full"/>
                                                  </div>
                                                  :''
                                                 }
                                          </div>
                                    </label>
                                    <input type='file' className='hidden' id="sliderImage"  name="sliderImage" onChange={(e)=>{
                                         let file=e.target.files[0];
                                         if(file){
                                          let imageUrl=URL.createObjectURL(file);
                                          setImage(imageUrl);
                                         }
                                    }}/>
                                  </div>
                                  <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[20px]" >{id?"Update Slider":"Add Slider"}</button>
                             </div>
                             <div className=''>
                                 <div className='mb-[20px]'>
                                    <label className='font-semibold'>Title</label>
                                    <input type='text' name="sliderName" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Slider Title' value={title} onChange={(e)=>{
                                      setTitle(e.target.value);
                                    }} />
                                 </div>
                                 <div  className='mb-[20px]'>
                                    <label className='font-semibold'>Order</label>
                                    <input type='number' name="sliderOrder" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Order' value={order} onChange={(e)=>{
                                      setOrder(e.target.value);
                                    }}  />
                                 </div>
        
                             </div>
                             
                        </form>            
                 </div>
        
    </>
  )
}
