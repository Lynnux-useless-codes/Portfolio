import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    {/* Dev Credit */}
                    <meta name="author" content="Lynnux" />

                    {/* Embedding */}
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="/assets/favicon.png" />
                    <meta property="og:image:secure_url" content="/assets/favicon.png" />

                    {/* Favicon */}
                    <link rel="shortcut icon" href="/assets/favicon.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon.png" />
                    <link rel="icon" type="image/png" sizes="512x512" href="/assets/favicon.png" />

                    {/* Analytics Platform */}
                    <script defer src="https://analytics.lynnux.xyz/script.js" data-website-id="a059d2c7-1bf9-4deb-83fa-6ff2461115c7"></script>
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
