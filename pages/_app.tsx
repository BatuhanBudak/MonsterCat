import "../styles/globals.css";
import "../styles/header.css";
import "../styles/albumInfo.css";
import "../styles/stream.css";
import "../styles/trackTable.css";
import "../styles/musicVideo.css";
import "../styles/footer.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
