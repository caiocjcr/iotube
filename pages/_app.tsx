import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header, LoadingBar } from '@/components'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import { QueryClientProvider, QueryClient } from 'react-query'
import { SearchesProvider } from '@/contexts'
import LoadingIndicatorProvider from '@/contexts/loading-indicator'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LoadingIndicatorProvider>
          <LoadingBar />
          <SearchesProvider>
            <Header />
            <main>
              <Component {...pageProps} />
            </main>
          </SearchesProvider>
        </LoadingIndicatorProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
