import React, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Sidebar from '@/components/mainPage/sidebar';
import Navbar from '@/components/mainPage/navbar';
import styles from "@/styles/error.module.css";

const Custom404 = () => {
    const PaddingBottom: React.CSSProperties = {}

    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YSD2Q72W1H"/>
            <Head>
                {/* Main */}
                <title>404 - Page Not Found</title>
                <link rel="shortcut icon" href="/assets/images/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/assets/images/android-chrome-512x512.png" />
                {/* Meta tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <main>
                <Sidebar />
                <div className="main-content">
                    <Navbar currentHash={""}/>
                    <article className="404 active" data-page="resume">
                        <div className={styles.grandparent}>
                            <div className={styles.parent}>
                                <div className={styles.child}>
                                    <Image draggable={false} className={styles.image} width="400" height="250"src="/assets/svg/NotFound.svg" alt="not-found" />
                                </div>
                            </div>
                            <div className={styles.uncle}>
                                <h4 className="error-main">The page you{"'"}re looking for can{"'"}t be found.</h4>
                                <button onClick={() => window.location.href='/'}  className={`form-btn ${styles.uwu}`}>
                                    <div className='flex'>
                                        <Image draggable="false" className='send-icon' src="/assets/svg/home.svg" alt="Book icon" width={25} height={25}/>
                                        <span> Home</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
            </>
    );
}

export default Custom404;
