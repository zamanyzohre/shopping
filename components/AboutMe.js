"use client"

import Image from "next/image";
import aboutImage from '@/public/images/about-img.png'
import { usePathname } from "next/navigation";
import Submit from "./Submit";

export default function AboutMe() {
    const pathName = usePathname()
  return (
   <div className={pathName ==="/about" ? "layout-4":"layout-1"}>
        <div className="about-me ">
            <div className="container">
            <section className="row g-5 align-items-center">
                <article className="col-md-6">
                    <Image src={aboutImage}  alt="image_about"/>
                </article>
                <article className="col-md-6 info">
                    <h2 className="fw-bold">لورم ایپسوم متن</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                    <Submit title="مشاهده بیشتر" style={"btn btn-hero btn_more"}/>

                </article>
            </section>
        </div>
        </div>
   </div>
  )
}
