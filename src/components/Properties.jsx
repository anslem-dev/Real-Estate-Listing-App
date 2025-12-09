import { useEffect, useState } from "react";
import styles from "./Properties.module.css";
import { FaHeart } from "react-icons/fa";
import { useFilter } from "../hooks/useFilter";
import { useCart } from "../hooks/useCart";
import spinner from "../assets/spinner.gif";


const ProductItem = () => {
  const { search, location, price, type } = useFilter();
  const { addPropsToCart, carts, addPropsToFav, favs } = useCart();
  // const KEY_URL = "http://localhost:4000/properties";
  const KEY_URL = "https://api.jsonbin.io/v3/b/69382451ae596e708f8dbb41";
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(function () {
    const controler = new AbortController();

    async function getProperty() {
      try {
        setError(null);
        // setLoading(true);
        const res = await fetch(KEY_URL, { signal: controler.signal });
        if (!res.ok) {
          throw new Error(
            `HTTP error! status: soemthing went wrong fectching product data ${res.status}`
          );
        }
        const data = await res.json();
        setTimeout(() => {
          setProperties(data.properties);
          setLoading(false);
        }, 1000);
        // console.log(data);
      } catch (error) {
        if (error.name === "AbortError") return;
        console.error(error.message);
        setError(error.message);
        setLoading(false);
      }
    }
    getProperty();
    return () => controler.abort();
  }, []);

  if (loading) {
    return (
      <div>
        <img src={spinner} alt="spinner" />
        <p>Loading property, please wait...</p>
      </div>
    );
  }

  if (error) {
    return <p style={{ color: "red" }}>Error loading products: {error}</p>;
  }

  const filteredProperties = properties.filter(
    (property) =>
      property.description &&
      property.title?.toLowerCase().includes(search.toLowerCase()) &&
      property.location?.city?.toLowerCase().includes(location.toLowerCase()) &&
      property.price?.toString().includes(price.toLowerCase()) &&
      property.type?.toLowerCase().includes(type.toLowerCase())
  );

  return (
    <>
      {filteredProperties.length > 0 ? (
        <div className={styles.container}>
          {filteredProperties.map((property) => (
            <ul key={property.id} className={styles.propertyBox}>
              <div className={styles.imageBox}>
                <img src={property.images} />
              </div>
              <article>
                <div className={styles.propertyInfo}>
                  <h5>{property.title} </h5>
                  <p>{property.description} </p>
                  <p>
                    {/* {" "} */}
                    <strong>City</strong> {property.location.city}
                  </p>
                </div>
                <div className={styles.propertyPrices}>
                  <FaHeart
                    className={`${styles.favIcon} ${
                      favs.some((item) => item.id === property.id)
                        ? styles.active
                        : ""
                    } `}
                    onClick={() => addPropsToFav(property)}
                  ></FaHeart>
                  <h5>{`NGN:${property.price}`} </h5>
                  <button
                    className={styles.purchaseBtn}
                    onClick={() => addPropsToCart(property)}
                  >
                    {carts.some((item) => item.id === property.id)
                      ? "Added"
                      : `${property.type}`}
                  </button>
                </div>
              </article>
            </ul>
          ))}
        </div>
      ) : (
        <p>no result</p>
      )}
    </>
  );
};

export default ProductItem;
