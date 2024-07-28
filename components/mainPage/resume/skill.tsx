import styles from "@/styles/skills.module.css"

export default function Skills() {
    return (
        <section className={styles.skill}>
            <h3 className={`h3 ${styles.skillstitle}`}>My skills</h3>

            <ul className={`${styles.skillslist} content-card`}>
                <li className={styles.skillsitem}>
                    <div className={styles.titlewrapper}>
                        <h5 className="h5">Artistics</h5>
                        <data className={styles.data} value="13">13%</data>
                    </div>
                    <div className={styles.skillprogressbg}>
                        <div className={`${styles.skill1} ${styles.skillprogressfill}`} ></div> {/* style="width: 13%" */}
                    </div>
                </li>
                <li className={styles.skillsitem}>
                    <div className={styles.titlewrapper}>
                        <h5 className="h5">Web design/development</h5>
                        <data className={styles.data} value="23">23%</data>
                    </div>
                    <div className={styles.skillprogressbg}>
                        <div className={`${styles.skill2} ${styles.skillprogressfill}`} ></div>  {/* style="width: 23%" */}
                    </div>
                </li>
                <li className={styles.skillsitem}>
                    <div className={styles.titlewrapper}>
                        <h5 className="h5">Bot Development</h5>
                        <data className={styles.data} value="45">45%</data>
                    </div>
                    <div className={styles.skillprogressbg}>
                        <div className={`${styles.skill3} ${styles.skillprogressfill}`} ></div> {/* style="width: 36%" */}
                    </div>
                </li>
                <li className={styles.skillsitem}>
                    <div className={styles.titlewrapper}>
                        <h5 className="h5">Game Development</h5>
                        <data className={styles.data} value="5">5%</data>
                    </div>
                    <div className={styles.skillprogressbg}>
                        <div className={`${styles.skill4} ${styles.skillprogressfill}`} ></div> {/* style="width: 36%" */}
                    </div>
                </li>
            </ul>
        </section>
    );
}