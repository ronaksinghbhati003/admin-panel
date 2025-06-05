import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdEdit, MdFilterAltOff } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { routePath } from './Config';
export default function ViewSlider() {
    let[show,setShow]=useState(false);
    let[data,setData]=useState([]);
    let[selectId,setSelectId]=useState([]);
    let[path,setPath]=useState('');
    let[find,setfind]=useState('');
    let getData=()=>{
        axios.get(`${routePath}/slider/view`,{
            params:{
                find
            }
        })
        .then(res=>{
            console.log(res);
            setData(res.data.viewData);
            setPath(res.data.sliderImagePath);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    let activeUpdate=(id,status)=>{
         axios.put(`${routePath}/slider/active`,{
                id,
                status
         })
         .then(res=>{
             toast.success(res.data.msg,{
                position:"top-center",
                theme:"dark",
                autoClose:1500
             })
             getData();
         })
         .catch(err=>{
            console.log(err);
         })
    }
  
    let allDataSelect=(event)=>{
        if(event.target.checked){
            setSelectId(data.map(item=>item._id));
        }
        else{
            setSelectId([]);
        }
    }

     let handleChange=(event)=>{
         if(event.target.checked){
            setSelectId([...selectId,event.target.value])
         }
         else{
            setSelectId(selectId.filter(item=>item!=event.target.value));
         }
    }

     let deleteAll=()=>{
        axios.post(`${routePath}/slider/delete`,{
            ids:selectId
        })
        .then(res=>{
            setSelectId([]);
            getData();
            toast.success(res.data.msg,{
                position:"top-center",
                theme:"dark",
                autoClose:1500
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        if(find=='')getData()
    },[find]);
  return (
    <>
    <ToastContainer/>
     <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Slider</p>
                <p>/</p>
                <p>View</p>
        </div>
        <div className='w-[100%] p-[20px_10px]'>
                                          {
                                              show ?
                                                  <div className='p-[20px_10px] border rounded-lg  mb-[25px] bg-gray-300 '>
                                                      <form className='flex items-center gap-[10px]'>
                                                          <input type='text' className='w-[350px] pl-2 py-[8px] rounded-[5px] bg-[#374151] text-white font-semibold' placeholder='Serach Name' name="viewCategory" value={find} onChange={(e)=>{
                                                            setfind(e.target.value);
                                                          }} />
                                                          <FaMagnifyingGlass className='text-[40px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]' onClick={getData} />
                                                      </form>
                                                  </div> : " "
                                          }
                                          <div className=''>
                                              <div className='flex justify-between border p-[15px_10px] rounded-lg bg-[#F1F5F9]'>
                                                  <h1 className='text-[25px] font-semibold'>View Slider</h1>
                                                  <div className='flex items-center gap-[10px]'>
                                                      {show ? <MdFilterAltOff className='p-[8px_8px] text-[35px] bg-[#2563EB] rounded-lg text-white cursor-pointer ' onClick={() => setShow(!show)} /> : <FaFilter className='p-[8px_8px] text-[35px] bg-[#2563EB] rounded-lg text-white cursor-pointer ' onClick={() => setShow(!show)} />}
                                                      <button className='p-[8px_15px] bg-[#15803D] text-white text-[18px] rounded-lg cursor-pointer'>Change Status</button>
                                                      <button className='p-[8px_10px] bg-[#B91C1C] text-white text-[18px] rounded-lg cursor-pointer' onClick={deleteAll}>Delete</button>
                                                  </div>
                                              </div>
                                              <div className='rounded-lg overflow-hidden'>
                                                  <table className='w-[100%]'>
                                                      <thead className='' bgcolor='#374151'>
                                                          <tr>
                                                              <th className='border p-[10px_10px] text-gray-400 font-normal'> <input type='checkbox' checked={data.length==selectId.length&&data.length>=1&&selectId.length!=1} onChange={allDataSelect}/></th>
                                                              <th className='border p-[10px_10px] text-gray-400 font-normal w-[600px] text-left'>Name</th>
                                                              <th className='border p-[10px_10px] text-gray-400 font-normal'>Image</th>
                                                              <th className='border p-[10px_10px] text-gray-400 font-normal'>Order</th>
                                                              <th className='border p-[10px_10px] text-gray-400 font-normal'>Status</th>
                                                              <th className='border p-[10px_10px] text-gray-400 font-normal'>Action</th>
                                                          </tr>
                                                      </thead>
                                                      <tbody className='' bgcolor="#1F2937">

                                                        {
                                                            data.length>=1?
                                                            data.map((item,index)=>{
                                                                let{sliderTitle,sliderOrder,sliderStatus,_id,sliderImage}=item;
                                                                return(
                                                                    <>
                                                                 <tr className='text-center' key={index}>
                                                                      <td className=' p-[30px_10px] text-white'><input type='checkbox' value={_id} checked={selectId.includes(_id)} onChange={handleChange} /></td>
                                                                      <td className=' p-[30px_10px] text-white text-left'>{sliderTitle}</td> 
                                                                      <td className=' p-[30px_10px] text-gray-400 flex justify-center'>
                                                                           <img src={path+sliderImage} width="40" height="40" />
                                                                      </td>                                        
                                                                      <td className=' p-[30px_10px] text-gray-400'>{sliderOrder}</td>
                                                                      <td className=' p-[30px_10px] text-white'><button className={`p-[5px_20px] text-white ${sliderStatus?"bg-[#22C35D]":'bg-red-500'}  rounded-lg cursor-pointer`} onClick={()=>activeUpdate(_id,!sliderStatus)}>{sliderStatus?"Active":"Deactive"}</button></td>
                                                                      <td className=' p-[30px_10px] text-white'><Link to={`/updateslider/${_id}`}><MdEdit className='p-[5px_10px] text-[40px] bg-[#1D4ED8] rounded-[100%] cursor-pointer' /></Link></td>
                                                                 </tr>
                                                                     </>                                         
                                                               )
                                                            })
                                                            :
                                                             <tr className='text-center'>
                                                              <td colSpan={6} className='py-2 text-white text-[20px] '>Cart is Empty.........</td>
                                                            </tr>
                                                        }
                                                          
                                                      </tbody>
                          
                                                  </table>
                                              </div>
                                          </div>
                                      </div>
                          
    </>
  )
}
