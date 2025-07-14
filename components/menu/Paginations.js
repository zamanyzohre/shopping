"use client"

import { usePathname, useSearchParams  } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Paginations({links}) {
const pathName = usePathname()
const router = useRouter()
const searchParams = useSearchParams()



function handlePage(page){

    const params = new URLSearchParams(searchParams)
    params.set("page",page)
    router.replace(`${pathName}?${params.toString()}`)
    }
    
  return (
    <div className="pagination mt-5 justify-content-center">
        <nav className="">
            <ul className="pagination pagination-sm ">
                    {links && links.slice(1,-1).map((link,index)=>(
                        <li key={index} className={link.active? "page-item active":"page-item"} aria-current="page">
                            <button onClick={()=>handlePage(link.label)} className="page-link"> {link.label} </button>
                        </li>
                    ))}
               
            </ul>
        </nav>
    </div>
  )
}
