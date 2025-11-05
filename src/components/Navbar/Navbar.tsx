import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import burgerMenuIcon from "../../assets/Icons/hamburgerMenu.svg";
import closeIcon from "../../assets/Icons/Close.svg";
import logo from "../../assets/LogoAPTblack.png";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const menuClick = () => {
    setBurgerMenu((prev) => !prev);
  };

  const handleLinkClick = () => {
    setBurgerMenu(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.navbar}
    >
      <NavLink to="/" className={styles.logo}>
        <motion.img
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          src={logo}
          alt="Logo"
        />
      </NavLink>

      <ul>
        <motion.li
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Strona Główna
          </NavLink>
        </motion.li>
        <motion.li
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <NavLink
            to={"/Apartments"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Apartamenty
          </NavLink>
        </motion.li>

        <motion.li
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <NavLink
            to={"/Contact"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Kontakt
          </NavLink>
        </motion.li>
      </ul>

      {!burgerMenu ? (
        <motion.img
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          src={burgerMenuIcon}
          onClick={menuClick}
          alt="Hamburger Menu"
          className={styles.burgerMenu}
        />
      ) : (
        <motion.img
          src={closeIcon}
          onClick={menuClick}
          alt="Close Menu Icon"
          className={styles.closeIcon}
        />
      )}

      {burgerMenu ? (
        <ul className={styles.burgerMenuList}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? styles.active : styles.burgerMenuLink
              }
              onClick={handleLinkClick}
            >
              Strona Główna
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/Apartments"}
              className={({ isActive }) =>
                isActive ? styles.active : styles.burgerMenuLink
              }
              onClick={handleLinkClick}
            >
              Apartamenty
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                isActive ? styles.active : styles.burgerMenuLink
              }
              onClick={handleLinkClick}
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      ) : null}
    </motion.nav>
  );
};

export default Navbar;
