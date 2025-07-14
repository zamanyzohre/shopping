import EditForm from "@/components/profile/info/EditForm"
import { getFetch } from "@/utils/fetching"
import { cookies } from "next/headers"

export default async function page() {
    const token = (await cookies()).get('token')
    const user = await getFetch('/profile/info',{'Authorization':`Bearer ${token.value}`})
    
  return (
    <div className="">
      <EditForm user={user}/>
    </div> 
  )
}
