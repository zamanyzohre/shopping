import { getFetch } from "@/utils/fetching"
import { FormatNumber } from "@/utils/helper";
import { cookies } from "next/headers"
import Image from "next/image";
import Pagination from "./Pagination";

export default async function Tables({params}) {

  const token = (await cookies()).get('token')
  const data = await getFetch(`/profile/orders?${params}`,{"Authorization":`Bearer ${token.value}`})
  
  return (
    <>
    <div className="table-font table-responsive">
          <table className="table">
            <thead> 
              <tr>
                <th scope="col">شماره سفارش</th>
                <th scope="col">آدرس</th>
                <th scope="col">وضعیت</th>
                <th scope="col">وضعیت پرداخت</th>
                <th scope="col">قیمت کل</th>
                <th scope="col">تاریخ</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {data.orders.map(order=>(
              <tr key={order.id}>
                <th scope="row">{order.id}</th>
                  <td>{order.address_title}</td>
                  <td>{order.status}</td>
                  <td className={order.payment_status ==='موفق'? 'text-success':'text-danger'}>{order.payment_status}</td>
                  <td>{FormatNumber(order.paying_amount)} تومان</td>
                  <td>{order.created_at}</td>
                  <td>
                    <button className="btn btn-product btn-auth btn-sm" data-bs-toggle="modal" data-bs-target={`#Modal-${order.id}`}>محصولات</button>

                    <div className="modal fade" id={`Modal-${order.id}`} >
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">محصولات سفارش شماره {order.id}</h1>
                            <button type="button" className="btn-close me-auto ms-0" data-bs-dismiss="modal"></button>
                          </div>
                          <div className="modal-body">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col"> محصول</th>
                                <th scope="col">نام</th>
                                <th scope="col">قیمت</th>
                                <th scope="col">تعداد </th>
                                <th scope="col">قیمت کل</th>
                              </tr>
                            </thead>
                            <tbody className="table-group-divider align-middle">
                                          {order.order_items.map(item=>(
                                          <tr key={item.id}>
                                            <th scope="row">
                                              <Image src={item.product_primary_image} width={80} height={85} alt='product-image'
                                               placeholder="blur" blurDataURL="getBlureDataUrl"/>
                                            </th>
                                              <td>{item.product_name}</td>
                                              <td>{FormatNumber(item.price)} تومان</td>
                                              <td>{item.quantity}</td>
                                              <td>{FormatNumber(item.subtotal)} تومان</td>
                                              </tr>
                                          ))}
                            </tbody>
                          </table>
                          </div>
                        </div>
                      </div>
                    </div>

                  </td>
              </tr>
              ))}
                  
            </tbody>
          </table>
    </div>

    <Pagination links={data.meta.links}/>
    
    </>
  )
}
