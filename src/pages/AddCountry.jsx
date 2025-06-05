import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { routePath } from "./Config";
export default function AddCountry() {
  let navigate=useNavigate();
  let[name,setName]=useState('');
  let[order,setOrder]=useState(null);
  let{id}=useParams();
     let insertData=(event)=>{
          event.preventDefault();
       
          if(id){
               axios.put(`${routePath}/country/update`,{
                    id,
                    name,
                    order
               })
               .then(res=>{
                    console.log(res);
                    let check = res.data.error==undefined?true:false;
                    if(check){
                       setName('');
                      setOrder('');
                       navigate('/viewcountry')
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
                    axios.post(`${routePath}/country/insert`,{
               countryName:event.target.countryName.value,
               countryOrder:event.target.countryOrder.value,
          })
          .then(res=>{
               let check=res.data.error==undefined?true:false;
               if(check){
                    event.target.reset();
                    navigate('/viewcountry')
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

     let editData=()=>{
          axios.get(`${routePath}/country/edit-data/${id}`)
          .then(res=>{
               setName(res.data.editData.countryName);
               setOrder(res.data.editData.countryOrder);
          })
          .catch(err=>{
               console.log(err);
          })
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
                <p>Country</p>
                <p>/</p>
                <p>{id?"Update":"Add"}</p>
         </div>

         <div className='w-full p-[10px_10px] bg-white rounded-lg'>
             <h1 className='text-[20px] bg-[#F1F5F9] p-[10px_5px] font-medium rounded-lg'>{id?"Update Country":"Add Country"}</h1>
             <form className='my-[20px]' onSubmit={insertData}>
                  <div className='mb-[20px]'>
                       <label className='font-semibold'>Country Name</label>
                       <input type='text' placeholder='Material Name' className='p-[8px_10px] border rounded-lg w-[100%]' name='countryName' value={name} onChange={e=>{
                         setName(e.target.value);
                       }} />
                  </div>
                  <div className='mb-[20px]'>
                       <label className='font-semibold'>Order</label>
                       <input type='number' placeholder='Order' className='p-[8px_10px] border rounded-lg w-[100%]' name='countryOrder' value={order} onChange={e=>{
                         setOrder(e.target.value)
                       }} />
                  </div>
                  <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[40px]" >{id?"Update Country":"Add Country"}</button>
             </form>
        </div>
    </>
  )
}
