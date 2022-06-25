import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '@/components'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
