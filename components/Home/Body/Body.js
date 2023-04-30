import React from 'react'
import styles from "/components/Home/Body/Body.module.css";

function Body() {
  return (
    <div className={styles.container}>
        <h1 class={styles.title}>AI Study Assistant for Kids and Teens</h1>
        <p class={styles.desc}>Supercharge your kids learning with world's most advanced AI co-pilot for kids and teens</p>
        <div className={styles.Btns}>
            <button className={styles.blueBtn}>Join the Waitlist</button>
            
        </div>
        <img className={styles.bodyGif} src='https://cdn.kastatic.org/images/khan-labs/khanmigo_hero_optimized.gif'></img>
    </div>
  )
}

export default Body