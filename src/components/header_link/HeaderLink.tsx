import React from "react";
import { Link } from "react-router-dom";
import styles from "./header_link.module.css";
import { useState } from "react";
interface props {
  children: string;
  to: string;
  toggle : string | null;
  onClick: (e: React.MouseEvent<HTMLElement>)=> void
}
const HeaderLink = ({children,to,toggle,onClick}: props) => {
  return (
    <Link onClick={onClick} style={{textDecoration : toggle  ===children ? 'underline' : 'none'}} className={styles.header_tag} to={to}>
      {children}
    </Link>
  );
};

export default HeaderLink;
