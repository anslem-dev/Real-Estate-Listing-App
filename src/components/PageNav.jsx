import styles from './PageNav.module.css';
import Logo from './Logo';
import NavMenu from './NavMenu';
import Profile from "./Profile";


const PageNav = () => { 
  return (
    <nav className={styles.nav} >
          <Logo/>
          <NavMenu/>
           <Profile/>
    </nav>
  )
}

export default PageNav


