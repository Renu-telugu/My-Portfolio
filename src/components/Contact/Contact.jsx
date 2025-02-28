import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Let's Connect!</h2>
      <p className={styles.subtitle}>
        Feel free to reach out to me! I'm always open to discussions about{" "}
        <span className={styles.gradientText}>
          development, problem-solving, and opportunities.
        </span>
      </p>

      <div className={styles.iconContainer}>

      <a
          href="https://www.linkedin.com/in/telugu-renuka-a26166264/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaLinkedin className={styles.icon} />
        </a>

        <a
          href="https://github.com/Renu-telugu"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaGithub className={styles.icon} />
        </a>

        <a href="mailto:telugurenuka40@gmail.com" className={styles.iconLink}>
          <FaEnvelope className={styles.icon} />
        </a>
        
        <a
          href="https://leetcode.com/u/Renu_Telugu_05/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaCode className={styles.icon} />
        </a>

      </div>
      
      <div className={styles.copyright}>
        <span>© {new Date().getFullYear()} Renuka Telugu</span>
      </div>
    </section>
  );
};
