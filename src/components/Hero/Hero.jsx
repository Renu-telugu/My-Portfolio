import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Telugu Renuka</h1>
        <p className={styles.description}>
          <span className={styles.animatedText}>Passionate Developer</span>
        </p>

        {/* Contact Button */}
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="https://github.com/Renu-telugu" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/telugu-renuka-a26166264/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <img
        src={getImageUrl("hero/3d-image.webp")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
