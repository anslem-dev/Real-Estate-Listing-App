import {FaBoxOpen, FaCogs, FaEnvelope, FaInfoCircle,FaUser} from 'react-icons/fa'
import { NavLink } from 'react-router'
import styles from './SideNavMenu.module.css';

const SideNavMenu = ({isOpen} ) => {
  return (
    <div style={{
        display : isOpen ? "block" : "none",
    }}>
       <ul className={styles.SideNavMenu}>
        <li>
          <NavLink to="/AppProfilePage" > 
          {/* onClick={() => window.scrollTo(0, 0) }  */}
          <span>
               <FaUser/>
          </span>
          profile</NavLink>
            </li>
            <li>
                <NavLink to="/CartPage" >
                <span>
                 <FaBoxOpen/>
                </span>
                Cart</NavLink>
            </li>
            <li>
                <NavLink to="/ProductPage" >
                <span>
                 <FaBoxOpen/>
                </span>
                 Product</NavLink>
            </li>
            <li>
                <NavLink to="/ServicePage" >
                <span>
                 <FaCogs/>
                </span>
                 Service</NavLink>
            </li>
            <li>
                <NavLink to="/AboutPAge" >
                <span>
                 <FaInfoCircle/>
                </span>
                About </NavLink>
            </li>
            <li>
                <NavLink to="/ContactPage" > 
                <span>
                 <FaEnvelope/>
                </span>
                Contact</NavLink>
            </li>
    </ul>
    </div>
  )
}

export default SideNavMenu