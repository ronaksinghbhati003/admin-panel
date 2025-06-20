import axios from 'axios';
import { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import ResponsivePagination from 'react-responsive-pagination';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function ViewProduct() {
    let [currentPage, setCurrentPage] = useState(1);
    let [totalPages, setTotalPages] = useState(0);
    let [showmodal, setShowModal] = useState(false);
    let [productView, setProductView] = useState([]);
    let [image, setImage] = useState('');
    let [oneProduct, setOneProduct] = useState(null);
    let [select, setSelect] = useState([]);
    let apiUrl = import.meta.env.VITE_APIURL;
    let getData = () => {
        axios.get(`${apiUrl}/product/view`,{
            params:{
                currentPage
            }
        })
            .then((res) => {
                console.log(res);
                setProductView(res.data.productView);
                setImage(res.data.productImage);
                setTotalPages(res.data.totalPages);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    let productDetail = (id) => {
        axios.get(`${apiUrl}/product/productdetail/${id}`)
            .then((res) => {
                console.log(res);
                setOneProduct(res.data.productDetail);
                setShowModal(!showmodal);
            })
            .catch((err) => {
                console.log(err);
            })

    }

    let handleChange = (e) => {
        if (e.target.checked) {
            setSelect(prev => [...prev, e.target.value]);
        }
        else {
            setSelect(prev => prev.filter(item => item != e.target.value));
        }
    }

    let deleteProduct = () => {
        axios.delete(`${apiUrl}/product/productdelete`, {
            data: {
                id: select
            }
        })
            .then(res => {
                if (res.data.status == 1) {
                    toast.success(res.data.msg, { position: "top-center", theme: "dark", autoClose: 1500 })
                    setSelect([]);
                    getData();
                }
                else{
                     toast.warning(res.data.msg, { position: "top-center", theme: "dark", autoClose: 1500 })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    let updateStatus=(id,value)=>{
        axios.put(`${apiUrl}/product/productstatus`,{
            id,
            value
        })
        .then((res)=>{
            if(res.data.status==1){
                toast.success(res.data.msg,{position:"top-center",theme:"dark",autoClose:1500});
                getData();
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }


    useEffect(() => {
        getData();
    }, [currentPage])
    return (
        <>
            <ToastContainer />
            <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Product</p>
                <p>/</p>
                <p>Product Items</p>
            </div>
            <div className='w-full mt-[40px] bg-white rounded-lg'>
                <h1 className='text-[30px] py-[10px]  font-semibold rounded-t-lg border-b bg-[#F1F5F9]'><span className='ps-[10px]'>Prodct Items</span></h1>
                <table className='w-[100%] border mt-[1px]'>
                    <thead className='bg-[#F9FAFB]'>
                        <tr className='text-center'>
                            <th className='p-[5px_10px] border'>Delete</th>
                            <th className='p-[5px_10px] border'>S.No</th>
                            <th className='p-[5px_10px] border'>Product Name</th>
                            <th className='p-[5px_10px] border w-[250px]'>Description</th>
                            <th className='p-[5px_10px] border w-[250px]'>Short Description</th>
                            <th className='p-[5px_10px] border'>Thumbnails</th>
                            <th className='p-[5px_10px] border'>Action</th>
                            <th className='p-[5px_10px] border'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productView.map((item, index) => {
                            let { productName, productDescription, productImage, productStatus, _id } = item;
                            return (
                                <tr className='text-center'>
                                    <td className='p-[5px_10px]'><input type="checkbox" value={_id} checked={select.includes(_id)} onChange={handleChange} /></td>
                                    <td className='p-[5px_10px]'>{(currentPage-1)*10+index+1}</td>
                                    <td className='p-[5px_10px]'>{productName}</td>
                                    <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>{productDescription}</div><div className='text-left text-blue-600 cursor-pointer' onClick={() => productDetail(_id)}>Read More</div></td>
                                    <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>{productDescription}</div><div className='text-left text-blue-600 cursor-pointer' onClick={() => productDetail(_id)}>Read More</div></td>
                                    <td className='p-[5px_10px]  flex justify-center'>
                                        <img src={image + productImage} className='w-[80px] h-[80px] rounded-lg' />
                                    </td>
                                    <td className='p-[5px_10px]'><div className=' flex items-center gap-[5px] justify-center'><MdDelete className='text-red-500 text-[20px] cursor-pointer' onClick={deleteProduct} />|<Link to={`/updateproduct/${_id}`}><CiEdit className='text-yellow-500 text-[20px] cursor-pointer' /></Link></div></td>
                                    <td><div className={`${productStatus ? 'bg-green-500' : 'bg-red-500'} p-[5px_10px] mr-2 rounded-2xl cursor-pointer`} onClick={()=>updateStatus(_id,!productStatus)}>{productStatus ? "Active" : "Deactive"}</div></td>
                                </tr>
                            )
                        })}


                        {/*<tr className='text-center'>
                        <td className='p-[5px_10px]'><input type="checkbox"/></td>
                        <td className='p-[5px_10px]'>2</td>
                        <td className='p-[5px_10px]'>Men's</td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]  flex justify-center'>
                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-[80px] h-[80px] rounded-lg' />
                        </td>
                        <td className='p-[5px_10px]'><div className=' flex items-center gap-[5px] justify-center'><MdDelete className='text-red-500 text-[20px]'/>|<CiEdit className='text-yellow-500 text-[20px]'/></div></td>
                        <td>Active</td>
                    </tr>
                    <tr className='text-center'>
                        <td className='p-[5px_10px]'><input type="checkbox"/></td>
                        <td className='p-[5px_10px]'>3</td>
                        <td className='p-[5px_10px]'>Men's</td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]  flex justify-center'>
                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-[80px] h-[80px] rounded-lg' />
                        </td>
                        <td className='p-[5px_10px]'><div className=' flex items-center gap-[5px] justify-center'><MdDelete className='text-red-500 text-[20px]'/>|<CiEdit className='text-yellow-500 text-[20px]'/></div></td>
                        <td>Active</td>
                    </tr>
                    <tr className='text-center'>
                        <td className='p-[5px_10px]'><input type="checkbox"/></td>
                        <td className='p-[5px_10px]'>4</td>
                        <td className='p-[5px_10px]'>Men's</td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]  flex justify-center'>
                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-[80px] h-[80px] rounded-lg' />
                        </td>
                        <td className='p-[5px_10px]'><div className=' flex items-center gap-[5px] justify-center'><MdDelete className='text-red-500 text-[20px]'/>|<CiEdit className='text-yellow-500 text-[20px]'/></div></td>
                        <td>Active</td>
                    </tr>
                    <tr className='text-center'>
                        <td className='p-[5px_10px]'><input type="checkbox"/></td>
                        <td className='p-[5px_10px]'>5</td>
                        <td className='p-[5px_10px]'>Men's</td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]  flex justify-center'>
                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-[80px] h-[80px] rounded-lg' />
                        </td>
                        <td className='p-[5px_10px]'><div className=' flex items-center gap-[5px] justify-center'><MdDelete className='text-red-500 text-[20px]'/>|<CiEdit className='text-yellow-500 text-[20px]'/></div></td>
                        <td>Active</td>
                    </tr>
                    <tr className='text-center'>
                        <td className='p-[5px_10px]'><input type="checkbox"/></td>
                        <td className='p-[5px_10px]'>6</td>
                        <td className='p-[5px_10px]'>Men's</td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]'><div className='line-clamp-1 text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fuga itaque fugiat assumenda esse placeat? Molestias rerum odit, sapiente architecto dolores ut reprehenderit. Debitis deleniti aliquam expedita illo, eum facere.</div><div className='text-left text-blue-600 cursor-pointer'>Read More</div></td>
                        <td className='p-[5px_10px]  flex justify-center'>
                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className='w-[80px] h-[80px] rounded-lg' />
                        </td>
                        <td className='p-[5px_10px]'><div className=' flex items-center gap-[5px] justify-center'><MdDelete className='text-red-500 text-[20px]'/>|<CiEdit className='text-yellow-500 text-[20px]'/></div></td>
                        <td>Active</td>
                    </tr>
                      */}
                    </tbody>
                </table>
                <ResponsivePagination
                    current={currentPage}
                    total={totalPages}
                    onPageChange={setCurrentPage}
                />

            </div>


            {showmodal ?

                <div className='w-[1320px] fixed top-[10%] left-[50%] translate-x-[-50%] bg-white p-[20px] rounded-lg'>
                    <div className='flex justify-between border-b pb-[15px]'>
                        <h1 className='text-[20px] font-medium'>Product Image's & Price</h1>
                        <RxCross2 className='text-[25px] cursor-pointer' onClick={() => setShowModal(!showmodal)} />
                    </div>
                    <div className='grid grid-cols-[20%_40%_30%] gap-[5%] mt-[20px]'>
                        <div className='bg-white pt-[10px] pb-[10px] shadow-[0px_0px_3px_0.1px_black] pl-[10px] pr-[10px] rounded-lg align-self-start h-[320px] '>
                            <img src={image + oneProduct.productImage} className='w-[100%] h-[300px]' />
                        </div>
                        <div className='shadow-[0px_0px_3px_0.1px_black] flex flex-wrap p-[10px] rounded-lg gap-[10px] h-[500px] overflow-y-scroll'>
                            {oneProduct?.productGallery.map((item, index) => {
                                return (
                                    <img src={image + item} className='w-[140px] h-[180px]' />
                                )
                            })}
                        </div>
                        <div className='shadow-[0px_0px_3px_0.1px_black] p-[10px]'>
                            <h1 className='text-center text-[20px] font-medium'>Product Detail</h1>
                            <ul className='mt-[20px] text-[20px] flex flex-col gap-[5px]'>
                                <li>Price : {oneProduct.productActualPrice}</li>
                                <li>MRP : {oneProduct.productSalePrice}</li>
                                <li>Stock :{oneProduct.productStock}</li>
                                <li>Brand Name : {oneProduct.productName}</li>
                                <li>Material : {oneProduct.productMaterialType.map(item => {
                                    return (
                                        <span className='ms-2' key={item._id}>{item.materialName}</span>
                                    )
                                })}</li>
                                <li>Color : {oneProduct.productColor.map(item => {
                                    return (
                                        <span className='ms-2' key={item._id}>{item.colorName}</span>
                                    )

                                })}</li>
                            </ul>
                        </div>
                    </div>

                </div>
                :
                " "
            }
        </>
    )
}
