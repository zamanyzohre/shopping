"use client"

import { login } from "@/actions/auth"
import Submit from "@/components/Submit"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function LoginForm({setStep}) {
    const [stateLogin ,formActionLogin] = useActionState(login,{})

    useEffect(()=>{
        toast(stateLogin?.message,{ type :`${stateLogin?.status}` })
        if(stateLogin?.status == 'success'){
            setStep(2)
        }
    },[stateLogin])
  return (
    <div>
        <form action={formActionLogin}>
            <div className="mb-3 mt-2">
                <label htmlFor="input1" className="form-label">شماره موبایل:</label>
                <input type="text" name="cellphone" className="form-control" id="input1"/>
            </div>
            <div className="text-center">
                <Submit title="ورود" style="btn btn-auth btn-hero mt-3"/>
            </div>
        </form>
    </div>
  )
}
