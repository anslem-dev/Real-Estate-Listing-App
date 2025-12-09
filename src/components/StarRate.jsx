import { useStar } from "../hooks/useStar";
import { FaStar } from "react-icons/fa";
import styles from "./StarRate.module.css";
const StarRate = () => {
  const { rate, setRate } = useStar();
  function handleClick(CurIndex) {
    setRate(CurIndex + 1);
  }

  return (
    <div className={styles.starRateBox} >
        <h5>Kindly Rate Us </h5>
      {Array.from({ length: 5 }, (_, CurIndex) => (
        <FaStar
          key={CurIndex}
          size={30}
          color={CurIndex < rate ? "#ffc107" : "#e4e5e9"}
          onClick={() => handleClick(CurIndex)}
        />
      ))}
      <p>Rated: {rate}</p>
    </div>
  );
};

export default StarRate;
