import { useEffect, useState } from "react";
import styles from "./projects.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Projects = () => {
  const [index, setIndex] = useState(0);
  const projects = [
    {
      label: "Bank",
      info: "An End to end progressive web application for online shopping served with a full functional backend including authentication and Database manipulation",
      link: "https://lioraharon98.github.io/bank/",
      img: "/bank.jpg",
      using: ["react", "Html5", "Css3", "NodeJs", "ExpressJs", "MongoDb", "Firebase"],
    },
    {
      label: "super market",
      info: "An End to end progressive web application for online shopping served with a full functional backend including authentication and Database manipulation",
      link: "https://lioraharon98.github.io/supermarket/",
      img: "/supermarket.webp",
      using: ["react", "Html5", "Css3", "NodeJs", "ExpressJs", "MongoDb", "Firebase", "ejs"],
    },
    {
      label: "decibel meter",
      info: "an decibel meter that can detect a exception in db by the day",
      link: "https://next-js-decibel-meter.herokuapp.com/",
      img: "/decibel-meter.png",
      using: ["react", "Html5", "Css3", "NodeJs", "ExpressJs", "MongoDb", "Firebase"],
    },
  ];
  const toggleProjects = (value) => {
    if (index === projects.length - 1) return setIndex(0);
    if (value === "plus") return setIndex((prev) => prev + 1);

    setIndex(index);
  };
  return (
    <div key={index} className={styles.container}>
      <img className={styles.img} src={projects[index].img} alt="error"></img>
      <div className={styles.arrow_container}>
        <AiOutlineArrowLeft className={styles.arrow} onClick={toggleProjects} />
        <a className={styles.link} href={projects[index].link}>
      link to website
      </a>
        <AiOutlineArrowRight className={styles.arrow} onClick={toggleProjects.bind(this, "plus")} />
      </div>
      <div className={styles.info_container}>
        <h2>project name : {projects[index].label}</h2>
        <h2 className={styles.info}> project info : {projects[index].info}</h2>
        <div className={styles.using_test}>
          <h2 className={styles.info}>using : </h2>
          {projects[index].using.map((using, index) => (
            <h2 key={index}>{using},</h2>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default Projects;
