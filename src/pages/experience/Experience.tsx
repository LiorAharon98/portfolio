import styles from "./experience.module.css";
const Experience = () => {
  const experience = [
    {
      img: "/abilisense.png",
      label: "abilisense",
      years: "2022 - 2023",
      info: "Full stack application contain decibel meter and anomaly detection using next js",
      using: "Next Js, React Native, Html , Css ,Node Js, Express Js, Mongo Db",
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
                <h2>company :</h2>
                <p className={styles.tag}>{experience.label}</p>
              </div>
              <div className={styles.info_container}>
                <h2>years : </h2>
                <p className={styles.tag}> {experience.years}</p>
              </div>
              <div className={styles.info_container}>
                <h2>info:</h2>
                <p className={styles.tag}>{experience.info}</p>
              </div>
              <div className={styles.info_container}>
                <h2>using:</h2>
                <p className={styles.tag}>{experience.using}</p>
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
