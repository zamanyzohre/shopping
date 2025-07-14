"use server";

import { getFetch } from "@/utils/fetching";
import { cookies } from 'next/headers';


export default async function getAddress() {

    const token = (await cookies()).get('token');
    return await getFetch('/user/addresses',{ 'Authorization': `Bearer ${token.value}` });

}


