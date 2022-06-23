import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '@/components'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
