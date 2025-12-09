import styles from './PageNav.module.css';
import Logo from './Logo';
import NavMenu from './NavMenu';
import Login from './Login';

const PageNav = () => { 
  return (
    <nav className={styles.nav} >
          <Logo/>
          <NavMenu/>
             <Login/>
    </nav>
  )
}

export default PageNav


