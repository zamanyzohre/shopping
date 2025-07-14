import { getFetch } from "@/utils/fetching";
import { cookies } from "next/headers";
import CreateForm from '@/components/profile/addreses/CreateForm'
import EditAddres from "@/components/profile/addreses/EditAddres";

export default async function page() {
    const token = (await cookies()).get('token')
    const {addresses,provinces,cities} = await getFetch('/profile/addresses',{'Authorization':`Bearer ${token.value}`})
    
  return (
    <>
        <CreateForm provinces={provinces} cities={cities}/>

        <hr />
        {addresses.map(address=>(
          <EditAddres key={address.id} address={address} provinces={provinces} cities={cities} />
        ))}
    </>
)
}
