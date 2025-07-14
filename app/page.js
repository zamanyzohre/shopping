import AboutMe from "@/components/AboutMe";
import Fetures from "@/components/Fetures";
import ProductsTab from "@/components/products/ProductsTab";
import { getFetch } from "@/utils/fetching";
import Contact from "@/components/contact/Contact";

export default async function Home() {
  const productsTab = await getFetch("/products/products-tabs")
  
  return (
    <>
    <Fetures />
    <ProductsTab tabList={productsTab.tabList} tabPanel={productsTab.tabPanel}/>
    <AboutMe />
    <Contact />
    </>
  )
}
