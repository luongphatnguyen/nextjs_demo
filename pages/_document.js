import Document, { Html, Main, Head, NextScript } from 'next/document';
// import Head from 'next/head';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // const initialProps = await Document.getInitialProps(ctx)
    // return { ...initialProps }
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <title>NextJs Demo</title>
            <meta name="Description" content="Author: A.N. Author,
    Illustrator: P. Picture, Category: Books, Price: $17.99,
    Length: 784 pages"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}