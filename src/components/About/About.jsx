import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.subtitle}>
        A <span className={styles.gradientText}>Passionate Frontend Developer</span> crafting seamless and dynamic user experiences.
      </p>

      <div className={styles.aboutGrid}>
        <div className={styles.aboutCard}>
          <h3>🚀 Problem Solver</h3>
          <p>
            Solved 500+ coding problems, honing my algorithmic thinking and efficiency in tackling challenges.
          </p>
        </div>

        <div className={styles.aboutCard}>
          <h3>🌐 Web developer</h3>
          <p>
            Skilled in HTML, CSS, Bootstrap, JavaScript, React.js and creating responsive, user-friendly interfaces.
          </p>
        </div>

        <div className={styles.aboutCard}>
          <h3>🛠️ Tech Explorer</h3>
          <p>
            Certified in Google Cybersecurity, Oracle PL/SQL, and Google Cloud AI, always learning new technologies, frameworks, and best practices to stay ahead in web development.
          </p>
        </div>

        <div className={styles.aboutCard}>
          <h3>🤝 Team Player & Communicator</h3>
          <p>
            Gained leadership and teamwork skills through the PwC Women Leadership Program, thriving in collaborative environments.
          </p>
        </div>
      </div>

      <p className={styles.closingText}>
        I’m passionate about building innovative tech solutions, solving challenges, and exploring AI-driven applications. Ready to push boundaries and create something amazing! 🚀
      </p>
    </section>
  );
};