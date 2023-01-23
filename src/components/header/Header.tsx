import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.home_container}>
        <Link className={styles.header_tag} to={"/"}>
          home
        </Link>
      </div>

      <Link className={styles.header_tag} to={"/skills"}>
        skills
      </Link>
      <Link className={styles.header_tag} to={"/projects"}>
        projects
      </Link>
      <Link className={styles.header_tag} to={"/experience"}>
        experience
      </Link>
    </div>
  );
};

export default Header;
