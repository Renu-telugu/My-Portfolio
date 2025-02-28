import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import portfolioImg from "/assets/projects/portfolio.jpg";
import mentoringImg from "/assets/projects/mentoring.jpg";

const projects = [
  {
    id: 1,
    title: "Portfolio Website – My Digital Identity",
    description:
      "Designed a personal portfolio to showcase projects, skills, and experience in a visually appealing and responsive manner.",
    features:
      "Implemented a clean UI with smooth animations, a responsive design, and interactive sections.",
    outcome: "Enhanced my web development skills and created a platform to present my work.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: portfolioImg,
    link: "https://renu-telugu.vercel.app/",
  },
  {
    id: 2,
    title: "Online Mentoring Management System",
    description:
      "A system to manage mentoring activities efficiently across admin, mentor, and mentee modules.",
    features:
      "Admins manage user details; mentors submit reports and answer queries; mentees view reports and ask questions.",
    outcome: "Improved coordination and communication between mentors and mentees.",
    technologies: ["Java", "JDBC", "MySQL", "Servlets", "HTML", "CSS", "JavaScript"],
    image: mentoringImg,
    link: "https://github.com/Renu-telugu/Online-Mentoring-Management-System",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 2500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectCard}>
        <img
          src={projects[currentIndex].image}
          alt={projects[currentIndex].title}
          className={styles.projectImage}
        />
        <div className={styles.projectContent}>
          <h3>{projects[currentIndex].title}</h3>
          <p><strong>Objective:</strong> {projects[currentIndex].description}</p>
          <p><strong>Features:</strong> {projects[currentIndex].features}</p>
          <p><strong>Outcome:</strong> {projects[currentIndex].outcome}</p>
          <div className={styles.technologies}>
            {projects[currentIndex].technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>{tech}</span>
            ))}
          </div>
          <a
            href={projects[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewButton}
          >
            View Project
          </a>
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={prevProject} className={styles.navButton}>❮</button>
        <div className={styles.dots}>
          {projects.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
            ></span>
          ))}
        </div>
        <button onClick={nextProject} className={styles.navButton}>❯</button>
      </div>
    </div>
  );
};

export default Projects;