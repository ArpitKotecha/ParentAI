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
        </div>
    </div>
  )
}

export default About