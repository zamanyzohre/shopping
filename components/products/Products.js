'use client'

import { addToCart, removeFromCart } from "@/redux/slice/cartSlice";
import { FormatNumber, getBlureDataUrl } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Products({ product }) {
  const dispatch = useDispatch()

  function handleAddToCArt(product){
    dispatch(removeFromCart(product.id))
    dispatch(addToCart({product,qty:1}))
    toast.success('محصول به سبد خرید اضافه شد')
  }


  return (
    <>
      <div className="product_card">
        <div className="card mb-3">
          <div className="">
            <Image
              src={product.primary_image}
              priority
              width="100"
              height="65"
              sizes="100vw"
              alt="product-image"
              style={{ width: "100%", height: "100%" }}
              placeholder="blur"
              blurDataURL={getBlureDataUrl()}
            />
          </div>
          <div className="card-body detail_box">
            <div>
              <h5 className="card-title fw-bold">
                <Link href={`/products/${product.slug}`}>
                  {product.name}
                </Link>
              </h5>
              <p className="card-text">{product.description}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between" >
              <h6>
                {product.is_sale? (
                    <>
                    <span className="ms-1">{FormatNumber(product.sale_price)}</span>
                    <del>{FormatNumber(product.price)}</del>
                    </>
                )
                :
                (
                <span>{FormatNumber(product.price)}</span>
                )}
                <span> تومان </span>
              </h6>
                <button onClick={()=>handleAddToCArt(product)}>
                  <i className="bi bi-cart-fill text-white fs-5"></i>
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
