import GlobalStyles from 'styles/global'

import { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate - Next.JS</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, Next.JS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
