import React from "react";
import styles from "/components/Home/Nav/Nav.module.css";
import Image from "next/image";

function Nav() {
  return (
    <>
        <div className={styles.main}>
            <div className={styles.bigNav}>
                <div className={styles.logoContainer}>
                    <Image src={'/ZuPay-logo.png'} alt="zupay" width={70} height={70}></Image>
                    <h1 className={styles.navText}>ParentAI</h1>
                </div>
                <div className={styles.navlist}>
                    <h2>Khanmigo</h2>
                    <h2>Who is Khan academy</h2>
                    <h2>FAQ</h2>
                    <button className={styles.NavBtn}>Join the Waitlist</button>
                </div>
            </div>
            <div className={styles.smallNav}>
                <div className={styles.smallNavTop}>
                    <div className={styles.logoContainer}>
                        <Image src={'/ZuPay-logo.png'} alt="zupay" width={70} height={70}></Image>
                        <h1 className={styles.navText}>ParentAI</h1>
                    </div>       
                    <button className={styles.NavBtn}>Join the Waitlist</button>
                </div>
                <div className={styles.smallNavList}>
                    <h2>Khanmigo</h2>
                    <h2>Who is Khan academy</h2>
                    <h2>FAQ</h2>
                </div>
            </div>
        </div>
    </>
  );
}

export default Nav;
