import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }) {
  return <MantineProvider theme={{ fontFamily: 'DM Sans' }} withGlobalStyles withNormalizeCSS><Component {...pageProps} /></MantineProvider>
}
