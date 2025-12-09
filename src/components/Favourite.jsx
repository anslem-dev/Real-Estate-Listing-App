import { FaHeart } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
import styles from "./Favourite.module.css";

const Favourite = () => {
  const { favs, addPropsToCart, carts, removeExistingFavProps } = useCart();
  return (
    <>
      {favs.length === 0 ? (
        <header className={styles.header}>
          <h4> Favourite List </h4>
          <p>Favourite List Is Empty, React To Property!!</p>
        </header>
      ) : (
        <div>
          <header className={styles.header}>
            <h4> Favourite List </h4>
            <p> These Are Favourite List You Liked </p>
          </header>

          <div className={styles.container}>
            {favs.map((fav) => {
              return (
                <div key={fav.id} className={styles.propertyBox}>
                  <div className={styles.imageBox}>
                    <img src={fav.images} />
                  </div>
                  <article>
                    <div>
                      <h5>{fav.title} </h5>
                      <p>{fav.description} </p>
                      <p>
                        <strong>City</strong> {fav.location.city}
                      </p>
                    </div>
                    <div className={styles.propertyPrices}>
                      <FaHeart
                        className={styles.favIcon}
                        onClick={() => removeExistingFavProps(fav.cartPropId)}
                      ></FaHeart>
                      <h5>{`NGN:${fav.price}`} </h5>
                      <button
                        className={styles.purchaseBtn}
                        onClick={() => addPropsToCart(fav)}
                      >
                        {carts.some((item) => item.id === fav.id)
                          ? "Added"
                          : `${fav.type}`}
                      </button>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Favourite;
