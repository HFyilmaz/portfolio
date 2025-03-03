import Theme from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  // Get the repository name from next.config.js
  const repository = 'portfolio';
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? `/${repository}` : '';

  return (
    <>
      <Head>
        <title>Hasan Fırat Yılmaz | Portfolio</title>
        <meta name="description" content="Hasan Fırat Yılmaz's Portfolio Website" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 