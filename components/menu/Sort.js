"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Sort() {

    const router = useRouter();
      const pathName = usePathname();
      const searchParams = useSearchParams();
    
      function handleClick(type) {
        const params = new URLSearchParams(searchParams);
        params.set("sortBy", type);
        params.delete("page");
        router.replace(`${pathName}?${params.toString()}`);
      }

  return (
    <div>
         <div className="sort pb-5">
              <p>مرتب سازی</p>
              <div className='form-check ms-1 my-1'>
                <input onChange={()=>handleClick("max")} type="radio" name="exampleRadios" id='input1' className="form-check-input"
                checked={searchParams.has('sortBy') && searchParams.get('sortBy') =="max" }
                />
                <label className="form-check-label" htmlFor="input1"> بیشترین قیمت</label>
              </div>
              <div className='form-check ms-1 my-1'>
                <input onChange={()=>handleClick("min")} type="radio" name="exampleRadios" id='input2' className="form-check-input" 
                checked={searchParams.has('sortBy') && searchParams.get('sortBy') =="min" }
                />
                <label className="form-check-label" htmlFor="input2" >کمترین قیمت</label>
              </div>
              <div className='form-check ms-1 my-1'>
                <input onChange={()=>handleClick("bestseller")} type="radio" name="exampleRadios" id='input3' className="form-check-input"
                checked={searchParams.has('sortBy') && searchParams.get('sortBy') =="bestseller" }
                />
                <label className="form-check-label" htmlFor="input3"> پرفروش ترین</label>
              </div>
              <div className='form-check ms-1 my-1'>
                <input onChange={()=>handleClick("sale")} type="radio" name="exampleRadios" id='input4' className="form-check-input"
                checked={searchParams.has('sortBy') && searchParams.get('sortBy') =="sale" }
                 />
                <label className="form-check-label" htmlFor="input4"> با تخفیف</label>
              </div>
            </div>
    </div>
  )
}
