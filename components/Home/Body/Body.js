import React from 'react'
import styles from "/components/Home/Body/Body.module.css";

function Body() {
  return (
    <div className={styles.container}>
        <h1 class={styles.title}>World-class AI for education</h1>
        <p class={styles.desc}>Say hello to Khanmigo, Khan Academys AI-powered guide. Tutor for learners. Assistant for teachers.</p>
        <div className={styles.Btns}>
            <button className={styles.blueBtn}>Join the Waitlist</button>
            <button className={styles.TransBtn}>Subscribe to newsletter</button>
        </div>
        <img className={styles.bodyGif} src='https://cdn.kastatic.org/images/khan-labs/khanmigo_hero_optimized.gif'></img>
    </div>
  )
}

export default Body