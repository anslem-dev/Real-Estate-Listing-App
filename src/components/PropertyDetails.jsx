import { useEffect, useState } from "react";
import styles from "./PropertyDetails.module.css";
const PropertyDetails = () => {
  const [counter, setCounter] = useState(0);
  const maxNumber = 1000;  
  useEffect(() => {
  const interval  = setInterval (() => {
    setCounter((count) =>{
      if (count >= maxNumber) {
        clearInterval(interval)
        return count; 
      }
      return count +1
    });
  }, 10)
  return  ()=> clearInterval (interval)
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        The magnificent interface enhances perfectly. Every dynamic solution
        should optimizes benefits. The interface will develops the solutions
        reliably. Without interface, the amazing solutions cannot builds. The
        service will optimizes the opportunities perfectly. A dynamic solution
        can delivers solutions. The application will optimizes the benefits
        quickly. Without service, the creative experiences cannot manages. A
        incredible platform can develops benefits. The experience will builds
        the results quickly.
      </p>
      <main className={styles.imageBoxContainer}>
        {/* <div className={`${styles.imageBox}  ${styles.leftImageBox} `} >
          <span className={styles.counter} >10k</span>
        </div> */}
        <div className={`${styles.imageBox}  ${styles.middleImageBox} `}>
          <span className={styles.counter}>{counter}k</span>
        </div>
        <div className={styles.rightImageBox}>
          <div className={`${styles.imageBox}  ${styles.triangleImageBox} `}>
          </div>
          <div className={`${styles.imageBox}  ${styles.bottomImageBox} `}>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyDetails;
