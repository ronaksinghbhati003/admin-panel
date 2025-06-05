import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { routePath } from "./Config";
export default function AddSubSubCategory() {
    let [image, setImage] = useState('');
    let [parentData, setParentData] = useState([]);
    let [subData, setSubData] = useState([]);
    let navigate = useNavigate();
    let { sid } = useParams();
    let[editParent,setEditParent]=useState('');
    let[subParent,setSubParent]=useState('');
    let[subSubCatName,setSubSubCatName]=useState('');
    let[subSubOrder,setSubSubOrder]=useState('');
    console.log(useParams());
    let insertData = (event) => {
        event.preventDefault();
        let form = new FormData(event.target);

        if (sid) {
            axios.put(`${routePath}/subsubcategory/update/${sid}`, form)
                .then(res => {
                    setImage('');
                    setEditParent('');
                    setSubParent('');
                    setSubSubCatName('');
                    setSubSubOrder('');
                   navigate('/viewSubSubCategory');
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {
            axios.post(`${routePath}/subsubcategory/insert`, form)
                .then(res => {
                    let check = res.data.error == undefined ? true : false;
                    if (check) {
                        event.target.reset();
                        setImage('');
                        navigate('/viewSubSubCategory');
                    }
                    else {
                        toast.warning(res.data.msg, {
                            position: "top-center",
                            theme: "dark",
                            autoClose: 1500
                        })
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }


    }


    let parentCategory = () => {
        axios.get(`${routePath}/subsubcategory/parentCategory`)
            .then(res => {
                setParentData(res.data.parentData);
            })
            .catch(err => {
                console.log(err);
            })
    }

    let subCategory = (id) => {
        axios.get(`${routePath}/subsubcategory/subCategory/${id}`)
            .then(res => {
                console.log(res);
                setSubData(res.data.subCategoryData);
            })
            .catch(err => {
                console.log(err);
            })
    }

     let subSubEditData=()=>{
        axios.get(`${routePath}/subsubcategory/edit/${sid}`)
        .then(res=>{
            console.log(res);
            setEditParent(res.data.editdata[0]["parentCategory"]);
            setSubParent(res.data.editdata[0]["subCategory"]);
            setSubSubCatName(res.data.editdata[0]["subSubCategoryName"]);
            setSubSubOrder(res.data.editdata[0]["subSubCategoryOrder"]);
            setImage(res.data.editImagePath+res.data.editdata[0]["subSubCategoryImage"])
        })
        .catch(err=>{
            console.log(err);
        })
     }

    useEffect(() => {
        parentCategory();
        if(sid){
            subSubEditData();
        }
    }, [])

    useEffect(()=>{
        if(editParent!='')
          subCategory(editParent);
    },[editParent])

    return (
        <>
            <ToastContainer />
            <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Sub Category</p>
                <p>/</p>
                <p>{sid ? 'Update Sub Sub Category' : 'Add Sub Sub Category'}</p>
            </div>
            <div className='my-[20px] p-[10px_10px] bg-white rounded-lg w-[100%] border'>
                <h1 className='p-[10px_10px] text-[25px] font-semibold bg-[#F1F5F9] rounded-lg '>{sid ? 'Update Sub Sub Category' : 'Add Sub Sub Category'}</h1>
                <form className='grid grid-cols-[40%_58%] mt-[10px] gap-[20px]' onSubmit={insertData}>
                    <div className=''>
                        <div className=''>
                            <p className='font-semibold block'>Sub Sub Catergory Image</p>
                            <label htmlFor="subCategoryUpload">
                                <div className=' relative cursor-pointer w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                    <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                                    <span className='text-center'>Upload</span>
                                    {image ? <div className='absolute w-[100%] h-[100%] top-[0] left-[0]'>
                                        <img className='w-[100%] h-[100%]' src={image} />
                                    </div> : ''}
                                </div>
                            </label>
                            <input type='file' className='hidden' id="subCategoryUpload" name="subSubCategoryImage" onChange={(e) => {
                                const File = e.target.files[0];
                                if (File) {
                                    const imageUrl = URL.createObjectURL(File);
                                    setImage(imageUrl);
                                }
                            }} />
                        </div>
                        <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[20px]" >{sid ? 'Update Sub Sub Category' : 'Add Sub Sub Category'}</button>
                    </div>
                    <div className=''>
                        <div className='mb-[20px]'>
                            <label className='font-semibold'>Parent Category Name</label>
                            
                            <select className='w-[100%] p-[8px_10px] text-black border rounded-lg' name='parentCategory' value={editParent} onChange={e => {
                                subCategory(e.target.value);
                                setEditParent(e.target.value);
                            }}>
                                <option>Select Category</option>
                                {
                                    parentData.map((item, index) => {
                                        let { categoryName, _id } = item;
                                        return (
                                              <React.Fragment key={index}>
                                                <option value={_id} >{categoryName}</option>
                                              </React.Fragment> 
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className='mb-[20px]'>
                            <label className='font-semibold'>Sub Category Name</label>
                            <select className='w-[100%] p-[8px_10px] text-black border rounded-lg' name='subCategory' value={subParent} onChange={e => {
                                console.log(e.target.value);
                                setSubParent(e.target.value);
                            }}>
                                <option>Select Category</option>
                                {subData.map((item, index) => {
                                    let { _id, subCategoryName } = item;
                                    return (
                                    
                                            <option value={_id} key={index} >{subCategoryName}</option>
                                        
                                    )
                                })}
                            </select>
                        </div>
                        <div className='mb-[20px]'>
                            <label className='font-semibold'>Category Name</label>
                            <input type='text' name="subSubCategoryName" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Category Name'  value={subSubCatName} onChange={e=>{
                                setSubSubCatName(e.target.value);
                            }}/>
                        </div>
                        <div className='mb-[20px]'>
                            <label className='font-semibold'>Category Name</label>
                            <input type='text' name="subSubCategoryOrder" className='w-[100%] border rounded-lg mt-[8px] p-[8px_10px]' placeholder='Order' value={subSubOrder} onChange={e=>{
                                setSubSubOrder(e.target.value);
                            }} />
                        </div>

                    </div>

                </form>
            </div>

        </>
    )
}
