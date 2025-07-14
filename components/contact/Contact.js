"use client"


import FormContact from "./FormContact";
import  { ClientComponentMap } from './ClientComponentMap'
import { usePathname } from "next/navigation";


export default function Contact() {
  const pathName = usePathname()

  return (
    <div className={pathName ==="/contact-us" ? "contact layout-2":"contact layout-1"}>
      <div className="container ">
          <section className="row g-5 align-items-center justify-content-between">

            <article className="col-md-6">
              <h2 className="fw-bold mb-4">تماس با ما  </h2>
              <FormContact />
            </article>

            <article className="col-md-6">
              <div className="container" >
               <ClientComponentMap />
              </div>
            </article>
                
          </section>
      </div>
    </div>
  )
}