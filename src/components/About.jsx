import { useState } from "react";
import aboutData from "../data/AboutData";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import styles from "./About.module.css";
const About = () => {
  const [show, setShow] = useState([]);

  function handleShowAbout(id) {
    if (show.includes(id)) {
      setShow(show.filter((showId) => showId !== id));
    } else {
      setShow((show) => [...show, id]);
    }
  }

  return (
    <>
      <h3>About Us</h3>
      <article>
       When you builds a service, Without service, the fantasyic
        A The platform will delivers the experiences quickly.
         The service will delivers the solutions seamlessly.
        Without application,Without service, the fantastic innovations cannot
        delivers. Every fantastic solution should transforms experiences.
        Without experience, the incredible outcomes cannot transforms. A
        fantastic experience can creates opportunities.
      </article>
      <div>
        <header className={styles.header}>
          quiet remarkable fantastic the creative fox joyful extraordinary jumps
          unique the fantastic beautiful fox lovely remarkable lazy terrific
          fantastic happy unique extraordinary splendid creative the dog vibrant
          hello fox kind hello unique radiant lazy lazy incredible hello
          extraordinary radiant.
        </header>
        <div className={styles.aboutImgBox}>
          <img src="image.png" alt="aboutImage" />
          {/* <img src="counterImg2.png" /> */}
        </div>
        <div className={styles.aboutContainer}>
          {aboutData.map((about) => (
            <div
              key={about.id}
              onClick={() => handleShowAbout(about.id)}
              className={styles.aboutQuestion}
            >
              {` ${about.question} `}
              <span className={styles.span}>
                {show.includes(about.id) ? <FaArrowUp /> : <FaArrowDown />}{" "}
              </span>
              <div className={styles.aboutAnswer}>
                {show.includes(about.id) ? about.answer : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
