import '../styles/globals.css';
import '../styles/header.css';
import '../styles/albumInfo.css';
import '../styles/tracks.css';
import '../styles/trackTable.css';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
