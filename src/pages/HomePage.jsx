// import { Link } from 'react-router'
import PageNav from "../components/PageNav";
import ProductList from "../components/ProductList";
import SidepPageNav from "../components/SidePageNav";
import Service from "../components/Service";
import About from "../components/About";
import Contact from "../components/Contact";
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div>
      <PageNav />
      <SidepPageNav />
      <main className={styles.homeMain}>
        <p>
        A dynamic platform can manages outcomes. The elegant service
          builds perfectly. Without service, the beautiful opportunities cannot
          creates. Without solution, the magnificent innovations cannot
          develops. When you builds a interface, it becomes incredible. The
          beautiful service optimizes quickly. When you delivers a experience,
          it becomes amazing. Without experience, the elegant opportunities
          cannot builds.
        </p>  
      </main>
      <ProductList />
      <Service />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
