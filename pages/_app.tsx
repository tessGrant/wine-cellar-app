import React from 'react';
import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import WineCollectionPage from './allWines'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient();
function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Component {...pageProps} />
    </QueryClientProvider>
    </>
  )
}

export default App
