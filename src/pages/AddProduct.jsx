import axios from "axios";
import { useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

export default function AddProduct() {
    let apiUrl = import.meta.env.VITE_APIURL;
    let [productImage, setProductImage] = useState('');
    let [productBackImage, setProductBackImage] = useState('');
    let [galleryImage, setGalleyImage] = useState([]);
    let [category, setCategory] = useState([]);
    let [subCategory, setSubCategory] = useState([]);
    let [subSubCategory, setSubSubCategory] = useState([]);
    let [material, setMaterial] = useState([]);
    let [color, setColor] = useState([]);
    let [update, setUpdate] = useState({
        parentCategory: '',
        productActualPrice: '',
        productBackImage: '',
        productBestSelling: '',
        productDescription: '',
        productImage: '',
        productName: '',
        productOrder: '',
        productSalePrice: '',
        productStock: '',
        productTopRated: '',
        productType: '',
        productUpSell: '',
        subCategory: '',
        subSubCategory: ''

    })
    let navigate = useNavigate(null);

    let { id } = useParams();


    let insertData = (event) => {
        event.preventDefault();
        let form = new FormData(event.target);

        if(id){
            axios.put(`${apiUrl}/product/update/${id}`,form)
            .then(res=>{
                if(res.data.status==1){
                    toast.success(res.data.msg,{position:"top-center",theme:"dark",autoClose:1500});
                    setTimeout(()=>{
                         navigate('/viewproduct');
                    },2000)
                }
            })
            .catch(err=>{
                console.log(err);
            })
        }
        else{
        axios.post(`${apiUrl}/product/insert`, form)
            .then(res => {
                console.log(res);
                if (res.data.status) {
                    toast.success(res.data.msg, {
                        position: "top-center",
                        theme: "dark",
                        autoClose: 1500
                    })
                    setProductImage('');
                    setProductBackImage('');
                    setGalleyImage([]);
                    setTimeout(() => {
                        navigate('/viewproduct');
                    }, 1500)
                    event.target.reset();
                }
                else {
                    toast.error(res.data.msg, {
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
        axios.get(`${apiUrl}/product/parentCategory`)
            .then(res => {
                setCategory(res.data.parentCategory);
            })
            .catch(err => {
                console.log(err);
            })
    }

    let getSubCategory = (pid) => {
        axios.get(`${apiUrl}/product/subCategory/${pid}`)
            .then((res) => {
                setSubCategory(res.data.subCategory);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    let getSubSubCategory = (pid) => {
        axios.get(`${apiUrl}/product/subSubCategory/${pid}`)
            .then((res) => {
                setSubSubCategory(res.data.subSubCategory);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    let productMaterial = () => {
        axios.get(`${apiUrl}/product/material`)
            .then((res) => {
                setMaterial(res.data.productMaterial);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    let productColor = () => {
        axios.get(`${apiUrl}/product/color`)
            .then((res) => {
                setColor(res.data.productColor);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    let getProductData = () => {
        axios.get(`${apiUrl}/product/getproduct`, {
            params: {
                id
            }
        })
            .then((res) => {
                console.log(res);
                if (res.data.status == 1) {
                    setUpdate(prev => {
                        return {
                            ...prev,
                            parentCategory:  res.data.getProduct.parentCategory,
                            productActualPrice:  res.data.getProduct.productActualPrice,
                            productBackImage:  res.data.getProduct.productBackImage,
                            productBestSelling:  res.data.getProduct.productBestSelling,
                            productDescription:  res.data.getProduct.productDescription,
                            productImage:  res.data.getProduct.productImage,
                            productName:  res.data.getProduct.productName,
                            productOrder:  res.data.getProduct.productOrder,
                            productSalePrice: res.data.getProduct.productSalePrice,
                            productStock: res.data.getProduct.productStock,
                            productTopRated:  res.data.getProduct.productTopRated,
                            productType:  res.data.getProduct.productType,
                            productUpSell:  res.data.getProduct.productUpSell,
                            subCategory:  res.data.getProduct.subCategory,
                            subSubCategory:  res.data.getProduct.subSubCategory
                        }
                    })
                    setProductImage(res.data.imagePath+res.data.getProduct.productImage);
                    setProductBackImage(res.data.imagePath+res.data.getProduct.productBackImage);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        parentCategory();
        productMaterial();
        productColor();
        if (id) {
            getProductData();
        }
    }, [])

    useEffect(()=>{
      if(update.parentCategory!=''){
        getSubCategory(update.parentCategory);
      }
      if(update.subCategory!=''){
        getSubSubCategory(update.subCategory)
      }
    },[update])

    return (
        <>
            <ToastContainer />
            <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Product</p>
                <p>/</p>
                <p>Product Details</p>
            </div>
            <div className='w-full p-[40px_15px] bg-white'>
                <form className='' enctype="multipart/form-data" onSubmit={insertData}>
                    <div className='grid grid-cols-[35%_auto] gap-[15px]'>
                        <div className=''>
                            <div className='mb-[20px]'>
                                <p className='font-semibold block'>Product Image</p>
                                <label htmlFor="productImage">
                                    <div className=' border-2 border-[black] relative cursor-pointer w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                        <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                                        <span className='text-center'>Upload</span>
                                        {productImage ?
                                            <div className="absolute top-0 left-0 w-full h-full">
                                                <img src={productImage} className="w-full h-full" />
                                            </div>
                                            : ''
                                        }
                                    </div>
                                </label>
                                <input type='file' className='hidden' id="productImage" name="productImage" onChange={(e) => {
                                    let file = e.target.files[0];
                                    const imageUrl = URL.createObjectURL(file);
                                    setProductImage(imageUrl);
                                }} />
                            </div>
                            <div className='mb-[20px]'>
                                <p className='font-semibold block'>Back Image</p>
                                <label htmlFor="productBackImage">
                                    <div className=' border-2 border-[black] relative cursor-pointer w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                        <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                                        <span className='text-center'>Upload</span>
                                        {productBackImage ?
                                            <div className="absolute top-0 left-0 w-full h-full">
                                                <img src={productBackImage} className="w-full h-full" />
                                            </div>
                                            : ''
                                        }
                                    </div>
                                </label>
                                <input type='file' className='hidden' id="productBackImage" name="productBackImage" onChange={(e) => {
                                    let file = e.target.files[0];
                                    let imageUrl = URL.createObjectURL(file);
                                    setProductBackImage(imageUrl);
                                }} />
                            </div>
                            <div className='mb-[20px]'>
                                <p className='font-semibold block'>Gallery Image</p>
                                <label htmlFor="galleryImage">
                                    <div className=' relative cursor-pointer w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                        {galleryImage.length >= 1 ? '' :
                                            <>
                                                <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                                                <span className='text-center'>Upload</span>
                                            </>
                                        }
                                        <div className="absolute top-0 left-0 w-full h-full flex gap-[10px] flex-wrap ">
                                            {galleryImage.map((item, index) => {
                                                let imageUrl = URL.createObjectURL(item);
                                                console.log(imageUrl);
                                                return (
                                                    <img src={imageUrl} className="w-[80px] h-[50px] border border-[black]" key={index} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </label>
                                <input type='file' className='hidden' id="galleryImage" name="productGallery" multiple onChange={(e) => {
                                    let file = Array.from(e.target.files);
                                    let url = file.map(item => item);
                                    setGalleyImage(url);
                                }} />
                            </div>
                        </div>
                        <div className=''>
                            <div className='grid grid-cols-2 gap-[10px]'>
                                <div className=''>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Product Name</label>
                                        <input type='text' name='productName' className='w-[100%] border p-[5px_10px] rounded-lg mt-[5px]' placeholder='Product Name' value={update.productName} onChange={(e)=>{
                                            setUpdate(prev=>{
                                                return {...prev,productName:e.target.value};
                                            })
                                        }} />
                                    </div>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Select Sub Category</label>
                                        <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' value={update.subCategory} name='productSubCategory' onChange={(e) => {
                                            getSubSubCategory(e.target.value);
                                            setUpdate(prev=>{
                                                return {...prev,subCategory:e.target.value};
                                            })
                                            console.log(e.target.value);
                                        }
                                        }>
                                            <option>Select Category</option>
                                            {subCategory.map((item, index) => {
                                                let { _id, subCategoryName } = item;
                                                return (
                                                    <option value={_id} key={index}>{subCategoryName}</option>
                                                )
                                            }
                                            )}
                                        </select>
                                    </div>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Material Type</label>
                                        <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productMaterial[]' multiple onChange={(e) => {
                                            console.log(e.target.value);
                                        }}>
                                            <option>Nothing Seleted</option>
                                            {material.map((item, index) => {
                                                let { _id, materialName } = item;
                                                return (
                                                    <option value={_id} key={index}>{materialName}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Select Product Type</label>
                                        <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' value={update.productType} name='productType' onChange={(e) => {
                                            console.log(e.target.value);
                                            setUpdate(prev=>{
                                                return{...prev,productType:e.target.value}
                                            })
                                        }}>
                                            <option>Nothing Selected</option>
                                            <option value="0">Featured</option>
                                            <option value="1">New Arrivals</option>
                                            <option value="2">On Sale</option>
                                        </select>
                                    </div>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Is top Rated</label>
                                        <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' value={update.productTopRated} name='productTopRated' onChange={(e) => {
                                            console.log(e.target.value);
                                            setUpdate(prev=>{
                                                return{...prev,productTopRated:e.target.value}
                                            })
                                        }}>
                                            <option>Nothing Selected</option>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Actual Price</label>
                                        <input type="number" name='productPrice' className='w-[100%] border p-[5px_10px] rounded-lg mt-[5px]' placeholder='Actual Prie' value={update.productActualPrice} onChange={(e)=>{
                                            setUpdate(prev=>{
                                                return{...prev,productActualPrice:e.target.value}
                                            })
                                        }} />
                                    </div>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Total in Stocks</label>
                                        <input type='number' name='productStock' className='w-[100%] border p-[5px_10px] rounded-lg mt-[5px]' placeholder='Total in Stock' value={update.productStock} onChange={(e)=>{
                                            setUpdate(prev=>{
                                                return{...prev,productStock:e.target.value}
                                            })
                                        }} />
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Select Parent Category</label>
                                        <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' value={update.parentCategory} name='productParentCategory' onChange={(e) => {
                                            getSubCategory(e.target.value);
                                            setUpdate(prev=>{
                                                return {...prev,parentCategory:e.target.value};
                                            })
                                            console.log(e.target.value);
                                        }}>
                                            <option>Nothing Selected</option>
                                            {category.map((item, index) => {
                                                let { _id, categoryName } = item;
                                                return (
                                                    <option value={_id} key={index}>{categoryName}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Select Sub Sub Category</label>
                                        <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productSubSubCategory' value={update.subSubCategory} onChange={(e) => {
                                            console.log(e.target.value);
                                            setUpdate(prev=>{
                                                return {...prev,subSubCategory:e.target.value}
                                            })
                                        }}>
                                            <option>Nothing Selected</option>
                                            {subSubCategory.map((item, index) => {
                                                let { _id, subSubCategoryName } = item;
                                                return (
                                                    <option value={_id} key={index}>{subSubCategoryName}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Select Color</label>
                                        <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productColor[]' multiple onChange={(e) => {
                                            console.log(e.target.value);
                                        }}>
                                            <option>Nothing Selected</option>
                                            {color.map((item, index) => {
                                                let { _id, colorName } = item;
                                                return (
                                                    <option value={_id} key={index}>{colorName}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Is Best Selling</label>
                                        <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productSelling' value={update.productBestSelling} onChange={(e) => {
                                            console.log(e.target.value);
                                            setUpdate(prev=>{
                                                return{...prev,productBestSelling:e.target.value}
                                            })
                                        }}>
                                            <option>Nothing Selected</option>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Is Up Sell</label>
                                        <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productUpSell' value={update.productUpSell} onChange={(e) => {
                                            console.log(e.target.value);
                                            setUpdate(prev=>{
                                                return{...prev,productUpSell:e.target.value}
                                            })
                                        }}>
                                            <option>Nothing Selected</option>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Sales Price</label>
                                        <input type='number' name='productSalesPrice' className='w-[100%] border p-[5px_10px] rounded-lg mt-[5px]' placeholder='Sales Prie' value={update.productSalePrice} onChange={(e)=>{
                                            setUpdate(prev=>{
                                                return{...prev,productSalePrice:e.target.value}
                                            })
                                        }} />
                                    </div>
                                    <div className='mb-[20px]'>
                                        <label className='font-semibold'>Order</label>
                                        <input type='number' name='productOrder' className='w-[100%] border p-[5px_10px] rounded-lg mt-[5px]' placeholder='Order' value={update.productOrder} onChange={(e)=>{
                                            setUpdate(prev=>{
                                                return{...prev,productOrder:e.target.value}
                                            })
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-[80px]'>
                        <label className='font-semibold'>Description</label>
                        <textarea className='w-[100%] resize-none mt-[10px] border h-[200px] ps-[10px   ]' placeholder='Enter Description' name='productDescription' value={update.productDescription} onChange={(e)=>{
                            setUpdate(prev=>{
                                                return{...prev,productDescription:e.target.value}
                                            })
                        }}></textarea>
                    </div>
                    <button className='p-[8px_15px] text-white bg-purple-500 mt-[20px] rounded-lg'>{id ? "Update" : "Create Product"}</button>
                </form>

            </div>
        </>
    )
}
