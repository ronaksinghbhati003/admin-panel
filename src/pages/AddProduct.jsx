import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
export default function AddProduct() {
    return (
        <>
            <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Product</p>
                <p>/</p>
                <p>Product Details</p>
            </div>
            <div className='w-full p-[40px_15px] bg-white'>
                <form className=''>
                    <div className='grid grid-cols-[35%_auto] gap-[15px]'>
                        <div className=''>
                            <div className='mb-[20px]'>
                                <p className='font-semibold block'>Product Image</p>
                                <label for="productImage">
                                    <div className='cursor-pointer w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                        <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                                        <span className='text-center'>Drag and Drop</span>
                                    </div>
                                </label>
                                <input type='file' className='hidden' id="productImage" name="productImage" />
                            </div>
                            <div className='mb-[20px]'>
                                <p className='font-semibold block'>Back Image</p>
                                <label for="productBackImage">
                                    <div className='cursor-pointer w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                        <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                                        <span className='text-center'>Drag and Drop</span>
                                    </div>
                                </label>
                                <input type='file' className='hidden' id="productBackImage" name="productBackImage" />
                            </div>
                            <div className='mb-[20px]'>
                                <p className='font-semibold block'>Gallery Image</p>
                                <label for="galleryImage">
                                    <div className='cursor-pointer w-[350px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                                        <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                                        <span className='text-center'>Drag and Drop</span>
                                    </div>
                                </label>
                                <input type='file' className='hidden' id="galleryImage" name="galleryImage" />
                            </div>
                        </div>
                        <div className=''>
                                <div className='grid grid-cols-2 gap-[10px]'>
                                    <div className=''>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Product Name</label>
                                             <input type='text' name='productName' className='w-[100%] border p-[5px_10px] rounded-lg mt-[5px]' placeholder='Product Name' />
                                        </div>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Select Sub Category</label>
                                             <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productCategory'>
                                                  <option>Select Category</option>
                                                  <option value="mobile">Mobile Phones</option>
                                                  <option value="laptop">Laptop</option>
                                                  <option value="mensWear">Men's Wear</option>
                                                  <option value="womenWear">Womens's Wear</option>
                                             </select>
                                        </div>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Material Type</label>
                                             <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productMaterial'>
                                                  <option>Nothing Seleted</option>
                                                  <option value="neem">Neem</option>
                                                  <option value="babul">Babul</option>
                                                  <option value="neem">Neem</option>
                                                  <option value="babul">Babul</option>
                                                  <option value="neem">Neem</option>
                                                  <option value="babul">Babul</option>
                                                  <option value="neem">Neem</option>
                                                  <option value="babul">Babul</option>
                                             </select>
                                        </div>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Select Product Type</label>
                                             <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productType'>
                                                  <option>Nothing Selected</option>
                                                  <option value="feature">Featured</option>
                                                  <option value="newArrivals">New Arrivals</option>
                                                  <option value="onSale">On Sale</option>
                                             </select>
                                        </div>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Is top Rated</label>
                                             <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productTopRated'>
                                                  <option>Nothing Selected</option>
                                                  <option value="yes">Yes</option>
                                                  <option value="no">No</option>
                                            </select>
                                        </div>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Actual Price</label>
                                             <input type='text' name='productPrice' className='w-[100%] border p-[5px_10px] rounded-lg mt-[5px]' placeholder='Actual Prie' />
                                        </div>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Total in Stocks</label>
                                             <input type='text' name='productStock' className='w-[100%] border p-[5px_10px] rounded-lg mt-[5px]' placeholder='Total in Stock' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Select Parent Category</label>
                                             <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productParentCategory'>
                                                  <option>Nothing Selected</option>
                                                  <option value="mobile">Mobile Phones</option>
                                                  <option value="laptop">Laptop</option>
                                                  <option value="mensWear">Men's Wear</option>
                                                  <option value="womenWear">Womens's Wear</option>
                                            </select>
                                        </div>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Select Sub Sub Category</label>
                                             <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productSubSubCategory'>
                                                  <option>Nothing Selected</option>
                                                  <option value="mobile">Mobile Phones</option>
                                                  <option value="laptop">Laptop</option>
                                                  <option value="mensWear">Men's Wear</option>
                                                  <option value="womenWear">Womens's Wear</option>
                                            </select>
                                        </div>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Select Color</label>
                                             <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productColor'>
                                                  <option>Nothing Selected</option>
                                                  <option value="red">Red</option>
                                                  <option value="green">Green</option>
                                                  <option value="blue">Blue</option>
                                                  <option value="gray">Gray</option>
                                            </select>
                                        </div>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Is Best Selling</label>
                                             <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productSelling'>
                                                  <option>Nothing Selected</option>
                                                  <option value="yes">Yes</option>
                                                  <option value="no">No</option>
                                            </select>
                                        </div>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Is Up Sell</label>
                                             <select className='w-[100%] p-[5px_10px] rounded-lg mt-[5px] border' name='productUpSell'>
                                                  <option>Nothing Selected</option>
                                                  <option value="yes">Yes</option>
                                                  <option value="no">No</option>
                                            </select>
                                        </div>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Sales Price</label>
                                             <input type='text' name='productSalesPrice' className='w-[100%] border p-[5px_10px] rounded-lg mt-[5px]' placeholder='Sales Prie' />
                                        </div>
                                        <div className='mb-[20px]'>
                                             <label className='font-semibold'>Order</label>
                                             <input type='text' name='productOrder' className='w-[100%] border p-[5px_10px] rounded-lg mt-[5px]' placeholder='Order' />
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='w-full mt-[80px]'>
                            <label className='font-semibold'>Description</label>
                            <textarea className='w-[100%] resize-none mt-[10px] border h-[200px] ps-[10px   ]' placeholder='Enter Description' name='productDesccription'></textarea>
                    </div>
                    <button className='p-[8px_15px] text-white bg-purple-500 mt-[20px] rounded-lg'>Create Product</button>
                </form>

            </div>
        </>
    )
}
