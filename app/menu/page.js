import ProductList from '@/components/menu/ProductList'
import { Suspense } from 'react'
import Loading from '@/components/menu/Loading'
import { getFetch } from '@/utils/fetching'
import Search from '@/components/menu/Search'
import Categories from '@/components/menu/Categories'
import Sort from '@/components/menu/Sort'


export default async function page({searchParams}) {
  const SearchParams =await searchParams
  const params = new URLSearchParams(SearchParams)
  
  const categories = await getFetch('/categories')

  return (
    <div className="layout-3 menu">
      <div className="container">
        <div className="row">

          <div className="col-lg-3">
            <Search />

            <hr />
           <Categories categories={categories}/>

            <hr />
           <Sort />
          </div>

          <div className="col-lg-9">
            <Suspense key={params.toString()} fallback={<Loading />}>
              <ProductList params={params.toString()}/>
            </Suspense>
          </div>

        </div>
      </div>
  </div>
  )
}

