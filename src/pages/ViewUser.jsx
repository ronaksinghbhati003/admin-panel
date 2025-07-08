import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdEdit, MdFilterAltOff } from "react-icons/md";
import ResponsivePagination from 'react-responsive-pagination';
import { toast, ToastContainer } from 'react-toastify';

export default function ViewUser() {
  let [show, setShow] = useState(false);
  let [user, setUser] = useState([]);
  let [select, setSelect] = useState([]);
  let [search, setSearch] = useState('');
  let [status, setStatus] = useState(false);
  let[currentPage,setCurrentPage]=useState(1);
  let[totalPages,setTotalPages]=useState(0);
  console.log(select);
  console.log(status);
  let apiUrl = import.meta.env.VITE_APIURL;
  let getData = () => {
    axios.get(`${apiUrl}/user/userview`, {
      params: {
        search,
        currentPage,
      }
    })
      .then((res) => {
        console.log(res);
        setUser(res.data.viewUser);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  let allSelect = (event) => {
    if (event.target.checked) {
      setSelect(user.map((item) => item._id));
    }
    else {
      setSelect([]);
    }
  }

  let handleChange = (event) => {
    if (event.target.checked) {
      setSelect([...select, event.target.value]);
    }
    else {
      setSelect(select.filter(item => item != event.target.value));
    }
  }

  let statusUpdate = (id, status, select, value) => {
    axios.put(`${apiUrl}/user/updatestatus`, {
      id,
      status,
      select,
      value
    })
      .then(res => {
        if (res.data.status == 1) {
          toast.success(res.data.msg, {
            position: "top-center",
            theme: "dark",
            autoClose: 1500
          })
          setSelect([]);
          getData();
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

  let deleteUser = () => {
    axios.delete(`${apiUrl}/user/deleteuser`, {
      data: {
        select
      }
    })
      .then(res => {
        if (select.length >= 1) {
          toast.success(res.data.msg, {
            position: "top-center",
            theme: "dark",
            autoClose: 1500
          })
          getData();
          setSelect([]);
        }
      })
  }
  useEffect(() => {
    if (search == '') getData();
  }, [search, status,currentPage]);

  return (
    <>
      <ToastContainer />
      <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
        <p>Home</p>
        <p>/</p>
        <p>User</p>
        <p>/</p>
        <p>View</p>
      </div>


      <div className='w-[100%] p-[20px_10px]'>
        {
          show ?
            <div className='p-[20px_10px] border rounded-lg  mb-[25px] bg-gray-300 '>
              <form className='flex items-center gap-[10px]'>
                <input type='text' className='w-[350px] pl-2 py-[8px] rounded-[5px] bg-[#374151] text-white font-semibold' placeholder='Serach Name' name="userInfo" value={search} onChange={(e) => setSearch(e.target.value)} />
                <FaMagnifyingGlass className='text-[40px] text-white rounded-lg cursor-pointer bg-[#2563EB] p-[8px_10px]' onClick={getData} />
              </form>
            </div> : " "
        }
        <div className=''>
          <div className='flex justify-between border p-[15px_10px] rounded-lg bg-[#F1F5F9]'>
            <h1 className='text-[25px] font-semibold'>View User</h1>
            <div className='flex items-center gap-[10px]'>
              {show ? <MdFilterAltOff className='p-[8px_8px] text-[35px] bg-[#2563EB] rounded-lg text-white cursor-pointer ' onClick={() => setShow(!show)} /> : <FaFilter className='p-[8px_8px] text-[35px] bg-[#2563EB] rounded-lg text-white cursor-pointer ' onClick={() => setShow(!show)} />}
              <button className='p-[8px_15px] bg-[#15803D] text-white text-[18px] rounded-lg cursor-pointer' onClick={() => {
                statusUpdate(null, null, select, status);
                setStatus(!status);
              }}>Change Status</button>
              <button className='p-[8px_10px] bg-[#B91C1C] text-white text-[18px] rounded-lg cursor-pointer' onClick={deleteUser}>Delete</button>
            </div>
          </div>
          <div className='rounded-lg overflow-hidden'>
            <table className='w-[100%]'>
              <thead className='' bgcolor='#374151'>
                <tr>
                  <th className='border p-[10px_10px] text-gray-400 font-normal'> <input type='checkbox' checked={user?.length == select?.length && user?.length >= 1} onChange={allSelect} /></th>
                  <th className='border p-[10px_10px] text-gray-400 font-normal'>Sr.No</th>
                  <th className='border p-[10px_10px] text-gray-400 font-normal w-[600px] text-left'> Name</th>
                  <th className='border p-[10px_10px] text-gray-400 font-normal'>EMAIL ID</th>
                  <th className='border p-[10px_10px] text-gray-400 font-normal'>Mobile Number</th>
                  <th className='border p-[10px_10px] text-gray-400 font-normal'>Status</th>
                  <th className='border p-[10px_10px] text-gray-400 font-normal'>Action</th>
                </tr>
              </thead>
              <tbody className='' bgcolor="#1F2937">

                {user?.length >= 1 ?
                  user.map((item, index) => {
                    let { userEmail, userName, userNumber, userStatus, _id } = item;
                    return (
                      <tr className='text-center' key={_id}>
                        <td className=' p-[30px_10px] text-white'><input type='checkbox' checked={select.includes(_id)} value={_id} onChange={handleChange} /></td>
                        <td className=' p-[30px_10px] text-white'>{index + 1}</td>
                        <td className=' p-[30px_10px] text-white text-left'>{userName}</td>
                        <td className=' p-[30px_10px] text-gray-400 text-[14px]'>{userEmail}</td>
                        <td className=' p-[30px_10px] text-gray-400'>{userNumber == "" ? "None" : userNumber}</td>
                        <td className=' p-[30px_10px] text-white'><button className={`p-[5px_20px] text-white ${userStatus ? "bg-[#22C35D]" : "bg-red-500"}  rounded-lg cursor-pointer`} onClick={() => statusUpdate(_id, !userStatus)} >{userStatus ? "Active" : "Deactive"}</button></td>
                        <td className=' p-[30px_10px] text-white'><MdEdit className='p-[5px_10px] text-[40px] bg-[#1D4ED8] rounded-[100%] cursor-pointer' /></td>
                      </tr>
                    )
                  })
                  :
                  <tr className='text-center'>
                    <td colSpan={7} className='py-2 text-white text-[20px] '>Cart is Empty.........</td>
                  </tr>
                }
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
