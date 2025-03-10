import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    // Get the repository name from next.config.js
    const repository = 'portfolio';
    const isProduction = process.env.NODE_ENV === 'production';
    const basePath = isProduction ? `/${repository}` : '';
    
    return (
      <Html lang='en-GB'>
        <Head>
          <title>Hasan Fırat Yılmaz | Portfolio</title>
          <meta name="description" content="Hasan Firat Yilmaz's Portfolio Website" />
          <link rel="icon" href={`${basePath}/favicon.ico`} />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}