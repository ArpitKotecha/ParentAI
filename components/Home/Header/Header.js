import React, { useCallback, useState } from "react";
import Nav from "../Nav/Nav";
import styles from "/components/Home/Header/Header.module.css";
import Body from "../Body/Body";
import JoinWaitlistForm from "../JoinWaitlistForm/JoinWaitlistForm";

function Header() {

  const [showform, setShowForm] = useState(false);

  const formHandler = useCallback((value) => {
    if (value) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
    console.log("form")
  }, []);

  return (
    <div className={styles.main}>

      {showform && 
        <div className={styles.formContainer}>
          <div className={styles.formOverlay}>
            <JoinWaitlistForm closeForm={() => formHandler(false)}/>
          </div>
        </div>
      }

      <video autoPlay loop muted className={styles.video}>
        <source src="/bg_video.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}>
        <Nav formHandler={formHandler} />
        <div className={styles.bodyContainer}>
          <Body formHandler={formHandler} />
        </div>
      </div>
    </div>
  );
}

export default Header;
