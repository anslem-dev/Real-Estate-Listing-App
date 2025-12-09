import React, { useState } from 'react'
import Logo from './Logo'
import styles from './SidePageNav.module.css';
import SideNavMenu from './SideNavMenu';
import { FaBars, FaTimes } from 'react-icons/fa';

const SidePageNav = () => {
  const[isOpen, setIsOpen]= useState(false)

  function toggleNavbar(){
  setIsOpen((open) => !open)
  }
  return (
    <>
      <header className={styles.header} >
       <Logo/>
       <button onClick={toggleNavbar} >
        {!isOpen ? <FaBars/> : <FaTimes/> }
       </button>
      </header>
    <nav className={`${styles.sidenav} ${isOpen ? styles.open : "setIsOpen"}`} >
       <SideNavMenu isOpen={isOpen} />
    </nav>
    </>
  )
}

export default SidePageNav  