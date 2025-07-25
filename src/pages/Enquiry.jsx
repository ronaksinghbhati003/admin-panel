import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdEdit, MdFilterAltOff } from "react-icons/md";
export default function Enquiry() {
    const apiUrl = import.meta.env.VITE_APIURL;
    let [show, setShow] = useState(false);
    const [enquiryData, setEnquiryData] = useState([]);
    const getData = async () => {
        const result = await axios.get(`${apiUrl}/userenquiry/viewenquiry`);
        const data = result.data;
        setEnquiryData(data.viewData);

    }
    useEffect(() => {
        getData();
        return () => console.log("Component UnMount");
    }, []);
    return (
        <>
            <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Enquiry</p>
                <p>/</p>
                <p>View</p>
            </div>

            <div className='w-[100%] p-[20px_10px]'>
                {
                    show ?
                        <div className='p-[20px_10px] border rounded-lg  mb-[25px] bg-gray-300 '>
                            <form className='flex items-center gap-[10px]'>
                                <input type='text' className='w-[350px] pl-2 py-[8px] rounded-[5px] bg-[#374151] text-white font-semibold' placeholder='Serach Name' name="enquiry" />
                                <FaMagnifyingGlass className='text-[40px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]' />
                            </form>
                        </div> : " "
                }
                <div className=''>
                    <div className='flex justify-between border p-[15px_10px] rounded-lg bg-[#F1F5F9]'>
                        <h1 className='text-[25px] font-semibold'>Contact Enquiry Management</h1>
                        <div className='flex items-center gap-[10px]'>
                            {show ? <MdFilterAltOff className='p-[8px_8px] text-[35px] bg-[#2563EB] rounded-lg text-white cursor-pointer ' onClick={() => setShow(!show)} /> : <FaFilter className='p-[8px_8px] text-[35px] bg-[#2563EB] rounded-lg text-white cursor-pointer ' onClick={() => setShow(!show)} />}
                            <button className='p-[8px_15px] bg-[#15803D] text-white text-[18px] rounded-lg cursor-pointer'>Change Status</button>
                            <button className='p-[8px_10px] bg-[#B91C1C] text-white text-[18px] rounded-lg cursor-pointer'>Delete</button>
                        </div>
                    </div>
                    <div className='rounded-lg overflow-hidden'>
                        <table className='w-[100%]'>
                            <thead className='' bgcolor='#374151'>
                                <tr>
                                    <th className='border p-[10px_10px] text-gray-400 font-normal'> <input type='checkbox' /></th>
                                    <th className='border p-[10px_10px] text-gray-400 font-normal'> User Info</th>
                                    <th className='border p-[10px_10px] text-gray-400 font-normal'>Subject</th>
                                    <th className='border p-[10px_10px] text-gray-400 font-normal'>Message</th>
                                    <th className='border p-[10px_10px] text-gray-400 font-normal'>Status</th>
                                    <th className='border p-[10px_10px] text-gray-400 font-normal'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='' bgcolor="#1F2937">
                                {enquiryData.length > 0 ?
                                    enquiryData.map((item, index) => {
                                        const{userEmail,userMessage,userName,userNumber,userSubject}=item;
                                        return (
                                            <React.Fragment key={index}>
                                                <tr className='text-center'>
                                                    <td className=' p-[30px_10px] text-white'><input type='checkbox' /></td>
                                                    <td className=' p-[30px_10px] text-white'>{userName}</td>
                                                    <td className=' p-[30px_10px] text-gray-400 text-[14px]'>{userSubject}</td>
                                                    <td className=' p-[30px_10px] text-gray-400'>{userMessage}</td>
                                                    <td className=' p-[30px_10px] text-white'><button className='p-[5px_20px] text-white bg-[#22C35D] rounded-lg cursor-pointer'>Active</button></td>
                                                    <td className=' p-[30px_10px] text-white'><MdEdit className='p-[5px_10px] text-[40px] bg-[#1D4ED8] rounded-[100%] cursor-pointer' /></td>
                                                </tr>
                                            </React.Fragment>
                                        )
                                    })
                                    :
                                    <tr className='text-center'>
                                        <td colSpan={6}>Data is Empty</td>
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
