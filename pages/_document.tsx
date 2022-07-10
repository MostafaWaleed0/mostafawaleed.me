import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Noto.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/RobotoMono-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SuisseIntl-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SuisseIntl-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SuisseIntl.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/svg" sizes="32x32" href="/mw-logo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/mw-logo.svg" />
        <meta name="supported-color-schemes" content="light dark" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="theme-color"
          content="#111111"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}