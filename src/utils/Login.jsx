import {useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import styles from "./Login.module.css"
import AppLoader from "../components/AppLoader";

const Login = () => {
  const [mail, setmail] = useState("defaultmail@gmail.com")
  const [password, setPassword] = useState("defaultpassword")

const {login, loading } = useAuth();
const navigate = useNavigate();

const handleSubmit = async (e) =>{
e.preventDefault()
const success = await login(mail, password);
if(success){
  navigate("/");
}else{
  alert("invalid login details")
}
}

  return (
    <div className={styles.box} > 
      {loading &&  <AppLoader/>}
   <form onSubmit={handleSubmit} 
className={ `${styles.form} ${loading ? styles.blur : ""} ` } 
>
    <input type="mail" 
    value={mail}
    onChange={(e) => setmail(e.target.value)}
    required
       className={styles.input}
    />
     <input type="password" 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    className={styles.input}
    />
    <button type="submit" className={styles.button} disabled={loading} >Login</button>
   <p> Dont Have An Account  <Link>Signup</Link></p>
   </form>
    </div>
  )
}

export default Login

