import { getFetch } from "@/utils/fetching"
import { FormatNumber } from "@/utils/helper";
import { cookies } from "next/headers"
import Image from "next/image";
import Pagination from "./Pagination";

export default async function Tables({params}) {

  const token = (await cookies()).get('token')
  const data = await getFetch(`/profile/transactions?${params}`,{"Authorization":`Bearer ${token.value}`})
  
  return (
    <>
    <div className="table-font table-responsive">
          <table className="table">
            <thead> 
              <tr>
                <th scope="col">شماره سفارش</th>
                <th scope="col">مبلغ</th>
                <th scope="col">وضعیت</th>
                <th scope="col"> شماره پیگیری</th>
                <th scope="col">تاریخ</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {data.transactions.map(transaction=>(
              <tr key={transaction.id}>
                <th scope="row">{transaction.order_id}</th>
                  <td>{FormatNumber(transaction.amount)} تومان</td>
                  <td className={transaction.status ==='موفق'? 'text-success':'text-danger'}>{transaction.status}</td>
                  <td>{transaction.trans_id}</td>
                  <td>{transaction.created_at}</td>
              </tr>
              ))}
                  
            </tbody>
          </table>
    </div>

    <Pagination links={data.meta.links}/>
    
    </>
  )
}
