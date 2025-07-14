"use client"

import { editForm } from "@/actions/profile"
import Submit from "@/components/Submit"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function EditForm({user}) {
  
  const [state, formAction] = useActionState(editForm, {});

    useEffect(() => {
        toast(state?.message, { type: `${state?.status}` })
    }, [state]);

   
  return (
  <>

    <form action={formAction}>
      <div className="row g-4">
        <div className="col col-md-6">
          <label className="form-label">نام و نام خانوادگی</label>
          <input name='name' type="text" className="form-control" defaultValue={user.name} />
        </div>
        <div className="col col-md-6">
          <label className="form-label">ایمیل</label>
          <input name='email' type="text" className="form-control" defaultValue={user.email} />
        </div>
        <div className="col col-md-6">
          <label className="form-label">شماره تلفن</label>
          <input type="text" disabled className="form-control" defaultValue={user.cellphone} />
        </div>
      </div>
      <Submit title="ویرایش" style="btn btn-hero btn-auth mt-3"/>
    </form>
    </>
  )
}
