import styles from "@/styles/testimonials.module.css"

import Image from "next/image";

export default function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <h3 className={`h3 ${styles.testimonialstitle}`}>Testimonials</h3>
            <ul className={`${styles.testimonialslist} has-scrollbar`}>
                <li className={styles.testimonialsitem}>
                    <div className={styles.contentcard} data-testimonials-item>
                        <figure className={styles.testimonialsavatarbox}>
                            <Image className={styles.image} src="/assets/images/Mycelia.webp" alt="Mycelia" width={80} height={80} data-testimonials-avatar/>
                        </figure>
                        <h4 className={`h4 ${styles.testimonialsitemtitle}`} data-testimonials-title>Mycelia</h4>
                        <div className={styles.testimonialstext} data-testimonials-text>
                            <p>Lynnux is a detailed professional who care's deeply for their work. Their Lifeguard Mercy Emotes have engaged and created funny moments in my chat. If you're looking for a passionate artist to deliver your creative vision, look no further!</p>
                        </div>
                    </div>
                </li>
                <li className={styles.testimonialsitem}>
                    <div className={styles.contentcard} data-testimonials-item>
                        <figure className={styles.testimonialsavatarbox}>
                            <Image className={styles.image} src="/assets/images/avatar-2.png" alt="PlaceHolder" width={80} height={80} data-testimonials-avatar/>
                        </figure>
                        <h4 className={`h4 ${styles.testimonialsitemtitle}`} data-testimonials-title>PlaceHolder</h4>
                        <div className={styles.testimonialstext} data-testimonials-text>
                            <p>This is a PlaceHolder since noone else gave a testimonial</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}
