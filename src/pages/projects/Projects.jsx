import { useEffect, useState } from "react";
import styles from "./projects.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Projects = () => {
  const [index, setIndex] = useState(0);
  const projects = [
    {
      label: "Bank",
      info: "An End to end progressive web application for bank service served with a full functional backend including authentication and Database manipulation",
      link: "https://lioraharon98.github.io/bank/",
      img: "/projects-icons/bank.jpg",
      using: ["React", "Html5", "Css3", "NodeJs", "ExpressJs", "MongoDb", "Firebase"],
    },
    {
      label: "super market",
      info: "An End to end progressive web application for online shopping served with a full functional backend including authentication and Database manipulation",
      link: "https://lioraharon98.github.io/supermarket/",
      img: "/projects-icons/supermarket.webp",
      using: ["React", 'Javascript',"Html5", "Css3", "NodeJs", "ExpressJs", "MongoDb", "Firebase", "Ejs"],
    },
    {
      label: "decibel meter",
      info: "an decibel meter display decibel and frequency with anomaly detection after data send to database ",
      link: "https://next-js-decibel-meter.herokuapp.com/",
      img: "/projects-icons/decibel-meter.png",
      using: ["NextJs", "Html5", "Css3", "NodeJs", "ExpressJs", "MongoDb"],
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
          link to website {'>>'}
        </a>
        <AiOutlineArrowRight className={styles.arrow} onClick={toggleProjects.bind(this, "plus")} />
      </div>
      <div className={styles.info_container}>
        <div className={styles.project_keys}>
          <p className={styles.keys_tag}>project name :</p>
          <p className={styles.keys_tag}>project info :</p>
          <p className={styles.keys_tag}>using : </p>
        </div>
        <div className={styles.project_info}>
          <p className={styles.info_tag}>{projects[index].label}</p>
          <p className={styles.info_tag}>{projects[index].info}</p>
          <div className={styles.using}>
            {projects[index].using.map((using, index) => (
              <p className={styles.info_tag} key={index}>
                {using},
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
