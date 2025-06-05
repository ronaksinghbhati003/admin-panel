import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { routePath } from './Config';
export default function AddCategory() {
  let[image,setImage]=useState(null);
  let[catName,setCatName]=useState('');
  let[catOrder,setCatOrder]=useState(null);
  let navigate=useNavigate();
  let{id}=useParams();
  let imageUrl;
  
  let insertData=(event)=>{
     event.preventDefault();
     const form=new FormData(event.target);
     
     for (let [key, value] of form.entries()) {
      console.log(`${key}: ${value}`);
     }
     console.log(form);
    
     if(id){
      axios.put(`${routePath}/category/update/${id}`,form)
      .then(res=>{
        let check=res.data.error==undefined?true:false;
              if(check)
                {
                  console.log(res);
                  setCatName('');
                  setCatOrder(null);
                  setImage(null);
                  navigate('/viewcategory');
                }
                else{
                  toast.success(res.data.msg,{
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
     axios.post(`${routePath}/category/insert`,form)
     .then(res=>{
      let check=res.data.error==undefined?false:true;
      if(check){
        toast.success(res.data.msg,{
          position:"top-center",
          theme:"dark",
          autoClose:1500
        })
      }
      else{
        event.target.reset();
        navigate('/viewcategory')
        setImage(null);
        console.log(res.data);
      }
      });
    }
  }

  let catEditData=()=>{
      axios.get(`${routePath}/category/edit-data/${id}`)
      .then(res=>{
          console.log(res);
          setImage(res.data.previewPath+res.data.editGetData.categoryImage);
          setCatName(res.data.editGetData.categoryName);
          setCatOrder(res.data.editGetData.categoryOrder);
      })
      .catch(err=>{
        console.log(err);
      })
  }


  useEffect(()=>{
    if(image){
      URL.revokeObjectURL(imageUrl);
    }
  },[image])

  
  useEffect(()=>{
  if(id){
     catEditData();
  }
  else{
    setImage(null);
  }
  },[id]);
  return (
    <>
    <ToastContainer/>
         <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Category</p>
                <p>/</p>
                <p>{id?"Update":"Add"}</p>
         </div>
         <div className='my-[20px] p-[10px_10px] bg-white rounded-lg w-[100%] border'>
               <h1 className='p-[10px_10px] text-[25px] font-semibold bg-[#F1F5F9] rounded-lg '>{id?"Update Category":"Add Category"}</h1>
               <form className='grid grid-cols-[40%_58%] mt-[10px] gap-[20px]' onSubmit={insertData}>
                     <div className=''>
                          <div className=''>
                            <p className='font-semibold block'>Catergory Image</p>
                            <label htmlFor="upload">
                                  <div className=' relative w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                        <FaCloudDownloadAlt className='text-gray-400 text-[50px]'/>
                                        <span className='text-center'>Upload Image</span>
                                        {image?<div className='absolute w-[100%] h-[100%] top-[0] left-[0]'>
                                                <img className='w-[100%] h-[100%]' src={image}/>
                                               </div>:''}
                                  </div>
                            </label>
                            <input type='file' className='hidden' id="upload" name="categoryImage" onChange={(e)=>{
                                   const File=e.target.files[0];
                                   if(File){
                                    imageUrl=URL.createObjectURL(File);
                                    setImage(imageUrl);
                                   }
                            }}/>
                          </div>
                          <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[20px]" >{id?"Update Category":"Add Category"}</button>
                     </div>
                     <div className=''>
                         <div className='mb-[20px]'>
                            <label className='font-semibold'>Category Name</label>
                            <input type='text' name="categoryName" value={catName} className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Category Name' required onChange={(e)=>{
                              setCatName(e.target.value);
                            }} />
                         </div>
                         <div  className='mb-[20px]'>
                            <label className='font-semibold'>Order</label>
                            <input type='text' name="categoryOrder" value={catOrder} className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Order' required onChange={(e)=>{
                              setCatOrder(e.target.value);
                            }}  />
                         </div>

                     </div>
                     
                </form>            
         </div>

    </>
  )
}
