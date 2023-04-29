import React from 'react'
import styles from "/components/Home/Footer/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div class={styles.title}>Join us in shaping the future of learning.</div>
            <div className={styles.buttons}>
                <button className={styles.joinBtn}>Join the waitlist</button>
                <button className={styles.subscribeBtn}>Subscribe to newsletter</button>
            </div>
        </div>
        <div className={styles.nav}>
            <div>visit Khan academy</div>
            <div className={styles.navList}>
                <div class="_xu2jcg _1iratxvNaN">© 2023 Khan Academy</div>
                <div class="_xu2jcg _1iratxvNaN">Tersm of use</div>
                <div class="_xu2jcg _1iratxvNaN">Privacy police</div>
                <div class="_xu2jcg _1iratxvNaN">Cookie Notice</div>

            </div>
        </div>
    </div>
  )
}

export default Footer