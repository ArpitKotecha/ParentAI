import React from 'react'
import Nav from '../Nav/Nav'
import styles from "/components/Home/Header/Header.module.css";
import Body from '../Body/Body';

function Header() {
  return (
    <div className={styles.main}>
        <Nav/>
        <div className={styles.bodyContainer}>
            <Body/>
        </div>
        
    </div>
  )
}

export default Header