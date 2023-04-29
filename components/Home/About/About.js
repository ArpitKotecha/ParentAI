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
                        <div className={styles.stepBody}>By signing in and joining Khan Labs, you will help us develop transformative learning tools like Khanmigo. Your feedback is crucial in shaping the future of education.</div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepTitle}>Step 2: Make a donation</div>
                        <div className={styles.stepBody}>Khan Academy is a small nonprofit funded by donations. You will be asked to donate $20 or more monthly after being selected from the waitlist. Each interaction with Khanmigo incurs costs, and we need to expend significant resources to develop, test, and ensure safety of these new features. Please read our FAQ to learn why Khan Academy is asking for donations to support Khanmigo.</div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepTitle}>Step 3: Receive an email confirmation</div>
                        <div className={styles.stepBody}>You will receive an email with next steps if you meet the Khanmigo testing requirements (ages 18 or older in the United States). If a donation is not possible now, subscribe to our Khan Labs newsletter for news about AI and future testing opportunities!</div>
                    </div>
                    <button className={styles.joinWaitlistBtn}>Join the waitlist</button>
                </div>
            </div>
            <div className={styles.aboutOrg}>
                <div className={styles.aboutOrgTitle}>Who is Khan Academy?</div>
                <div className={styles.aboutOrgDesc}>Khan Academy is a nonprofit that wants to make education free and accessible for all. By joining Khan Labs, you can help us develop new features that will empower hundreds of millions of learners around the world! You'll test and provide feedback on new learning tools to help shape the future of learning.</div>
            </div>
            <div className={styles.faqContainer}>
                <div className={styles.faqTitle}>Frequently asked questions</div>
                <div className={styles.faqs}>
                    <div className={styles.faqCard}>
                        What's the time commitment for being a Khanmigo tester?
                        <svg width="24" height="24" viewBox="0 0 24 24" class="_4cyb3go"><path fill="#21242c" d="M17.293 8.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L12 13.586l5.293-5.293z"></path></svg>
                    </div>
                    <div className={styles.faqCard}>
                        What is the time commitment for being a Khanmigo tester?
                        <svg width="24" height="24" viewBox="0 0 24 24" class="_4cyb3go"><path fill="#21242c" d="M17.293 8.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L12 13.586l5.293-5.293z"></path></svg>
                    </div>
                    <div className={styles.faqCard}>
                        How soon will I know if I got accepted to test Khanmigo? Can I check on my waitlist status?
                        <svg width="24" height="24" viewBox="0 0 24 24" class="_4cyb3go"><path fill="#21242c" d="M17.293 8.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L12 13.586l5.293-5.293z"></path></svg>
                    </div>
                    <div className={styles.faqCard}>
                        How do I sign up my children to test Khanmigo?
                        <svg width="24" height="24" viewBox="0 0 24 24" class="_4cyb3go"><path fill="#21242c" d="M17.293 8.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L12 13.586l5.293-5.293z"></path></svg>
                    </div>
                    <div className={styles.faqCard}>
                        Why arent you releasing Khanmigo to the public?
                        <svg width="24" height="24" viewBox="0 0 24 24" class="_4cyb3go"><path fill="#21242c" d="M17.293 8.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L12 13.586l5.293-5.293z"></path></svg>
                    </div>
                    <div className={styles.faqCard}>
                        Why is there a waitlist to test Khanmigo?
                        <svg width="24" height="24" viewBox="0 0 24 24" class="_4cyb3go"><path fill="#21242c" d="M17.293 8.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L12 13.586l5.293-5.293z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About