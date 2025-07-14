import Tables from "@/components/profile/orders/Tables";
import { Suspense } from "react";
import Loading from "./Loading";

export default async function page({searchParams}) {

  const params = new URLSearchParams(await searchParams)

  return (
   <>
   <Suspense key={params.toString()} fallback={<Loading />}>
    <Tables params={params.toString()}/>
   </Suspense>
   </>
  )
}
