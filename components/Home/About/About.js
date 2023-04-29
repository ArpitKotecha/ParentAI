import React from 'react'
import styles from "/components/Home/About/About.module.css";

function About() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.upperTitle}>ParentAI, your AI guide</div>
            <div className={styles.title}>Get a glimpse of the future of learning.</div>
            <div className={styles.vidContainer}>
                <div className={styles.vid}>
                    <img src='https://cdn.kastatic.org/images/khan-labs/sal_announcement_image.png'></img>
                </div>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.details}>
                    <div className={styles.detailsText}>
                        <div className={styles.text}>
                            <div class={styles.txtTitle}>Tutoring for all</div>
                            <div class={styles.txtDesc}>By leveraging AI, we can bring the benefits of one-on-one tutoring—deep understanding, confidence, clarity, and empowerment—to all students.</div>
                        </div>
                    </div>
                    <div className={styles.detailsImage}>
                        <img src='https://cdn.kastatic.org/images/khan-labs/helpful_tutor_not_answers.png'></img>
                    </div>
                </div>
                <div className={styles.detailsAlt}>
                    <div className={styles.detailsImage}>
                        <img src='https://cdn.kastatic.org/images/khan-labs/helpful_tutor_not_answers.png'></img>
                    </div>
                    <div className={styles.detailsText}>
                        <div className={styles.textAlt}>
                            <div class={styles.txtTitle}>Tutoring for all</div>
                            <div class={styles.txtDesc}>By leveraging AI, we can bring the benefits of one-on-one tutoring—deep understanding, confidence, clarity, and empowerment—to all students.</div>
                        </div>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.detailsText}>
                        <div className={styles.text}>
                            <div class={styles.txtTitle}>Tutoring for all</div>
                            <div class={styles.txtDesc}>By leveraging AI, we can bring the benefits of one-on-one tutoring—deep understanding, confidence, clarity, and empowerment—to all students.</div>
                        </div>
                    </div>
                    <div className={styles.detailsImage}>
                        <img src='https://cdn.kastatic.org/images/khan-labs/helpful_tutor_not_answers.png'></img>
                    </div>
                </div>
                <div className={styles.detailsAlt}>
                    <div className={styles.detailsImage}>
                        <img src='https://cdn.kastatic.org/images/khan-labs/helpful_tutor_not_answers.png'></img>
                    </div>
                    <div className={styles.detailsText}>
                        <div className={styles.textAlt}>
                            <div class={styles.txtTitle}>Tutoring for all</div>
                            <div class={styles.txtDesc}>By leveraging AI, we can bring the benefits of one-on-one tutoring—deep understanding, confidence, clarity, and empowerment—to all students.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.stepsContainer}>
                <div className={styles.stepHeading}>Test the future</div>
                <div className={styles.stepsContent}>
                    <div className={styles.step}>
                        <div className={styles.stepTitle}>Step 1: Sign in to Khan Academy</div>
                        <div className={styles.stepBody}>By signing in and joining Khan Labs, you'll help us develop transformative learning tools like Khanmigo. Your feedback is crucial in shaping the future of education.</div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepTitle}>Step 2: Make a donation</div>
                        <div className={styles.stepBody}>Khan Academy is a small nonprofit funded by donations. You will be asked to donate $20 or more monthly after being selected from the waitlist. Each interaction with Khanmigo incurs costs, and we need to expend significant resources to develop, test, and ensure safety of these new features. Please read our FAQ to learn why Khan Academy is asking for donations to support Khanmigo.</div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepTitle}>Step 3: Receive an email confirmation</div>
                        <div className={styles.stepBody}>You’ll receive an email with next steps if you meet the Khanmigo testing requirements (ages 18 or older in the United States). If a donation is not possible now, subscribe to our Khan Labs newsletter for news about AI and future testing opportunities!</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About