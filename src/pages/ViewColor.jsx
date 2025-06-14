import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdEdit, MdFilterAltOff } from "react-icons/md";
import ResponsivePagination from 'react-responsive-pagination';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { routePath } from './Config';
export default function ViewColor() {
    let[show,setShow]=useState(false);
    let[data,setData]=useState([]);
    let[selectId,setSelectId]=useState([]);
    let[title,setTitle]=useState({title:'',code:''});
    let[currentPage,setCurrentPage]=useState(1);
    let[totalPages,setTotalPages]=useState(0);
    console.log(totalPages);
    let getData=()=>{
        axios.get(`${routePath}/color/view`,{
            params:{
                title:title.title,
                code:title.code,
                currentPage
             }
        }).
        then((res)=>{
            setData(res.data.viewData);
            setTotalPages(res.data.totalPage);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


     let handleCheck=(event)=>{
       if(event.target.checked){
           if(!selectId.includes(event.target.value))
           {
               setSelectId([...selectId,event.target.value]);
           }
        }
        else{
            setSelectId(selectId.filter(item=>item!=event.target.value));
        }
      /*  if(selectId.includes(id)){
            setSelectId(selectId.filter((item)=>item!=id))
        }
        else{
            setSelectId([...selectId,id])
        }*/
     }

    let deleteAll=()=>{
        axios.delete(`${routePath}/color/delete`,{
            data:{ids:selectId}
        })
        .then(res=>{
            console.log(res);
            toast.success(res.data.msg,{
                position:"top-center",     
                autoClose:"1500",
                draggable:true,
                closeOnClick:true,
                theme:"dark"
            })
            setSelectId([]);
             getData();
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    let allSelect=(e)=>{
      if(e.target.checked){
           let allId=data.map(item=>item._id);
           setSelectId(allId); 
       }
      else{
            setSelectId([])
        }
         
     }


    /*let searchColor=(event)=>{
       if(event.target.value.trim()){
          axios.get(`${routePath}/color/view?findColor=${event.target.value}`)
          .then(res=>{
            setData(res.data.findData);
          })
       }
       else{
        getData();
       }
    }*/

    let updateStatus=(id,status)=>{
        axios.put(`${routePath}/color/active`,{
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
    useEffect(()=>{
        if(typeof title=="object")
        {
           if(title.title==''&&title.code=='')
           {
            getData();
           }
            
        }
        
    },[title,currentPage])
    return (
        <>
        <ToastContainer/>
            <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Color</p>
                <p>/</p>
                <p>view</p>
            </div>

            <div className='w-[100%] p-[20px_10px]'>
                {
                    show ?
                        <div className='p-[20px_10px] border rounded-lg  mb-[25px] bg-gray-300 '>
                            <form className='flex items-center gap-[10px]'>
                                <input type='text' className='w-[350px] pl-2 py-[8px] rounded-[5px] bg-[#374151] text-white font-semibold' placeholder='Serach Name' name="searchColor" onChange={(e)=>{
                                        setTitle({...title,title:e.target.value});
                                    
                                }}  />
                                 <input type='text' className='w-[350px] pl-2 py-[8px] rounded-[5px] bg-[#374151] text-white font-semibold' placeholder='Serach Code' name="searchColor" onChange={(e)=>{
                                        setTitle({...title,code:e.target.value});
                                    
                                }}  />
                                <FaMagnifyingGlass className='text-[40px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]' onClick={getData} />
                            </form>
                        </div> : " "
                }
                <div className=''>
                    <div className='flex justify-between border p-[15px_10px] rounded-lg bg-[#F1F5F9]'>
                        <h1 className='text-[25px] font-semibold'>View Color</h1>
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
                                    <th className='border p-[10px_10px] text-gray-400 font-normal'> <input type='checkbox' checked={data.length==selectId.length&&data.length>=1} onChange={allSelect}/></th>
                                    <th className='border p-[10px_10px] text-gray-400 font-normal'>Sr.No</th>
                                    <th className='border p-[10px_10px] text-gray-400 font-normal w-[600px] text-left'>Color Name</th>
                                    <th className='border p-[10px_10px] text-gray-400 font-normal'>Code</th>
                                    <th className='border p-[10px_10px] text-gray-400 font-normal'>Order</th>
                                    <th className='border p-[10px_10px] text-gray-400 font-normal'>Status</th>
                                    <th className='border p-[10px_10px] text-gray-400 font-normal'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='' bgcolor="#1F2937">

                                  {data.length>=1?
                                      data.map((item,index)=>{
                                        let{colorName,colorCode,colorStatus,colorOrder,_id}=item;
                                        return(
                                            <tr className='text-center' key={index}>
                                            <td className=' p-[30px_10px] text-white'><input type='checkbox' value={_id} checked={selectId.includes(_id)} onChange={handleCheck}/></td>
                                            <td className=' p-[30px_10px] text-white text-left'>{(currentPage-1)*10+index+1}</td>
                                            <td className=' p-[30px_10px] text-white text-left'>{colorName}</td>
                                            <td className=' p-[30px_10px] text-gray-400 text-[14px]'>{colorCode}</td>
                                            <td className=' p-[30px_10px] text-gray-400'>{colorOrder}</td>
                                            <td className=' p-[30px_10px] text-white'><button className={`p-[5px_20px] text-white ${colorStatus?"bg-[#22C35D]":"bg-red-500"}  rounded-lg cursor-pointer`} onClick={()=>updateStatus(_id,!colorStatus)}>{colorStatus?'Active':'Deactive'}</button></td>
                                            <td className=' p-[30px_10px] text-white'><Link to={`/updatecolor/${_id}`}><MdEdit className='p-[5px_10px] text-[40px] bg-[#1D4ED8] rounded-[100%] cursor-pointer'/></Link></td>
                                        </tr>
                                        )
                                       })
                                        :<tr className='text-center'>
                                            <td colSpan={7} className='py-2 text-white text-[20px] '>Cart is Empty.........</td>
                                        </tr>
                                    }
                                
                                 {/*data.map((item,index)=>{
                                    let{colorName,colorCode,colorStatus,colorOrder,_id}=item;
                                    return(
                                        <tr className='text-center' key={index}>
                                        <td className=' p-[30px_10px] text-white'><input type='checkbox' /></td>
                                        <td className=' p-[30px_10px] text-white text-left'>{colorName}</td>
                                        <td className=' p-[30px_10px] text-gray-400 text-[14px]'>{colorCode}</td>
                                        <td className=' p-[30px_10px] text-gray-400'>{colorOrder}</td>
                                        <td className=' p-[30px_10px] text-white'><button className='p-[5px_20px] text-white bg-[#22C35D] rounded-lg cursor-pointer'>{colorStatus?'Active':'Deactive'}</button></td>
                                        <td className=' p-[30px_10px] text-white'><MdEdit className='p-[5px_10px] text-[40px] bg-[#1D4ED8] rounded-[100%] cursor-pointer'/></td>
                                    </tr>
                                    )
                                })*/}
                                {/*<tr className='text-center'>
                                    <td className=' p-[30px_10px] text-white'><input type='checkbox' /></td>
                                    <td className=' p-[30px_10px] text-white text-left'>Red</td>
                                    <td className=' p-[30px_10px] text-gray-400 text-[14px]'>#43d</td>
                                    <td className=' p-[30px_10px] text-gray-400'>1</td>
                                    <td className=' p-[30px_10px] text-white'><button className='p-[5px_20px] text-white bg-[#22C35D] rounded-lg cursor-pointer'>Active</button></td>
                                    <td className=' p-[30px_10px] text-white'><MdEdit className='p-[5px_10px] text-[40px] bg-[#1D4ED8] rounded-[100%] cursor-pointer' /></td>
                                </tr>
                                <tr className='text-center'>
                                    <td className=' p-[30px_10px] text-white'><input type='checkbox' /></td>
                                    <td className=' p-[30px_10px] text-white text-left'>Blue</td>
                                    <td className=' p-[30px_10px] text-gray-400 text-[14px]'>#2389d54</td>
                                    <td className=' p-[30px_10px] text-gray-400'>5</td>
                                    <td className=' p-[30px_10px] text-white'><button className='p-[5px_20px] text-white bg-[#F35959] rounded-lg cursor-pointer'>Deactive</button></td>
                                    <td className=' p-[30px_10px] text-white'><MdEdit className='p-[5px_10px] text-[40px] bg-[#1D4ED8] rounded-[100%] cursor-pointer' /></td>
                                </tr>*/}
                            </tbody>

                        </table>
                        <ResponsivePagination
                          current={currentPage}
                          total={totalPages}
                          onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}
