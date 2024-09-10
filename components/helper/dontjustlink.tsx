import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/dontjustlink.module.css"

export default function DontAskToAsk() {
  return(
    <article className={`${styles.body} active`}>
      <section className={styles.main}>
        <h1 id={styles.introduction}>Don't just link.</h1>
        <p className={styles.text}>In online communities, it’s easy to fall into habits that aren’t always helpful.</p>
        <h3 className={styles.text2}>Here are some common unhelpful responses:</h3>
        <ul>
          <li className={styles.li}>
            <b>- Just a Link:</b> Providing only a link to documentation or an article without any context or explanation.
          </li>
          <li className={styles.li}>
            <b>- Vague Hints:</b> Offering hints like "just use recursion" without explaining what it means or how to do it.
          </li>
          <li className={styles.li}>
            <b>- Just Google It</b> Telling someone to "Google it" instead of directly answering their question.
          </li>
        </ul>
        <p className={styles.text}>These responses may seem harmless, but they can be frustrating or discouraging for people looking for help. They assume the person asking the question already knows what they don’t know. If you're going to respond, make it count!</p>
        <h3 className={styles.text2}>What Does a Helpful Response Look Like?</h3>
        <ul>
          <li className={styles.li}><b>- Provide a Direct Answer:</b> <br/><span className={styles.list}>Share a clear and concise answer to the question. If you can, include a brief explanation of why it works.</span></li>
          <li className={styles.li}><b>- Link with Context:</b> <br/><span className={styles.list}>If you’re sharing a link, add context! Summarize the key points or explain why it’s relevant. This way, even if the link breaks, your answer is still valuable.</span></li>
          <li className={styles.li}><b>- Guide and Encourage:</b> <br/><span className={styles.list}>Instead of just saying "that's easy," show the steps or share your thought process. Helping others learn is more valuable than just pointing out how simple something might be.</span></li>
          <li className={styles.li}><b>- Suggest Alternatives:</b> <br/><span className={styles.list}>Offer different approaches or solutions. This fosters creative thinking and might provide the person with the answer they need.</span></li>
        </ul>
        <h3 className={styles.text2}>The Goal?</h3>
        <p className={styles.text}>Make your response helpful, constructive, and inclusive. It doesn’t take much effort to turn an unhelpful reply into a meaningful one. Help build a community where everyone feels welcome to ask, learn, and grow.</p>
      </section>
    </article>
  )
}