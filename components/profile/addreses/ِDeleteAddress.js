'use client'

import { deleteForm } from "@/actions/profile";
import Submit from "@/components/Submit";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function DeleteAddress({address_id}) {
    const [stateDelete,formActionDelete] = useActionState(deleteForm,{})

    useEffect(()=>{
      toast(stateDelete?.message,{ type:`${stateDelete?.status}`})
    },[stateDelete])

  return (
    <div className="btn-delete">
        <form action={formActionDelete} >
            <input type="hidden" defaultValue={address_id}  name="address_id"/>
            <Submit title="حذف" style="btn btn-dark" />
        </form>
    </div>
  )
}
