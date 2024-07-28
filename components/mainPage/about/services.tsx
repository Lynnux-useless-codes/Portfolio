import styles from "@/styles/services.module.css"

import Image from "next/image";

export default function Service() {
    return (
        <section className={styles.service}>
            <h3 className={`h3 ${styles.servicetitle}`}>What i'm doing</h3>
            <ul className={styles.servicelist}>
                <li className={styles.serviceitem}>
                    <div className={styles.serviceiconbox}>
                        <Image draggable="false" className={styles.image} src="/assets/svg/icon-design.svg" alt="design icon" width={40} height={40}/>
                    </div>
                    <div className={styles.servicecontentbox}>
                        <h4 className={`h4 ${styles.serviceitemtitle}`}>Twitch/Discord emoji design</h4>
                        <p className={styles.serviceitemtext}>Design of average quality twitch and discord emoji's that are created at an amateur level.</p>
                    </div>
                </li>
                <li className={styles.serviceitem}>
                    <div className={styles.serviceiconbox}>
                        <Image draggable="false" className={styles.image} src="/assets/svg/icon-dev.svg" alt="design icon" width={40} height={40}/>
                    </div>
                    <div className={styles.servicecontentbox}>
                        <h4 className={`h4 ${styles.serviceitemtitle}`}>Web design</h4>
                        <p className={styles.serviceitemtext}>Design of average quality created at an amateur level.</p>
                    </div>
                </li>
                <li className={styles.serviceitem}>
                    <div className={styles.serviceiconbox}>
                        <Image draggable="false" className={styles.image} src="/assets/svg/icon-dev.svg" alt="Web development icon" width={40} height={40}/>
                    </div>
                    <div className={styles.servicecontentbox}>
                        <h4 className={`h4 ${styles.serviceitemtitle}`}>Web development</h4>
                        <p className={styles.serviceitemtext}>Development of websites with average quality at an amateur level.</p>
                    </div>
                </li>
                <li className={styles.serviceitem}>
                    <div className={styles.serviceiconbox}>
                        <Image draggable="false" className={styles.image} src="/assets/svg/icon-app.svg" alt="mobile app icon" width={40} height={40}/>
                    </div>
                    <div className={styles.servicecontentbox}>
                        <h4 className={`h4 ${styles.serviceitemtitle}`}>Discord Bots</h4>
                        <p className={styles.serviceitemtext}>Development of discord bots with average quality at an amateur level.</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}