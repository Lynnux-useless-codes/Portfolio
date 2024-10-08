import styles from "@/styles/about.module.css"
import Image from "next/image";
import Link from "next/link";

import Clients from "@/components/mainPage/about/clients"
import Testimonials from "@/components/mainPage/about/testimonials";
import Services from "@/components/mainPage/about/services"

export default function About() {
    return (
        <article className={`${styles.about} active`} data-page="about">
          <header>
            <h2 className={`h2 article-title ${styles.articletitle}`}>About me</h2>
          </header>
          <section className={styles.abouttext}>
            <p className={styles.pliot}>
              Hi there i'm lynn and i am a passionate Discord bot/website developer with experience in various programming languages such as Python, JavaScript, and HTML/CSS.
              I love creating new projects and bringing ideas to life through code. And as an extra i try my best creating twitch discord (chibi) emoji's at an amateur level.
            </p>
            <p className={styles.pliot}>
              I'm constantly learning and exploring new technologies to improve my skills and provide better solutions for my clients.
              I believe that good communication and attention to detail are essential in creating successful projects.
              Let's work together to create something amazing!
            </p>
          </section>
            {/* SERVICES */}
          <Services/>
            {/* TESTIMONIALS */}
          <Testimonials/>
            {/* CLIENTS */}
          <Clients/>
          <br/>
          <Link className={styles.credits} href={'/credits'}>Site Credits</Link>
        </article>
    );
}
