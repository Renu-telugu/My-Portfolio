import React from "react";
import styles from "./Achievements.module.css";

export const Achievements = () => {
  return (
    <section className={styles.container} id="achievements">
      <h2 className={styles.title}>Achievements & Certifications</h2>
      
      <div className={styles.sectionContainer}>
        <div className={styles.achievementsBox}>
          <h3 className={styles.sectionTitle}>🏆 Achievements</h3>
          <ul className={styles.list}>
            <li>Member of PwC Acceleration Centers Women Development Leadership Program</li>
            <li>Solved 500+ problems in various coding platforms</li>
            <li>AICTE- Google Cloud Generative AI Virtual Internship</li>
            <li>Participated in Bit N Build Hackathon</li>
          </ul>
        </div>
        
        <div className={styles.certificationsBox}>
          <h3 className={styles.sectionTitle}>📜 Certifications</h3>
          <ul className={styles.list}>
            <li>Communicating with Confidence (LinkedIn)</li>
            <li>Oracle PL/SQL Certification</li>
            <li>Google Cybersecurity Professional Certificate</li>
            <li>Oracle Database Design and Database Programming with SQL</li>
            <li>NPTEL Python for Data Science - Scored 70%</li>
            <li>Data to Generative AI by Code Vipasana</li>
            <li>Google Cloud & Gen AI Pathways (Google Cloud Study Jams 2023)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;