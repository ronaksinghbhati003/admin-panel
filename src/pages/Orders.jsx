import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../common/MainLayout";
import OrderDetail from "../common/OrderDetail";

export default function Orders() {
  let {orderDetail,setOrderDetail}=useContext(loginContext);
  let apiUrl=import.meta.env.VITE_APIURL;
  let[orderData,setOrderData]=useState([]);
  let[imagePath,setImagePath]=useState('');
  let[id,setId]=useState('');
  let getData=()=>{
    axios.get(`${apiUrl}/order-admin/vieworder`)
    .then((res)=>{
      setOrderData(res.data.viewOrder);
      setImagePath(res.data.imagePath);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
       {orderDetail?<OrderDetail orderDetail={orderDetail} setOrderDetail={setOrderDetail}  id={id} orderData={orderData} imagePath={imagePath}/>:null}
        <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
         <p>Home</p>
         <p>/</p>
         <p>Orders</p>
       </div>
       <div className='w-full mt-[20px] bg-white rounded-lg'>
          <h1 className='text-[20px] font-semibold py-[15px] border-b rounded-lg'><span className='ps-[10px]'>Orders's List</span></h1>
          <table className='w-[100%]'>
              <thead className='bg-[#F9FAFB]'>
                <tr className='text-center'>
                    <th className=' py-[10px]'><button className='p-[5px_10px] bg-purple-500 text-white rounded-lg'>Delete</button></th>
                    <th className=' py-[10px]'>S.No</th>
                    <th className=' py-[10px]'>Order Id</th>
                    <th className=' py-[10px]'>Name</th>
                    <th className=' py-[10px]'>Quantity</th>
                    <th className=' py-[10px]'>Price</th>
                    <th className=' py-[10px]'>Date</th>
                    <th className=' py-[10px]'>Time</th>
                    <th className=' py-[10px]'>Status</th>
                    <th className=' py-[10px]'>View</th>
                </tr>
              </thead>
              <tbody>
                {orderData.length>0?
                        orderData.map((item,index)=>{
                          let{updatedAt,orderAmount,orderQty,orderStatus,orderTime,orderUser,_id}=item;
                           String(updatedAt);
                          return(
                            <React.Fragment key={index}>
                                 <tr className='text-center'>
                                     <td className='py-[10px]'><input type="checkbox" className='w-[18px] h-[25px]' /></td>
                                     <td className='py-[10px]'>{index+1}</td>
                                     <td className='py-[10px]'>{_id}</td>
                                     <td className='py-[10px]'>{orderUser?.userName}</td>
                                     <td className='py-[10px]'>{orderQty}</td>
                                     <td className='py-[10px]'>{orderAmount}</td>
                                     <td className='py-[10px]'>{updatedAt.slice(0,10)}</td>
                                     <td className='py-[10px]'>{orderTime}</td>
                                     <td className='py-[10px]'>{orderStatus}</td>
                                     <td className='py-[10px]'><button className='p-[5px_12px] rounded-full border hover:text-blue-600 cursor-pointer' onClick={()=>{
                                      setOrderDetail(true);
                                      setId(_id);
                                       }}>View</button></td>
                                 </tr>
                            </React.Fragment>
                          )
                        })
                 : 
                     <tr className='text-center'>
                          <td colSpan={9} className='py-2  text-[20px] '>Cart is Empty.........</td>
                         </tr>
                }    
              </tbody>
          </table>
       </div>
    </>
  )
}
