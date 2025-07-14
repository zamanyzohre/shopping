'use client'

import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"
import  { coupon }  from "@/actions/cart"
import Submit from "../Submit"

export default function Coupon({setCoupon}) {
    
    const [state,formAction] = useActionState(coupon,{})

    useEffect(()=>{
        toast(state?.message,{ type:`${state?.status}`})
        if(state.status == 'success'){
            setCoupon({
                percent:state.percent,
                code:state.code
            })
        }
    },[state])

  return (
    <>
        <div className="col-md-6">
            <form action={formAction}>
                <div className="input-group mb-3">
                    <input name="code" type="text" className="form-control" placeholder="کد تخفیف" />
                    <Submit title="اعمال کد تخفیف" style={'btn btn-dark'}/>
                </div>
            </form>
        </div>
    </>
  )
}
