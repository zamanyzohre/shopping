"use server";

import { postFetch } from "@/utils/fetching";
import { handleErrors } from "@/utils/helper";
import { cookies } from 'next/headers';


async function coupon(state, formData) {
    const code = formData.get('code');
console.log(code);

    if (code === '') {
        return {
            status: "error",
            message: "فیلد کد تخفیف الزامی است."
        }
    }


    const token = (await cookies()).get('token');
    const data = await postFetch('/check-coupon', { code}, { 'Authorization': `Bearer ${token.value}` });

    if (data.status === 'success') {
        return {
            status: data.status,
            message: " کد تخفیف شما اعمال شد",
            percent:data.data.percentage,
            code
        }
    } else {
        return {
            status: data.status,
            message: handleErrors(data.message),
        }
    }

}

async function payment(state, formData) {
    const code = formData.get('code');
    const address_id = formData.get('addressId');
    const cart = formData.get('cart');

    if (address_id === '') {
        return {
            status: "error",
            message: "انتخاب آدرس الزامی است."
        }
    }


    const token = (await cookies()).get('token');
    const data = await postFetch('/payment/send', { address_id,cart:JSON.parse(cart),code}, { 'Authorization': `Bearer ${token.value}` });

    if (data.status === 'success') {
        return {
            status: data.status,
            message: "در حال انتقال به درگاه پرداخت",
            url:data.data.url
        }
    } else {
        return {
            status: data.status,
            message: handleErrors(data.message),
        }
    }

}

async function getVerify(trackId,status) {
        
    const token = (await cookies()).get('token');
    const data = await postFetch('/payment/verify', { token:trackId,status}, { 'Authorization': `Bearer ${token.value}` });

    if (data.status === 'success') {
        return {
            status: data.status,
            payment:data.data
           
        }
    } else {
        return {
            status: data.status,
            message: handleErrors(data.message),
        }
    }

}



export {coupon,payment,getVerify}