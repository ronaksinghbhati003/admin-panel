import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    let[empty,setEmpty]=useState({email:"",password:""});
    let handleChange=(e)=>{
        setEmpty({...empty,[e.target.name]:e.target.value})
    }
    let isValid=empty.email&&empty.password;
    console.log(empty)
  return (
      <>
        <div className='w-full h-[100vh] pt-[200px] bg-gradient-to-br from-purple-500 to-pink-500'>
              <div className='max-w-[500px] mx-auto shadow-[0px_0px_10px_1px_black] py-[20px] rounded-[10px] bg-white hover:scale-[1.03] duration-[0.5s]'>
                <div className='flex justify-center'>
                     <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" />
                </div>
                 <form className='p-5'>
                     <h1 className='font-semibold text-[25px]'>Sign in Account</h1>
                     <label className='mb-[10px] inline-block mt-[10px]'>Email</label>
                     <input type='email' className='w-[100%] p-[5px_5px] border rounded-lg' placeholder='Enter Email Address' name='email' onKeyDown={handleChange}/>
                     <label className='mb-[10px] inline-block mt-[10px]'>Password</label>
                     <input type='password' className='w-[100%] p-[5px_5px] border rounded-lg' name='password' onChange={handleChange}/>
                     {!isValid?<div className='text-center text-red-500 mt-[20px]'>Please Enter User Name and Password</div>:
                     <Link to={'/dashboard'}><button className='w-[100%] bg-blue-600 mt-[20px] p-[10px_0px] rounded-lg text-white'>Submit</button></Link>}
                 </form>
              </div>
        </div>
      </>
  )
}
