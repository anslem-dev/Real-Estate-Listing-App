import { FaAccusoft, FaComments, FaLocationArrow } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <header>
        <h3>Contact Our Customers Service Team</h3>
        <article>
          When you builds a solution, it becomes creative.
          Without solution, the beautiful opportunities cannot manages. The
          product will builds the experiences seamlessly. The experience will
          enhances the experiences reliably. When you builds a solution, it
          becomes incredible. Without application, the creative innovations
          provident qui excepturi explicabo nemo cum omnis beatae odio earum
          voluptas delectus modi consequuntur veniam ut.
        </article>
        <p>kindly let us know how we can help ?</p>
      </header>
      <div>
        <ul className={styles.unorderedList}>
          <li className={styles.list}>
            <FaComments />
            <h4>Sales team</h4>
            <p>
             do have a friendly conversation with our sales team
            </p>
            <a href="maywebmst@gmail.com">customer service</a>
          </li>
          <li className={styles.list}>
            {" "}
            <FaAccusoft />
            <h4>technical team </h4>
            <p>need help with order, payment, and any other techincal issues ? </p>
            <a href="maywebmst@gmail.com">tech team</a>
          </li>

          <li className={styles.list}>
            {" "}
            <FaLocationArrow />
            <h4>visit office</h4>
            <p>make it in person to our office</p>
            <a
              href="https://www.google.com/maps?=6.4500,3.3667"
              target="_blank"
              rel="noopener norefferer"
            >
              visit us
            </a>
          </li>

          <li className={styles.list}>
            <FaComments />
            <h4>reach us via call</h4>
            <p>urgently talk to any of our representative</p>
            <a href="tel: +2347086983281">call us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
