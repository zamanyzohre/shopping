"use server"

import { postFetch } from "@/utils/fetching"
import { handleErrors } from "@/utils/helper"
import { cookies } from "next/headers"

const login = async(stateLogin,formData)=>{

   const cellphone = formData.get('cellphone')
  
   if(cellphone == "" ){
    return{
        status:"error",
        message:"شماره موبایل الزامی است"
    }
   }

const pattern = /^(\+98|0)?9\d{9}$/;
if(!pattern.test(cellphone)){
    return{
        status:"error",
        message:"فرمت شماره موبایل معتبر نمی باشد"
    }
}

   const data = await postFetch('/auth/login',{cellphone})

    if(data.status === "success"){
        (await cookies()).set({
            name:'login_token',
            value:data.data.login_token,
            httpOnly:true,
            path:'/',
            maxAge:60 * 60 * 24 * 7 // 1 week
        })
        return{
            status:data.status,
            message:"کد ورود با موفقیت برای شما ارسال شد"
        }
   }else{
    return{
        status:data.status,
        message:handleErrors(data.message)
    }
   }
}

const otp = async(stateOtp,formData)=>{

   const otp = formData.get('otp')
  

   if(otp == "" ){
    return{
        status:"error",
        message:"کد تایید الزامی است"
    }
   }

const pattern = /^[0-9]{6}$/;
if(!pattern.test(otp)){
    return{
        status:"error",
        message:"کد تایید وارد شده اشتباه می باشد"
    }
}

const loginToken = (await cookies()).get('login_token')
if(!loginToken){
    return{
        status:"error",
        message:"توکن ورودی شما معتبر نیست یکبار دیگر تلاش کنید"
    }
}

   const data = await postFetch('/auth/check-otp',{otp,login_token:loginToken.value})

    if(data.status === "success"){
        (await cookies()).delete('login_token')
        cookies().set({
            name:'token',
            value:data.data.token,
            httpOnly:true,
            path:'/',
            maxAge:60 * 60 * 24 * 7 // 1 week
        })
        return{
            status:data.status,
            message:"شما با موفقیت وارد شدید",
            user:data.data.user

        }
   }else{
    return{
        status:data.status,
        message:handleErrors(data.message)
    }
   }
}

const resendOtp = async(stateOtp,formData)=>{

const loginToken = (await cookies()).get('login_token')
if(!loginToken){
    return{
        status:"error",
        message:"توکن ورودی شما معتبر نیست یکبار دیگر تلاش کنید"
    }
}

   const data = await postFetch('/auth/resend-otp',{login_token:loginToken.value})

    if(data.status === "success"){
         cookies().set({
            name:'login_token',
            value:data.data.login_token,
            httpOnly:true,
            path:'/',
            maxAge:60 * 60 * 24 * 7 // 1 week
        })
        return{
            status:data.status,
            message:"  کد ورود دوباره برای شما ارسال شد ",

        }
   }else{
    return{
        status:data.status,
        message:handleErrors(data.message)
    }
   }
}

const me = async()=>{

   const token = (await cookies()).get('token')
  

   if(!token ){
    return{
        error:"Not Authorized"
    }
   }


   const data = await postFetch('/auth/me',{},{"Authorization":`Bearer ${token.value}`})

    if(data.status === "success"){
       
        return{
            user:data.data
        }
    }else{
        return{
            error:"User Forbiden"
    }
   }
}

const logOut = async()=>{

   const token = (await cookies()).get('token')
  
   const data = await postFetch('/auth/logout',{},{"Authorization":`Bearer ${token.value}`})

    if(data.status === "success"){
       (await cookies()).delete('token')
        return{
            status:"success",
            massage:"you are logout"
        }
    }else{
        return{
            error:"User Forbiden"
    }
   }
}

export { login,otp,me ,resendOtp,logOut}