import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}></div>
      <ul>
        <li>
          <Link to={"/"}>Strona Główna</Link>
        </li>
        <li>
          <Link to={"/apartments"}>Apartamenty</Link>
        </li>
        <li>
          <Link to={"/contact"}>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
