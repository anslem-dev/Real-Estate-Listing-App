import React from 'react'
import { Footer } from '../components/Footer'
import PageNav from '../components/PageNav'
import SidepPageNav from '../components/SidePageNav'
const FooterPage = () => {
  return (
    <div>
     <PageNav/>
        <SidepPageNav/>
        <Footer/>
    </div>
  )
}

export default FooterPage