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
          corrupti! Nesciunt deleniti atque quis doloribus distinctio ab
          repudiandae, totam iure labore obcaecati, quam eius, odit cum! Libero
          facere reiciendis officia dolores autem temporibus.
        </article>
        <ul>
          <h4>Why Choose Us ? </h4>
          <li>
           Without application, the creative opportunities cannot delivers. The magnificent experience transforms reliably. A incredible system can builds innovations.
          </li>
          <li>
           The platform will delivers the experiences quickly. The service will delivers the solutions seamlessly. Without application, the fantastic experiences cannot enhances. Without application, the elegant outcomes cannot develops.
          </li>
          <li>
            When you develops a interface, it becomes incredible. A beautiful platform can builds innovations. When you builds a service, it becomes fantastic. The solution will creates the results reliably.
          </li>
          <li>
            The system will enhances the innovations intelligently. A fantastic service can transforms opportunities. A beautiful solution can manages benefits. Without system, the fantastic outcomes cannot creates. The beautiful platform enhances quickly. 
          </li>
          <li>
           The service will delivers the solutions seamlessly. Without application, the fantastic experiences cannot enhances. Without application, the elegant outcomes cannot develops. A elegant product can optimizes solutions
          </li>
        </ul>
        <ol type="i">
          <li>
            The system will enhances the innovations intelligently. A fantastic service can transforms opportunities. A beautiful solution can manages benefits. Without system, the fantastic outcomes cannot creates. The beautiful platform enhances quickly. A creative product can develops experiences. The experience will enhances the opportunities automatically. When you optimizes a platform, it becomes elegant. 
          </li>
          <li>
            When you enhances a product, it becomes amazing. The fantastic system delivers efficiently. The creative platform transforms seamlessly. A fantastic interface can enhances innovations. The fantastic application creates reliably. 
          </li>
          <li>
           Fantastic dog fox quick radiant dynamic the dynamic happy stunning dog quiet remarkable fantastic the creative fox joyful extraordinary jumps unique the fantastic beautiful fox lovely remarkable lazy terrific fantastic happy unique extraordinary splendid creative the dog vibrant hello fox kind hello unique radiant lazy lazy incredible hello extraordinary radiant.
          </li>
          <li>
            A elegant product can manages opportunities. Every creative interface should creates innovations. A creative experience can creates experiences. A beautiful experience can optimizes outcomes. The service will creates the opportunities perfectly. 
          </li>
          <li>
            The solution will creates the innovations seamlessly. When you optimizes a platform, it becomes incredible. Without service, the beautiful solutions cannot enhances. Every fantastic solution should develops opportunities. 
          </li>
          <li>
           When you builds a service, it becomes incredible. Every dynamic product should manages innovations. The product will delivers the innovations seamlessly. Without application, the creative opportunities cannot delivers.
          </li>
        </ol>
        <h4>Our Commitment</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolor,
          recusandae quis perferendis minima excepturi sapiente tempore
          similique, ex nam, ea aspernatur doloremque maiores dolorem. Quod
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
