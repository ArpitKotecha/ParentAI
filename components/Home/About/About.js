import React from 'react'
import styles from "/components/Home/About/About.module.css";

function About() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>

            <img className={styles.robotGif} src='Ai_robot_.gif'></img>

            <div className={styles.vidContainer}>
                <video controls className={styles.video}>
                    <source src="/zuAI_Video.mp4" type="video/mp4" />
                </video>
            </div>
            
            <div className={styles.title}>Get a glimpse of the future of learning.</div>
            <div className={styles.detailsContainer}>
                <div className={styles.details}>
                    <div className={styles.detailsText}>
                        <div className={styles.text}>
                            <div class={styles.txtTitle}>interactive</div>
                            <div class={styles.txtDesc}>An innovative and interactive learning chatbot designed to help spark curiosity and learning in children.</div>
                        </div>
                    </div>
                    <div className={styles.detailsImage}>
                        <img src='/AI Chat Screen 2.png'></img>
                    </div>
                </div>
                <div className={styles.detailsAlt}>
                    <div className={styles.detailsImage}>
                        <img src='/AI Chat Screen.png'></img>
                    </div>
                    <div className={styles.detailsText}>
                        <div className={styles.textAlt}>
                            <div class={styles.txtTitle}>Adaptive</div>
                            <div class={styles.txtDesc}>Quizzes, notes, lesson plan and more at the fingertips. It is so easy that it feelslike talking to a real teacher</div>
                        </div>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.detailsText}>
                        <div className={styles.text}>
                            <div class={styles.txtTitle}>Learn with Fun</div>
                            <div class={styles.txtDesc}>Kids & teens can discuss personal finance, science, and math lessons with their favorite characters, such as harry potter, Iron Man, and other fun characters.</div>
                        </div>
                    </div>
                    <div className={styles.detailsImage}>
                        <img className={styles.phoneImg} src='/image.png'></img>
                    </div>
                </div>
                {/* <div className={styles.detailsAlt}>
                    <div className={styles.detailsImage}>
                        <img src='https://cdn.kastatic.org/images/khan-labs/helpful_tutor_not_answers.png'></img>
                    </div>
                    <div className={styles.detailsText}>
                        <div className={styles.textAlt}>
                            <div class={styles.txtTitle}>Tutoring for all</div>
                            <div class={styles.txtDesc}>By leveraging AI, we can bring the benefits of one-on-one tutoring—deep understanding, confidence, clarity, and empowerment—to all students.</div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className={styles.stepsContainer}>
                <div className={styles.stepHeading}>Test the future</div>
                <div className={styles.stepsContent}>
                    <div className={styles.step}>
                        <div className={styles.stepTitle}>Join the Waitlist</div>
                        <div className={styles.stepBody}>By joining the waitlist, you will notify us that you are interested in our product and would be willing to use and try out the first few early versions of the product.</div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepTitle}>Get Access</div>
                        <div className={styles.stepBody}>Ones you are on the waitlist, gradually we will roll out the product and login details to you via the registered email. This will help us in getting constructive feedback as and when we onboard more users.</div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepTitle}>For Beta use</div>
                        <div className={styles.stepBody}>For our first 100 waitlist users, we will let them use the product for free and in return we would want to have some constructive feedback to help us improve. The pricing and subscription of the product will be notified via mail.</div>
                    </div>
                    <button className={styles.joinWaitlistBtn}>Join the waitlist</button>
                </div>
            </div>
            <div className={styles.aboutOrg}>
                <div className={styles.aboutOrgTitle}>Who is Zu AI?</div>
                <div className={styles.aboutOrgDesc}>We are harnessing the power of Artificial Intelligence and Large Language Models to make learning addictive, adaptive, interactive and innovate for the next generation of kids. ZuAI is super safe and is completely designed keeping data privacy and ethics in mind so that kids get a top notch and a safe expirience.</div>
            </div>
            {/* <div className={styles.faqContainer}>
                <div className={styles.faqTitle}>Frequently asked questions</div>
                <div className={styles.faqs}>
                    <div className={styles.faqCard}>
                        What is the time commitment for being a Khanmigo tester?
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
            </div> */}
        </div>
    </div>
  )
}

export default About