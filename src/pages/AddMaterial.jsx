import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { routePath } from './Config';
export default function AddMaterial() {
     let navigateMaterial = useNavigate(null);
     let[materialName,setMaterialName]=useState('');
     let[materialOrder,setMaterialOrder]=useState('');
     console.log(useParams());
     let{id}=useParams();
     let addMaterial = (event) => {
          event.preventDefault();
          let materialName = event.target.materialAdd.value;
          let materialOrder = event.target.materialOrder.value;
          let obj = {
               materialName,
               materialOrder
          }

          if(id){
               axios.put(`${routePath}/material/update/${id}`,obj)
                .then((res) => {
                    setMaterialName('');
                    setMaterialOrder('');
                    navigateMaterial('/viewmaterial')
                })
                .catch((err) => {
                    console.log(err);
                })
          }
          else{
                axios.post(`${routePath}/material/insert`, obj)
               .then((res) => {
                    if (res.data.status == 1) {
                         toast.success(res.data.msg);
                         event.target.reset();
                         navigateMaterial('/viewmaterial')
                    }
                    else {
                         toast.success(res.data.msg, {
                              position: "top-center",
                              autoClose: 1500,
                              theme: "dark",
                              closeOnClick:true
                         })
                    }


               })
               .catch((error) => {
                    console.log(error.message);
               })
          }
          
     }

        let editData = () => {
        axios.get(`${routePath}/material/editdata/${id}`)
            .then(res => {
                console.log(res);
                setMaterialName(res.data.editData.materialName);
                setMaterialOrder(res.data.editData.materialOrder);
            })
            .catch((err) => {
                console.log(err);
            })
      }

       useEffect(() => {
              if (id) {
                  editData();
              }
          }, [])
     return (
          <>
               <ToastContainer />
               <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                    <p>Home</p>
                    <p>/</p>
                    <p>Material</p>
                    <p>/</p>
                    <p>{id?"Update":"Add"}</p>
               </div>
               <div className='w-full p-[10px_10px] bg-white rounded-lg'>
                    <h1 className='text-[20px] bg-[#F1F5F9] p-[10px_5px] font-medium rounded-lg'>{id?"Update Material":"Add Material"}</h1>
                    <form className='my-[20px]' onSubmit={addMaterial}>
                         <div className='mb-[20px]'>
                              <label className='font-semibold'>Category Name</label>
                              <input type='text' placeholder='Material Name' className='p-[8px_10px] border rounded-lg w-[100%]' name='materialAdd' value={materialName} onChange={(e)=>{
                                   setMaterialName(e.target.value);
                              }} />
                         </div>
                         <div className='mb-[20px]'>
                              <label className='font-semibold'>Order</label>
                              <input type='number' placeholder='Order' className='p-[8px_10px] border rounded-lg w-[100%]' name='materialOrder'
                                value={materialOrder}
                                onChange={(e)=>{
                                   setMaterialOrder(e.target.value);
                                }}
                              />
                         </div>
                         <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[40px]" >{id?"Update Material":"Add Material"}</button>
                    </form>
               </div>
          </>
     )
}
