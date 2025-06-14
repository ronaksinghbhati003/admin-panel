import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdEdit, MdFilterAltOff } from "react-icons/md";
import ResponsivePagination from 'react-responsive-pagination';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { routePath } from './Config';
export default function ViewSubSubCategory() {
    let[show,setShow]=useState(false);
    let[data,setData]=useState([]);
    let[path,setPath]=useState('');
    let[selectAll,setSelectAll]=useState([]);
    let[parentCat,setParentCat]=useState([]);
    let[subCat,setSubCat]=useState([])
    let[searchParent,setSearchParent]=useState('');
    let[searchSubCat,setSearchSubCat]=useState('');
    let[searchSubSubCat,setSearchSubSubCat]=useState('');
    let[currentPage,setCurrentPage]=useState(1);
    let[totalPage,setTotalPage]=useState(0);
   let getData=()=>{
      axios.get(`${routePath}/subsubcategory/view`,{
        params:{
            searchParent,
            searchSubCat,
            searchSubSubCat,
            currentPage
        }
      })
      .then(res=>{
        setData(res.data.subSubCatData);
        setPath(res.data.subsubCatPath);
        setTotalPage(res.data.totalPages);
      })
      .catch(err=>{
        console.log(err);
      })
   }

   let allSelect=(e)=>{
        if(e.target.checked){
            setSelectAll(data.map(item=>item._id));
        }
        else{
            setSelectAll([]);
        }
   }

   let handleChange=(e)=>{
    if(e.target.checked){
        setSelectAll([...selectAll,e.target.value]);
    }
    else{
        setSelectAll(selectAll.filter(item=>item!=e.target.value))
    }
   }

   let deleteData=()=>{
           axios.post(`${routePath}/subsubcategory/delete`,{
               ids:selectAll
           })
           .then(res=>{
                let check=res.data.msg.includes("Delete");
                if(check){
                    toast.success(res.data.msg,{
                        position:"top-center",
                        theme:"dark",
                        autoClose:1500
                    })
                    setSelectAll([]);
                    getData();
                }
                else{
                    toast.warning(res.data.msg,{
                        position:"top-center",
                        theme:"dark",
                        autoClose:1500
                    })
                }
           })
   }

   let activeData=(id,status)=>{
    axios.put(`${routePath}/subsubcategory/active/${id}`,{status})
    .then(res=>{
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

   let parentCategory=()=>{
    axios.get(`${routePath}/subsubcategory/parentCategory`)
    .then(res=>{
        setParentCat(res.data.parentData);
    })
    .catch(err=>{
        console.log(err);
    })
   }


   let subCategory=()=>{
    axios.get(`${routePath}/subsubcategory/subCategory/${searchParent}`)
    .then(res=>{
        console.log("ronak");
        console.log(res);
        setSubCat(res.data.subCategoryData);
    })
    .catch(err=>{
        console.log(err);
    })
   }

   useEffect(()=>{
    getData();
    if(searchParent!=''){
       subCategory();
    }
   },[searchParent,searchSubCat,searchSubSubCat,currentPage])

   useEffect(()=>{
      parentCategory();
   },[])

  return (
    <>
     <ToastContainer/>
          <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Sub Sub Category</p>
                <p>/</p>
                <p>View Sub Sub Category</p>
            </div>

            <div className='w-[100%] p-[20px_10px]'>
                                                       {
                                                           show ?
                                                               <div className='p-[20px_10px] border rounded-lg  mb-[25px] bg-gray-300 flex gap-[10px] '>
                                                                       <select className='w-[250px] bg-[#374151] text-white p-[8px_10px] rounded-lg' name="subsubCategoryParent" onChange={(e)=>{
                                                                           
                                                                           if(e.target.value=="Select")
                                                                           {
                                                                            setSearchParent('');
                                                                            setSubCat([]);
                                                                           }
                                                                           else{
                                                                                setSearchParent(e.target.value);

                                                                           }
                                                                           
                                                                        }}>
                                                                          <option value="Select">Select Parent Category</option>
                                                                          {parentCat.map((item,index)=>{
                                                                            return(
                                                                                <>
                                                                                  <option value={item._id} key={index}>{item.categoryName}</option>
                                                                                </>
                                                                            )
                                                                          })}
                                                                       </select>
                                                                       <select className='w-[250px] bg-[#374151] text-white p-[8px_10px] rounded-lg' name="subsubCategory" onChange={(e)=>{
                                                                              if(e.target.value=="Select"){
                                                                                setSearchSubCat('');
                                                                              }
                                                                              else{
                                                                                setSearchSubCat(e.target.value);
                                                                              }
                                                                       }}>
                                                                          <option value="Select">Select Sub Category</option>
                                                                         {subCat.map((item,index)=>{
                                                                            return(
                                                                                <option value={item._id}>{item.subCategoryName}</option>
                                                                            )
                                                                          })}
                                                                       </select>
                                                                    <form className='flex items-center gap-[10px]' onSubmit={(event)=>{
                                                                        event.preventDefault();
                                                                        console.log(event.target.subSubCategoryName.value);
                                                                        setSearchSubSubCat(event.target.subSubCategoryName.value);
                                                                    }}>
                                                                       <input type='text' className='w-[350px] pl-2 py-[8px] rounded-[5px] bg-[#374151] text-white font-semibold' placeholder='Serach Name' name="subSubCategoryName" onChange={e=>{
                                                                        if(e.target.value==''){
                                                                            setSearchSubSubCat('');
                                                                        }
                                                                       }} />
                                                                       <button><FaMagnifyingGlass className='text-[40px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]' /></button>
                                                                   </form>
                                                               </div> : " "
                                                       }
                                                       <div className=''>
                                                           <div className='flex justify-between border p-[15px_10px] rounded-lg bg-[#F1F5F9]'>
                                                               <h1 className='text-[25px] font-semibold'>View Sub Sub Category</h1>
                                                               <div className='flex items-center gap-[10px]'>
                                                                   {show ? <MdFilterAltOff className='p-[8px_8px] text-[35px] bg-[#2563EB] rounded-lg text-white cursor-pointer ' onClick={() => setShow(!show)} /> : <FaFilter className='p-[8px_8px] text-[35px] bg-[#2563EB] rounded-lg text-white cursor-pointer ' onClick={() => setShow(!show)} />}
                                                                   <button className='p-[8px_15px] bg-[#15803D] text-white text-[18px] rounded-lg cursor-pointer'>Change Status</button>
                                                                   <button className='p-[8px_10px] bg-[#B91C1C] text-white text-[18px] rounded-lg cursor-pointer' onClick={deleteData}>Delete</button>
                                                               </div>
                                                           </div>
                                                           <div className='rounded-lg overflow-hidden'>
                                                               <table className='w-[100%]'>
                                                                   <thead className='' bgcolor='#374151'>
                                                                       <tr>
                                                                           <th className='border p-[10px_10px] text-gray-400 font-normal'> <input type='checkbox' checked={selectAll.length==data.length&&data.length>=1&&selectAll.length!=1}  onChange={allSelect}/></th>
                                                                           <th className='border p-[10px_10px] text-gray-400 font-normal'>Sr.No</th>
                                                                           <th className='border p-[10px_10px] text-gray-400 font-normal w-[250px] text-left'>Parent Category</th>
                                                                           <th className='border p-[10px_10px] text-gray-400 font-normal'>Sub Category</th>
                                                                           <th className='border p-[10px_10px] text-gray-400 font-normal'>Sub Sub Category Name</th>
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
                                                                              let{_id,parentCategory,subCategory,subSubCategoryName,subSubCategoryImage,subSubCategoryOrder,subSubCategoryStatus}=item;
                                                                            return(
                                                                                
                                                                                   <tr className='text-center' key={index}>
                                                                                       <td className=' p-[30px_10px] text-white'><input type='checkbox' value={_id} checked={selectAll.includes(_id)}  onChange={handleChange}/></td>
                                                                                       <td className=' p-[30px_10px] text-gray-400'>{(currentPage-1)*10+index+1}</td>
                                                                                       <td className=' p-[30px_10px] text-white text-left'>{parentCategory.categoryName}</td> 
                                                                                       <td className=' p-[30px_10px] text-gray-400'>{subCategory.subCategoryName}</td>
                                                                                       <td className=' p-[30px_10px] text-gray-400'>{subSubCategoryName}</td>
                                                                                       <td className=' p-[30px_10px] text-gray-400 flex justify-center'>
                                                                                            <img src={path+subSubCategoryImage} width="40" height="40" />
                                                                                       </td>                                        
                                                                                       <td className=' p-[30px_10px] text-gray-400'>{subSubCategoryOrder}</td>
                                                                                       <td className=' p-[30px_10px] text-white'><button className={`p-[5px_20px] text-white ${subSubCategoryStatus?"bg-[#22C35D]":"bg-red-500"}  rounded-lg cursor-pointer`} onClick={()=>activeData(_id,!subSubCategoryStatus)}>{subSubCategoryStatus?"Active":"Deactive"}</button></td>
                                                                                       <td className=' p-[30px_10px] text-white'><Link to={`/updatesubsubcategory/${_id}`}><MdEdit className='p-[5px_10px] text-[40px] bg-[#1D4ED8] rounded-[100%] cursor-pointer' /></Link></td>
                                                                                    </tr>
                                                    
                                                                            )
                                                                        })
                                                                        :
                                                                        <tr className='text-center'>
                                                                             <td colSpan={8} className='py-2 text-white text-[20px] '>Cart is Empty.........</td>
                                                                        </tr>       
                                                                    }  
                                                                   </tbody>
                                       
                                                               </table>
                                                               <ResponsivePagination
                                                               current={currentPage}
                                                               total={totalPage}
                                                               onPageChange={setCurrentPage}
                                                                />
                                                           </div>
                                                       </div>
                                                   </div>
    </>  
  )
}
