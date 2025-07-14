'use client'

import { getVerify } from "@/actions/cart";
import { deleteCart } from "@/redux/slice/cartSlice";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function page() {
    const searchParams = useSearchParams()
    const trackId = searchParams.get('trackId')
    const status = searchParams.get('status')
    const [payment,setPayment] = useState({})
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{
        async function verify(){
            const data = await getVerify(trackId,status)
            setPayment(data.payment)
            setLoading(false)
        }
        verify()
    },[])

    if(payment.status){
        dispatch(deleteCart())
    }

  return (
    <div className="verify">
        <div className="row my-5">
            <div className="col-md-4 offset-md-4">
                {loading? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border spinner-border-sm "></div>
                    </div>
                )
                :
                (
                    <div className="card">
                        <div className="card-body text-center">
                        
                            <i className={payment.status? "bi bi-check-circle-fill fw-bold text-success fs-1" : "bi bi-x-circle-fill text-danger fw-bold fs-1" }></i>
                            {payment.status ? (

                                <h5 className="mb-5 mt-3 text-success">تراکنش با موفقیت انجام شد</h5>
                            )
                            :
                            (
                                <h5 className="mb-5 mt-3 text-danger">{payment.error}</h5>

                            ) }
                            <div className="d-flex justify-content-around">
                                {payment.status ? (
                                <Link href="/product" className="btn btn-auth btn-hero">مشاهده سفارش</Link>
                            )
                            :
                            (
                                <Link href="/cart" className="btn btn-auth btn-hero"> برو به سبد خرید</Link>
                                ) }
                                
                                <Link href="/" className="btn btn-dark btn-auth">بازگشت به سایت</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
