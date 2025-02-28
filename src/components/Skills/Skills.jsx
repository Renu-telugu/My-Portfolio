import React from "react";
import styles from "./Skills.module.css";

import htmlIcon from "/assets/skills/html.png";
import cssIcon from "/assets/skills/css.png";
import jsIcon from "/assets/skills/js.png";
import javaIcon from "/assets/skills/java.png";
import pythonIcon from "/assets/skills/python.webp";
import cIcon from "/assets/skills/c.png";
import bootstrapIcon from "/assets/skills/bootstrap.png";
import kotlinIcon from "/assets/skills/kotlin.png";
import reactIcon from "/assets/skills/react.png";
import githubIcon from "/assets/skills/github.png";
import vscodeIcon from "/assets/skills/vscode.png";
import eclipseIcon from "/assets/skills/eclipse.png";

const skillsData = {
  "Languages & Frameworks": [
    { name: "JavaScript", icon: <img src={jsIcon} alt="JavaScript" className={styles.skillImg} /> },
    { name: "Java", icon: <img src={javaIcon} alt="Java" className={styles.skillImg} /> },
    { name: "Python", icon: <img src={pythonIcon} alt="Python" className={styles.skillImg} /> },
    { name: "C", icon: <img src={cIcon} alt="C" className={styles.skillImg} /> },
    { name: "Bootstrap", icon: <img src={bootstrapIcon} alt="Bootstrap" className={styles.skillImg} /> },
    { name: "HTML", icon: <img src={htmlIcon} alt="HTML" className={styles.skillImg} /> },
    { name: "CSS", icon: <img src={cssIcon} alt="CSS" className={styles.skillImg} /> },
    { name: "Kotlin", icon: <img src={kotlinIcon} alt="Kotlin" className={styles.skillImg} /> },
    { name: "React", icon: <img src={reactIcon} alt="React" className={styles.skillImg} /> },
  ],
  Tools: [
    { name: "GitHub", icon: <img src={githubIcon} alt="GitHub" className={styles.skillImg} /> },
    { name: "VS Code", icon: <img src={vscodeIcon} alt="VS Code" className={styles.skillImg} /> },
    { name: "Eclipse", icon: <img src={eclipseIcon} alt="Eclipse" className={styles.skillImg} /> },
  ],
};

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <p className={styles.subtitle}>
        A collection of my <span className={styles.gradientText}>technical skills & tools</span> that I have mastered over time.
      </p>

      <div className={styles.skillsGrid}>
        {/* Left Side - Languages & Frameworks (Larger) */}
        <div className={`${styles.skillsColumn} ${styles.languages}`}>
          <h3 className={styles.categoryTitle}><span className={styles.gradientText}>Languages & Frameworks</span></h3>
          <div className={styles.skillsBox}>
            {skillsData["Languages & Frameworks"].map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <div className={styles.skillIcon}>{skill.icon}
                    <p>{skill.name}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Tools (Smaller) */}
        <div className={`${styles.skillsColumn} ${styles.tools}`}>
          <h3 className={styles.categoryTitle}><span className={styles.gradientText}>Tools</span></h3>
          <div className={styles.skillsBox}>
            {skillsData.Tools.map((tool) => (
              <div key={tool.name} className={styles.skillCard}>
                <div className={styles.skillIcon}>{tool.icon}
                    <p>{tool.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
