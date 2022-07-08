import React from 'react';
import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import WineCollectionPage from './allWines'
import {QueryClient, QueryClientProvider} from 'react-query'
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient();
function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider theme={{ mode: 'light' }}>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Component {...pageProps} />
    </QueryClientProvider>
    </ThemeProvider>
    </>
  )
}

export default App
