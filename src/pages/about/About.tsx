import React from "react";
import styles from "./about.module.css";
import { AiOutlineDownload } from "react-icons/ai";
const About = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.container}>
        <h1>hello , my name is Lior Aharon!</h1>
        <p className={styles.tag}>
          Passionate junior full-stack developer. developing scalable website/applications using a wide range of
          front-end and back-end skills. Developed +5 website/applications
        </p>

        <div className={styles.tag}>
          <p>  language : Javascript,Typescript </p>
          <p> Frameworks & Technologies React React Native Next js Firebase Express NodeJS
          HTML CSS Ejs</p>
          <p>    Databases : MongoDB, Firebase</p>
    
        </div>
        <div className={styles.resume_container}>
          <a className={styles.resume} href="/Resume Lior Aharon.pdf">
            {" "}
            my resume <AiOutlineDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
