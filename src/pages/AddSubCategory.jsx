import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { routePath } from './Config';
export default function AddSubCategory() {
   let[image,setImage]=useState(null);
   let[option,setOption]=useState([]);
   let[subName,setSubName]=useState('');
   let[subOrder,setSubOrder]=useState(null);
   let[parent,setParent]=useState('');
   let navigate=useNavigate();
   let{id}=useParams();
   let parentCatData=()=>{
      axios.get(`${routePath}/subcategory/categorydata`)
      .then(res=>{
         setOption(res.data.option);
      })
      .catch(err=>{
         console.log(err);
      })
   } 

   let insertData=(event)=>{
      event.preventDefault();
      let form=new FormData(event.target);

       if(id){
           axios.put(`${routePath}/subcategory/update/${id}`,form)
           .then(res=>{
               navigate('/viewsubcategory');
           })
           .catch(err=>{
            console.log(err);
           })
       }
       else{
           axios.post(`${routePath}/subcategory/insert`,form)
          .then(res=>{
            let check=res.data.error==undefined?true:false;
            if(check){
                console.log(res);
                event.target.reset();
                navigate('/viewsubcategory')
            }
            else{
               console.log(res);
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


   let editData=()=>{
       axios.get(`${routePath}/subcategory/editdata/${id}`)
       .then(res=>{
         console.log(res);
         setSubName(res.data.editData.subCategoryName);
         setParent(res.data.editData.parentCategoryId);
         setSubOrder(res.data.editData.subCategoryOrder);
         setImage(res.data.editImagePath+res.data.editData.subCategoryImage);
       })
       .catch(err=>{
         console.log(err);
       })
   }

   useEffect(()=>{
        parentCatData();
        editData();
   },[])
  return (
     <>
     <ToastContainer/>
       <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Sub Category</p>
                <p>/</p>
                <p>{id?"Update":"Add"}</p>
         </div>
         <div className='my-[20px] p-[10px_10px] bg-white rounded-lg w-[100%] border'>
                        <h1 className='p-[10px_10px] text-[25px] font-semibold bg-[#F1F5F9] rounded-lg '>{id?"Update Sub Category":"Add Sub Category"}</h1>
                        <form className='grid grid-cols-[40%_58%] mt-[10px] gap-[20px]' onSubmit={insertData}>
                              <div className=''>
                                   <div className=''>
                                     <p className='font-semibold block'>Sub Catergory Image</p>
                                     <label htmlFor="subCategoryUpload">
                                           <div className=' relative cursor-pointer w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                                 <FaCloudDownloadAlt className='text-gray-400 text-[50px]'/>
                                                 <span className='text-center'>Upload</span>
                                                 {image?<div className='absolute w-[100%] h-[100%] top-[0] left-[0]'>
                                                <img className='w-[100%] h-[100%]' src={image}/>
                                               </div>:''}
                                           </div>
                                     </label>
                                     <input type='file' className='hidden' id="subCategoryUpload" name="subCategoryImage" onChange={(e)=>{
                                             const File=e.target.files[0];
                                             if(File){
                                              const imageUrl=URL.createObjectURL(File);
                                              setImage(imageUrl);
                                             }
                                     }}/>
                                   </div>
                                   <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[20px]" >{id?"Update Sub Category":"Add Sub Category"}</button>
                              </div>
                              <div className=''>
                                  <div className='mb-[20px]'>
                                     <label className='font-semibold'>Parent Category Name</label>
                                     <select className='w-[100%] p-[8px_10px] text-black border rounded-lg' name='subCategoryParent' value={parent} onChange={(e)=>{
                                          setParent(e.target.value);
                                     }}>
                                       <option value={null}>Select Category</option>
                                        {option.map((item,index)=>{
                                             return(
                                                <>
                                                    <option value={item._id} onChange={e=>{
                                                      console.log(e.target.value)
                                                    }} >{item.categoryName}</option>
                                                </>
                                             )
                                        })} 
                                     </select>
                                  </div> 
                                  <div className='mb-[20px]'>
                                     <label className='font-semibold'>Sub Category Name</label>
                                     <input type='text' name="subCategoryName" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Category Name' value={subName} onChange={e=>{
                                       setSubName(e.target.value);
                                     }} />
                                  </div>
                                  <div  className='mb-[20px]'>
                                     <label className='font-semibold'> Sub Category Order</label>
                                     <input type='number' name="subCategoryOrder" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Order' value={subOrder} onChange={e=>{
                                       setSubOrder(e.target.value);
                                     }}  />
                                  </div>
         
                              </div>
                              
                         </form>            
                  </div>
     </>
  )
}
