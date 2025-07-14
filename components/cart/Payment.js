"use client"

import { payment } from "@/actions/cart";
import Submit from "../Submit";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';



export default function Payment({code,cart,addressId}) {
    const [statePayment,formActionPayment] = useActionState(payment,{})
    const router = useRouter()
    
    useEffect(()=>{
        
    // toast(statePayment?.message,{ type:`${statePayment?.status}`})
    if(statePayment?.status == 'success'){
        toast.success(statePayment.message, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
        });
        router.push(statePayment.url)
    }else{
        toast.error(statePayment.message, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
        })
    }
    },[statePayment]) 

  return (
    <div>
        <form action={formActionPayment}>
            <input type="hidden" name='addressId' value={addressId} />
            <input type="hidden" name='code' value={code} />
            <input type="hidden" name='cart' value={JSON.stringify(cart)} />

        <Submit title="پرداخت" style="btn btn-hero btn-auth" />
        </form>
    </div>
  )
}
