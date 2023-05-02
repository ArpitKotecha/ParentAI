import React from 'react'
import styles from "/components/Home/JoinWaitlistForm/JoinWaitlistForm.module.css"; 

function JoinWaitlistForm( {closeForm}) {
  return (
    
    <div className={styles.form}>

            <div className={styles.form_close} onClick={closeForm}>
                <span className={styles.close_icon}>x</span>
            </div>
      <div className={styles.formContainer}>

        <div className={styles.formHeader}>
            <div className={styles.title}>Join the<span className={styles.waitListSpan}>&nbsp;waitlist</span></div>
        </div>
        {/* <div className={styles.googleBtnDiv}>
                <div className={styles.googleBtn}>
                    <img className={styles.googleLogo} src="https://d1nc6vzg2bevln.cloudfront.net/images/general/google.svg" width="13" height="13" />
                    <p className={styles}>Join with Google</p>
                </div>
        </div> */}
 
        <div className={styles.orGap}>
            <p className={styles.or}>or</p>
        </div>
     
        <form>
            <div className={styles.nameInputDiv}>
                <input placeholder="Name" type="text" name="first_name" className={styles.nameInput}/>
            </div>
            <div className={styles.emailInputDiv}>
                <input className={styles.emailInput} placeholder="Email" type="text" autocomplete="username" name="email_id" />
            </div>
            <div className={styles.passwordInputDiv}>
                    <input className={styles.passwordInput} type="password" placeholder="Password" autocomplete="current-password" name="password" />
                    {/* <button type="button" className={styles}/> */}
            </div>

            <div className={styles.loginMsgDiv}>
                <p className={styles}>Have an account?&nbsp;&nbsp;<a href="" className={styles}>Login <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.60981 7.51517C2.46337 7.36872 2.46337 7.13128 2.60981 6.98483L5.59467 3.99998L2.60982 1.01517C2.46337 0.868721 2.46337 0.631284 2.60981 0.484837C2.75626 0.338389 2.99369 0.338387 3.14014 0.484833L6.39016 3.73481C6.46049 3.80514 6.5 3.90052 6.5 3.99998C6.5 4.09944 6.46049 4.19482 6.39017 4.26514L3.14014 7.51517C2.9937 7.66161 2.75626 7.66161 2.60981 7.51517Z" fill="#00A0F5"></path></svg></a></p>
            </div>

            <button className={styles.createBtn}>Create account</button>
        </form>

       
      </div>
    </div>
  
  )
}

export default JoinWaitlistForm

