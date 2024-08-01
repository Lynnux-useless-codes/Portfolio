import Image from "next/image"
import Link from "next/link"
import style from "@/styles/imageofcode.module.css"
import Code from "@/components/helper/codeblock"

export default function ImageOfCode() {
    return (
        <article className="imageofcode active">
            <section className={style.content}>
                <h2 id="introduction">An image of your code is not helpful</h2>
                <p className={style.text}>When asking a question about a problem with code, people who are volunteering to help need the text of the code. Images of the code are not an acceptable substitute.</p>
                <p className={style.text}>
                    <Image className={style.image} src="/assets/images/codeImage.webp" alt="Viewing the details of the exception" height={308} width={833} />
                </p>
                <h2 id="whythisisaproblem">Why this is a problem</h2>
                <p className={style.text}>One of the first things answerers do when examining a question’s code for errors is to try compiling (if necessary) and running the code to see what happens. Answerers may also copy part of the code to paste into search engines in order to learn about the types or algorithms being used, and to find other related material. When answerers are presented only an image of code, this process becomes much more difficult.</p>
                <h2 id="whythisisworthadownvote">Why this is worth a downvote</h2>
                <p className={style.text}>It is important to finding fast, correct answers to provide everything needed by answerers in the question. When they are forced to <em>transcribe an image</em>, they are wasting valuable time that could be spent analyzing the problem. In addition, errors in the transcription make it less likely that a solution to the problem can be found. Image contents cannot be searched, so future developers with the same problem will be less likely to find this question. This is even more of a problem for developers who use screen readers, as they will neither be able to help answer the question or help themselves by finding the answer to their question here.</p>
                <h2 id="whattodonext">What to do next</h2>
                <p className={style.text}>Edit the question. Remove the images containing code from it. Copy and paste the text of the failing code into the question. It is very important that the code is the minimum needed to reproduce the problem, and that it is <Link className={style.link} href="https://stackoverflow.com/help/formatting">well formatted</Link>. If the code consists of HTML, CSS and JavaScript, <Link className={style.link} href="https://stackoverflow.blog/2014/09/16/introducing-runnable-javascript-css-and-html-code-snippets/">stack snippets</Link> can be taken advantage of to make the issue reproducible right in the question! This makes it much easier to see code problems and to provide fixes quickly.</p>
                <p className={style.text}>An example of well formatted code with comments explaining any issues:</p>
                <div className={style.highlighterrouge}>
                    <div className={style.highlight}>
                        <pre className="highlight">
                            <Code/>
                        </pre>
                    </div>
                </div>
            </section>
        </article>
    )
}