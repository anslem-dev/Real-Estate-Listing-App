import { NavLink} from 'react-router'   
import styles from './NavMenu.module.css';
const NavMenu = () => {
  return (
      <ul className={styles.ul}  >
        <li>
          <NavLink to="/" > Home</NavLink>
            </li>
            <li>
                <NavLink to="/ProductPage" > Product</NavLink>
            </li>
            <li>
                <NavLink to="/CartPage" > Cart </NavLink>
            </li>
            <li>
                <NavLink to="/ServicePage" > Service</NavLink>
            </li>
            <li>
                <NavLink to="/AboutPAge" >About </NavLink>
            </li>
            <li>
                <NavLink to="/ContactPage" > Contact</NavLink>
            </li>
    </ul>
  )
}

export default NavMenu