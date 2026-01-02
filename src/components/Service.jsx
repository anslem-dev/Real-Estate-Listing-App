import { FaStar } from "react-icons/fa";
import testimonialData from "../data/ServiceData";
import styles from "./Service.module.css";
import { useStar } from "../hooks/useStar";

const Service = () => {
  const { rate } = useStar();
  return (
    <>
      <div className={styles.servicesHero}>
        <h4>Our Real Estate Services</h4>
        <article>
          Lorem iarticlesum dolor sit amet, consectetur adipisicing elit. Odit,
          nihil vel maxime doloremque fugit qui ipsum quos reiciendis
          consequuntur in illo accusamus beatae itaque sapiente, architecto
          corrupti!
        </article>
        <ul>
          <h4>Why Choose Us ? </h4>
        <li>
          nisi nihil, tenetur est at doloribus quia nulla, exercitationem quos in molestias? Accusantium provident porro nam minus.
        </li>
        </ul>
        <ol type="i">
          <li>
         The experience will enhances the opportunities automatically. When you optimizes a platform, it becomes elegant. 
          </li>
          <li>
           A fantastic interface can enhances innovations. The fantastic application creates reliably. 
          </li>
          <li>
        unique the fantastic beautiful fox lovely remarkable lazy terrific ordinary radiant.
          </li>
          <li>
             A creative experience can creates experiences. A beautiful experience can optimizes outcomes.
          </li>
          <li>
            The solution will creates the innovations seamlessl every fantastic solution should develops opportunities. 
          </li>
          <li>
          The product will delivers the innovations seamlessly. Without application, the creative opportunities cannot delivers.
          </li>
        </ol>
        <h4>Our Commitment</h4>
        <p>
           ea aspernatur doloremque maiores dolorem. Quod
          dolore deserunt, explicabo iste ut, consequuntur delectus quo omnis,
          vel veniam eaque nisi modi.
        </p>
      </div>
      <div className={styles.testimonialProfileCards}>
        <h3>TESTIMONIAL</h3>
        {testimonialData.map((testimony) => (
          <div key={testimony.name} className={styles.profileBox}>
            <div key={testimony.name} className={styles.profilecard}>
              <img src={testimony.image} className={styles.profileAvater} />
              <div>
                <span className={styles.testifierDetails}>
                  {testimony.name}
                  {Array.from({ length: 5 }, (_, CurIndex) => (
                    <FaStar
                      key={CurIndex}
                      size={20}
                      color={CurIndex < rate ? "#ffc107" : "#e4e5e9"}
                    />
                  ))}{" "}
                </span>
                <p>{testimony.commendation} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
