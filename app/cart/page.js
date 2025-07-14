'use client'

import { decreament, deleteCart, increament, removeFromCart } from "@/redux/slice/cartSlice";
import { FormatNumber, getBlureDataUrl, salePercent, sum } from "@/utils/helper";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link";
import { useState } from "react";
import Address from "@/components/cart/Address";
import Payment from "@/components/cart/Payment";
import Coupon from "@/components/cart/Coupon";

export default function page() {
    const [coupon,setCoupon] = useState({percent:0,code:''})
    const [addressId,setAddressId] = useState(0)
    const store = useSelector(state=>state.shopingReducer)
    const dispatch = useDispatch()
    
  return (
    <>
        <div className="container">
            <div className="col-10 offset-1 my-5">
                {store.cart.length != 0 ? (
                    <>
                        <div className="row">
                            <div className=" table-responsive">
                                <table className="table align-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col">محصول</th>
                                                <th scope="col">نام</th>
                                                <th scope="col">قیمت</th>
                                                <th scope="col"> تعداد</th>
                                                <th scope="col">قیمت کل</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="table-group-divider">
                                            {store.cart.map(product=>(
                                                <tr key={product.id}>
                                                    <td scope="row">
                                                        <Image src={product.primary_image} placeholder="blur" blurDataURL={getBlureDataUrl()} alt="image-product" width={100} height={60} />
                                                    </td>
                                                    <td>{product.name}</td>
                                                    <td>
                                                        {product.is_sale?(
                                                            <>
                                                            <span className="ms-1">{FormatNumber(product.sale_price)}</span>
                                                            <del>{FormatNumber(product.price)}</del>
                                                            <span>تومان </span>
                                                            {product.sale_price ?
                                                                <p className="text-danger">{salePercent(product.price,product.sale_price)}% تخفیف</p>
                                                                :
                                                                ""
                                                            }
                                                            </>
                                                    ):(
                                                    <span>{FormatNumber(product.price)} تومان</span>
                                                    )}
                                                    </td>
                                                    <td>
                                                    <div className="input-counter " style={{fontSize:'14px'}} >
                                                        <span className="btn-plus" onClick={()=> product.qty<product.quantity && dispatch(increament(product.id)) } >+</span>
                                                        <span className="input-number">{product.qty}</span>
                                                        <span className="btn-minus" onClick={()=>product.qty>1 && dispatch(decreament(product.id)) } >-</span>
                                                    </div>
                                                    </td>
                                                    <td>
                                                        {product.is_sale?(
                                                            <span>{FormatNumber(product.sale_price * product.qty)}</span>
                                                        ):(
                                                            <span>{FormatNumber(product.price * product.qty)} </span>
                                                        )}
                                                        <span>تومان</span>
                                                    </td>
                                                    <td>
                                                        <i onClick={()=>dispatch(removeFromCart(product.id))} className="bi bi-x text-danger fs-3 cursor-pointer"></i>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <button onClick={()=>dispatch(deleteCart())} className="btn btn-hero btn-auth">پاک کردن سبد خرید</button>
                            </div>
                        </div>
            
               
                        <div className="row d-flex align-items-center my-4">
                            <Coupon  setCoupon={setCoupon}/>
                            <div className="col-md-6 d-flex justify-content-end align-items-baseline">
                                <Address setAddressId={setAddressId}/>
                            </div>
                        </div>
                    
                        <div className="col-md-6 offset-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="fw-bold mb-3">مجموع سبد خرید</h5>
                                    <table className="table table-bordered ">
                                        <tbody>
                                            <tr>
                                                <td className="d-flex justify-content-between">
                                                    <span>مجموع قیمت:</span>
                                                    <span>{FormatNumber(sum(store))}تومان
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="d-flex justify-content-between">
                                                    <span>
                                                        تخفیف:
                                                        <span className="text-danger">{coupon.percent}%</span>
                                                    </span>
                                                    <span className="text-danger">{FormatNumber(sum(store) * coupon.percent/100)}تومان</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="d-flex justify-content-between">
                                                    <span>قیمت پرداختی:</span>
                                                    <span>{FormatNumber(sum(store) - (sum(store) * coupon.percent/100))}تومان</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                        <Payment addressId={addressId} code={coupon.code} cart={store.cart}/>
                                </div>
                            </div>
                        </div>
                    </>
                ):(
                    <div style={{height:"100vh"}} className="d-flex align-items-center justify-content-center text-center" >
                        <div>
                            <i className="bi bi-basket-fill fs-1"></i>
                            <h5 className="my-4">سبد خرید شما خالی است</h5>
                            <Link href="/menu" className="btn btn-hero btn-auth btn-sm">مشاهده محصولات</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
    
  )
}