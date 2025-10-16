import styles from "./skills.module.css";
const Skills = () => {
  const skills = [
    { icon: "/icons/react.png", label: "React Js" },
    { icon: "/icons/react-native.png", label: "React Native" },
    { icon: "/icons/javascript.png", label: "JavaScript" },
    { icon: "/icons/typescript.svg", label: "TypeScript" },
    { icon: "/icons/python.png", label: "Python" },
    { icon: "/icons/next-js.png", label: "Next Js" },
    { icon: "/icons/express-js.png", label: "Express Js" },
    { icon: "/icons/node-js.png", label: "Node Js" },
    { icon: "/icons/aws.png", label: "Amazon Aws" },
    { icon: "/icons/firebase.png", label: "Firebase" },
    { icon: "/icons/html5.png", label: "HTML5" },
    { icon: "/icons/css3.png", label: "CSS3" },
    { icon: "/icons/mongodb.png", label: "MongoDB" },
    { icon: "/icons/heroku.png", label: "Heroku" },
    { icon: "/icons/netlify.jpg", label: "netlify" },
    { icon: "/icons/github.png", label: "GitHub" },
    { icon: "/icons/ejs.png", label: "Ejs" },
  ];
  return (
    <div className={styles.container}>
      <h1 id={styles.header}>Skills && Abilities</h1>
      <div className={styles.test}>
        <div className={styles.skills_container}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill_container}>
              <img className={styles.img} src={skill.icon} alt={"error"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
