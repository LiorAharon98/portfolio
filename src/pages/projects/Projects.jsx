import { useEffect, useState } from "react";
import styles from "./projects.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";

import projects from "../../projectsData";
const Projects = () => {
  const [index, setIndex] = useState(0);

  const toggleProjects = (value) => {
    if (index === projects.length - 1 && value === "plus") return setIndex(0);
    if (value === "plus") return setIndex((prev) => prev + 1);

    setIndex((prev) => (prev === 0 ? (prev = 0) : prev - 1));
  };
  return (
    <div key={index} className={styles.container}>
      <div className={styles.container_left_side}>
        <div className={styles.info_container}>
          <div className={styles.test}>
            <p className={styles.keys_tag}>project name :</p>
            <p className={styles.info_tag}>{projects[index].label}</p>
          </div>
          <div className={styles.info_text_container}>
            <p className={styles.keys_tag}>project info :</p>
            <p className={styles.info_tag}>{projects[index].info}</p>
          </div>
          <div className={styles.info_text_container}>
            <p className={styles.keys_tag}>using : </p>
            <div className={styles.using}>
              {projects[index].using.map((using, index) => (
                <p className={styles.info_tag} key={index}>
                  {using} ,
                </p>
              ))}
            </div>
         
          </div>
        </div>
      </div>
      <div className={styles.container_right_side}>
        <img className={styles.img} src={projects[index].img} alt="error"></img>
        <div className={styles.arrow_container}>
          <AiOutlineArrowLeft className={styles.arrow} onClick={toggleProjects} />

          {projects.map((project, currentIndex) => {
            return <BsCircle key={currentIndex} fontSize={18} color={currentIndex === index ? "white" : undefined} />;
          })}
          <AiOutlineArrowRight className={styles.arrow} onClick={toggleProjects.bind(this, "plus")} />
          
        </div>
        <a className={styles.link} href={projects[index].link}>
              Link
            </a>
      </div>
    </div>
  );
};

export default Projects;
