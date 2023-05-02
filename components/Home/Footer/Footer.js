import React, { useCallback, useState } from 'react'
import styles from "/components/Home/Footer/Footer.module.css";
import JoinWaitlistForm from '../JoinWaitlistForm/JoinWaitlistForm';

function Footer() {

    
    const [showform, setShowForm] = useState(false);

    const formHandler = useCallback((value) => {
        console.log(value)
      if (value) {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
      console.log("form")
    }, []);

   
  return (
    <div className={styles.container}>

        {showform && 
            <div className={styles.formContainer}>
            <div className={styles.formOverlay}>
                <JoinWaitlistForm closeForm={() => formHandler(false)}/>
            </div>
            </div>
        }
        <div className={styles.main}>
            <div class={styles.title}>Join us in shaping the future of learning.</div>
            <div className={styles.buttons}>
                <button className={styles.joinBtn} onClick={() => {formHandler(true)}}>Join the waitlist</button>
                {/* <button className={styles.subscribeBtn}>Subscribe to newsletter</button> */}
                
            </div>
        </div>
      
    </div>
  )
}

export default Footer