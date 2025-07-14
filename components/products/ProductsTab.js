"use client"

import Products from "./Products";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function ProductsTab({tabList,tabPanel}) {
  return (
   <>
   <div className="product layout-1 info">
        <div className="container">
            <div className="tab text-center">
                <h2 className="fw-bold mb-3">منو محصولات</h2>
            </div>
            <Tabs selectedTabClassName="active">
                <TabList>
                    <ul className="filters_menu" >
                        {tabList && tabList.map((list,index)=>(
                                <Tab className=" " key={index}>{list}</Tab>
                            ))}
                    </ul>
                </TabList>
            
           
                <div className="layout-card mt-5">
                    {tabPanel.map((panel,index) =>(
                        <TabPanel  key={index}>
                            <div className="row ">
                                {panel.map(product =>(
                                    <div className="col-md-4" key={product.id}>
                                        <Products product={product} />
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </div>
            </Tabs>
            <div className="text-center mt-5">
                <button className="btn btn-hero btn_more">مشاهده بیشتر</button>
            </div>
        </div>
   </div>
   </>
  )
}
