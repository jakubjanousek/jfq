import { AppProps } from "next/app";
import { PageTransition } from "next-page-transitions";

import "../styles/index.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <PageTransition classNames="page-transition" timeout={300}>
      <Component {...pageProps} key={router.route} />
    </PageTransition>
  );
}

export default MyApp;
