

import { postFetch } from "@/utils/fetching"
import { handleErrors } from "@/utils/helper"

const create = async(state,formData)=>{

   const name = formData.get('name')
   const email = formData.get('email')
   const subject = formData.get('subject')
   const text = formData.get('text')

   if(name === "" || email === "" || subject === "" || text === ""){
    return{
        status:"error",
        message:"تمامی موارد فرم تماس با ما الزامی است"
    }
   }
console.log(formData);

   

   const data = await postFetch('/contact-us',{name,email,subject,text})
   if(data.status === "success"){
        return{
            status:data.status,
            message:"پیام شما با موفقیت ثبت شد"
        }
   }else{
    return{
        status:data.status,
        message:handleErrors(data.message)
    }
   }
}

export { create }