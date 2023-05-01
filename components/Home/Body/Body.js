import React from 'react'
import styles from "/components/Home/Body/Body.module.css";

function Body() {
  return (
    <div className={styles.container}>
        <h1 class={styles.title}>AI Study Assistant for <br/> Kids and Teens</h1>
        <p class={styles.desc}>Supercharge your kids learning with <br/> world &apos; s most advanced AI co-pilot for kids and teens</p>
        <div className={styles.Btns}>
            <button className={styles.blueBtn}>Join the Waitlist</button>
        </div>
    </div>
  )
}

export default Body