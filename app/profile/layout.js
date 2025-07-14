'use client'

import { logOut } from "@/actions/auth"
import { AuthContex } from "@/components/context/AuthContex"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { toast } from "react-toastify"

export default function layout({children}) {

    const {logoutContex} = useContext(AuthContex)
    const  router=useRouter()
    

  return (
    <div className="my-5 layout-profile">
       <div className="row">
        <div className="col-lg-10 offset-lg-1">
        <div className="row">
            <div className="col-sm-12 col-lg-3">
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link href="/profile" >اطلاعات کاربر</Link>
                    </li>
                    <li className="list-group-item">
                        <Link href="/profile/addreses" > آدرس ها</Link>
                    </li>
                    <li className="list-group-item">
                        <Link href="/profile/orders" > سفارشات</Link>
                    </li>
                    <li className="list-group-item">
                        <Link href="/profile/transactions" > تراکنش ها</Link>
                    </li>
                    <li className="list-group-item">
                        <Link href="#" onClick={async()=>{
                        await logOut()
                        logoutContex()
                        router.push('/')
                        toast.success('شما از حساب  خود خارج شدید')
                        }} > خروج</Link>
                    </li>
                </ul>
            </div>
            <div className="col-sm-12 col-lg-9">
              {children} 
            </div>
        </div>
        </div>
       </div>
    </div>
  )
}
