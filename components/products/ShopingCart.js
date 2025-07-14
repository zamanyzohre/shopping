'use client'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/slice/cartSlice";
import { toast } from "react-toastify";

export default function ShopingCart({product}) {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    function handleAddToCart(){
      dispatch(removeFromCart(product.id))
      dispatch(addToCart({product,qty:quantity}))
      toast.success('محصول به سبد خرید اضافه شد')
    }

  return (
    <div className="d-flex" >
      <button onClick={()=>handleAddToCart()}  className="btn btn-hero btn-auth">افزودن به سبد خرید</button>
                                
      <div className="input-counter ms-4" >
        <span className="btn-plus" onClick={()=> quantity<product.quantity && setQuantity(preQty=> preQty + 1)}>+</span>
        <span className="input-number">{quantity}</span>
        <span className="btn-minus" onClick={()=>quantity>1 && setQuantity(preQty=> preQty - 1)}>-</span>
      </div>
    </div>
  )
}
