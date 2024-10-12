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
    const blogNotDevDescription = "Though I've dabbled in several coding languages—Java, JavaScript, Python, Bash, and more—I'm not aiming to be a professional programmer. Coding for me is like digital crafting, something I do for fun, to personalize my online spaces, or solve small problems. I create projects like mini-apps or playful tweaks to websites, not for a portfolio but for my own enjoyment. While I love learning and exploring new skills, I'm not looking for a career in IT. I prefer to keep coding as a casual, creative outlet rather than a full-time pursuit.";

    const router = useRouter();
    const isNoHelloPage = router.pathname === '/helper/nohello';
    const isImageOfCodePage = router.pathname === '/helper/imageofcode';
    const isDontAskToAsk = router.pathname === '/helper/dontasktoask';
    const isBlogNotDev = router.pathname === '/blog/Why-I%27m-Not-a-Programmer';

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
