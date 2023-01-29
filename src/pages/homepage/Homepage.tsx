import styles from "./homepage.module.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.about_container}>
          <h1>HI There , I'm Lior Aharon</h1>
          <p className={styles.text}>i am a full stack developer</p>
          <Link to={"/about"} className={styles.about_button}>
            {" "}
            About me
          </Link>
          <div className={styles.button_container}>
            <a href="https://www.linkedin.com/in/lior-aharon-714760245" className={styles.button}>
              <AiFillLinkedin />
            </a>
            <a href=" https://github.com/LiorAharon98" className={styles.button}>
              <AiFillGithub />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=lior.ah98@gmail.com" className={styles.button}>
              <SiGmail />
            </a>
          </div>
          <div className={styles.resume_container}>
       
          </div>
        </div>

        <div className={styles.about}></div>
      </div>
    </>
  );
};

export default Homepage;
