'use client'

import LoginForm from "@/components/auth/LoginForm"
import OtpForm from "@/components/auth/OtpForm"
import { useState } from "react"

export default function page() {
   const [step,setStep] = useState(1)
  return (
    <div className="login_form">  
            <div className="row align-items-center justify-content-center">
                <div className="col-3 ">
                        <div className="card">
                            <h5 className="card-header text-center">ورود به حساب کاربری</h5>
                            <div className="card-body">
                               {step === 1 && <LoginForm setStep={setStep}/> }
                               {step === 2 && <OtpForm /> }
                               
                            </div>
                        </div>
                </div>
        </div>
    </div>
  )
}
