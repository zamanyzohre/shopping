"use client"

import dynamic from 'next/dynamic'


  export const ClientComponentMap =dynamic(
    () => import("./Map"),
    {
      ssr: false,
    }
  )

