import styles from './Profile.module.css';
import { NavLink } from 'react-router';
const Profile = () => {
  
  return (
    <div>
        <div className={styles.login}>
      <NavLink to="/AppProfilePage">&#128100;</NavLink>
    </div>
    </div>
  )
}

export default Profile



