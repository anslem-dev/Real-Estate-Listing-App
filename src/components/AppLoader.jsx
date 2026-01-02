import spinner from "../assets/spinner.gif";
import styles from "./AppLoader.module.css"

const AppLoader = ()=> (
  <div className={styles.loader}>
    <img src={spinner}  alt="loading..."/>
  </div>
  )
export default AppLoader