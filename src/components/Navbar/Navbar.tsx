import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import burgerMenuIcon from '../../assets/Icons/hamburgerMenu.svg'
import closeIcon from '../../assets/Icons/Close.svg'
import logo from '../../assets/LogoAPTblack.png'

const Navbar: React.FC = () => {



  const [burgerMenu, setBurgerMenu] = useState(false);

  const menuClick = () => {
    setBurgerMenu((prev) => !prev);
    if (burgerMenu) {

    } else { }
  };



  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><img src={logo} alt="Logo" /></div>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Strona Główna
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Apartments"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Apartamenty
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Contact"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
      {!burgerMenu ?
        <img src={burgerMenuIcon} onClick={menuClick} alt="Hamburger Menu" className={styles.burgerMenu} /> :
        <img src={closeIcon} onClick={menuClick} alt="Close Menu Icon" className={styles.closeIcon} />}
      {burgerMenu ? <ul className={styles.burgerMenuList}><li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? styles.active : styles.burgerMenuLink)}
        >
          Strona Główna
        </NavLink>
      </li>
        <li>
          <NavLink
            to={"/Apartments"}
            className={({ isActive }) => (isActive ? styles.active : styles.burgerMenuLink)}
          >
            Apartamenty
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Contact"}
            className={({ isActive }) => (isActive ? styles.active : styles.burgerMenuLink)}
          >
            Kontakt
          </NavLink>
        </li></ul> : null}
    </nav>
  );
};

export default Navbar;
