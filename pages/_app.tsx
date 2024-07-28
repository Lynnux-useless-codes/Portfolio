import Head from 'next/head';
import { AppProps } from 'next/app';
import '@/styles/global.css';

function App({ Component, pageProps }: AppProps) {
    console.log("Rendering App");

    const isExcludedPage = Component.name === 'Custom404';
    const pathname = pageProps.__NEXT_DATA__?.page || '/';
    const pageTitle = pathname.charAt(1).toUpperCase() + pathname.slice(2) || 'Home';
    const title = `Lynnux.xyz | ${pageTitle}`;
    const is404Page = pathname === '/404';
    const isHomePage = pathname === '/';
    const canonical = `https://lynnux.xyz${pathname}`;

    const mainDescription = "The home page from bdfd.gaHi there i'm lynn and i am a passionate Discord bot developer and website developer with experience in various programming languages such as Python, JavaScript, and HTML/CSS. I love creating new projects and bringing ideas to life through code or art. I'm constantly learning and exploring new technologies to improve my skills and provide better solutions for my users. I believe that good communication and attention to detail are essential in creating successful projects. Let's work together to create something amazing!"
    const noHelloDescription = "The home page from bdfd.gaHi there i'm lynn and i am a passionate Discord bot developer and website developer with experience in various programming languages such as Python, JavaScript, and HTML/CSS. I love creating new projects and bringing ideas to life through code or art. I'm constantly learning and exploring new technologies to improve my skills and provide better solutions for my users. I believe that good communication and attention to detail are essential in creating successful projects. Let's work together to create something amazing!"

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Hi there i'm lynn and i am a passionate Discord bot developer and website developer with experience in various programming languages such as Python, JavaScript, and HTML/CSS. I love creating new projects and bringing ideas to life through code or art. I'm constantly learning and exploring new technologies to improve my skills and provide better solutions for my users. I believe that good communication and attention to detail are essential in creating successful projects. Let's work together to create something amazing!" />
                <link rel="canonical" href={canonical} />
                <meta property="og:site_name" content={canonical} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content="" />

                {/* Discord Embed */}
                <meta property="og:site_name" content="https://lynnux.xyz/" />
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Hi there i'm lynn and i am a passionate Discord bot developer and website developer with experience in various programming languages such as Python, JavaScript, and HTML/CSS. I love creating new projects and bringing ideas to life through code or art. I'm constantly learning and exploring new technologies to improve my skills and provide better solutions for my users. I believe that good communication and attention to detail are essential in creating successful projects. Let's work together to create something amazing!" />
                <meta property="og:image" content="./assets/images/favicon.png"/>
                <meta property="og:image:secure_url" content="https://lynnux.xyz/assets/images/favicon.png"/>

                {/* 404.tsx Only */}
                {is404Page && <meta name="robots" content="noindex" />}
                {isHomePage && <meta name="robots" content="index, follow" />}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App;
