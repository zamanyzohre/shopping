"use server";

import { postFetch } from "@/utils/fetching";
import { handleErrors } from "@/utils/helper";
import { revalidatePath } from "next/cache";
import { cookies } from 'next/headers';


async function editForm(state, formData) {
    const name = formData.get('name');
    const email = formData.get('email');

    if (name === '') {
        return {
            status: "error",
            message: "فیلد نام و نام خانوادگی الزامی است."
        }
    }

    if (email === '') {
        return {
            status: "error",
            message: "فیلد ایمیل الزامی است."
        }
    }


    const token = (await cookies()).get('token');
    const data = await postFetch('/profile/info/edit', { name, email }, { 'Authorization': `Bearer ${token.value}` });

    if (data.status === 'success') {
        return {
            status: data.status,
            message: "ویرایش اطلاعات با موفقیت انجام شد"
        }
    } else {
        return {
            status: data.status,
            message: handleErrors(data.message),
        }
    }

}

async function createAddres(state, formData) {
    const title = formData.get('title');
    const cellphone = formData.get('cellphone');
    const postal_code = formData.get('postal_code');
    const province_id = formData.get('province_id');
    const city_id = formData.get('city_id');
    const address = formData.get('address');

    if (title === '') {
        return {
            status: "error",
            message: "  فیلد عنوان الزامی است"
        }
    }
    const cellphonePattern = /^(\+98|0)?9\d{9}$/i
    if (cellphone === '' || !cellphonePattern.test(cellphone)) {
        return {
            status: "error",
            message: "فیلد شماره تلفن نامعتبر است."
        }
    }

    const postalCodePattern = /^\d{5}[ -]?\d{5}$/i
    if (postal_code === '' || !postalCodePattern.test(postal_code)) {
        return {
            status: "error",
            message: "فیلد کد پستی نا معتبر است."
        }
    }
   
    if (address === '') {
        return {
            status: "error",
            message: "فیلد آدرس الزامی است."
        }
    }


    const token = (await cookies()).get('token');
    const data = await postFetch('/profile/addresses/create', { title, cellphone,address,postal_code,province_id,city_id }, { 'Authorization': `Bearer ${token.value}` });

    if (data.status === 'success') {
        revalidatePath('/profile/addresess')
        return {
            status: data.status,
            message: " ایجاد آدرس با موفقیت انجام شد"
        }
    } else {
        return {
            status: data.status,
            message: handleErrors(data.message),
        }
    }

}

async function editAddres(state, formData) {
    const title = formData.get('title');
    const cellphone = formData.get('cellphone');
    const postal_code = formData.get('postal_code');
    const province_id = formData.get('province_id');
    const city_id = formData.get('city_id');
    const address = formData.get('address');
    const address_id = formData.get('address_id');

    if (address_id === null) {
        return {
            status: "error",
            message: "  فیلد شناسه آدرس الزامی است"
        }
    }

    if (title === '') {
        return {
            status: "error",
            message: "  فیلد عنوان الزامی است"
        }
    }
    const cellphonePattern = /^(\+98|0)?9\d{9}$/i
    if (cellphone === '' || !cellphonePattern.test(cellphone)) {
        return {
            status: "error",
            message: "فیلد شماره تلفن نامعتبر است."
        }
    }

    const postalCodePattern = /^\d{5}[ -]?\d{5}$/i
    if (postal_code === '' || !postalCodePattern.test(postal_code)) {
        return {
            status: "error",
            message: "فیلد کد پستی نا معتبر است."
        }
    }
   
    if (address === '') {
        return {
            status: "error",
            message: "فیلد آدرس الزامی است."
        }
    }


    const token = (await cookies()).get('token');
    const data = await postFetch('/profile/addresses/edit', { title, cellphone,address,address_id,postal_code,province_id,city_id }, { 'Authorization': `Bearer ${token.value}` });

    if (data.status === 'success') {
        return {
            status: data.status,
            message: " ویرایش آدرس با موفقیت انجام شد"
        }
    } else {
        return {
            status: data.status,
            message: handleErrors(data.message),
        }
    }

}

async function deleteForm(state, formData) {
    const address_id = formData.get('address_id');

    if (address_id === null) {
        return {
            status: "error",
            message: "  فیلد شناسه آدرس الزامی است"
        }
    }

  
    const token = (await cookies()).get('token');
    const data = await postFetch('/profile/addresses/delete', { address_id }, { 'Authorization': `Bearer ${token.value}` });

    if (data.status === 'success') {
        revalidatePath('/profile/addresess')
        return {
            status: data.status,
            message: " حذف آدرس با موفقیت انجام شد"
        }
    } else {
        return {
            status: data.status,
            message: handleErrors(data.message),
        }
    }

}


export { editForm ,createAddres,editAddres,deleteForm}