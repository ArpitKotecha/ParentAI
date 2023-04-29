import React from 'react'
import Nav from '../Nav/Nav'
import styles from "/components/Home/Header/Header.module.css";

function Header() {
  return (
    <div className={styles.main}>
        <Nav/>
    </div>
  )
}

export default Header