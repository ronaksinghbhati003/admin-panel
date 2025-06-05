import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginContext } from '../common/MainLayout';
import { routePath } from './Config';
export default function Login() {
   let{user,setUser}=useContext(loginContext);
   console.log(user);
    let[empty,setEmpty]=useState({username:"",password:""});
    let[error,setError]=useState('');
    let navigate=useNavigate();
    let handleChange=(e)=>{
        setEmpty({...empty,[e.target.name]:e.target.value})
    }
    let isValid=empty.username&&empty.password.length>7;
    console.log(isValid); 
    console.log(empty)

    let insertData=(event)=>{
      event.preventDefault();
       axios.post(`${routePath}/insert`,empty)
       .then(res=>{
        console.log(res);
        if(res.data.status==0){
          setError(res.data.msg);
          setTimeout(()=>{
             setError('');
          },2000)
        }
        else{
          setUser(res.data.findAdmin);
          navigate('/dashboard')
        }
       })
       .catch(err=>{
        console.log(err);
       })
    }
    useEffect(()=>{
      if(user){
        navigate('/dashboard')
      }
    },[])
  return (
      <>
        <div className='w-full h-[100vh] pt-[200px] bg-gradient-to-br from-purple-500 to-pink-500'>
              <div className='max-w-[500px] mx-auto shadow-[0px_0px_10px_1px_black] py-[20px] rounded-[10px] bg-white hover:scale-[1.03] duration-[0.5s]'>
                <div className='flex justify-center'>
                     <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" />
                </div>
                 <form className='p-5' onSubmit={insertData}>
                     <h1 className='font-semibold text-[25px]'>Sign in Account</h1>
                     {error?<p className='text-red-400'>{error}</p>:null}
                     <label className='mb-[10px] inline-block mt-[10px]'>Email</label>
                     <input type='text' className='w-[100%] p-[5px_5px] border rounded-lg' placeholder='Enter Email Address' name='username' onChange={handleChange}/>
                     <label className='mb-[10px] inline-block mt-[10px]'>Password</label>
                     <input type='password' className='w-[100%] p-[5px_5px] border rounded-lg' name='password' onChange={handleChange}/>
                     {!isValid?<div className='text-center text-red-500 mt-[20px]'>Please Enter User Name and Password</div>:
                     <button className='w-[100%] bg-blue-600 mt-[20px] p-[10px_0px] rounded-lg text-white'>Submit</button>}
                 </form>
              </div>
        </div>
      </>
  )
}
