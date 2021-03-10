import '../styles/globals.css';
import '../styles/global.scss';
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <title>My new cool app</title>
        <meta name="Description" content="Author: A.N. Author,
              Illustrator: P. Picture, Category: Books, Price: $17.99,
              Length: 784 pages"></meta>
      </Head>
    <Component {...pageProps} />
  </>
  
}

export default MyApp
