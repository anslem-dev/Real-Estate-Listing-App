import styles from "./Cart.module.css";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";
import Favourite from "./Favourite";

const Cart = () => {
  const {
    carts,
    decrementBtn,
    incrementBtn,
    removeExistingProps,
    sumTotalPrice,
  } = useCart();
  const cartList = carts || [];

  return (
    <> 
    <div className={styles.container}>
      {cartList.length === 0 ? (
        <div>
          <p>Pls ADD to Empty Cart</p>
          <Link to="/ProductPage">Return To Properies</Link>
        </div>
      ) : (
        <div>
          <header className={styles.cartHeader}>
            <p>
              Your Carts List <strong>{carts.length}</strong>{" "}
            </p>
            <Link to="/ProductPage">Check for more Properties</Link>
            <h4>Total Ngn:{sumTotalPrice()}</h4>
            <button className={styles.checkoutBtn}>CheckOut</button>
          </header>
          <div className={styles.cartBox}>
            {cartList.map((property) => (
              <div key={property.cartPropId} className={styles.cartCard}>
                <img src={property.images} className={styles.cartImg} />
                <div className={styles.cartBody}>
                  <h5>{property.title}</h5>
                  <p>
                    <strong>City</strong> {property.location.city}
                  </p>
                  <h5>{` ${property.type} NGN:${property.price}`} </h5>
                </div>
                <div className={styles.cartBtn}>
                  {property.type === "Buy" ? null : (
                    <button onClick={() => decrementBtn(property.cartPropId)}>
                      <FaMinus />
                    </button>
                  )}
                  <span>
                    {property.type === "Buy"
                      ? null
                      : `Years: ${property.quantity}`}
                  </span>
                  {property.type === "Buy" ? null : (
                    <button onClick={() => incrementBtn(property.cartPropId)}>
                      <FaPlus />
                    </button>
                  )}
                  <button
                    onClick={() => removeExistingProps(property.cartPropId)}
                    className={styles.RemBtn}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

<Favourite/>
    </>
  );
};

export default Cart;
