import React from 'react'
import Cart from '../components/Cart'
import PageNav from '../components/PageNav'
import SidepPageNav from '../components/SidePageNav'

const CartPage = () => {
  return (
    <div>
            <PageNav/>
     <SidepPageNav/>
        <Cart/>
    </div>
  )
}

export default CartPage