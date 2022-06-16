import '../styles/globals.css'
import 'react-virtualized/styles.css'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from 'react-query'

function MyApp({ Component, pageProps }: AppProps) {
  const queryCLient = new QueryClient()
  
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryCLient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
