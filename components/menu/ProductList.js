import { getFetch } from '@/utils/fetching'
import Products from "@/components/products/Products"
import Paginations from '@/components/menu/Paginations'

export default async function ProductList({params}) {

  const data = await getFetch(`/menu?${params}`)

  return (
    <div>
        <div className="row">
                {data.products && data.products.map(product =>(
                    <div key={product.id} className="col-sm-6 col-lg-4">

                        <Products product={product}/>

                    </div>
                 ))}
        </div> 

        <div className="row">
            <Paginations links={data.meta.links}/>
        </div>
    </div>
  )
}
