import React from 'react'
import PageNav from '../components/PageNav'
import SidepPageNav from '../components/SidePageNav'
import Contact from '../components/Contact'
// import { Footer } from '../components/Footer'
const ContactPage = () => {
  return (
    <div>
        <PageNav/>
        <SidepPageNav/>
        <Contact/>
        {/* <Footer/> */}
    </div>
  )
}

export default ContactPage