import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from '../styles/global-styles'
import { NextSeo } from 'next-seo'
import SEO from '../next-seo.config'
import '../styles/slick.scss'
import '../styles/slick-theme.scss'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NextSeo {...SEO}/>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
