'use client'

import { me } from "@/actions/auth";
import { createContext, useEffect } from "react"
import { useState } from "react";

 const AuthContex =createContext()

 const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    useEffect(()=>{
        const checkUserLoggedIn = async()=>{
            const data = await me()
            if(data?.error){
                setUser(null)
            }else{
                setUser(data.user)
            }
        }
        checkUserLoggedIn()
    },[])

    const loginContex =(user) =>{
        setUser(user)
        
    }
    const logoutContex =() =>{
        setUser(null)
        
    }

  return (
   <AuthContex.Provider value={{user,loginContex,logoutContex}}>
    {children}
   </AuthContex.Provider>
  )
}


export { AuthContex,AuthProvider} 