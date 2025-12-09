
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
import { useFilter } from "../hooks/useFilter";
import styles from "./SearchProperty.module.css";
import { Link } from "react-router";

const SearchProperty = () => {
  const {setSearch, setLocation, setPrice,setType} = useFilter();
  const {carts} = useCart();
  return (
         <main className={styles.container}>
        <div className={styles.inputText} >
<input type="text" placeholder='what you search ?'
//  value={search}
   onChange={(e) => setSearch(e.target.value)}
/>
<button>
   <Link to="/CartPage">
<FaCartPlus/>
{carts.length}
   </Link>
</button>
        </div>
        <div className={styles.selectBox} >
<select name="Price" id="#" 
// price={price} 
onChange={(e) => setPrice(e.target.value)}>
    <option value="price">Price</option>
    <option value="200">750000</option>
    <option value="300">480000</option>
    <option value="400">250000</option>
    <option value="500">120000</option>
    <option value="600">310000</option>
</select>
<select name="Type" id="#" 
//  type={type} 
onChange={(e) => setType(e.target.value)} >
    <option value="rent">Rent</option>
    <option value="buy">Buy</option>
</select>


<select  id="#" location={location} onChange={(e) => setLocation(e.target.value)} >
    <option value="allLocation">All Location</option>
    <option value="lagos">Lagos</option>
    <option value="abuja">Abuja</option>
    <option value="Port Harcourt">Port Harcourt</option>
    <option value="Enugu">Enugu</option>
    <option value="Ibadan">Ibadan</option>
    <option value="Delta">Delta</option>
    <option value="Benin City">Benin City</option>
    <option value="Ogun">Ogun</option>
</select> 
 </div> 
   </main>
  )
}

export default SearchProperty