"use client"

import { otp } from "@/actions/auth"
import Submit from "@/components/Submit"
import { useActionState, useContext, useEffect } from "react"
import { toast } from "react-toastify"
import { AuthContex } from "../context/AuthContex"
import ResendOtp from "./ResendOtp"
import { useRouter } from "next/navigation"

export default function OtpForm() {
    const [stateOtp ,formActionOtp] = useActionState(otp,{})
    const { loginContex } = useContext(AuthContex)
    const router = useRouter()

    useEffect(()=>{
        toast(stateOtp?.message,{ type :`${stateOtp?.status}` })
        if(stateOtp?.status === "success"){
            loginContex(stateOtp?.user)
            router.push('/')
        }
    },[stateOtp])
  return (
    <div >
        <form action={formActionOtp}>
            <div className="mb-3 mt-2">
                <label htmlFor="input1" className="form-label">کد ورود :</label>
                <input type="text" name="otp" className="form-control" id="input1"/>
            </div>
                <Submit title="تایید" style="btn btn-auth btn-hero mt-3"/>
        </form>
       <ResendOtp />
    </div>
  )
}
