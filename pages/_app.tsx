import { AppProps } from "next/app";
import { PageTransition } from "next-page-transitions";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageTransition classNames="page-transition" timeout={300}>
      <Component {...pageProps} />
    </PageTransition>
  );
}

export default MyApp;
