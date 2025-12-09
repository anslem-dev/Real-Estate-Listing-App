import { NavLink } from "react-router";
import styles from './Login.module.css';
const Login = () => {
  return (
    <div className={styles.login}>
      <NavLink to="/AppProfilePage">&#128100;</NavLink>
    </div>
  );
};

export default Login;
