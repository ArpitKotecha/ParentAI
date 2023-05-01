import React from "react";
import Nav from "../Nav/Nav";
import styles from "/components/Home/Header/Header.module.css";
import Body from "../Body/Body";

function Header() {
  return (
    <div className={styles.main}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/bg_video.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}>
        <Nav />
        <div className={styles.bodyContainer}>
          <Body />
        </div>
      </div>
    </div>
  );
}

export default Header;
