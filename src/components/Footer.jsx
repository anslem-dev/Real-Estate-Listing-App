import styles from "./Footer.module.css";

export const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className={styles.container} >
        <div className={styles.anchorLink} >
    <h6>Get Engage With Us </h6>
    <a href="www.facebook.com/anslem-dev">Facebook</a>
     <a href="www.instagram.com/anslem">Instagram</a>
      <a href="www.tiktok.com/mayweb_tech">Tiktok</a>
        </div>
     
            <span className={styles.newsSpan}>
        <input type="checkbox" />
        Subscribe To News Letter
        <input type="mail" placeholder='mymail.com' />
            </span>
            <marquee>
           <p>&copy; warning {year} MaywebRealEstate | all right reserved  </p>
            </marquee>
    </div> 
  )
}
