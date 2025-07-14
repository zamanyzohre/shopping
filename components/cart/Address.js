'use client'

import getAddress from "@/actions/address"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Address({setAddressId}) {
    const [address,SetAddress] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        async function fetchAddress() {
           const data = await getAddress()
           SetAddress(data) 
           setLoading(false)
        }
        fetchAddress()
    },[])

    if(loading){
        return (<div className="spinner-border spinner-border-sm ms-5"></div>)
    }

    if(address.length == 0){
       return (<Link href="/profile/addreses" className="btn btn-sm btn-auth btn-hero mb-3"> ایجاد آدرس</Link>)
    }
  return (
    <>
            <span >انتخاب آدرس:</span>
            <select onChange={e=>setAddressId(e.target.value)} defaultValue="" style={{width:"200px"}} className="form-select ms-3" name="address" aria-label="Default select example">
                <option defaultValue="" >انتخاب آدرس</option>
                {address && address.map(item =>(
                    <option key={item.id} value={item.id}>{item.title}</option>
                ))}
            </select>
    </>
  )
}
