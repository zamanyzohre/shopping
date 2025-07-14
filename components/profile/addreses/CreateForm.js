'use client'

import { useActionState, useEffect, useState } from "react"
import Submit from '@/components/Submit'
import { toast } from "react-toastify"
import { createAddres } from "@/actions/profile"

export default function CreateForm({provinces,cities}) {
    const [citiesFilter,setCitiesFilter] = useState(cities.filter(city=>city.province_id == provinces[0].id))
    const [stateCreate,formActionCreate] = useActionState(createAddres,{})

    useEffect(()=>{
        toast(stateCreate?.message,{ type:`${stateCreate?.status}` })
    },[stateCreate])

    function changeProvinc(e){
        const listCities = cities.filter(city=>city.province_id == e.target.value)
        setCitiesFilter(listCities)

    }
    

  return (
    <div>
            <button className="navbar-toggler btn btn-hero btn-auth" type="button" data-bs-toggle="collapse" data-bs-target="#navAddres" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            ایجاد آدرس جدید
            </button>

            <form action={formActionCreate} className="collapse navbar-collapse" id="navAddres">
                <div className="card mt-3 " >
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label htmlFor="input1" className="form-label">عنوان </label>
                                    <input name="title" type="text" className="form-control" id="input1" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label htmlFor="input2" className="form-label">شماره تماس </label>
                                    <input name="cellphone" type="text" className="form-control" id="input2" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label htmlFor="input3" className="form-label">کد پستی </label>
                                    <input name="postal_code" type="text" className="form-control" id="input3" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label htmlFor="input4" className="form-label">استان </label>
                                    <select name="province_id" onChange={changeProvinc} id="input4" className="form-select form-select-lg mb-3" aria-label="Large select example">
                                    {provinces.map(provinc=>(
                                        <option key={provinc.id} value={provinc.id}>{provinc.name}</option>
                                    ))}
                                    </select>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label htmlFor="input5" className="form-label">شهر </label>
                                    <select name="city_id" className="form-select form-select-lg mb-3" id="input5" aria-label="Large select example">
                                        {citiesFilter.map(city =>(
                                            <option key={city.id} value={city.id}>{city.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Textarea1" className="form-label">آدرس </label>
                                <textarea name="address" className="form-control" id="Textarea1" rows="3" />
                            </div>
                        </div>
                       
                        <Submit title="ایجاد" style="btn btn-hero btn-auth"/>
                    </div>
                </div>
            </form>
        </div>
  )
}
