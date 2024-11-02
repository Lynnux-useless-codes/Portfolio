import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/global.css';

function App({ Component, pageProps }: AppProps) {
    const isExcludedPage = Component.name === 'Custom404';

    const pathname = pageProps.__NEXT_DATA__?.page || '/';
    const pageTitle = pathname.charAt(1).toUpperCase() + pathname.slice(2) || 'Home';
    const title = `${pageTitle} | Lynnux`;
    const canonical = `https://lynnux.xyz${pathname}`;
    const is404Page = pathname === '/404';
    const isHomePage = pathname === '/';

    const mainDescription = "Hi there i'm lynn and i am a passionate Discord bot developer and website developer with experience in various programming languages such as Python, JavaScript, and HTML/CSS. I love creating new projects and bringing ideas to life through code or art. I'm constantly learning and exploring new technologies to improve my skills and provide better solutions for my users. I believe that good communication and attention to detail are essential in creating successful projects. Let's work together to create something amazing!"
    const noHelloDescription = "In digital communication, it's more efficient to ask your question right away instead of using polite but time-consuming greetings or inquiries. This allows for faster responses and asynchronous communication, making everyone happier and more productive."
    const imageOfCodeDescription = "An image of your code is not helpful. When asking a question about a problem with code, people who are volunteering to help need the text of the code. Images of the code are not an acceptable substitute.";
    const dontAskDescription = "Asking questions without stating the problem is bad form and can discourage knowledgeable individuals from responding. The solution is to directly ask the specific question or problem with relevant details, rather than asking if someone is available. Clear and well-formulated questions are essential for effective communication in online communities";
    const blogNotDevDescription = "I know a bit of coding but don’t consider myself a programmer. Coding is a fun hobby, like digital DIY projects, not something I want to pursue as a career. It’s a way for me to get creative, solve small problems, and add a personal touch to my online spaces.";
    const timetravlerTimerDescription = "This timer was started to help timetraveler how far they traveled (only works after June 20 2024 at 6.23pm EST).";
    const overwatchTimerDescription = "A Timer for the next overwatch season, with a default green background so you can chromakey it in obs. \nP.S. add '?overlay=hide' at the end of the url to remove the overlay.";
    const twitchconTimerDescription = "A Timer for the next twitchcon, with a default green background so you can chromakey it in obs. \nP.S. add '?overlay=hide' at the end of the url to remove the overlay."
    const BlogPostUnspokenRules = "If you’ve ever wondered, “How do I best interact with this person?” you’re not alone! I thought I’d save us all some time by laying out the unspoken rules for interacting with me online. Think of this as a casual guide to avoid any awkward moments and to keep things fun and easygoing between us."

    const router = useRouter();
    const isNoHelloPage = router.pathname === '/helper/nohello';
    const isImageOfCodePage = router.pathname === '/helper/imageofcode';
    const isDontAskToAsk = router.pathname === '/helper/dontasktoask';
    const isBlogNotDev = router.asPath === "/blog/Why-I'm-Not-a-Programmer";
    const isBlogUnspokenRules = router.asPath === "/blog/unspoken_rules";
    const isTimetravlerTimer = router.pathname === '/helper/timers/timetraveler';
    const isOverwatchTimer = router.pathname === '/helper/timers/overwatch';
    const isTwitchconTimer = router.pathname === '/helper/timers/twitchcon';

    return (
        <>
            <Head>
            {isNoHelloPage ? (
                    <>
                        <title>NoHello | Lynnux</title>
                        <meta property="og:title" content="No Hello" />
                        <link rel="canonical" href={canonical} />
                        <meta property="og:site_name" content={canonical} />
                        <meta property="og:description" content={noHelloDescription} />
                        <meta name="description" content={noHelloDescription} />

                        {/* Discord Embed */}
                        <meta property="og:site_name" content="https://lynnux.xyz/" />
                        <meta property="og:title" content="no hello" />
                        <meta property="og:url" content={canonical} />
                        <meta property="og:type" content="website" />
                        <meta property="og:description" content={noHelloDescription}/>
                        <meta name="theme-color" content="#ffffff" />
                    </>
                ) : isImageOfCodePage ? (
                    <>
                        <title>Image of Code | Lynnux</title>
                        <link rel="canonical" href={canonical} />

                        <meta name="description" content={imageOfCodeDescription} />
                        <meta property="og:site_name" content="https://lynnux.xyz/" />
                        <meta property="og:title" content="An image of your code is not helpful" />
                        <meta property="og:description" content={imageOfCodeDescription} />
                        <meta property="og:url" content="https://lynnux.xyz/helper/imageofcode" />
                        <meta property="og:type" content="website" />
                        <meta name="theme-color" content="#ffffff" />
                    </>
                ) : isDontAskToAsk ? (
                    <>
                        <title>Dont Ask To Ask | Lynnux</title>
                        <meta property="og:title" content="Dont Ask To Ask" />
                        <link rel="canonical" href={canonical} />
                        <meta property="og:site_name" content={canonical} />
                        <meta property="og:description" content={dontAskDescription} />
                        <meta name="description" content={dontAskDescription} />

                        {/* Discord Embed */}
                        <meta property="og:site_name" content="https://lynnux.xyz/" />
                        <meta property="og:title" content="Dont Ask To Ask" />
                        <meta property="og:url" content={canonical} />
                        <meta property="og:type" content="website" />
                        <meta property="og:description" content={dontAskDescription}/>
                        <meta name="theme-color" content="#ffffff" />
                    </>
                ) : isBlogNotDev ? (
                    <>
                        <title>Blog | Why I'm Not A Programmer</title>
                        <meta property="og:title" content="Why I'm Not A Programmer" />
                        <link rel="canonical" href={canonical} />
                        <meta property="og:site_name" content={canonical} />
                        <meta property="og:description" content={blogNotDevDescription} />
                        <meta name="description" content={blogNotDevDescription} />

                        {/* Discord Embed */}
                        <meta property="og:site_name" content="https://lynnux.xyz/" />
                        <meta property="og:title" content="Why I'm Not A Programmer" />
                        <meta property="og:url" content={canonical} />
                        <meta property="og:type" content="website" />
                        <meta property="og:description" content={blogNotDevDescription}/>
                        <meta name="theme-color" content="#ff47ff" />
                    </>
                ) : isTimetravlerTimer ? (
                    <>
                        <title>Timer | Lynnux</title>
                        <meta property="og:title" content="Timetravler Timer" />
                        <link rel="canonical" href={canonical} />
                        <meta property="og:site_name" content={canonical} />
                        <meta property="og:description" content={timetravlerTimerDescription} />
                        <meta name="description" content={timetravlerTimerDescription} />

                        {/* Discord Embed */}
                        <meta property="og:site_name" content="https://lynnux.xyz/" />
                        <meta property="og:title" content="Timetravler Timer | Lynnux" />
                        <meta property="og:url" content={canonical} />
                        <meta property="og:type" content="website" />
                        <meta property="og:description" content={timetravlerTimerDescription}/>
                        <meta name="theme-color" content="#ff47ff" />
                    </>
                ) : isOverwatchTimer ? (
                    <>
                        <title>Overwatch Timer | Lynnux</title>
                        <meta property="og:title" content="Overwatch Timer" />
                        <link rel="canonical" href={canonical} />
                        <meta property="og:site_name" content={canonical} />
                        <meta property="og:description" content={overwatchTimerDescription} />
                        <meta name="description" content={overwatchTimerDescription} />

                        {/* Discord Embed */}
                        <meta property="og:site_name" content="https://lynnux.xyz/" />
                        <meta property="og:title" content="Overwatch Next Season Timer" />
                        <meta property="og:url" content={canonical} />
                        <meta property="og:type" content="website" />
                        <meta property="og:description" content={overwatchTimerDescription}/>
                        <meta name="theme-color" content="#ff47ff" />
                    </>
                ) : isTwitchconTimer ? (
                    <>
                        <title>Twitchcon Timer | Lynnux</title>
                        <meta property="og:title" content="Twitchcon Timer" />
                        <link rel="canonical" href={canonical} />
                        <meta property="og:site_name" content={canonical} />
                        <meta property="og:description" content={twitchconTimerDescription} />
                        <meta name="description" content={twitchconTimerDescription} />

                        {/* Discord Embed */}
                        <meta property="og:site_name" content="https://lynnux.xyz/" />
                        <meta property="og:title" content="TwitchCon Timer" />
                        <meta property="og:url" content={canonical} />
                        <meta property="og:type" content="website" />
                        <meta property="og:description" content={twitchconTimerDescription}/>
                        <meta name="theme-color" content="#ff47ff" />
                    </>
                ) : isBlogUnspokenRules? (
                    <>
                        <title>Unspoken Rules</title>
                        <meta property="og:title" content="Unspoken Rules" />
                        <link rel="canonical" href={canonical} />
                        <meta property="og:site_name" content={canonical} />
                        <meta property="og:description" content={BlogPostUnspokenRules} />
                        <meta name="description" content={BlogPostUnspokenRules} />

                        {/* Discord Embed */}
                        <meta property="og:site_name" content="https://lynnux.xyz/" />
                        <meta property="og:title" content="Unspoken Rules" />
                        <meta property="og:url" content={canonical} />
                        <meta property="og:type" content="website" />
                        <meta property="og:description" content={BlogPostUnspokenRules}/>
                        <meta name="theme-color" content="#ff47ff" />
                    </>
                ) : (
                    <>
                        <title>{title}</title>
                        <meta property="og:title" content={title} />
                        <link rel="canonical" href={canonical} />
                        <meta property="og:site_name" content={canonical} />
                        <meta property="og:description" content={mainDescription} />
                        <meta name="description" content={mainDescription} />

                        {/* Discord Embed */}
                        <meta property="og:site_name" content="https://lynnux.xyz/" />
                        <meta property="og:title" content={title} />
                        <meta property="og:type" content="website" />
                        <meta property="og:description" content={mainDescription} />
                        <meta property="og:image" content="./assets/images/favicon.png"/>
                        <meta property="og:image:secure_url" content="https://lynnux.xyz/assets/images/favicon.png"/>
                        <meta name="theme-color" content="#ff47ff" />

                    </>
                )}

                {/* 404.tsx Only */}
                {is404Page && <meta name="robots" content="noindex" />}
                {isHomePage && <meta name="robots" content="index, follow" />}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App;
