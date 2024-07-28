import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        console.log("Rendering MyDocument");
        return (
            <Html>
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    {/* Dev Credit */}
                    <meta name="author" content="Lynnux" />

                    {/* Embedding */}
                    <meta name="theme-color" content="#ff47ff" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/assets/favicon.png" />
                    <meta property="og:image:secure_url" content="/assets/favicon.png" />

                    {/* Favicon */}
                    <link rel="shortcut icon" href="/assets/favicon.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon.png" />
                    <link rel="icon" type="image/png" sizes="512x512" href="/assets/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
