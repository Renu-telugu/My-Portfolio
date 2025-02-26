import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // Stops 10px above the section
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Renu</div>
      <div className={styles.menu}>
        <img
          className={`${styles.menuBtn} ${menuOpen ? styles.active : ""}`}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#education" onClick={(e) => handleScroll(e, "education")}>
              Education
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#achievements" onClick={(e) => handleScroll(e, "achievements")}>
              Achievements
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
