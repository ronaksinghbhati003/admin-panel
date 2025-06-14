import { createContext, useEffect, useState } from "react";
import 'react-responsive-pagination/themes/classic-light-dark.css';
export let loginContext=createContext();
export default function MainLayout(prop) {
    let{children}=prop;
    let[user,setUser]=useState(JSON.parse(localStorage.getItem('USER'))??null);
    let[orderDetail,setOrderDetail]=useState(JSON.parse(localStorage.getItem('orderDetail'))??null);
    let[check,setCheck]=useState(0);
    let obj={
        user,
        setUser,
        check,
        setCheck,
        orderDetail,
        setOrderDetail
    }
    useEffect(()=>{
          localStorage.setItem("USER",JSON.stringify(user));
          localStorage.setItem('orderDetail',JSON.stringify(orderDetail));
    },[user,orderDetail])
  return (
    <loginContext.Provider value={obj}>
        {children}
    </loginContext.Provider>
    
  )
}
