// components/Marquee.js
import React from "react";
import styles from "./Marquee.module.css"; // Import the CSS module

const Marquee = ({ texts }) => {
  // Create a repeated string of texts for smooth scrolling
  const repeatedTexts = [...texts, ...texts]; // Repeat the texts array to ensure smooth scrolling

  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeContent}>
        {repeatedTexts.map((text, index) => (
          <p key={index} className={styles.marqueeText}>
            {text} &nbsp;&nbsp; {/* Add space between texts */}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
