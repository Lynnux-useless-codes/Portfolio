import Navbar from "@/components/mainPage/navbar";
import Sidebar from "@/components/mainPage/sidebar";
import styles from '@/styles/blogposts.module.css';
import Link from "next/link";

export default function Credits() {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar currentHash={"blog"}/>
        <article className={`blogpost blog active ${styles.blogPost}`}>
          <header>
              <h1>Site Credits</h1>
          </header>
          <section>
            <h2>Main Portfolio</h2>
            <br/>
            <ul className={`${styles.CreditsList}`}>
              <li className={`${styles.CreditsListItem}`}>
                <p className={`${styles.showTogether}`}><Link href="https://github.com/codewithsadee/vcard-personal-portfolio" className={`${styles.CreditsLink}`}>codewithsadee ~ vcard-personal-portfolio</Link> | MIT License</p> <span/>
                <p className={`${styles.showTogether}`}>This repo is used for the layout and main assets. While the site is modified and recoded to next.js this was a basepoint for the whole portfolio.</p>
              </li>
            </ul>
            <br/>
            <h2>Helpers</h2>
            <br/>
            <ul className={`${styles.CreditsList}`}>
              <li className={`${styles.CreditsListItem}`}>
                <p className={`${styles.showTogether}`}><Link href="https://www.nohello.net/" className={`${styles.CreditsLink}`}>NoHello.net</Link> | MIT License</p> <span/>
                <p className={`${styles.showTogether}`}>For my <Link href={"/helper/nohello"} className={styles.linkNoCredit}>NoHello</Link> i used a iframe to NoHello.net.</p>
              </li>
              <br/>
              <li className={`${styles.CreditsListItem}`}>
                <p className={`${styles.showTogether}`}><Link href="https://dontasktoask.com/" className={`${styles.CreditsLink}`}>dontasktoask.com</Link> | MIT License</p> <span/>
                <p className={`${styles.showTogether}`}>The <Link href={"/helper/dontasktoask"} className={styles.linkNoCredit}>dontasktoask</Link> page is a edited version of the dontasktoask.com site.</p>
              </li>
              <br/>
              <li className={`${styles.CreditsListItem}`}>
                <p className={`${styles.showTogether}`}><Link href={`https://idownvotedbecau.se/imageofcode`} className={`${styles.CreditsLink}`}>IDownVoteBecau.se ~ ImageOfCode</Link> | MIT License</p> <span/>
                <p className={`${styles.showTogether}`}>My <Link href={"/helper/imageofcode"} className={styles.linkNoCredit}>imageofcode</Link> Page is basicly a 1to1 copy of the source.</p>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
};
