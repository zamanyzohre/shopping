"use client"

import { useActionState, useEffect, useState } from "react"
import Submit from "../Submit"
import { toast } from "react-toastify"
import { resendOtp } from "@/actions/auth"

export default function ResendOtp() {

    const [stateResendOtp,formActionResendOtp] = useActionState(resendOtp,{})
    const [second,setSecound] = useState(0)
    const [minutes,setMinutes] = useState(2)

    useEffect(()=>{
        toast(stateResendOtp?.message,{ type:`${stateResendOtp?.status}`})
        if(stateResendOtp?.status == 'success'){
          setSecound(0)
          setMinutes(2)
        }
    },[stateResendOtp])

    useEffect(()=>{
      const interval = setInterval(()=>{

        if(second>0){
          setSecound(second-1)
        }
        if(second==0){
          if(minutes==0){

            clearInterval(interval)
          }else{
            setSecound(59)
            setMinutes(minutes-1)
          }
        }
    },1000)
 
    return ()=>{
    clearInterval(interval)
    }

    },[second])

  return (
    <>
      <div className="btn-otp-resend">
        {second > 0 || minutes > 0 ? (
          <>
            { minutes<10 ? `0${minutes}` : minutes }
            :
            { second<10 ? `0${second}` : second }
          </>
          ):(
            <form action={formActionResendOtp}>
              <Submit title="ارسال دوباره" style={"btn btn-dark"}/>
            </form>
        )}
      </div>
    </>
  )
}
