import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class WCDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta name="description" content="Wine Cellar project" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width" />
                    <meta name="robots" content="noindex, nofollow" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins&family=The+Nautigal:wght@700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}