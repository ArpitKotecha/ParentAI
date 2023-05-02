import React from "react";
import styles from "/components/Home/Nav/Nav.module.css";
import Image from "next/image";

function Nav( {formHandler} ) {
  return (
    <>
        <div className={styles.main}>
            <div className={styles.bigNav}>
                <div className={styles.logoImage}>
                    <Image src={'/ZuAi_Logo.svg'} alt="zupay" fill={true}></Image>
                </div>
                <div className={styles.navlist}>
                    {/* <h2>FAQ</h2> */}
                    <button className={styles.NavBtn} onClick={() => formHandler(true)}>Join the Waitlist</button>
                </div>
            </div>
            <div className={styles.smallNav}>
                <div className={styles.smallNavTop}>
                    <div className={styles.logoImage}>
                        <Image src={'/ZuAi_Logo.svg'} alt="zupay" fill={true}></Image>
                    </div>      
                    <button className={styles.NavBtn} onClick={() => formHandler(true)} >Join the Waitlist</button>
                </div>
                {/* <div className={styles.smallNavList}>
                    <h2>FAQ</h2>
                </div> */}
            </div>
        </div>
    </>
  );
}

export default Nav;
