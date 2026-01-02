import PageNav from '../components/PageNav'
import SidepPageNav from '../components/SidePageNav'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
const AppProfilePage = () => {
  
  const {logout} = useAuth()
    const navigate = useNavigate()
  
  const handleLogout =()=>{
    logout()
    navigate('/login')
  }

  return (
      <div>
        <PageNav/>
        <SidepPageNav/>
         <p>
         profile is under development !
         </p>
         <button onClick={handleLogout} >Logout</button>
       </div>
  )
}

export default AppProfilePage



