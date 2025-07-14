
import Products from "@/components/products/Products";
import ShopingCart from "@/components/products/ShopingCart";
import Submit from "@/components/Submit";
import { getFetch } from "@/utils/fetching";
import { FormatNumber, salePercent } from '@/utils/helper'
import Image from "next/image";

export default async function page({params}) {
    const { slug } = await params
    const product = await getFetch(`/products/${decodeURI(slug)}`);
    const randomProduct = await getFetch('/random-products?count=4');
    

    return (
    <div className="slug">
        <div className="layout-5">
            <div className="row ">
                <div className="col-md-10 offset-md-1">
                    <div className="row gap-3">
                        <div className="col-md-5 ">
                            <h3 className="fw-bold">{product.name}</h3>
                            <h5 className="mt-3">
                                {product.is_sale? (
                                    <>
                                    <span className="ms-1">{FormatNumber(product.sale_price)}</span>
                                    <del>{FormatNumber(product.price)}</del>
                                    </>
                                    )
                                    :
                                    (<span>{FormatNumber(product.price)}</span>)
                                }
                                <span> تومان </span>
                            </h5>
                            {product.sale_price ?
                                <p className="text-danger">{salePercent(product.price,product.sale_price)}% تخفیف</p>
                                :
                                ""
                            }
                            <p className="mt-4">{product.description}</p>
                                
                            <ShopingCart product={product}/>

                        </div>
                        <div className="col-md-5 ">

                            <div id="carouselExampleIndicators" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    {product.images.map((img,index) =>(
                                    <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index+1} aria-label="Slide 2"></button>
                                    ))}
                                </div>
                                <div className="carousel-inner rounded-4">
                                    <div className="carousel-item active">
                                    <Image src={product.primary_image} placeholder="blur" blurDataURL="getBlureDataUrl" width={464} height={309} className="d-block" alt="product-image"/>
                                    </div>
                                    {product.images.map(img =>(
                                    <div key={img.id} className="carousel-item">
                                    <Image src={img.image} placeholder="blur" blurDataURL="getBlureDataUrl" width={464} height={309} className="d-block" alt="product-image"/>
                                    </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr />

        <div className="container layout-5">
            <div className="row g-3">
                {randomProduct.map(random=>(
                    <div key={random.id} className="col-sm-6 col-lg-3 ">
                        <Products product={random}/>
                    </div>
                ))}
            </div>
            
        </div>
    </div>
    
  )
}
