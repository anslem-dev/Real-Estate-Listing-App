import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ServicePage from "./pages/ServicePage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import AppProfilePage from "./pages/AppProfilePage";
import CartPage from "./pages/CartPage";
import { Footer } from "./components/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appLayout}>
      <div className={styles.topNavPage} > 
   <BrowserRouter>
   <Routes>
    <Route path="/"  element={<HomePage/>} />
      <Route path="ProductPage"  element={<ProductPage/>} />
      <Route path="ServicePage" element={<ServicePage/>} />
      <Route path="AboutPage" element={<AboutPage/>} />
      <Route path="ContactPage" element={<ContactPage/>} />
      <Route path="CartPage"  element={<CartPage/>} /> 
      <Route path="AppProfilePage" element={<AppProfilePage/>} />
       <Route path="*" element={<ErrorPage/>} />
   </Routes>
   </BrowserRouter>
      </div>
  <Footer/>
    </div>
  )
}

export default App

// http://localhost:4000/properties
// npx json-server --watch db.json --port 4000
   