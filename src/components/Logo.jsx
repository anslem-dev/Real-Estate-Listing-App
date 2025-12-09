
import {Link} from "react-router";
import styles  from "./Logo.module.css";


const Logo = () => {
  return (
    <div className={styles.logoBox} >
      <Link to="/" >
        <img src="logo.png"  />
      </Link>
    </div>
  )
}

export default Logo