import React from "react";
import styles from '../styles/Banner.module.css'
function Banner() {
    return (
      <div className={styles.banner}>
        <div className={styles.rays}></div>
        <h1>FLEW AWAY!</h1>
        <h2>1.14x</h2>
      </div>
    );
  }
  
export default Banner;