import styles from "./experience.module.css";
const Experience = () => {
  const experience = [
    {
      img: "/tripteam.jpg",
      label: "Tripteam",
      years: "2024 - 2025",
      info: "Full stack app contain a social network for traveling using react native",
      technologies: "React Native,React ,Aws , Typescript ,Html ,Css ,Node Js ,Express Js ,Mongo Db",
    },
    {
      img: "/abilisense.png",
      label: "Abilisense",
      years: "2022 - 2023",
      info: "Full stack application contain decibel meter and anomaly detection using next js",
      technologies: "Next Js, React Native, Html , Css ,Node Js, Express Js, Mongo Db",
    },
  ];
  return (
    <div className={styles.page_container}>
      <div className={styles.container}>
        {experience.map((experience, index) => {
          return (
            <div key={index}>
              <div className={styles.img_container}>
                <img className={styles.img} src={experience.img} alt="error" />
              </div>

              <div className={styles.info_container}>
                <h2>Company :</h2>
                <p className={styles.tag}>{experience.label}</p>
              </div>
              <div className={styles.info_container}>
                <h2>Years : </h2>
                <p className={styles.tag}> {experience.years}</p>
              </div>
              <div className={styles.info_container}>
                <h2>Info:</h2>
                <p className={styles.tag}>{experience.info}</p>
              </div>
              <div className={styles.info_container}>
                <h2>Using:</h2>
                <p className={styles.tag}>{experience.technologies}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Experience;
