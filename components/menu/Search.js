"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [term, setTerm] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams()

  function handleSearch(remove) {
    const params = new URLSearchParams(searchParams);
    params.delete('page')

    if(remove){
      params.delete('search')
      setTerm('')
    }else{
      params.set("search", term);
    }
    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <>
      <div className="search">
       <label htmlFor="input1" className="form-label">
          جستجو
        </label>
        {searchParams.has('search') && 
        <span onClick={()=>handleSearch(true)} className="text-danger fs-4 cursor-pointer">
        <i className="bi bi-x"></i>
        </span>
        }
        <div className="input-group mb-3">
          <input onChange={(e) =>setTerm(e.target.value)} value={term} type="text" className="form-control"  placeholder="نام محصول..." aria-label="Username" aria-describedby="basic-addon1" />
          <button onClick={()=>term !=="" && handleSearch()} className=" btn btn-dark" id="basic-addon1">
          <i className="bi bi-search"></i>
          </button>
        </div>
 
      </div>
    </>
  );
}
