import { createContext, useEffect, useState } from "react";

export let loginContext=createContext();
export default function MainLayout(prop) {
    let{children}=prop;
    let[user,setUser]=useState(JSON.parse(localStorage.getItem('USER'))??null);
    let[check,setCheck]=useState(0);
    let obj={
        user,
        setUser,
        check,
        setCheck
    }
    useEffect(()=>{
          localStorage.setItem("USER",JSON.stringify(user));
    },[user])
  return (
    <loginContext.Provider value={obj}>
        {children}
    </loginContext.Provider>
    
  )
}
