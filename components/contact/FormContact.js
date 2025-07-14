"use client"

import { create } from "@/actions/contact";
import Submit from "@/components/Submit";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";


export default function FormContact() {
   const [state,formAction] = useActionState(create,{})

  useEffect(()=>{
      toast(state?.message,{ type :`${state.status}` })
    
      // if(state?.status === "error"){
      //     toast.error(state.message)
      // }else{
      //   toast.success(state.message)
      // }
      
  },[state])


  return (
    <div>
      <form action={formAction}>
                      
        <div className="mb-3">
          <input type="text" name="name" className="form-control" placeholder="نام و نام خانوادگی" />
        </div>
        <div className="mb-3">
          <input type="email" name="email" className="form-control" placeholder="ایمیل" />
        </div>
        <div className="mb-3">
          <input type="text" name="subject" className="form-control" placeholder=" موضوع پیام" />
        </div>
        <div className="mb-3">
          <textarea name="text" id="textarea1" className="form-control" placeholder="متن پیام"></textarea> 
        </div>
                      
        <Submit title="ارسال پیام" style={"btn btn-hero btn-auth"}/>
      </form>
    </div>
  )
}
