import styles from "@/styles/dontasktoask.module.css"

export default function DontAskToAsk() {
    return(
        <article className={`${styles.body} dontasktoask active`}>
            <main className={styles.main}>
                <h1 className={styles.headerone}>Don't ask to ask, just ask</h1>
                <br/>
                <p>
                    Every now and then, in online chat rooms I hang around in, someone pops
                    in and says something in the lines of,
                </p>
                <blockquote className={styles.blockquote}>
                    <span className={styles.name}>hcskaiask:</span>
                    <p className={`${styles.message}`}>Any Java experts around?</p>
                </blockquote>
                <p>
                    This is bad form, for several reasons. What the person is
                    <em>actually</em> asking here is,
                </p>
                <blockquote className={styles.blockquote}>
                    <span className={styles.name}>hcskaiask:</span>
                    <p className={`${styles.message}`}>
                        Any Java experts around who are willing to commit into looking into my
                        problem, whatever that may turn out to be, even if it's not actually
                        related to Java or if someone who doesn't know anything about Java
                        could actually answer my question?
                    </p>
                </blockquote>
                <p>
                    There are plenty of reasons why people who DO have the knowledge would
                    not admit to it. By asking, you're asking for more than what you think
                    you're asking.
                </p>
                <br/>
                <p>
                    You're asking people to take responsibility. You're questioning people's
                    confidence in their abilities. You're also unnecessarily walling other
                    people out. I often answer questions related to languages or libraries I
                    have never used, because the answers are (in a programmer kind of way)
                    common sense.
                </p>
                <br/>
                <p>
                    Alternatively, it can be seen as..
                </p>
                <blockquote className={styles.blockquote}>
                    <span className={styles.name}>hcskaiask:</span>
                    <p className={`${styles.message}`}>
                        I have a question about Java but I'm too lazy to actually formalize it
                        in words unless there's someone on the channel who might be able to
                        answer it
                    </p>
                </blockquote>
                <p>
                    ..which is just lazy. If you're not willing to do the work to solve your
                    problem, why should we?
                </p>
                <br/>
                <p>
                    The solution is not to ask to ask, but just to ask. Someone who is idling
                    on the channel and only every now and then glances what's going on is
                    unlikely to answer to your "asking to ask" question, but your actual
                    problem description may pique their interest and get them to answer.
                </p>
                <br/>
                <p>
                    So, to summarize, don't ask
                    <em>"Any Java experts around?"</em>,
                    but rather ask
                    <em>"How do I do [problem] with Java and [other relevant info]?"</em>
                </p>
            </main>
        </article>
    )
}