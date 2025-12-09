import React from 'react'
import PageNav from '../components/PageNav'
import SidepPageNav from '../components/SidePageNav'
import ProductList from '../components/ProductList'
const ProductPage = () => {
  return (
    <div>
        <PageNav/>
        <SidepPageNav/>
       <ProductList/>
    </div>
  )
}

export default ProductPage