
import Properties from "./Properties"
 import SearchProperty from "./SearchProperty"
  import PropertyDetails from "./PropertyDetails"
import styles from "./ProductList.module.css";
import Favourite from "./Favourite";
import StarRate from "./StarRate";


const ProductList = () => {

 
  return (
    <section  > 
   <SearchProperty/>
      <div className={styles.productContainer} >
     <Properties/>
     <PropertyDetails />
      </div>
     <StarRate/>
      <Favourite/>
       </section>
  )
}

export default ProductList