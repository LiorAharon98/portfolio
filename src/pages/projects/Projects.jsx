import { useState } from "react";
import styles from "./projects.module.css";

import projects from "../../projectsData";
const Projects = () => {
  const [index, setIndex] = useState(0);

  const toggleProjects = (value) => {
    setIndex(value);
  };
  return (
    <>
      <div className={styles.projects_label_container}>
        {projects.map((value, projectIndex) => {
          return (
            <h3
              style={{ color: index === projectIndex ? "rgba(8, 0, 255, 0.513)" : "black" }}
              className={styles.label_container}
              key={value.label}
              onClick={() => {
                toggleProjects(projectIndex);
              }}
            >
              {value.label}
            </h3>
          );
        })}
      </div>
      <div key={index} className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.container_left_side}>
            <div className={styles.info_container}>
              <div className={styles.test}>
                <p className={styles.info_tag}></p>
              </div>
              <div className={styles.info_text_container}>
                <p className={styles.keys_tag}>Project info :</p>
                <p className={styles.info_tag}>{projects[index].info}</p>
              </div>
              <div className={styles.info_text_container}>
                <p className={styles.keys_tag}>Technologies : </p>
                <div className={styles.using}>
                  {projects[index].using.map((using, index) => (
                    <p className={styles.info_tag} key={index}>
                      {using} ,
                    </p>
                  ))}
                </div>
                <a className={styles.link} href={projects[index].link}>
                  Link
                </a>
              </div>
            </div>
          </div>
          <div className={styles.container_right_side}>
            <img className={styles.img} src={projects[index].img} alt="error"></img>
            <div className={styles.arrow_container}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
