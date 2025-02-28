import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmileBeam,
  faCircleUser,
  faLightbulb,
  faFolder,
  faAward,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons"; // ✅ Fixed import

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
      <div className={styles.logo}>
        Renu
        <FontAwesomeIcon icon={faFaceSmileBeam} className={styles.smileIcon} />
      </div>
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
              <FontAwesomeIcon icon={faCircleUser} className={styles.icon} />
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
              <FontAwesomeIcon icon={faLightbulb} className={styles.icon} />
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
              <FontAwesomeIcon icon={faFolder} className={styles.icon} />
              Projects
            </a>
          </li>
          <li>
            <a href="#achievements" onClick={(e) => handleScroll(e, "achievements")}>
              <FontAwesomeIcon icon={faAward} className={styles.icon} />
              Achievements
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
              <FontAwesomeIcon icon={faIdBadge} className={styles.icon} />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
