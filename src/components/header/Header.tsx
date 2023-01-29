import styles from "./header.module.css";
import { useState } from "react";
import HeaderLink from "../header_link/HeaderLink";

const Header = () => {
  const [toggle, setToggle] = useState<string | null>("");
  const onToggle = (e: React.MouseEvent<HTMLElement>) => {
    setToggle(e.currentTarget.textContent);
  };
  return (
    <div className={styles.container}>
      <div className={styles.home_container}>
        <HeaderLink onClick={onToggle} toggle={toggle} to="/">
          home
        </HeaderLink>
      </div>

      <HeaderLink onClick={onToggle} toggle={toggle} to="/skills">
        skills
      </HeaderLink>
      <HeaderLink onClick={onToggle} toggle={toggle} to="/projects">
        projects
      </HeaderLink>
      <HeaderLink onClick={onToggle} toggle={toggle} to="/experience">
        experience
      </HeaderLink>
    </div>
  );
};

export default Header;
