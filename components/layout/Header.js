"use client"

import Link from "next/link";
import heroImage from "@/public/images/hero-bg.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { AuthContex } from "../context/AuthContex";
import Submit from "../Submit";
import { useSelector } from "react-redux";

export default function Header() {
  const pathName = usePathname()
  const { user } = useContext(AuthContex)
  const state = useSelector(state=>state.shopingReducer)

    return (
      <div className={pathName =="/"? " ":"sub-page"}>
      <div className="hero_area ">

        <div className="bg-box ">
          <Image src={heroImage} alt="hero-image" priority />
        </div>

        <section className="header_section">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <div className="container ">

              <Link className="navbar-brand me-auto" href="/">
                webinoo.io
              </Link>

              <button  className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
                  <span className="bi bi-x"></span> 
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto ">
                  <li className={pathName == "/" ? "nav-item active":"nav-item"}>
                    <Link className="nav-link " aria-current="page" href="/">
                      صفحه اصلی
                    </Link>
                  </li>
                  <li className={pathName == "/menu" ? "nav-item ms-4  active":"nav-item ms-4"}>
                    <Link className="nav-link" href="/menu">
                      منو
                    </Link>
                  </li>
                  <li className={pathName == "/about" ? "nav-item ms-4  active":"nav-item ms-4"}>
                    <Link className="nav-link" href="/about">
                      درباره ما
                    </Link>
                  </li>
                  <li className={pathName == "/contact-us" ? "nav-item ms-4  active":"nav-item ms-4"}>
                    <Link className="nav-link" href="/contact-us">
                      تماس با ما
                    </Link>
                  </li>
                </ul>

                <div className="user_option ms-auto">
                  <Link href="/cart" className="bi bi-cart-fill text-white fs-5 position-relative  ">
                    <span className="position-absolute top-0 start-0 badge translate-middle rounded-circle ">
                      {state.cart.length}
                    </span>
                  </Link>
                  {user? 
                  <Link href="/profile" className="btn btn-auth btn-hero ms-3">پروفایل</Link>
                  :
                  <Link href="/auth/login" className="btn btn-auth btn-hero ms-3">ورود</Link>
                  } 
                </div>
                
              </div>
            </div>
          </nav>
        </section>

      {/* <section className="slider_section"> */}
      {pathName =="/" &&  <section className="slider_section">
        <div id="customCarousel1" className="carousel slide" data-bs-ride="carousel">
                      
          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h2 className="mb-3 fw-bold">         
                        لورم ایپسوم متن ساختگی
                      </h2>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                        ازطراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                        بهبودابزارهای کاربردی می باشد.
                      </p>
                      <div className="btn-box">
                       <Submit title=" سفارش" style={"btn btn-hero btn-request"}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item ">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h2 className="mb-3 fw-bold">         
                        لورم ایپسوم متن ساختگی
                      </h2>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                        ازطراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                        بهبودابزارهای کاربردی می باشد.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn btn-hero btn-request">
                          سفارش
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item ">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h2 className="mb-3 fw-bold">         
                        لورم ایپسوم متن ساختگی
                      </h2>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                        ازطراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                        بهبودابزارهای کاربردی می باشد.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn btn-hero btn-request">
                          سفارش
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>

          <div className="container">
            <ul className="carousel-indicators">
                <li data-bs-target="#customCarousel1" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#customCarousel1" data-bs-slide-to="1"></li>
                <li data-bs-target="#customCarousel1" data-bs-slide-to="2"></li>
            </ul>
          </div>
        </div>

      </section>}
        
      </div>
    </div>
  );
}
